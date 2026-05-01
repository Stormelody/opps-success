const SYSTEM_PROMPT = `你是一个专门将人类的“失败、糗事、翻车经历”转化为游戏成就的创意AI。
你的风格是损友式毒舌，用最犀利的幽默把糗事拆穿，让人又想笑又想打你。

你的任务是：阅读用户输入的故事，提炼其中的笑点、荒诞感或隐藏的成长，然后用完全不同于用户原文的语言生成一个有趣成就。

要求：
1. 一句概括：用第三人称，说一句不超过20个汉字的纯日常口语，就像随口跟朋友吐槽这件事一样。必须用最口语的句式，可以带“结果、然后、原来”这类连接词，但禁止使用任何书面化、文艺化、比喻、拟人或夸张的词语。用自己的话进行同义转述，不能照搬原句。

2. 成就标题：一个类似星穹铁道/Steam成就的名称，短小、有梗、带点中二或双关，字数控制在2-8个字。可以更有攻击性，像损友在伤口上撒盐，但幽默内核要基于事情本身的荒诞，不能上升到人身攻击。

3. 成就注释文案：模仿星穹铁道或Steam成就的注释风格，但语气要加倍毒舌、直白、不留情面。必须包含：
   - 对事件的创意重述（绝不能复述原文，要用损人的语气重新演绎）
   - 幽默且尖锐的后果或评价，允许使用嘲讽、反话、地狱笑话式调侃
   - 可以加入“解锁条件”“隐藏成就”等游戏化叙事
   长度控制在30-80字。

4. 攻击性的边界（必须严格遵守）：
   - 只能攻击事件本身的荒谬、用户的决策失误或认知盲区
   - 禁止涉及性别对立、性别歧视、性取向、性别认同、政治、种族、地域、宗教、残障等任何歧视性或敏感话题
   - 禁止使用脏话或低俗词汇
   - 可以嘲讽行为，但不能否定人格

5. 所有输出禁止直接复制用户原文。必须通过提炼、比喻、夸张、游戏化术语进行再创作（但第1条概括除外，概括必须摒弃比喻和夸张，只做最日常的口语转述，且不超过20个汉字）。

输出格式：严格按JSON输出，不要有其他内容。
{
  "summary": "不超过20字的口语概括",
  "title": "成就标题",
  "flavor_text": "成就注释文案"
}`;

const STYLE_ANGLES = [
  "角度A：最尖锐毒舌，但不要低俗。",
  "角度B：更像游戏隐藏成就，保留损友感。",
  "角度C：更偏Steam成就短梗，标题要短。",
  "角度D：更强调荒诞后果和翻车反差。"
];

const DEFAULT_MODEL = "deepseek-ai/DeepSeek-V3.2";
const DEFAULT_BASE_URL = "https://api.siliconflow.com/v1";

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const story = `${request.body?.story || ""}`.trim();
  if (!story) {
    response.status(400).json({ error: "Missing story" });
    return;
  }

  if (!process.env.SILICONFLOW_API_KEY) {
    response.status(503).json({ error: "Missing SILICONFLOW_API_KEY" });
    return;
  }

  try {
    const achievements = await Promise.all(
      STYLE_ANGLES.map((angle) => generateOneAchievement(story, angle))
    );

    response.status(200).json({
      achievements: dedupeAchievements(achievements),
      model: process.env.SILICONFLOW_MODEL || DEFAULT_MODEL
    });
  } catch (error) {
    response.status(500).json({
      error: "AI generation failed",
      detail: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

async function generateOneAchievement(story, angle) {
  const baseUrl = process.env.SILICONFLOW_BASE_URL || DEFAULT_BASE_URL;
  const siliconFlowResponse = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SILICONFLOW_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.SILICONFLOW_MODEL || DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: `${angle}\n\n用户故事：${story}`
        }
      ],
      temperature: 0.9,
      top_p: 0.8,
      response_format: {
        type: "json_object"
      }
    })
  });

  if (!siliconFlowResponse.ok) {
    const errorText = await siliconFlowResponse.text();
    throw new Error(errorText);
  }

  const payload = await siliconFlowResponse.json();
  const text = payload.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error("No content in SiliconFlow response");
  }
  return normalizeAchievement(parseJsonContent(text));
}

function parseJsonContent(text) {
  const trimmed = `${text || ""}`.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const jsonMatch = trimmed.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("SiliconFlow response was not JSON");
    }
    return JSON.parse(jsonMatch[0]);
  }
}

function normalizeAchievement(item) {
  return {
    summary: trimText(item.summary, 20),
    title: trimText(item.title, 8),
    flavor_text: trimText(item.flavor_text, 80)
  };
}

function trimText(value, maxLength) {
  const text = `${value || ""}`.trim();
  return [...text].slice(0, maxLength).join("");
}

function dedupeAchievements(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.summary}-${item.title}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

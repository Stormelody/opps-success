const sampleStories = [
  "用小苏打腌肉想让肉更加鲜嫩，炒菜成之后发现一股恶心的味道，上小红书一查原来是没洗肉，太好笑了。",
  "以为自己很会收纳，把过季衣服全装进压缩袋，结果下次打开像考古现场，找一双袜子找了半小时。",
  "第一次学做冰美式，直接把滚烫浓缩倒进塑料杯里，杯子软成艺术装置。",
  "信心满满准备晨跑，提前发了朋友圈打卡，结果跑到五分钟鞋带散了、耳机没电、人也不想努力了。"
];

const themeConfigs = [
  {
    id: "spark",
    className: "theme-spark",
    name: "热烈领奖台",
    description: "适合夸张、喜剧感强、像爆出隐藏成就的瞬间。",
    palette: "linear-gradient(135deg, #ff5f45 0%, #ff8c42 52%, #ffd166 100%)"
  },
  {
    id: "midnight",
    className: "theme-midnight",
    name: "冷静高光夜",
    description: "适合把乌龙讲得像一段传奇副本记录。",
    palette: "linear-gradient(135deg, #182848 0%, #28456d 58%, #ff8552 100%)"
  },
  {
    id: "bloom",
    className: "theme-bloom",
    name: "温柔展览墙",
    description: "适合轻巧、自嘲、可爱的日常翻车。",
    palette: "linear-gradient(135deg, #ffe0d2 0%, #ffc7c2 48%, #ffd58a 100%)"
  }
];

const storyDomains = [
  {
    id: "kitchen",
    keywords: ["肉", "厨房", "炒", "煮", "菜", "腌", "小苏打", "调料", "锅", "做饭"],
    prefixPool: ["厨房", "风味", "锅边", "火候", "家常"],
    titleCorePool: ["真相追猎者", "前置工序守门员", "风味偏航记录员", "基础步骤补完者"],
    annotationOpeners: ["你本想直接走进高手路线", "你把一次普通下厨推进成了实验现场", "你成功证明了烹饪最爱考的从来不是创意"],
    insightPool: ["隐藏功绩 · 让“基本步骤”重新回到聚光灯下", "隐藏功绩 · 提前揭穿了厨房里最经典的自信陷阱"],
    tag: "成就标签 · 厨房异闻"
  },
  {
    id: "storage",
    keywords: ["收纳", "衣服", "压缩袋", "整理", "袜子", "柜子"],
    prefixPool: ["收纳", "空间", "秩序", "日常寻宝", "柜门"],
    titleCorePool: ["遗失物召回员", "折叠宇宙勘探者", "秩序反噬见证人", "压缩维度开拓者"],
    annotationOpeners: ["你试图一次性驯服生活的边角料", "你把整理行为推进到了轻微科幻的层级", "你证明了过度整齐和暂时失联之间只差一步"],
    insightPool: ["隐藏功绩 · 成功把收纳升级成了寻宝玩法", "隐藏功绩 · 让秩序感和荒诞感同框出现"],
    tag: "成就标签 · 居家副本"
  },
  {
    id: "coffee",
    keywords: ["咖啡", "冰美式", "浓缩", "塑料杯", "杯子"],
    prefixPool: ["咖啡", "温差", "容器", "提神", "吧台"],
    titleCorePool: ["边界测试员", "材质命运观测者", "冷热协议破坏者", "杯型风险评估师"],
    annotationOpeners: ["你让饮品制作短暂进入了物理实验阶段", "你把日常提神流程做出了灾难片预告感", "你亲手验证了热情和耐热之间并不能画等号"],
    insightPool: ["隐藏功绩 · 帮所有杯子完成了一次压力测试", "隐藏功绩 · 让常识以更柔软的方式倒塌在眼前"],
    tag: "成就标签 · 饮品事故"
  },
  {
    id: "exercise",
    keywords: ["跑步", "晨跑", "健身", "鞋带", "耳机", "打卡"],
    prefixPool: ["晨跑", "耐力", "意志力", "计划", "装备"],
    titleCorePool: ["气氛冲刺王", "开局士气制造者", "计划掉线修复员", "自律副本见习生"],
    annotationOpeners: ["你把一次运动任务做成了现实世界连锁小故障", "你证明了开始行动这件事本身就足够有戏剧性", "你还没输给体能，先遇到了装备和意志的联合拦截"],
    insightPool: ["隐藏功绩 · 把自律神话拆回真实人类版本", "隐藏功绩 · 让打卡滤镜在五分钟内回归现实"],
    tag: "成就标签 · 自律支线"
  },
  {
    id: "social",
    keywords: ["上班", "开会", "职场", "社死", "消息", "发言"],
    prefixPool: ["工位", "场面", "表情管理", "会议", "社交"],
    titleCorePool: ["应急缓冲器", "气氛回收员", "社死压缩包", "剧情修复师"],
    annotationOpeners: ["你把普通日常推进到了全场短暂沉默的级别", "你完成了一次高密度的人际气氛测试", "你让现场情绪管理这门课突然有了实操价值"],
    insightPool: ["隐藏功绩 · 把尴尬感炼成了故事素材", "隐藏功绩 · 给以后每次回想都准备好了笑点"],
    tag: "成就标签 · 社交现场"
  }
];

const genericDomain = {
  id: "generic",
  prefixPool: ["日常", "生活", "荒诞", "临场", "误差"],
  titleCorePool: ["剧情增幅器", "事故美学收藏家", "结果偏航校准师", "隐藏笑点点亮者"],
  annotationOpeners: ["你让平凡流程突然拥有了剧情波动", "你把一次偏差操作演成了完整桥段", "你证明了生活最会在细节处安排包袱"],
  insightPool: ["隐藏功绩 · 为之后的复述准备了完整笑点", "隐藏功绩 · 把一次失误重新打磨成可分享内容"],
  tag: "成就标签 · 日常乌龙"
};

const revelationLines = [
  "直到真相翻面，才发现这场风波并不是高级技巧失控，而是入门关卡在悄悄补考。",
  "最后揭晓的答案十分朴素，却也因此拥有最强喜剧力度：真正掉线的是那一步最该先完成的准备。",
  "结局像游戏里的反转提示，把所有铺垫都指回一个最基础、也最容易忽略的按钮。 "
];

const oversightLines = [
  "你没有被难题击败，只是被一个小小漏项从背后轻轻一推。",
  "事故核心不在能力不足，而在某个不起眼的细节成功完成了偷袭。",
  "看似复杂的连锁反应，最后都归档进了“差一步就圆满”的经典目录。 "
];

const ambitionLines = [
  "开局的野心很漂亮，于是反差也变得格外值得纪念。",
  "正因为一开始太像要成功了，后面的转折才更像隐藏关卡突然弹出。",
  "你先把期待值抬到了领奖台高度，故事才有机会完成这次漂亮翻身。 "
];

const comedyLines = [
  "好消息是，体面暂时下线；更好的消息是，笑点已经完整生成。",
  "这一回合的胜利不在结果，而在它注定会成为下次聊天时最响的一声笑。",
  "它也许没朝着预定方向收尾，却成功长成了一个很适合分享的段子。 "
];

const badgePool = ["隐藏成就已解锁", "成就录入完成", "本回合成就弹出", "传奇乌龙认证"];
const footerPool = ["把失败重新命名，就是一种赢法", "先别急着难过，先把它做成成就", "人生没有白翻的车，只有还没命名的成就"];

const state = {
  story: sampleStories[0],
  achievements: [],
  selectedAchievement: null,
  selectedTheme: themeConfigs[0],
  posterMode: "text",
  photoDataUrl: "",
  cropX: 50,
  cropY: 50
};

const storyInput = document.getElementById("storyInput");
const generateBtn = document.getElementById("generateBtn");
const randomBtn = document.getElementById("randomBtn");
const achievementList = document.getElementById("achievementList");
const templateGrid = document.getElementById("templateGrid");
const textModeBtn = document.getElementById("textModeBtn");
const photoModeBtn = document.getElementById("photoModeBtn");
const photoInput = document.getElementById("photoInput");
const cropControls = document.getElementById("cropControls");
const cropXInput = document.getElementById("cropX");
const cropYInput = document.getElementById("cropY");
const poster = document.getElementById("poster");
const posterBadge = document.getElementById("posterBadge");
const posterTitle = document.getElementById("posterTitle");
const posterSummary = document.getElementById("posterSummary");
const posterAnnotation = document.getElementById("posterAnnotation");
const posterInsight = document.getElementById("posterInsight");
const posterTag = document.getElementById("posterTag");
const posterPhotoFrame = document.getElementById("posterPhotoFrame");
const posterPhoto = document.getElementById("posterPhoto");
const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const sharePageBtn = document.getElementById("sharePageBtn");
const shareHint = document.getElementById("shareHint");
const posterFooterLeft = document.getElementById("posterFooterLeft");

function pickFrom(list, seed) {
  return list[Math.abs(seed) % list.length];
}

function dedupe(items) {
  return [...new Set(items)];
}

function shortText(text, limit = 88) {
  const cleaned = text.replace(/\s+/g, "").trim();
  if (cleaned.length <= limit) return cleaned;
  return `${cleaned.slice(0, limit)}…`;
}

function storySeed(text) {
  return [...text].reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 1), 0);
}

function detectDomain(story) {
  return storyDomains.find((domain) => domain.keywords.some((keyword) => story.includes(keyword))) || genericDomain;
}

function detectSignals(story) {
  return {
    hasReveal: /(查|搜|原来|才知道|发现)/.test(story),
    hasOversight: /(没洗|没带|没关|没开|没充|没拿|忘|漏)/.test(story),
    hasAmbition: /(想|以为|准备|本来|信心满满|打算)/.test(story),
    hasComedy: /(好笑|笑死|离谱|社死|尴尬)/.test(story)
  };
}

function buildTitle(domain, signals, seed, index) {
  const prefix = domain.prefixPool[(seed + index) % domain.prefixPool.length];
  const core = domain.titleCorePool[(seed + index * 2) % domain.titleCorePool.length];
  const twistCore = [];

  if (signals.hasReveal) twistCore.push("真相");
  if (signals.hasOversight) twistCore.push("漏项");
  if (signals.hasAmbition) twistCore.push("预判");
  if (signals.hasComedy) twistCore.push("笑点");

  if (twistCore.length && index % 2 === 1) {
    return `${pickFrom(twistCore, seed + index)}${core}`;
  }

  return `${prefix}${core}`;
}

function buildAnnotation(domain, signals, seed, index) {
  const parts = [
    normalizeText(pickFrom(domain.annotationOpeners, seed + index)),
    signals.hasAmbition ? pickFrom(ambitionLines, seed + index * 3) : "",
    signals.hasReveal ? pickFrom(revelationLines, seed + index * 5) : "",
    signals.hasOversight ? pickFrom(oversightLines, seed + index * 7) : "",
    signals.hasComedy ? pickFrom(comedyLines, seed + index * 11) : pickFrom(comedyLines, seed + index * 13)
  ].filter(Boolean);

  return parts
    .slice(0, 3)
    .map((part, partIndex) => (partIndex === 0 ? punctuateClause(part, "，") : ensureSentence(part)))
    .join("");
}

function buildInsight(domain, signals, seed, index) {
  if (signals.hasReveal && signals.hasOversight) {
    return "隐藏功绩：在真相揭晓之前，先一步替所有人踩中了最经典的基础坑位。";
  }

  if (signals.hasAmbition && signals.hasComedy) {
    return "隐藏功绩：把高期待和高反差，一起炼成了可复述的名场面。";
  }

  const baseInsight = pickFrom(domain.insightPool, seed + index).replace(/^隐藏功绩\s*[·:：-]?\s*/, "");
  const connective = signals.hasReveal ? "这次注释真正点亮的，是" : "这次注释背后藏着的，是";
  return `隐藏功绩：${connective}${baseInsight.replace(/[。！？]$/, "")}。`;
}

function ensureSentence(text) {
  const cleanText = normalizeText(text).replace(/[，、；：]$/, "");
  return /[。！？]$/.test(cleanText) ? cleanText : `${cleanText}。`;
}

function punctuateClause(text, punctuation = "，") {
  const cleanText = normalizeText(text).replace(/[，。！？]$/, "");
  return `${cleanText}${punctuation}`;
}

function normalizeText(text) {
  return `${text || ""}`.trim().replace(/\s+([，。！？])/g, "$1");
}

function buildAchievementOptions(story) {
  const domain = detectDomain(story);
  const signals = detectSignals(story);
  const seed = storySeed(story);

  const options = Array.from({ length: 4 }, (_, index) => ({
    id: `achievement-${seed}-${index}`,
    title: buildTitle(domain, signals, seed, index),
    summary: buildFallbackSummary(story),
    annotation: buildAnnotation(domain, signals, seed, index),
    insight: buildInsight(domain, signals, seed, index),
    tag: domain.tag
  }));

  return dedupe(options.map((item) => JSON.stringify(item))).map((item) => JSON.parse(item));
}

function buildFallbackSummary(story) {
  const domain = detectDomain(story);
  const signals = detectSignals(story);

  if (domain.id === "kitchen" && signals.hasOversight) return "做菜漏了关键一步";
  if (domain.id === "coffee") return "做咖啡把杯子弄坏了";
  if (domain.id === "storage") return "收纳完东西更难找";
  if (domain.id === "exercise") return "运动还没开始就卡住";
  if (domain.id === "social") return "场面一下子尴尬了";

  return shortText(story, 18);
}

function mapAiAchievement(item, index, story) {
  return {
    id: `ai-${storySeed(story)}-${index}`,
    title: normalizeText(item.title || "隐藏成就"),
    summary: shortText(normalizeText(item.summary || buildFallbackSummary(story)), 20),
    annotation: normalizeText(item.flavor_text || item.annotation || "这段经历已经成功变成可分享的翻车成就。"),
    insight: buildAiInsight(item.flavor_text || item.annotation || "", index),
    tag: pickAiTag(story, index)
  };
}

function buildAiInsight(flavorText, index) {
  const endings = [
    "隐藏功绩：把错误步骤变成了值得截图的经验包。",
    "隐藏功绩：用一次小型崩盘，换来下次少踩一个坑。",
    "隐藏功绩：让自信和现实完成了一次正面碰撞。",
    "隐藏功绩：把尴尬现场加工成了可传播素材。"
  ];

  if (/菜谱|小红书|教程|步骤|洗/.test(flavorText)) {
    return "隐藏功绩：证明教程最重要的部分，通常就是被自信跳过的那一行。";
  }

  return endings[index % endings.length];
}

function pickAiTag(story, index) {
  const domain = detectDomain(story);
  if (domain.tag) return domain.tag;
  return ["成就标签 · 翻车记录", "成就标签 · 隐藏成就", "成就标签 · 日常事故", "成就标签 · 笑点回收"][index % 4];
}

async function generateAchievementsWithAI(story) {
  const response = await fetch("/api/generate-achievements", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ story })
  });

  if (!response.ok) {
    throw new Error("AI generation failed");
  }

  const payload = await response.json();
  if (!Array.isArray(payload.achievements) || payload.achievements.length === 0) {
    throw new Error("AI generation returned no achievements");
  }

  return payload.achievements.map((item, index) => mapAiAchievement(item, index, story));
}

function pickDecorativeText(story) {
  const seed = storySeed(story);
  return {
    badge: pickFrom(badgePool, seed),
    footer: pickFrom(footerPool, seed + 7)
  };
}

function renderAchievements() {
  achievementList.innerHTML = "";

  state.achievements.forEach((achievement) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `achievement-card${state.selectedAchievement?.id === achievement.id ? " active" : ""}`;
    card.innerHTML = `
      <h3>${achievement.title}</h3>
      <span class="achievement-summary">${achievement.summary}</span>
      <p>${achievement.annotation}</p>
      <span class="achievement-insight">${achievement.insight}</span>
    `;
    card.addEventListener("click", () => {
      state.selectedAchievement = achievement;
      renderAchievements();
      renderPoster();
    });
    achievementList.appendChild(card);
  });
}

function renderThemes() {
  templateGrid.innerHTML = "";

  themeConfigs.forEach((theme) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `template-card${state.selectedTheme.id === theme.id ? " active" : ""}`;
    card.innerHTML = `
      <div class="template-preview" style="background:${theme.palette}"></div>
      <h3>${theme.name}</h3>
      <p>${theme.description}</p>
    `;
    card.addEventListener("click", () => {
      state.selectedTheme = theme;
      renderThemes();
      renderPoster();
    });
    templateGrid.appendChild(card);
  });
}

function updateMeta(selected) {
  const title = selected?.title ? `${selected.title} · 失败成就馆` : "失败成就馆";
  const description = selected?.annotation || "把翻车现场改写成像游戏成就一样的海报。";
  document.title = title;
  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[name="twitter:title"]', title);
  setMetaContent('meta[name="twitter:description"]', description);
}

function setMetaContent(selector, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.setAttribute("content", value);
  }
}

function renderPoster() {
  const decorativeText = pickDecorativeText(state.story);
  const selected = state.selectedAchievement;
  const hasPhoto = state.posterMode === "photo" && Boolean(state.photoDataUrl);

  poster.className = `poster ${state.selectedTheme.className}${hasPhoto ? " with-photo" : ""}`;
  posterBadge.textContent = decorativeText.badge;
  posterTitle.textContent = selected?.title ?? "先输入一段经历，看看你会解锁什么称号";
  posterSummary.textContent = selected?.summary ?? "失败现场一句话概括会显示在这里。";
  posterAnnotation.textContent = selected?.annotation ?? "这里会把你的翻车故事，改写成一段更像游戏成就说明的注释文案。";
  posterInsight.textContent = selected?.insight ?? "隐藏功绩：把失败重新命名，就是一种赢法。";
  posterTag.textContent = selected?.tag ?? "成就标签 · 日常乌龙";
  posterFooterLeft.textContent = decorativeText.footer;
  updateMeta(selected);

  posterPhotoFrame.classList.toggle("hidden", !hasPhoto);
  cropControls.classList.toggle("hidden", !state.photoDataUrl);
  if (hasPhoto) {
    posterPhoto.src = state.photoDataUrl;
    posterPhoto.style.objectPosition = `${state.cropX}% ${state.cropY}%`;
  }
}

async function generateAchievements() {
  const story = storyInput.value.trim();
  if (!story) {
    storyInput.focus();
    return;
  }

  state.story = story;
  generateBtn.disabled = true;
  generateBtn.textContent = "AI 正在嘴你...";

  try {
    state.achievements = await generateAchievementsWithAI(story);
    showShareHint("AI 文案已生成。没有配置 OpenAI Key 时会自动使用本地规则。");
  } catch {
    state.achievements = buildAchievementOptions(story);
    showShareHint("AI 暂时没接上，先用了本地规则生成。配置 OPENAI_API_KEY 后会自动切到 AI。");
  } finally {
    generateBtn.disabled = false;
    generateBtn.textContent = "生成我的成就";
  }

  state.selectedAchievement = state.achievements[0];
  renderAchievements();
  renderPoster();
}

function setPosterMode(mode) {
  state.posterMode = mode;
  textModeBtn.classList.toggle("active", mode === "text");
  photoModeBtn.classList.toggle("active", mode === "photo");
  renderPoster();
}

function getShareUrl() {
  const params = new URLSearchParams();
  params.set("story", state.story);
  params.set("theme", state.selectedTheme.id);
  params.set("mode", state.photoDataUrl ? state.posterMode : "text");
  params.set("achievement", String(state.achievements.findIndex((item) => item.id === state.selectedAchievement?.id)));
  if (state.selectedAchievement) {
    params.set("summary", state.selectedAchievement.summary || "");
    params.set("title", state.selectedAchievement.title || "");
    params.set("annotation", state.selectedAchievement.annotation || "");
    params.set("insight", state.selectedAchievement.insight || "");
    params.set("tag", state.selectedAchievement.tag || "");
  }
  params.set("cropX", String(state.cropX));
  params.set("cropY", String(state.cropY));
  const baseUrl =
    window.location.protocol === "file:"
      ? window.location.href.split("?")[0]
      : `${window.location.origin}${window.location.pathname}`;
  return `${baseUrl}?${params.toString()}`;
}

function showShareHint(message) {
  shareHint.textContent = message;
}

async function copyShareLink() {
  const url = getShareUrl();
  try {
    await navigator.clipboard.writeText(url);
    showShareHint(
      window.location.protocol === "file:"
        ? "链接已经复制，但要真正发给别人打开，建议先部署到 Vercel、Netlify 或你自己的域名。"
        : "分享链接已复制。别人打开后会看到同样的故事和成就卡，照片不会随链接带过去。"
    );
  } catch {
    showShareHint(`复制失败了，你可以手动复制这个链接：${url}`);
  }
}

async function sharePage() {
  const url = getShareUrl();
  const text = `${state.selectedAchievement?.title || "我的失败成就板"}｜来看看我刚解锁的隐藏成就`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: document.title,
        text,
        url
      });
      showShareHint("网页链接已调起系统分享。");
      return;
    } catch {
      showShareHint("系统分享被取消了，或者当前浏览器不支持这一种分享方式。");
      return;
    }
  }

  try {
    await navigator.clipboard.writeText(url);
    showShareHint("当前浏览器不支持网页分享，已经帮你复制好链接了。");
  } catch {
    showShareHint(`当前浏览器不支持网页分享，请手动复制这个链接：${url}`);
  }
}

function applySharedStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const sharedStory = params.get("story");
  const sharedThemeId = params.get("theme");
  const sharedMode = params.get("mode");
  const sharedAchievementIndex = Number(params.get("achievement"));
  const sharedSummary = params.get("summary");
  const sharedTitle = params.get("title");
  const sharedAnnotation = params.get("annotation");
  const sharedInsight = params.get("insight");
  const sharedTag = params.get("tag");
  const sharedCropX = Number(params.get("cropX"));
  const sharedCropY = Number(params.get("cropY"));

  if (!sharedStory) {
    return;
  }

  state.story = sharedStory;
  storyInput.value = sharedStory;
  state.achievements = buildAchievementOptions(sharedStory);
  state.selectedAchievement = state.achievements[sharedAchievementIndex] || state.achievements[0];

  if (sharedTitle && sharedAnnotation) {
    const sharedAchievement = {
      id: `shared-${storySeed(sharedStory)}`,
      title: sharedTitle,
      summary: sharedSummary || buildFallbackSummary(sharedStory),
      annotation: sharedAnnotation,
      insight: sharedInsight || "隐藏功绩：把失败重新命名，就是一种赢法。",
      tag: sharedTag || "成就标签 · 分享成就"
    };
    state.achievements = [sharedAchievement, ...state.achievements.filter((item) => item.title !== sharedTitle)];
    state.selectedAchievement = sharedAchievement;
  }

  const sharedTheme = themeConfigs.find((theme) => theme.id === sharedThemeId);
  if (sharedTheme) {
    state.selectedTheme = sharedTheme;
  }

  if (sharedMode === "photo" || sharedMode === "text") {
    state.posterMode = sharedMode;
  }

  if (!Number.isNaN(sharedCropX)) {
    state.cropX = Math.min(100, Math.max(0, sharedCropX));
    cropXInput.value = String(state.cropX);
  }

  if (!Number.isNaN(sharedCropY)) {
    state.cropY = Math.min(100, Math.max(0, sharedCropY));
    cropYInput.value = String(state.cropY);
  }
}

async function exportPosterBlob() {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const width = 1080;
  const height = 1440;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  const themeMap = {
    spark: ["#ff5f45", "#ff8c42", "#ffd166"],
    midnight: ["#182848", "#28456d", "#ff8552"],
    bloom: ["#ffe0d2", "#ffc7c2", "#ffd58a"]
  };

  const colors = themeMap[state.selectedTheme.id];
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(0.52, colors[1]);
  gradient.addColorStop(1, colors[2]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(255,255,255,0.12)";
  ctx.beginPath();
  ctx.arc(width - 120, 120, 150, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(120, height - 100, 180, 0, Math.PI * 2);
  ctx.fill();

  const lightText = state.selectedTheme.id === "bloom" ? "#3e241b" : "#fff9ef";
  const bodyText = state.selectedTheme.id === "bloom" ? "rgba(62,36,27,0.86)" : "rgba(255,249,239,0.92)";
  const glass = state.selectedTheme.id === "bloom" ? "rgba(255,255,255,0.52)" : "rgba(255,255,255,0.14)";

  ctx.fillStyle = state.selectedTheme.id === "bloom" ? "rgba(62,36,27,0.72)" : "rgba(255,249,239,0.82)";
  ctx.font = '700 28px "Noto Sans SC"';
  ctx.fillText("FAILURE ACHIEVEMENT BOARD", 72, 84);

  roundRect(ctx, 72, 130, 280, 58, 29, glass);
  ctx.fillStyle = lightText;
  ctx.font = '800 24px "Noto Sans SC"';
  ctx.fillText(pickDecorativeText(state.story).badge, 104, 166);

  if (state.posterMode === "photo" && state.photoDataUrl) {
    const image = await loadImage(state.photoDataUrl);
    drawCoverImage(ctx, image, 72, 224, 936, 620, 42, state.cropX / 100, state.cropY / 100);
    roundRect(ctx, 788, 252, 176, 48, 24, "rgba(18,18,18,0.35)");
    ctx.fillStyle = "#fff9ef";
    ctx.font = '700 22px "Noto Sans SC"';
    ctx.fillText("PHOTO PROOF", 818, 283);

    roundRect(ctx, 72, 876, 936, 410, 42, state.selectedTheme.id === "bloom" ? "rgba(255,255,255,0.62)" : "rgba(16,16,16,0.18)");
    ctx.fillStyle = lightText;
    fitAndDrawBlock(ctx, state.selectedAchievement?.title || "成就待解锁", {
      x: 120,
      y: 960,
      maxWidth: 840,
      maxHeight: 110,
      maxFont: 72,
      minFont: 48,
      lineHeightRatio: 1.16,
      fontWeight: 900,
      color: lightText
    });
    fitAndDrawBlock(ctx, state.selectedAchievement?.summary || "", {
      x: 120,
      y: 1074,
      maxWidth: 760,
      maxHeight: 42,
      maxFont: 28,
      minFont: 22,
      lineHeightRatio: 1.25,
      fontWeight: 800,
      color: lightText
    });
    fitAndDrawBlock(ctx, state.selectedAchievement?.annotation || "", {
      x: 120,
      y: 1140,
      maxWidth: 820,
      maxHeight: 96,
      maxFont: 32,
      minFont: 24,
      lineHeightRatio: 1.55,
      fontWeight: 500,
      color: bodyText
    });
    fitAndDrawBlock(ctx, state.selectedAchievement?.insight || "", {
      x: 120,
      y: 1260,
      maxWidth: 780,
      maxHeight: 54,
      maxFont: 24,
      minFont: 20,
      lineHeightRatio: 1.5,
      fontWeight: 700,
      color: lightText
    });
  } else {
    fitAndDrawBlock(ctx, state.selectedAchievement?.title || "先输入一段经历", {
      x: 72,
      y: 300,
      maxWidth: 860,
      maxHeight: 210,
      maxFont: 88,
      minFont: 54,
      lineHeightRatio: 1.12,
      fontWeight: 900,
      color: lightText
    });
    fitAndDrawBlock(ctx, state.selectedAchievement?.summary || "", {
      x: 72,
      y: 555,
      maxWidth: 720,
      maxHeight: 46,
      maxFont: 30,
      minFont: 22,
      lineHeightRatio: 1.25,
      fontWeight: 800,
      color: lightText
    });
    fitAndDrawBlock(ctx, state.selectedAchievement?.annotation || "", {
      x: 72,
      y: 635,
      maxWidth: 860,
      maxHeight: 235,
      maxFont: 36,
      minFont: 26,
      lineHeightRatio: 1.58,
      fontWeight: 500,
      color: bodyText
    });
    roundRect(ctx, 72, 1050, 860, 100, 28, glass);
    fitAndDrawBlock(ctx, state.selectedAchievement?.insight || "", {
      x: 104,
      y: 1110,
      maxWidth: 790,
      maxHeight: 52,
      maxFont: 28,
      minFont: 22,
      lineHeightRatio: 1.42,
      fontWeight: 700,
      color: lightText
    });
  }

  ctx.fillStyle = state.selectedTheme.id === "bloom" ? "rgba(62,36,27,0.92)" : "#fff9ef";
  fitAndDrawBlock(ctx, state.selectedAchievement?.tag || "成就标签 · 日常乌龙", {
    x: 72,
    y: 1330,
    maxWidth: 420,
    maxHeight: 40,
    maxFont: 26,
    minFont: 20,
    lineHeightRatio: 1.2,
    fontWeight: 700,
    color: state.selectedTheme.id === "bloom" ? "rgba(62,36,27,0.92)" : "#fff9ef"
  });
  ctx.textAlign = "right";
  ctx.fillText("失败成就馆", width - 72, 1330);
  ctx.textAlign = "left";
  ctx.fillText(pickDecorativeText(state.story).footer, 72, 1382);

  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

function roundRect(ctx, x, y, width, height, radius, fillStyle) {
  ctx.save();
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function createWrappedLines(ctx, text, maxWidth) {
  const paragraphs = `${text || ""}`.split("\n");
  const lines = [];

  paragraphs.forEach((paragraph, paragraphIndex) => {
    const chars = [...paragraph];
    let line = "";

    chars.forEach((char) => {
      const testLine = `${line}${char}`;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        lines.push(line);
        line = char;
      } else {
        line = testLine;
      }
    });

    if (line) {
      lines.push(line);
    }

    if (paragraphIndex < paragraphs.length - 1) {
      lines.push("");
    }
  });

  return lines;
}

function fitAndDrawBlock(ctx, text, options) {
  const {
    x,
    y,
    maxWidth,
    maxHeight,
    maxFont,
    minFont,
    lineHeightRatio,
    fontWeight,
    color
  } = options;

  let fontSize = maxFont;
  let lines = [];
  let lineHeight = maxFont * lineHeightRatio;

  while (fontSize >= minFont) {
    ctx.font = `${fontWeight} ${fontSize}px "Noto Sans SC"`;
    lines = createWrappedLines(ctx, text, maxWidth);
    lineHeight = fontSize * lineHeightRatio;
    const textHeight = Math.max(1, lines.length) * lineHeight;
    if (textHeight <= maxHeight) {
      break;
    }
    fontSize -= 2;
  }

  if (fontSize < minFont) {
    fontSize = minFont;
    ctx.font = `${fontWeight} ${fontSize}px "Noto Sans SC"`;
    lines = createWrappedLines(ctx, text, maxWidth);
    lineHeight = fontSize * lineHeightRatio;
    const maxLines = Math.max(1, Math.floor(maxHeight / lineHeight));
    lines = clampLines(ctx, lines, maxWidth, maxLines);
  }

  ctx.fillStyle = color;
  ctx.font = `${fontWeight} ${fontSize}px "Noto Sans SC"`;
  lines.forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });
}

function clampLines(ctx, lines, maxWidth, maxLines) {
  if (lines.length <= maxLines) return lines;
  const nextLines = lines.slice(0, maxLines);
  let lastLine = nextLines[maxLines - 1].replace(/…$/, "");

  while (ctx.measureText(`${lastLine}…`).width > maxWidth && lastLine.length > 0) {
    lastLine = lastLine.slice(0, -1);
  }

  nextLines[maxLines - 1] = `${lastLine}…`;
  return nextLines;
}

function drawCoverImage(ctx, image, x, y, width, height, radius, focusX = 0.5, focusY = 0.5) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.clip();

  const targetRatio = width / height;
  const imageRatio = image.width / image.height;
  let drawWidth;
  let drawHeight;
  let drawX;
  let drawY;
  const safeFocusX = Math.min(1, Math.max(0, focusX));
  const safeFocusY = Math.min(1, Math.max(0, focusY));

  if (imageRatio > targetRatio) {
    drawHeight = height;
    drawWidth = height * imageRatio;
    drawX = x - (drawWidth - width) * safeFocusX;
    drawY = y;
  } else {
    drawWidth = width;
    drawHeight = width / imageRatio;
    drawX = x;
    drawY = y - (drawHeight - height) * safeFocusY;
  }

  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  ctx.restore();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function downloadPoster() {
  const blob = await exportPosterBlob();
  if (!blob) return;

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "failure-achievement-poster.png";
  link.click();
  URL.revokeObjectURL(url);
}

async function sharePoster() {
  const blob = await exportPosterBlob();
  if (!blob) return;

  const file = new File([blob], "failure-achievement-poster.png", { type: "image/png" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({
      title: "我的失败成就板",
      text: state.selectedAchievement?.title || "我的失败成就板",
      files: [file]
    });
    return;
  }

  await downloadPoster();
}

function handlePhotoUpload(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    state.photoDataUrl = reader.result;
    state.cropX = 50;
    state.cropY = 50;
    cropXInput.value = "50";
    cropYInput.value = "50";
    setPosterMode("photo");
  };
  reader.readAsDataURL(file);
}

generateBtn.addEventListener("click", generateAchievements);
randomBtn.addEventListener("click", () => {
  const story = sampleStories[Math.floor(Math.random() * sampleStories.length)];
  storyInput.value = story;
  generateAchievements();
});
textModeBtn.addEventListener("click", () => setPosterMode("text"));
photoModeBtn.addEventListener("click", () => setPosterMode("photo"));
photoInput.addEventListener("change", handlePhotoUpload);
cropXInput.addEventListener("input", (event) => {
  state.cropX = Number(event.target.value);
  renderPoster();
});
cropYInput.addEventListener("input", (event) => {
  state.cropY = Number(event.target.value);
  renderPoster();
});
downloadBtn.addEventListener("click", downloadPoster);
shareBtn.addEventListener("click", sharePoster);
copyLinkBtn.addEventListener("click", copyShareLink);
sharePageBtn.addEventListener("click", sharePage);

storyInput.value = state.story;
applySharedStateFromUrl();
if (!state.achievements.length) {
  state.achievements = buildAchievementOptions(state.story);
  state.selectedAchievement = state.achievements[0];
}
renderAchievements();
renderThemes();
textModeBtn.classList.toggle("active", state.posterMode === "text");
photoModeBtn.classList.toggle("active", state.posterMode === "photo");
renderPoster();

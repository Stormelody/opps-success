# 失败成就馆

一个把“失败经历”包装成“可晒成就”的轻量原型。

## 当前能力

- 输入一段失败经历
- 优先使用 OpenAI 生成 4 个成就候选，没有配置 API 时自动回退到本地规则
- 每个候选包含一句话概括、成就标题、成就注释和隐藏功绩
- 选择不同海报风格模版
- 支持纯文字海报
- 支持上传一张照片生成图片成就板
- 支持导出 PNG
- 在支持 Web Share API 的环境中可直接分享图片
- 支持生成可分享链接，打开链接后可还原同样的故事、成就文案和海报风格

## 文件说明

- [index.html](/Users/ikuka/Documents/Codex/2026-04-24/app-app-ai/index.html) 页面结构
- [styles.css](/Users/ikuka/Documents/Codex/2026-04-24/app-app-ai/styles.css) 视觉样式
- [script.js](/Users/ikuka/Documents/Codex/2026-04-24/app-app-ai/script.js) 生成逻辑与导出逻辑
- [api/generate-achievements.js](/Users/ikuka/Documents/Codex/2026-04-24/app-app-ai/api/generate-achievements.js) OpenAI 文案生成接口

## 环境变量

- `OPENAI_API_KEY` 必填。部署到 Vercel 后，在 Project Settings -> Environment Variables 中添加。
- `OPENAI_MODEL` 可选。默认使用 `gpt-5.4-mini`，可按需要替换为你账号可用的模型。

## 下一步最值得做的升级

1. 增加更多海报模版，比如“奖状风”“博物馆标签风”“像素游戏成就风”。
2. 增加“朋友圈文案”自动生成，一起解决“发什么字”的问题。
3. 把上传图片升级成 AI 风格化处理，比如做成奖杯照、纪念章、漫画卡面。

## 适合接入 AI 的位置

- 成就名生成
- 成就简介润色
- 海报 slogan 生成
- 图片风格转换
- 用户故事摘要

## 上线方式

- 当前项目是纯静态网页，适合直接部署到 Vercel、Netlify、Cloudflare Pages 或 GitHub Pages。
- 已包含 [vercel.json](/Users/ikuka/Documents/Codex/2026-04-24/app-app-ai/vercel.json)，直接导入仓库即可上线。
- 只有部署到 `http` 或 `https` 地址后，“复制分享链接”和“分享网页”才真正适合发给别人打开。
- 本地上传的照片不会被塞进分享链接里；如果要分享带照片的结果，建议导出图片后单独发布。

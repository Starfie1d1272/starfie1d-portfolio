# DAK 作品集截图清单

> 目标：为 `src/content/projects/dak-studio.mdx` 补素材。这里不是产品全页面验收，而是作品集取景规范。

## 基线

- 页面叙事固定到 **DAK Studio v0.8.2** 这个已发布 checkpoint。
- 如果截图来自当前 `main` / 0.8.3-dev，截图前记录 commit SHA；作品集可以注明展示基线，不要把 dev 截图写成 v0.8.2 Release 原图。
- 旧的 July audit 图可继续作为 0.8 重构验收材料，但新截图优先用于 Duel / Economy / Lineup / RadarField / Coach 等能力展示。
- 不要求所有图片同一天、同一版本；要求的是每张图的角色、版本和成熟度说明准确。

## 必截 3 张

### 1. `public/media/dak/match-workspace.webp`

**角色：产品主图。**

- 尽量保留完整 DAK Studio 窗口和侧栏，证明这是桌面产品。
- 选择信息最完整的一场真实比赛。
- 最好同时看到：比赛上下文、核心指标、回合 / Evidence 入口、2D Replay 或明显的回放入口。
- 不要为了去掉版本号把整个产品 chrome 都裁没；可以正常裁掉无关底部空白。

### 2. `public/media/dak/duel-mechanics.webp`

**角色：证明分析不是记分板统计。**

- 组件级截图优先，不要求完整侧栏。
- 至少保留：样本量、分类 / 机制摘要、具体 duel 样本、Evidence 入口。
- Caption 必须标 **Beta**；不要写成已经完成固定验证集精度评估。

### 3. `public/media/dak/rivalhub-tournament.webp`

**角色：证明 DAK 已经进入 RivalHub 分析链路。**

优先级：

1. RivalHub 在线赛事进入 Studio 后的赛事总览 / Series Inspector；
2. 带 RivalHub 来源、导入或同步状态的资料库；
3. 同时能看到赛事结构和 Demo Evidence 的画面。

## 可选能力图库

这些都建议截“组件标题 + 必要 scope / legend + 核心内容”，不要机械保留完整侧栏。

| 文件 | 内容 | 作品集标注 |
| --- | --- | --- |
| `public/media/dak/economy.webp` | 经济矩阵 / 手枪转化 / 节奏 | Stable |
| `public/media/dak/lineup.webp` | 地图 + 点位详情 | Beta |
| `public/media/dak/radar-field.webp` | RadarField 地图 + scope + legend | 描述性探索 / 待产品验证 |
| `public/media/dak/coach.webp` | PatternExplorer / 代表回合 Evidence | Experimental |

## 统一取景原则

- 用同一套真实数据时优先，减少“每张图像不同产品”的感觉。
- 对组件截图，不要裁掉标题、scope、legend 或成熟度判断所需上下文。
- 不要为了画面漂亮隐藏降级状态、缺失值或实验标签。
- RadarField 不写“自动发现控图弱区 / 战术意图”；它当前只做描述性空间观察。
- Coach 不写“自动识别假打 / 转点 / 完整战术”；只描述事实簇、相似模式和可回看的代表回合。
- 截图保存 WebP；长边足够覆盖作品集 900px 内容区即可，不需要无意义的超高分辨率。

## 截图齐后

回到 `dak-studio.mdx`，按三个隐藏的 `DAK_SCREENSHOT_SLOT_*` 注释插入主图；再把 `DAK_OPTIONAL_GALLERY` 替换成横向图库。最后只做一次桌面 / 移动端排版验收，不再重新讨论页面主线。

# 作品集真实素材怎么放

作品集已经支持两类素材：

1. 项目界面截图：`screenshots`
2. 海报、Excel、规则书等原始材料：`evidenceSections`

## 目录建议

把需要公开的文件直接放到 `public/media/`，文件名尽量用稳定的英文 / 数字 slug，不要沿用 Finder 里带空格、括号和“副本”的原始文件名。

```text
public/media/
  rivalhub/
    home.webp
    rivals-bracket.webp
    admin.webp

  nju-major/
    2023/
      poster.jpg
      match-sheet.xlsx
      rulebook.docx
    2024/
      poster-main.jpg
      poster-alt.jpg
      registration.xlsx
      rulebook.docx
    2025/
      poster.jpg
      registration.xlsx
      rulebook.docx
```

PSD、工程源文件和没有展示价值的大附件不要放进公开站点；网页只放导出的 PNG / JPG / WebP 和确实希望访客打开的原始文档。

## RivalHub 截图

在 `src/content/projects/rivalhub.mdx` frontmatter 中加入：

```yaml
screenshots:
  - src: /media/rivalhub/home.webp
    alt: RivalHub 平台首页
    caption: 平台首页和当前赛事入口。
  - src: /media/rivalhub/rivals-bracket.webp
    alt: 2026 NJU Rivals 双败淘汰赛
    caption: 第一届 Rivals 的真实赛程与赛果。
  - src: /media/rivalhub/admin.webp
    alt: RivalHub 管理后台
    caption: 赛事报名、审核和比赛运营使用的后台。
```

不要为了凑数量放截图。优先选择能证明真实使用、真实数据和完整流程的页面。

## NJU Major 原始材料

在 `src/content/projects/nju-major.mdx` frontmatter 中加入：

```yaml
evidenceSections:
  - title: 2023 NJU Major
    description: 第一届赛事留下的原始材料。
    items:
      - kind: image
        src: /media/nju-major/2023/poster.jpg
        label: 2023 赛事海报
        alt: 2023 NJU Major 番茄杯赛事海报
      - kind: file
        src: /media/nju-major/2023/match-sheet.xlsx
        label: 2023 比赛总表
        caption: 当时用于维护赛程和比赛结果的 Excel。
      - kind: file
        src: /media/nju-major/2023/rulebook.docx
        label: 2023 比赛规则
        caption: 第一届赛事的原始规则文件。

  - title: 2024 NJU Major
    items:
      - kind: image
        src: /media/nju-major/2024/poster-main.jpg
        label: 2024 赛事海报
        alt: 2024 NJU Major 猫潮杯赛事海报
      - kind: file
        src: /media/nju-major/2024/registration.xlsx
        label: 2024 报名与赛务表
```

如果原始 Excel / Word 本来就是公开公示材料，可以直接提供下载；如果某个文件以后发现包含不适合公开的信息，就只导出一张经过裁切的截图，不放原文件。

## 本地加入文件

在仓库根目录执行，例如：

```bash
mkdir -p public/media/nju-major/2023
cp "/你的原文件目录/23比赛总表.xlsx" public/media/nju-major/2023/match-sheet.xlsx
cp "/你的原文件目录/2023 nju major 比赛规则.docx" public/media/nju-major/2023/rulebook.docx
cp "/你的原文件目录/2023-poster.jpg" public/media/nju-major/2023/poster.jpg
```

然后：

```bash
npm run build
npm run preview
git add public/media src/content/projects
git commit -m "content: add original tournament evidence"
git push
```

## 图片格式

- UI 截图：优先 WebP，保留足够清晰的文字。
- 海报：原始 JPG / PNG 本身质量合适就可以直接使用。
- Excel / Word：如果要让访客打开原文件，就保留 xlsx / docx。
- 不要把 PSD 等编辑工程文件直接部署到公开站点。

每份素材旁边只写它是什么、来自哪一年、能证明什么；不要再额外写一层抽象“方法论”。

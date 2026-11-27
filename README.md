# starfie1d-portfolio

杜鑫宇的产品与工程作品集。

当前重点内容：

- **RivalHub**：高校电竞赛事运营平台；
- **NJU Major 2023–2026**：连续多届校园 CS 赛事主办与总体运营；
- **Mizar**：覆盖赛前、局内与赛后的 CS2 制播系统；
- **DAK Studio / CS2 Demo Analysis Kit**：本地 Demo 分析工作台与分析工具链；
- **SendToMyself**：自托管的跨设备个人信息流；
- **策星 · Cexing**：正在开发中的 HarmonyOS 原生代理客户端。

## 仓库边界

- 职业事实、定向简历与面试资料放在 `career-bank`；
- 科研经历、成果与摄影放在 `starfie1d-site`；
- 本仓库负责公开作品集页面与展示素材。

页面不再要求每个项目套同一套 Case Study 模板。统一字段只负责标题、状态、指标、时间线、素材和关联关系；具体叙事直接写在各项目 MDX 正文里。

## 本地开发

使用 Node.js 24 LTS（与 CI 和部署构建保持一致）。

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 加入真实素材

见 `docs/ADDING_ASSETS.md`。

## 部署

Vercel 项目：`starfie1d-portfolio`，正式域名为 `https://work.starfie1d.top`，另可通过 `https://starfie1d-portfolio.vercel.app` 访问。

GitHub 集成跟随 `main` 发布，框架为 Astro，运行 `npm run build` 后发布 `dist/`。Vercel 的 `SITE_URL` 使用正式访问地址，供 canonical、站点地图与分享信息使用。

域名由 Cloudflare 管理，`work` 的 CNAME 指向 Vercel 项目域名设置提供的目标。GitHub Pages 工作流保留。

## 上游模板与许可证

初始结构来自 [erlandv/case](https://github.com/erlandv/case)，按其 MIT License 使用和修改。原始 MIT License 保留在仓库中。

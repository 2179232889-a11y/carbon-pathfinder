# 碳路先锋静态网站部署包

这是可以直接部署到任意静态网站的完整版本，不依赖本机服务或临时隧道。

## 包含文件

- `index.html`
- `app.js`
- `styles.css`
- `ui-refinement.css`
- `botanical-sprig.svg`
- `.nojekyll`

## 推荐部署方式

### GitHub Pages

1. 新建一个 GitHub 仓库。
2. 将本目录全部文件上传到仓库根目录。
3. 在仓库 `Settings → Pages` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和根目录，保存后即可获得永久网址。

### Cloudflare Pages / Netlify / Vercel

将本目录作为网站根目录直接上传即可。项目没有构建步骤。

## 数据说明

当前版本使用浏览器 `localStorage` 保存项目数据：

- 同一个浏览器会持续保存数据。
- 换设备、换浏览器或清除浏览器数据后，数据不会自动同步。
- 如需客户账号、云端数据库、多人协作和跨设备同步，需要进一步部署后端服务。

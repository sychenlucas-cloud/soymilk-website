# 漿樣子網站永久部署指南

本指南提供多種永久部署方案，您可以根據需求選擇最適合的方式。

---

## 方案一：使用 Vercel 部署（推薦）⭐

**優點**：免費、快速、自動 HTTPS、全球 CDN、零配置

### 步驟：

1. **註冊 Vercel 帳號**
   - 訪問 https://vercel.com
   - 使用 GitHub、GitLab 或 Email 註冊

2. **方式 A：通過 GitHub 自動部署（推薦）**
   
   a. 在 GitHub 建立新儲存庫
   b. 將專案推送到 GitHub：
   ```bash
   cd soy-young
   git remote add origin https://github.com/your-username/soy-young.git
   git push -u origin main
   ```
   c. 在 Vercel Dashboard 點擊「Import Project」
   d. 選擇您的 GitHub 儲存庫
   e. Vercel 會自動偵測 Vite 專案並配置
   f. 點擊「Deploy」
   
   ✅ 完成！每次推送到 GitHub 都會自動部署

3. **方式 B：通過 CLI 手動部署**
   
   ```bash
   cd soy-young
   npm install -g vercel
   vercel login
   vercel --prod
   ```

4. **設置環境變數（可選）**
   - 在 Vercel Dashboard → Settings → Environment Variables
   - 添加 `API_KEY` = 您的 Gemini API Key

5. **自訂域名（可選）**
   - 在 Vercel Dashboard → Settings → Domains
   - 添加您的域名並按照指示設置 DNS

**部署後網址格式**：`https://your-project-name.vercel.app`

---

## 方案二：使用 Netlify 部署

**優點**：免費、簡單、自動 HTTPS、表單處理功能

### 步驟：

1. **註冊 Netlify 帳號**
   - 訪問 https://netlify.com
   - 使用 GitHub、GitLab 或 Email 註冊

2. **方式 A：拖放部署（最簡單）**
   
   a. 在 Netlify Dashboard 找到拖放區域
   b. 將 `dist/` 資料夾直接拖放到網頁
   c. Netlify 會自動上傳並部署
   
   ✅ 完成！獲得即時網址

3. **方式 B：通過 GitHub 自動部署**
   
   a. 將專案推送到 GitHub
   b. 在 Netlify Dashboard 點擊「New site from Git」
   c. 選擇您的儲存庫
   d. 建置設定：
      - Build command: `npm run build`
      - Publish directory: `dist`
   e. 點擊「Deploy site」

4. **方式 C：通過 CLI 部署**
   
   ```bash
   cd soy-young
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=dist
   ```

**部署後網址格式**：`https://random-name-123456.netlify.app`

---

## 方案三：使用 GitHub Pages 部署

**優點**：完全免費、與 GitHub 整合、適合開源專案

### 步驟：

1. **建立 GitHub 儲存庫**
   
   ```bash
   cd soy-young
   git init
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/soy-young.git
   git push -u origin main
   ```

2. **啟用 GitHub Pages**
   
   a. 進入儲存庫 Settings → Pages
   b. Source 選擇「GitHub Actions」
   c. 專案已包含 `.github/workflows/deploy.yml`
   d. 推送程式碼後會自動部署

3. **訪問網站**
   - 網址：`https://your-username.github.io/soy-young/`

**注意**：如果使用子路徑，需要修改 `vite.config.ts`：
```typescript
export default defineConfig({
  base: '/soy-young/',  // 添加這行
  // ... 其他配置
})
```

---

## 方案四：使用傳統靜態主機

**適用於**：已有主機服務（如 cPanel、FTP 主機等）

### 步驟：

1. **建置專案**
   ```bash
   cd soy-young
   npm install
   npm run build
   ```

2. **上傳檔案**
   - 將 `dist/` 目錄中的所有檔案上傳到主機的 public_html 或 www 目錄
   - 使用 FTP、SFTP 或主機提供的檔案管理器

3. **配置伺服器（重要）**
   
   **Apache (.htaccess)**：
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
   
   **Nginx (nginx.conf)**：
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

---

## 方案五：使用 Cloudflare Pages

**優點**：免費、快速、全球 CDN、無限頻寬

### 步驟：

1. **註冊 Cloudflare 帳號**
   - 訪問 https://pages.cloudflare.com

2. **連接 GitHub**
   - 將專案推送到 GitHub
   - 在 Cloudflare Pages 選擇「Create a project」
   - 連接 GitHub 並選擇儲存庫

3. **建置設定**
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`

4. **部署**
   - 點擊「Save and Deploy」
   - 每次推送到 GitHub 會自動重新部署

**部署後網址格式**：`https://soy-young.pages.dev`

---

## 快速比較表

| 平台 | 免費額度 | 自動部署 | 自訂域名 | 難度 |
|------|---------|---------|---------|------|
| **Vercel** | 無限 | ✅ | ✅ | ⭐⭐ |
| **Netlify** | 100GB/月 | ✅ | ✅ | ⭐⭐ |
| **GitHub Pages** | 無限 | ✅ | ✅ | ⭐⭐⭐ |
| **Cloudflare Pages** | 無限 | ✅ | ✅ | ⭐⭐ |
| **傳統主機** | 依主機商 | ❌ | ✅ | ⭐⭐⭐⭐ |

---

## 環境變數設置

如果您想啟用 AI 聊天功能，需要在部署平台設置環境變數：

- **變數名稱**：`API_KEY` 或 `GEMINI_API_KEY`
- **變數值**：您的 Google Gemini API Key
- **如何獲取**：訪問 https://makersuite.google.com/app/apikey

### 各平台設置位置：

- **Vercel**：Settings → Environment Variables
- **Netlify**：Site settings → Environment variables
- **GitHub Pages**：Settings → Secrets and variables → Actions
- **Cloudflare Pages**：Settings → Environment variables

---

## 自訂域名設置

所有平台都支援自訂域名，一般步驟：

1. 在部署平台添加您的域名
2. 平台會提供 DNS 記錄（通常是 CNAME 或 A 記錄）
3. 在您的域名註冊商設置 DNS 記錄
4. 等待 DNS 傳播（通常 5-30 分鐘）
5. 平台會自動配置 HTTPS 證書

---

## 建議方案

### 🏆 最推薦：Vercel
- 最簡單、最快速
- 零配置、自動優化
- 完美支援 Vite 專案

### 🥈 次選：Netlify
- 功能豐富
- 拖放部署超簡單
- 適合不熟悉 Git 的使用者

### 🥉 預算有限：GitHub Pages
- 完全免費
- 與 GitHub 深度整合
- 適合開源專案

---

## 需要協助？

如果在部署過程中遇到問題：

1. 檢查建置是否成功：`npm run build`
2. 確認 `dist/` 目錄包含所有檔案
3. 查看部署平台的建置日誌
4. 確認環境變數設置正確

---

## 部署檢查清單

- [ ] 選擇部署平台
- [ ] 註冊帳號
- [ ] 建置專案（`npm run build`）
- [ ] 上傳或連接 GitHub
- [ ] 設置環境變數（可選）
- [ ] 配置自訂域名（可選）
- [ ] 測試網站功能
- [ ] 設置自動部署（推薦）

---

祝您部署順利！🚀

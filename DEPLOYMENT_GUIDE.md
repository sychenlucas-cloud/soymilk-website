# 漿樣子網站部署指南

## 快速開始

### 本地開發環境設置

**前置需求**：
- Node.js 18.0 或更高版本
- npm 或 pnpm 套件管理器

**步驟**：

1. 解壓縮專案檔案到您的工作目錄

2. 安裝依賴套件：
   ```bash
   cd soy-young
   npm install
   ```

3. （可選）設置 Gemini API Key：
   如果您想啟用 AI 聊天功能和動態品牌故事生成，請編輯 `.env.local` 檔案：
   ```
   API_KEY=your_gemini_api_key_here
   ```
   
   如果不設置 API Key，網站仍然可以正常運作，但會使用預設的靜態文案。

4. 啟動開發伺服器：
   ```bash
   npm run dev
   ```
   
   網站將在 `http://localhost:3000` 啟動

5. 在瀏覽器中訪問 `http://localhost:3000` 查看網站

## 生產環境部署

### 建置生產版本

```bash
npm run build
```

建置完成後，所有靜態檔案將輸出到 `dist/` 目錄。

### 預覽生產版本

```bash
npm run preview
```

### 部署選項

#### 選項 1：Vercel（推薦）

1. 安裝 Vercel CLI：
   ```bash
   npm install -g vercel
   ```

2. 登入 Vercel：
   ```bash
   vercel login
   ```

3. 部署專案：
   ```bash
   vercel
   ```

4. 設置環境變數（在 Vercel Dashboard）：
   - `API_KEY` = 您的 Gemini API Key

#### 選項 2：Netlify

1. 安裝 Netlify CLI：
   ```bash
   npm install -g netlify-cli
   ```

2. 登入 Netlify：
   ```bash
   netlify login
   ```

3. 部署專案：
   ```bash
   netlify deploy --prod
   ```

4. 設置環境變數（在 Netlify Dashboard）：
   - `API_KEY` = 您的 Gemini API Key

#### 選項 3：傳統靜態主機

1. 建置專案：
   ```bash
   npm run build
   ```

2. 將 `dist/` 目錄中的所有檔案上傳到您的主機

3. 確保伺服器配置支援 SPA（Single Page Application）路由

## 環境變數說明

- `API_KEY` 或 `GEMINI_API_KEY`：Google Gemini API 金鑰
  - 用於 AI 聊天小幫手功能
  - 用於動態生成品牌故事
  - 如果未設置，將使用預設靜態內容

## 自訂配置

### 修改店面資訊

編輯 `data/stores.ts` 檔案來更新門市資訊：

```typescript
export const locations: StoreLocation[] = [
  {
    id: '1',
    name: '門市名稱',
    address: '完整地址',
    mapLink: 'Google Maps 連結',
    phone: '電話號碼',
    image: '/圖片檔名.jpg',
    businessHours: '營業時間'
  },
  // 更多門市...
];
```

### 修改產品菜單

編輯 `components/MenuSection.tsx` 檔案中的 `products` 陣列來更新產品資訊。

### 更換店面圖片

1. 將新圖片放入 `public/` 目錄
2. 更新 `data/stores.ts` 中對應的 `image` 路徑
3. 建議圖片尺寸：至少 800x1000 像素（4:5 比例）

## 技術支援

如果遇到問題，請檢查：

1. Node.js 版本是否符合要求（18.0+）
2. 所有依賴套件是否正確安裝
3. 環境變數是否正確設置
4. 瀏覽器控制台是否有錯誤訊息

## 授權資訊

本專案為漿樣子濃い豆乳（Soy Young）的官方網站。
© 2025 Soy Young. All rights reserved.

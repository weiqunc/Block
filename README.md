# Block

純 static 的個人網站。沒有 build step 或 package 依賴。

## 本機預覽

在這個資料夾執行：

```sh
python3 -m http.server 8761 --bind 127.0.0.1
```

開啟 http://127.0.0.1:8761。Ctrl+C 停止服務。部署時保留相同的檔案結構。

## 維護內容

- `index.html`：HOME、POST、SIDE_PROJECT、CONTACT 的簡介、預覽與外連。所有 page IDs 必須唯一。
- `main.js`：`posts`、`SideProjects` 的完整內容與媒體、頁面導覽、搜尋、分享、modal。使用 DOM API 與 textContent 渲染資料，不拼接 HTML。
- `style.css`：responsive layout、focus 樣式、modal 與搜尋介面。
- `thumbnails/`：15 個 WebP 預覽。瀏覽器不支援 WebP 或預覽載入失敗時使用原始 JPG。modal 仍使用原始圖片。
- `favicon.svg`：WC 圖示。

新增貼文時，加入唯一且固定的 `id`，並同步 HTML cover 的 `data-index` 和預覽文字。既有 `postJ`～`postC`、`spD`、`spC`、`journal-20260214` IDs 不應重新編號；這些 IDs 用於分享連結。

影片透過 GitHub LFS 的 media URL 載入；遠端載入失敗時，嘗試同資料夾的原始影片。請保留素材原檔。若 static hosting 提供的是 LFS pointer，遠端 URL 仍是必要的；兩個來源都無法使用時會顯示重試提示。

## 使用方式

POST 與 SIDE_PROJECT 可用完整內文、日期、地點搜尋；使用 Unicode NFKC normalization 與大小寫忽略，多個關鍵字以空白分隔，需全部符合。清除搜尋恢復全部列表。搜尋只改變列表顯示，不更動原文。

點擊預覽圖或「閱讀全文」開啟 modal。分享連結格式為 `#POST/postJ/2` 或 `#SIDE_PROJECT/spD/1`，最後一段是從 1 開始的圖片編號；連結可直接開啟該篇與圖片。「複製連結」遇到 clipboard 被拒絕時會提供已選取的文字欄位，讓使用者手動複製。

開啟 modal 建立一個 history 項目；切換圖片或貼文更新同一個項目。返回關閉 modal，前進重開。從外部直接開啟分享連結後關閉 modal 會留在對應列表。

- 左右方向鍵或手機水平 swipe：切換圖片。
- 上下方向鍵或畫面外側箭頭：切換貼文，依完整 collection 順序。
- Escape、關閉按鈕或 backdrop：關閉 modal，返回原來的 focus。
- Tab：保持在 modal 的操作項目內；影片控制項可使用原生鍵盤操作。

沒有 JavaScript 時顯示所有 static sections 與導航；首頁外連與預覽可用。完整內文、modal、搜尋與分享需要 JavaScript。頁面不載入第三方 scripts，並以 Content-Security-Policy 禁止 inline script 與 object 嵌入。

## 修改後檢查

檢查 desktop、390px mobile、橫向視窗；四個 page 的導航、back/forward、modal、搜尋、無結果與清除、分享 clipboard failure、影片載入與關閉。確認 Console 無 script error、Network 無失敗素材。開啟每張 cover，核對內文與原圖；查驗 WebP/JPG fallback、deep links 和無 JavaScript 頁面。原始照片、影片與文字應保留。

完整內文中的 HTTP／HTTPS URL 可直接點開，新視窗使用 `noopener noreferrer`；仍以 DOM 與 text nodes 保留原文，不將內文當作 HTML 執行。modal 的 Tab navigation 包含這些外連。

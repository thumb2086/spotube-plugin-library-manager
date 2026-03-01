# Library Manager / 音樂庫管理插件

A smart library manager plugin for Spotube to resolve download duplication and storage space issues.
專為 Spotube 設計的智能音樂庫管理插件，解決下載重複與儲存空間問題。

## Installation / 安裝步驟
1. **GitHub Actions (推薦)**: 
   - 前往 GitHub 儲存庫的 `Actions` 頁面。
   - 選擇 `Plugin Build` 並點擊 `Run workflow`。
   - 填寫版本號後執行。完成後可在 `Releases` 下載編譯好的 `.smplug`。
2. **Local Build**:
   - 安裝 `hetu_script_dev_tools`。
   - 執行 `make build` 產生 `.smplug`。
3. **Install to Spotube**:
   - 開啟 Spotube -> Plugins -> Install from file (選擇 `.smplug` 檔案)。

## Features / 功能列表
- Smart Queue (智能佇列)
- Automatic Deduplication (自動去重)
- M3U8 Generation (M3U8 生成)
- USB Export (USB 匯出)

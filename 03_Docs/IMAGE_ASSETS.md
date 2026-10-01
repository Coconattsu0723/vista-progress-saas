# VISTA Image Assets

## 運用ルール

- 制作元となるPNG・SVGは原則として保持する。
- Web実装時のWebP・AVIF変換は派生データとして扱う。
- 元画像を最適化済み画像で上書きしない。
- ファイル名は英数字、大文字のブランド名、用途が分かる命名を使用する。
- 制作素材は`05_Assets`、最終納品・公開用のまとめは`06_Exports`へ格納する。
- 実在を確認できたファイルだけを「完了」とする。
- Pencilの元画面を変更せず、書き出し画像を制作素材として管理する。

## 素材一覧

| ID | カテゴリ | ファイル名 | 用途 | 形式 | サイズ | 透過 | 状態 | 格納先 | 備考 |
|---|---|---|---|---|---|---|---|---|---|
| LOGO-01 | ロゴ | `VISTA_LOGO_A_TRANSPARENT.svg` | VISTA正式ロゴ・ベクター | SVG | 880 × 300px（viewBox 440 × 150） | 背景なし | 完了 | `01_Brand/VISTA_LOGO_A_TRANSPARENT.svg` | 899 bytes。XML/SVG解析正常、破損なし。 |
| LOGO-02 | ロゴ | `VISTA_LOGO_A_TRANSPARENT.png` | VISTA正式ロゴ・ラスター | PNG | 1760 × 600px | あり | 完了 | `01_Brand/VISTA_LOGO_A_TRANSPARENT.png` | 38,089 bytes。RGBA、CRC・画像データ検証正常、破損なし。 |
| HERO-01 | Hero | `VISTA_HERO_PRODUCT_MOCKUP.png` | TOPページHero用プロダクトモック | PNG | 3840 × 2400px | あり | 完了 | `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP.png` | 1920 × 1200pxフレームの2xマスター。Web実装時に1920px版およびWebP／AVIFを派生生成し、マスターは保持する。 |
| HERO-BG-01 | Hero Background | `VISTA_BG_HERO_NETWORK_DESKTOP.png` | TOP Hero network background | PNG | 1440 × 864px | Alphaチャンネルあり（全画素不透明） | 正式素材 / 実装使用中 | `05_Assets/images/hero/VISTA_BG_HERO_NETWORK_DESKTOP.png` | 元データ：Pencil export `Hero.png`。Desktop専用。SHA-256：`e2c9128ae52af923da3ffd84b15116954d225283f57ca53b66901369a1fde99e`。 |
| HERO-BG-02 | Hero Background | `VISTA_BG_HERO_NETWORK_MOBILE.png` | TOP Hero mobile network background | PNG | 375 × 634px | Alphaチャンネルあり（透明背景、Alpha 0–136） | 正式素材 / 実装使用中 | `05_Assets/images/hero/VISTA_BG_HERO_NETWORK_MOBILE.png` | 元データ：Pencil export `Mobile Hero Node Network Layer.png`。Mobile専用。Pencil Node：`Pa2OH`。SHA-256：`e1736047823bb15515add78ec83ccbcfbbbead836a04500f5c81e419568bd0d8`。 |
| HERO-BG-INT-430 | Hero Background | `VISTA_BG_HERO_NETWORK_430.png` | TOP Hero intermediate network background | PNG | 430 × 809px | Alphaチャンネルあり（全画素不透明、背景`#F6F8FB`） | 正式素材 / 実装使用中 | `05_Assets/images/hero/VISTA_BG_HERO_NETWORK_430.png` | 元データ：Pencil export `Intermediate Network ! Validation 430.png`。対象幅：400〜514px。SHA-256：`e7cdc082010b971d67ee34707846d7e070acfb44b2c88caccd55e240cee263b5`。 |
| HERO-BG-INT-600 | Hero Background | `VISTA_BG_HERO_NETWORK_600.png` | TOP Hero intermediate network background | PNG | 600 × 809px | Alphaチャンネルあり（全画素不透明、背景`#F6F8FB`） | 正式素材 / 実装使用中 | `05_Assets/images/hero/VISTA_BG_HERO_NETWORK_600.png` | 元データ：Pencil export `Intermediate Network ! Validation 600.png`。対象幅：515〜683px。SHA-256：`04e8aae3c1a1e442c675f8dacfecf8ce8522e9faa408ffb99f6b43c5502515cd`。 |
| HERO-BG-INT-768 | Hero Background | `VISTA_BG_HERO_NETWORK_768.png` | TOP Hero intermediate network background | PNG | 768 × 809px | Alphaチャンネルあり（全画素不透明、背景`#F6F8FB`） | 正式素材 / 実装使用中 | `05_Assets/images/hero/VISTA_BG_HERO_NETWORK_768.png` | 元データ：Pencil export `Intermediate Network ! Validation 768.png`。対象幅：684〜833px。SHA-256：`45c76dfb5c2d9cc991bb25b4e61b8c7a107739e2e967bd3efb443854ea596112`。 |
| HERO-BG-INT-900 | Hero Background | `VISTA_BG_HERO_NETWORK_900.png` | TOP Hero intermediate network background | PNG | 900 × 809px | Alphaチャンネルあり（全画素不透明、背景`#F6F8FB`） | 正式素材 / 実装使用中 | `05_Assets/images/hero/VISTA_BG_HERO_NETWORK_900.png` | 元データ：Pencil export `Intermediate Network ! Validation 900.png`。対象幅：834〜949px。SHA-256：`e41236ff924bc97498e7203214cd5a9fb36e45f3ff6f09b51e17d5cd63d5c9e1`。 |
| HERO-BG-INT-1000 | Hero Background | `VISTA_BG_HERO_NETWORK_1000.png` | TOP Hero intermediate network background | PNG | 1000 × 809px | Alphaチャンネルあり（全画素不透明、背景`#F6F8FB`） | 正式素材 / 実装使用中 | `05_Assets/images/hero/VISTA_BG_HERO_NETWORK_1000.png` | 元データ：Pencil export `Intermediate Network ! Validation 1000.png`。対象幅：950〜1023px。SHA-256：`cf96a73672bf3df005be07f80983b86b31e457418582cf5043c1480fedaaadc3`。 |
| FINAL-CTA-BG-01 | Final CTA Background | `VISTA_BG_FINAL_CTA_DESKTOP.png` | TOP Final CTA network background / Desktop | PNG | 1440 × 752px | Alphaチャンネルあり（全画素不透明、背景`#0F1F3D`） | 正式素材 / 実装使用中 | `05_Assets/images/final-cta/VISTA_BG_FINAL_CTA_DESKTOP.png` | 元データ：Pencil export `Final CTA Section ! Desktop.png`。Desktop専用。RGBA、破損なし。SHA-256：`9b916317c98cf20add0702850ab208c351f280d54d618939c89e2fffb5f2b85e`。 |
| FINAL-CTA-BG-02 | Final CTA Background | `VISTA_BG_FINAL_CTA_MOBILE.png` | TOP Final CTA network background / Mobile | PNG | 390 × 688px | Alphaチャンネルあり（全画素不透明、背景`#0F1F3D`） | 正式素材 / 実装使用中 | `05_Assets/images/final-cta/VISTA_BG_FINAL_CTA_MOBILE.png` | 元データ：Pencil export `Final CTA Section ! Mobile.png`。Mobile専用。RGBA、破損なし。SHA-256：`142c594e7e1a64e8108c771a4b0ac890020d55bcb16d05fbcb040c91e478bf1b`。 |
| UI-01 | Product UI | `VISTA_UI_OVERVIEW_DASHBOARD.png` | Overview Dashboard | PNG | 1440 × 1376px | あり | 完了 | `05_Assets/images/product-ui/VISTA_UI_OVERVIEW_DASHBOARD.png` | 159,290 bytes。RGBA、CRC・画像データ検証正常、破損なし。 |
| UI-02 | Product UI | `VISTA_UI_WAITING_INBOX.png` | Waiting Inbox | PNG | 2880 × 1376px | あり | 完了 | `05_Assets/images/product-ui/VISTA_UI_WAITING_INBOX.png` | 232,608 bytes。RGBA、CRC・画像データ検証正常、破損なし。 |
| UI-03 | Product UI | `VISTA_UI_PROJECT_DETAIL.png` | Project Detail | PNG | 2880 × 1376px | あり | 完了 | `05_Assets/images/product-ui/VISTA_UI_PROJECT_DETAIL.png` | 277,661 bytes。RGBA、CRC・画像データ検証正常、破損なし。 |
| UI-04 | Product UI | `VISTA_UI_RISK_REPORT.png` | Risk Report | PNG | 2880 × 1376px | あり | 完了 | `05_Assets/images/product-ui/VISTA_UI_RISK_REPORT.png` | 274,625 bytes。RGBA、画像データ検証正常、破損なし。 |
| UI-05 | Product UI | `VISTA_UI_FLOW_ANALYTICS.png` | Flow Analytics | PNG | 2880 × 1376px | あり | 完了 | `05_Assets/images/product-ui/VISTA_UI_FLOW_ANALYTICS.png` | 274,125 bytes。RGBA、画像データ検証正常、破損なし。 |
| UI-06 | Product UI | `VISTA_UI_INTEGRATION_SETTINGS.png` | Integration Settings | PNG | 2880 × 1376px | あり | 完了 | `05_Assets/images/product-ui/VISTA_UI_INTEGRATION_SETTINGS.png` | 303,456 bytes。RGBA、画像データ検証正常、破損なし。 |
| UI-PREVIEW-M-01 | Product UI / Mobile Preview | `VISTA_UI_WAITING_INBOX_PREVIEW.png` | TOP Mobile / Features | PNG | 720 × 688px | あり | 完了 | `05_Assets/images/product-ui/mobile-preview/VISTA_UI_WAITING_INBOX_PREVIEW.png` | 正式Previewから生成したMobile表示用PNG。出所：`W-Waiting Inbox Preview / Desktop`（Node ID：`moCWb`）。SHA-256：`c304c721dcb08d08abb1ac1a994b7229ef319f3910b72cbe004b1c780687f6a0`。元の正式ComponentはPencil内に保持。Mobile上で358 × 342px相当に比例表示予定。 |
| UI-PREVIEW-M-02 | Product UI / Mobile Preview | `VISTA_UI_RISK_REPORT_PREVIEW.png` | TOP Mobile / Features | PNG | 720 × 688px | あり | 完了 | `05_Assets/images/product-ui/mobile-preview/VISTA_UI_RISK_REPORT_PREVIEW.png` | 正式Previewから生成したMobile表示用PNG。出所：`W-Risk Report Preview / Desktop`（Node ID：`yUhnf`）。SHA-256：`6a00e2cb9098d0bf81cbb773e3e41ce68055775ba4afa9ac8fa7e56f42f421b3`。元の正式ComponentはPencil内に保持。Mobile上で358 × 342px相当に比例表示予定。 |
| UI-PREVIEW-M-03 | Product UI / Mobile Preview | `VISTA_UI_FLOW_ANALYTICS_PREVIEW.png` | TOP Mobile / Features | PNG | 720 × 688px | あり | 完了 | `05_Assets/images/product-ui/mobile-preview/VISTA_UI_FLOW_ANALYTICS_PREVIEW.png` | 正式Previewから生成したMobile表示用PNG。出所：`W-Flow Analytics Preview / Desktop`（Node ID：`z1hduU`）。SHA-256：`3508ffc7233ae8e132b7e6895826ebfc3c20f285a92d2b4a753ea0cb102cb02f`。元の正式ComponentはPencil内に保持。Mobile上で358 × 342px相当に比例表示予定。 |
| CASE-01 | 導入事例 | `VISTA_CASE_RECRUIT_SITE.png` | TOPページ導入事例、導入事例一覧、導入事例詳細 | PNG | 2880 × 1920px | あり | 最終修正版・格納済み | `05_Assets/images/case-studies/VISTA_CASE_RECRUIT_SITE.png` | NALU Inc.／採用サイト制作／確認待ち時間42%削減／使用UI：Waiting Inbox Preview／比率3:2。CASE-02と同程度の表示サイズになるよう、コンパクト版Waiting Inbox Previewへ差し替え。SHA-256：`24097355eaa8417a1874600b7b7b517146689a860fdde5ce78ed784de4165e5b`。バックアップ：`05_Assets/images/case-studies/archive/VISTA_CASE_RECRUIT_SITE_before_compact_preview_20260925-163530.png`。更新日：2026-09-25。 |
| CASE-02 | 導入事例 | `VISTA_CASE_EC_RENEWAL.png` | TOPページ導入事例、導入事例一覧、導入事例詳細 | PNG | 2880 × 1920px | あり | 格納済み | `05_Assets/images/case-studies/VISTA_CASE_EC_RENEWAL.png` | ASTERIA FOODS／ECサイトリニューアル／課題：進捗確認の分散／進捗確認工数55%削減／使用UI：Dashboard／比率3:2。 |
| CASE-03 | 導入事例 | `VISTA_CASE_BRAND_LP.png` | TOPページ導入事例、導入事例一覧、導入事例詳細 | PNG | 2880 × 1920px | あり | 格納済み | `05_Assets/images/case-studies/VISTA_CASE_BRAND_LP.png` | KINARI／案件：ブランドLP制作／課題：外部パートナーの進行遅延／成果：納期遅延リスクを3件事前検知／使用UI：Risk Report Preview／比率3:2。SHA-256：`a8a827ce5e276c3d7d8cc8620d070c646c5a2b2992e016a3f04ac210e523e376`。 |
| OGP-01 | OGP | `VISTA_OGP_DEFAULT.png` | Webサイト標準OGP、SNS共有、チャット共有、ポートフォリオ一覧 | PNG | 1200 × 630px | あり | 格納済み | `05_Assets/images/ogp/VISTA_OGP_DEFAULT.png` | VISTAロゴ、メインコピー、Dashboard Preview。原本：`05_Assets/images/ogp/source/VISTA_OGP_SOURCE.png`（2400 × 1260px）、SHA-256：`a57691baa9ccc32466ec4d5932056ff9375156a05e6ab150015efda45bbef101`。正式ファイルSHA-256：`fdba97dae87adcdd69ab747cf12b1f44e9208d7b5f0946d1398dc6feb4d9f8af`。 |
| ICON-01 | アイコン | `VISTA_ICON_MASTER_2X.png`／`VISTA_ICON_MASTER.png` | favicon、Apple Touch Icon、Android Chrome Icon、PWA | PNG | 原本 1024 × 1024px／Web用マスター 512 × 512px | あり | 格納・派生生成済み | `05_Assets/icons/source`／`05_Assets/icons/web` | 2x原本：`05_Assets/icons/source/VISTA_ICON_MASTER_2X.png`、SHA-256：`f003ef35793aff1a0d012214df7dbf8d18db8661430641628a62405632bc8786`。Web用正式マスター：`05_Assets/icons/source/VISTA_ICON_MASTER.png`、SHA-256：`217f9546ca3102b11b3d86e8d95cd0f1b9226ce4b80566e811cdc337aa664566`。派生7点：`favicon-16x16.png`、`favicon-32x32.png`、`favicon-48x48.png`、`apple-touch-icon.png`、`android-chrome-192x192.png`、`android-chrome-512x512.png`、`favicon.ico`。Pencilの512pxフレームを2xで書き出した原本から生成。 |

## 監査メモ

- 監査対象プロジェクト：`/Users/natsumikato/Documents/ポートフォリオ/VISTA_PROJECT_DOWNLOAD`
- 確認済みフォルダ：`01_Brand`、`05_Assets`、`05_Assets/images`、`05_Assets/images/hero`、`05_Assets/images/product-ui`
- 想定フォルダ判定：ロゴ2点、Hero素材、Product UI 3点は想定フォルダ内。
- 監査対象内の画像・SVGについて、SHA-256が一致する完全重複ファイルはなし。
- 追加確認済み素材：
  - `01_Brand/VISTA_LOGO_DIRECTIONS.png` — PNG、1600 × 1100px、125,428 bytes、アルファチャンネルあり、正常。
  - `01_Brand/VISTA_LOGO_DIRECTIONS.svg` — SVG、1600 × 1100px、5,665 bytes、XML/SVG解析正常。
- 既存ファイルの移動、削除、リネーム、上書きは実施していない。

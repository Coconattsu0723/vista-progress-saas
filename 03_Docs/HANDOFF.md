# VISTA Project HANDOFF

## 1. Project Overview

- Project: VISTA
- Type: Webデザインポートフォリオ用の架空BtoB SaaSマルチページサイト（実在するSaaSのProduction Siteではない）
- Core Value: `確認待ちや停滞を見つける`
- Design Direction: クリーンで信頼感のあるTech系 / BtoB SaaS / 明るい背景 / 濃い文字色 / VISTAブルー / 広い余白 / プロダクトUIを主役にする
- Planned Pages: TOP / FEATURES / PRICING / CASE STUDIES / CONTACT / DEMO

## 2. Canonical Paths

Project Root:
`/Users/natsumikato/Documents/ポートフォリオ/VISTA_PROJECT_DOWNLOAD`

Pencil Folder:
`/Users/natsumikato/Documents/ポートフォリオ/VISTA_PROJECT_DOWNLOAD/02_Pencil`

Pencil Share URL:
`https://app.pen.dev/s/YKvxTEO_MaFuz54X7RUt1fpcI5KmGT2w8iLLNO-aD6k`

Unicode正規化の違いによる別名の`ポートフォリオ`フォルダや、似た名前のVISTAフォルダを新規作成しない。

## 3. Required Source-of-Truth Order

Pencil作業、レビュー、修正、書き出し、Pencil向けプロンプト作成前に、原則として次の順で確認する。

1. 現在のユーザー指示
2. `AGENTS.md`
3. `04_Skills/vista-pencil-production/SKILL.md`
4. `03_Docs/DESIGN_RULES.md`（存在する場合）
5. `03_Docs/HANDOFF.md`
6. `03_Docs/IMAGE_ASSETS.md`（画像を扱う場合）
7. 現在のPencilファイル内の最新変数・コンポーネント・正式画面
8. 過去の会話・古い書き出し

Pencil内のノードID、フレーム名、変数、コンポーネントの実在確認は現在のPencilファイルを正本とする。

## 4. Confirmed Hero Copy

Service Category:
`制作会社のための進捗可視化SaaS`

Main Copy:
`止まっている案件が、`
`ひと目でわかる。`

Description:
`Slack・Figma・Backlogなどに散らばる制作進行をつなぎ、確認待ちと停滞リスクをまとめて可視化します。`

CTA:
- Primary: `デモを依頼する`
- Secondary: `機能を見る`

## 5. Breakpoint / Review Widths

Desktop:
- 1366px
- 1440px

Mobile:
- 375px
- 390px

PC版とSP版はPencilキャンバス上で比較しやすい近い位置に置く。

## 6. Confirmed Main Assets

現時点で制作済み・正式素材として扱っている主なもの：

- VISTA Logo
- Dashboard
- Waiting Inbox
- Project Detail
- Hero Product Mockup
- Risk Report
- Flow Analytics
- CASE-01
- CASE-02
- CASE-03
- VISTA Icon
- OGP

正式なファイル名、実寸、格納先、状態は`03_Docs/IMAGE_ASSETS.md`が存在する場合は必ずそちらを優先する。

正式素材が存在しない場合はplaceholderや推測した代替を作らない。
OGPをHeroへ流用しない。
既存の管理画面UIやHero Product Mockupを作り直さない。

## 7. Current TOP Page Status

### TOP / Mobile

Formal frame:
- `10 TOP / Mobile` — `UeK3y`

Reviewed sections:
1. Header — `tfmnW`
2. Hero — `pku3o`
3. Problem — `E1inV8`
4. Solution — `NdIi5`
5. Features — `Qtnoi`
6. Case Studies — `IRGRK`
7. Pricing — `CnAqO`
8. Final CTA — `G3coc4`

Current status:
- 375px / 390pxで通し確認済み
- 恒久的な微調整は不要と判断
- 通常セクションは上下64px・左右16pxで統一
- セクション間の隙間・重複なし
- Pricing → Final CTAの接続は自然
- Hero / Final CTAのノード表現は、明背景 / Dark Navyそれぞれに合わせて調整済み
- CTAの主従関係は一貫
- クリッピング・レイアウト警告なし
- 新規変数・新規コンポーネント・新規素材なし
- PC版、他ページ、正式素材、管理画面UI、ロゴは未変更
- デザイン上の未解決事項なし

375px review:
- 全ページスクリーンショット確認済み
- 文字切れ、意図しない横方向のはみ出しなし
- カード、画像、CTAは画面幅へ正常に追従
- Features / Case Studies / Pricingの改行は自然
- Final CTAまで途切れず接続
- 総ページ高さ: 10,871px

390px review:
- 全ページおよび主要セクション確認済み
- 文字、画像、カード、CTAの幅に問題なし
- セクション上下余白と背景色切替は自然
- Hero → Final CTAまで情報量のリズムを維持
- 総ページ高さ: 10,742px
- レイアウト警告なし

### TOP / Desktop

主要セクションは制作・調整済み。
Heroには正式なプロダクトモックアップとノード／フローライン背景を配置済み。
Final CTAはDark Navyの全面背景で、左右にノード／フローライン背景を使用。
PCの対象確認幅は1366px / 1440px。

### FEATURES / Desktop

Formal frame:
- `20 FEATURES / Desktop` — `q5zyY`

Current status:
- Header — `GXgEC`
- Hero — `qPmxc`
- 正式ロゴと「機能」Current状態を反映
- Heroコピー、Lightノード背景を配置済み
- Hero Descriptionは480px幅・3行表示へ調整済み
- Hero右側はRisk Report 1画面構成へ整理済み
  - Risk Report — `q770AK`（540 × 516px）
  - Waiting Inbox / Flow AnalyticsはHeroから除外済み
  - Lightノード背景を補助として維持
- 1366px / 1440pxで確認済み
- 文字切れ、横方向のはみ出し、レイアウト警告なし
- Waiting Inbox詳細セクション — `s1hIjd` をEditorial構成へ再設計済み
  - Section Heading — `nsSuh`
  - 3情報ブロック — `Z1Pi9G` / `l260sY` / `hAaXP`
  - TOP Desktop ProblemのSection Heading・3カード・余白構成を参照
  - 大きなWaiting Inbox Previewはセクションから除外済み
  - 1366px / 1440pxで確認済み
- Risk Report詳細セクション — `MSP0r` を作成済み
  - 正式Preview — `k78YRA`（元コンポーネント：`yUhnf`）
  - Copy — `bQ5Sy`
  - 左UI＋右コピー構成、1366px / 1440pxで確認済み
- Flow Analytics詳細セクション — `CJQ76` を作成済み
  - Section Heading — `cXuAI`
  - 横並び補助ポイント — `iIh73`
  - 正式フル画面PNG — `mxX6T`
  - 上コピー＋下UI構成、1366px / 1440pxで確認済み
- Value Summary — `tMO0c` を作成済み
  - 中央配置ブロック内でLabel / Heading / Descriptionを左揃え — `ujDjL`
  - 画像・ノード背景・CTAなし
  - 1366px / 1440pxで確認済み
- Final CTA — `RaWRm` を作成済み
  - TOP Desktop参照元：`ZDPMq`
  - CTA Component instance：`xDF55`（元コンポーネント：`RQtTa`）
  - 完成済み左右ノード群をグループ単位で再利用
  - 1366px / 1440pxで確認済み
- 全体ページ高さ：4864px
- HeaderからFinal CTAまで1366px / 1440pxで通し確認済み
  - セクションリズム、背景切替、UI階層、余白に恒久修正不要
  - 文字切れ、UI見切れ、横はみ出し、レイアウト警告なし
- FEATURES / Mobile正式フレーム — `GfF2G` を作成済み
  - Header Closed — `zawl7`（元コンポーネント：`YVGaA`）
  - Hero — `jAgPF`
  - Hero Copy — `lYuTY`
  - Risk Report Mobile Preview PNG — `wriBQ`
  - 375px / 390pxで確認済み
  - Waiting Inbox Mobile — `ybr8D`
    - Section Heading — `XUfCD`
    - 縦積み情報カード — `c3JBWM` / `rh3ha` / `sBhkL`
    - 375px / 390pxで確認済み
  - Risk Report Mobile — `Mv2ot`
    - Feature Copy — `nj1PG`
    - 正式Mobile Preview PNG — `G0HjR5`
    - 375px / 390pxで確認済み
  - Flow Analytics Mobile — `ZMKqE`
    - Feature Copy — `L9DAf4`
    - 正式Mobile Preview PNG — `G8weMx`
    - 375px / 390pxで確認済み
  - ONE VIEW Mobile — `kRTnl`
    - Typography content — `je2fu`
    - 画像・カード・ノード背景なし
    - 375px / 390pxで確認済み
  - Final CTA Mobile — `Ex7vS`
    - TOP Mobile参照元：`G3coc4`
    - CTA Component instance — `bWN6O`（元コンポーネント：`RQtTa`）
    - 完成済みMobileノード背景をグループ単位で再利用
    - 375px / 390pxで確認済み
  - 全体ページ高さ：390px時 4681px / 375px時 4710px
  - HeaderからFinal CTAまで375px / 390pxで通し確認済み
    - セクションリズム、背景切替、UI階層、余白に恒久修正不要
    - 文字切れ、UI見切れ、横はみ出し、レイアウト警告なし

### CASE STUDIES / Desktop

Formal frame:
- `30 CASE STUDIES / Desktop` — `Z4GDKE`

Current status:
- Header — `GzkCz`
- Hero — `PKLL1`
- Hero Copy — `hVnAw`
- Hero Workflow Diagram — `v88L2`
  - 散らばった確認依頼・デザイン確認・進捗更新を接続線で集約し、VISTAの確認待ち・停滞リスク・次に進める案件へ整理する概念図
  - CASE CoverはHeroから除外済み
- CASE-01 NALU Inc.事例セクション — `ErDra`
  - 正式Cover — `sgVtz`（`VISTA_CASE_RECRUIT_SITE.png`、648 × 432px、3:2、fit）
  - Information — `H8fQOd`
  - Identity — `qkiG3`
  - Evidence Stack — `M0FVE9`
  - 左情報＋右Coverの2カラムへ変更し、CASE-02と交互になる配置リズムを構成
  - 課題補足 — `fI8IN`：複数の確認依頼が分散し、どこで止まっているのか把握しづらい状態。
  - 機能補足 — `qHRBY`：確認待ちをまとめて一覧化し、誰の確認で止まっているかを見える化。
  - 42%はCover内のみを主表示とし、右側は「確認待ち時間を削減」の日本語成果を表示
- CASE-02 ASTERIA FOODS事例セクション — `Rcwau`
  - Split Container — `OW3it`
  - 正式Cover — `s7nh8`（`VISTA_CASE_EC_RENEWAL.png`、648 × 432px、3:2、fit）
  - Information — `b3ThY`
  - Evidence Stack — `sQHNW`
  - 左Cover＋右情報の2カラムで、課題 → 使った機能 → 成果を縦方向に構成
  - 55%はCover内のみを主表示とし、右側の大きな55%を削除
  - 右側成果欄は「進捗確認工数を削減」の日本語成果を表示
- CASE-03 KINARI事例セクション — `PggWM`
  - Reverse Split Container — `CngKW`
  - Information — `fNCHH`
  - Evidence Stack — `rSUUC`
  - 正式Cover — `CgIBO`（`VISTA_CASE_BRAND_LP.png`、648 × 432px、3:2、fit）
  - 左情報＋右Coverの反転2カラムで、課題 → 使った機能 → 成果を縦方向に構成
  - 3件はCover内のみを主表示とし、左側成果欄は「納期遅延リスクを事前検知」を表示
- Final CTA — `fJFuq`
  - FEATURES Desktop実装 `RaWRm` を完成済み状態の正本として再利用
  - CTA instance — `WdYAE`（元コンポーネント：`RQtTa`）
  - Dark Network Layer — `R6z2x`
  - 完成済み左右ノード群をグループ単位で再利用
  - GET STARTED／既存Heading・Description／Primary・Secondary CTA／Badgeを維持
- Desktop全体通し確認完了
  - 総ページ高さ：4072px
  - Header → Hero → CASE-01 → CASE-02 → CASE-03 → Final CTAの接続を確認
  - CASE-01左情報／右Cover、CASE-02左Cover／右情報、CASE-03左情報／右Coverの交互配置を確認
  - CASE-01のCompanyを`$font-size-40`、Waiting Inboxを`$font-size-24`へ統一する最小調整を実施
  - 3件のCoverはすべて648 × 432px、3:2、fit、トリミングなし
  - 成果指標42%／55%／3件はCover内のみを主表示
  - 文字切れ、Cover見切れ、横はみ出し、レイアウト警告なし
- 1366px / 1440pxで確認済み

### CASE STUDIES / Mobile

Formal frame:
- `30 CASE STUDIES / Mobile` — `YQHYq`

Current status:
- Header Closed — `f786M`（元コンポーネント：`YVGaA`）
- Hero — `ozUnE`
- Hero Copy — `ohdtC`
- Mobile Workflow Diagram — `OehRx`
  - 確認待ち／制作タスク／停滞リスクを3つのSignalとして整理
  - Direct Convergence — `TK4VE`
  - 3カード中央下から短い垂直線を伸ばし、カード中心間だけの水平ラインで統合する直角構成
  - 統合ライン中央から垂直線でVISTA Viewへ接続し、斜め線・曲線・余分な装飾線なし
  - VISTA View内で「次に進める案件」が見える状態を表現
- CASE-01 NALU Inc. — `hEJz7`
  - Identity — `x515r5`
  - Evidence Stack — `fHxF7`
  - 正式Cover — `E08pXd`（`VISTA_CASE_RECRUIT_SITE.png`、343 × 229px、3:2、fit）
  - 案件情報 → 課題 → 使った機能 → 成果 → Coverの1カラム構成
  - 42%はCover内のみを主表示し、本文側は「確認待ち時間を削減」を表示
- CASE-02 ASTERIA FOODS — `Cgzba`
  - Evidence Stack — `o17a1`
  - 正式Cover — `gAX5H`（`VISTA_CASE_EC_RENEWAL.png`、343 × 229px、3:2、fit）
  - `$color-surface-subtle`背景、案件情報 → 課題 → Dashboard → 成果 → Coverの1カラム構成
  - 55%はCover内のみを主表示し、本文側は「進捗確認工数を削減」を表示
- CASE-03 KINARI — `UvrHC`
  - Evidence Stack — `mlrNi`
  - 正式Cover — `V1v6l`（`VISTA_CASE_BRAND_LP.png`、343 × 229px、3:2、fit）
  - `$color-surface`背景、案件情報 → 課題 → Risk Report → 成果 → Coverの1カラム構成
  - 3件はCover内のみを主表示し、本文側は「納期遅延リスクを事前検知」を表示
- Final CTA — `rdfQT`
  - FEATURES Mobile実装 `Ex7vS` を完成済み状態の正本として再利用
  - CTA instance — `guJjV`（元コンポーネント：`RQtTa`）
  - Dark Network Layer — `q9l6M`
  - 完成済み上部・下部ノード群をグループ単位で再利用
- Mobile全体通し確認完了
  - Header → Hero → CASE-01 → CASE-02 → CASE-03 → Final CTAを確認
  - 3件のCoverはすべて343 × 229px、3:2、fit、トリミングなし
  - 42%／55%／3件はCover内のみを主表示
  - 文字切れ、Cover見切れ、横はみ出し、レイアウト警告なし
- 375px / 390pxで確認済み
- 390px / 375pxとも総ページ高さ：4105px

### PRICING / Desktop

Formal frame:
- `40 PRICING / Desktop` — `Aoc03`

Current status:
- Header — `fc8Vi`
  - Base component：`shAlU`
  - 正式ロゴOverride — `iseyo`
  - 料金用Current状態は未作成のため、全ナビゲーションを通常状態で維持
  - href未設定状態を維持
- Hero — `v8UGYu`
  - Hero Container — `oSXu8`（1200px）
  - Hero Copy — `MmZlw`（元コンポーネント：`fDAoQ`）
  - Label：`PRICING`
  - Heading：`チームに合わせて選べる / 料金プラン`
  - DescriptionはTOP Pricingの正式コピーを維持
  - Plan Scale Diagram — `H2px3`
    - Starter：小規模チーム / 10ユーザーまで
    - Team：複数案件を管理する制作会社 / 30ユーザーまで
    - Business：大規模組織・複数部門 / 個別設定
    - Teamのみ`$color-accent-soft`とAccent Borderで軽く強調
    - 価格・CTA・未確定条件はHero図解へ含めていない
- Pricing Plans — `Nuy1Z`
  - Container — `Xl6d7`（1200px）
  - Heading — `lAF8H`（元コンポーネント：`fDAoQ`）
  - Label：`PLANS`
  - Heading：`チームの規模と運用に合わせて、 / 3つのプランから選べます。`
  - Pricing Cards Row — `f65bn`
    - Starter — `j15y4U`（TOP正本：`WtD4N`、元コンポーネント：`N3pig`）
    - Team Recommended — `O4CmYZ`（TOP正本：`M5rtE`、元コンポーネント：`N3pig`）
    - Business — `sTMfS`（TOP正本：`fxX2S`、元コンポーネント：`N3pig`）
  - Card width 384px / height 620px / gap `$space-24`
  - TeamのAccent背景・Accent Border・おすすめBadge・Primary CTAを維持
  - Tax Note — `LLLSH`：`表示価格は税別です。`
  - href未設定、カード全体リンクなし
- Feature Comparison — `Z907M`
  - Container — `mj7xg`（1200px）
  - Heading — `G3jjAD`（元コンポーネント：`fDAoQ`）
  - Label：`COMPARE`
  - Heading：`プランごとの違いを、 / ひと目で比較。`
  - Table — `C189a`（1200 × 800px）
  - 4列：機能 480px / Starter 240px / Team 240px / Business 240px
  - 13比較項目を正式Pricing Cardの情報だけで構成
  - 利用可能表示は既存`circle-check`アイコンを再利用、対象外は`—`
  - Team列はHeader Cell `GdYtU`のみ`$color-accent-soft`で軽く強調
  - Legend — `ioyIW`：`— は対象外を示します。`
  - Sort / Filter / Toggle / Accordion / Tooltip / hrefなし
- Final CTA — `LWEcn`
  - CASE STUDIES Desktop実装 `fJFuq` を最新の正本として再利用
  - CTA instance — `E1RnyW`（元コンポーネント：`RQtTa`）
  - Dark Network Layer — `DRKvC`
  - Left Responsive Group — `ZORIf`
    - Main Group — `rTARt`
    - Addition Group — `EJzry`
  - Right Responsive Group — `aDmmJ`
    - Main Group — `YpqMC`
    - Addition Group — `kXXJr`
  - GET STARTED／正式Heading・Description／Primary・Secondary CTA／Badgeを維持
  - href未設定状態を維持
- PRICING / Desktop全体通し確認完了
  - Header → Hero → Pricing Plans → Feature Comparison → Final CTA
  - 現在の全体サイズ：1440 × 3957px
  - Heroはプラン規模の概念説明、Pricing Plansは具体比較として役割を分離
  - Pricing Plansの3カードは同じ上端・下端、Card width 384pxを維持
  - Price / Audience / Features / CTAの階層と正式コピーを維持
  - 比較表4列・13項目は正式Pricing Cardと照合済み
  - 制作時点で未確定だった料金・契約条件、FAQ、Global Footerは追加していない。公開形態決定後の正式方針はSection 18を参照
- 1366px / 1440pxで確認済み
  - Heroコピーと図解の衝突なし
  - Pricing Cards、比較表Business列、Final CTAの見切れなし
  - 長い機能名は1行を維持
  - 文字切れ、横スクロール、レイアウト警告なし
  - Final CTA Network Layerは対象幅に合わせて確認し、正式状態は1440pxへ復帰
- 新規変数・新規コンポーネント・新規素材なし
- TOP / FEATURES / CASE STUDIES / Mobileは未変更
- 未解決事項：料金用Header Current状態、CTA / Navigationの正式href

### PRICING / Mobile

Formal frame:
- `40 PRICING / Mobile` — `gKC7C`

Current status:
- Header Closed — `nGV01`（元コンポーネント：`YVGaA`）
  - 正式ロゴOverride — `a9OrCI`
  - 料金用Current状態は未作成のため通常状態を維持
  - href未設定状態を維持
- Hero — `T38T5`
  - Hero Copy — `qMmge`（元コンポーネント：`fDAoQ`）
  - Label：`PRICING`
  - Heading：`チームに合わせて選べる / 料金プラン`
  - Headingは`$font-size-30`で375px / 390pxとも2行を維持
  - Plan Scale — `dajpM`
    - Starter Step — `TayCz`：小規模チーム / 10ユーザーまで
    - Team Step — `REAe8`：複数案件を管理する制作会社 / 30ユーザーまで
    - Business Step — `qjkxb`：大規模組織・複数部門 / 個別設定
    - Teamのみ`$color-accent-soft`とAccent Borderで軽く強調
    - 縦3段＋短い接続線で、Pricing Cardとは異なる概念図として構成
- Pricing Plans — `Xvvgr`
  - Heading — `TjysH`（元コンポーネント：`fDAoQ`）
  - Label：`PLANS`
  - Headingは`$font-size-24`、3行で読みやすく調整
  - Pricing Cards Stack — `g3jCV`
    - Starter — `Ng9JE`（TOP Mobile正本：`DxhB7`、元コンポーネント：`N3pig`）
    - Team Recommended — `xHeli`（TOP Mobile正本：`BSrnd`、元コンポーネント：`N3pig`）
    - Business — `UW3Wc`（TOP Mobile正本：`c6unTB`、元コンポーネント：`N3pig`）
  - Card width：390px時358px / 375px時343px
  - Card height 620px / gap `$space-32`
  - TeamのAccent背景・Accent Border・おすすめBadge・Primary CTAを維持
  - Tax Note — `Quxsv`：`表示価格は税別です。`
  - href未設定、カード全体リンクなし
- Feature Comparison — `Ta5Yr`
  - Heading — `HArzV`（元コンポーネント：`fDAoQ`）
  - Label：`COMPARE`
  - Heading：`プランごとの違いを、 / ひと目で比較。`
  - Comparison List — `y5qr3`
  - Plan Header — `K2lu7`
    - Starter — `N6jGG8`
    - Team — `t5nE3l`（`$color-accent-soft`背景＋Accent text）
    - Business — `dz683`
  - 13項目を機能名＋3プランStatus Rowの縦積み形式で構成
  - 利用可能表示は既存`circle-check`アイコンを再利用、対象外は`—`
  - 390px時は各Status列108.67px、375px時は103.67px
  - Legend — `Q6VBe`：`— は対象外を示します。`
  - Horizontal Scroll / Accordion / Tabs / Toggle / Filter / Tooltip / hrefなし
- Final CTA — `oMzBI`
  - CASE STUDIES Mobile実装 `rdfQT` を最新の正本として再利用
  - CTA instance — `qGGhE`（元コンポーネント：`RQtTa`）
  - Dark Network Layer — `II3Rg`
  - Upper Left — `ApHNB`
  - Upper Center — `qMyl2`
  - Upper Right — `mn4EE`
  - Lower Left — `wzMnu`
  - Lower Right — `PFvA7`
  - Lower Center — `IDIkC`
  - GET STARTED／正式Heading・Description／Primary・Secondary CTA／Badgeを維持
  - href未設定状態を維持
- PRICING / Mobile全体通し確認完了
  - Header → Hero → Pricing Plans → Feature Comparison → Final CTA
  - 現在の全体サイズ：390 × 5419px
  - 375px時も総ページ高さ：5419px
  - セクション間の隙間・重複なし
  - Heroはプラン規模の概念説明、Pricing Plansは具体比較として役割を分離
  - Starter / Team / BusinessはCard width 358px（390px時）／343px（375px時）、height 620px
  - TeamのAccent背景・Accent Border・おすすめBadge・Primary CTAを維持
  - 比較リストは13項目、3列位置を全行で統一
  - 390px時は各Status列108.67px、375px時は103.67px
  - 正式Pricing CardとPlan Name / Audience / Price / User数 / Features / CTAを再照合済み
  - 制作時点で未確定だった料金・契約条件、FAQ、Global Footerは追加していない。公開形態決定後の正式方針はSection 18を参照
- 375px / 390pxで確認済み
  - Header、Hero、縦型プラン図解、3カード、比較リスト、Final CTAに崩れなし
  - Hero Heading、Final CTA Headingは自然な2行を維持
  - Plan Name / Price / Audience / CTA / Badgeの見切れなし
  - 長い機能名、10ユーザーまで／30ユーザーまで／個別設定、チェック、ダッシュに見切れなし
  - Final CTAのPrimary / Secondary CTA、Badgeは収まり、ノード背景はコピー・CTAより背面
  - 完成済み6ノードグループは375px端でも不自然な欠けなし
  - 文字切れ、横スクロール、レイアウト警告、placeholderなし
- 新規変数・新規コンポーネント・新規素材なし
- PRICING Desktop / TOP / FEATURES / CASE STUDIESは未変更
- 未解決事項：料金用Header Current状態、CTA / Navigationの正式href

### CONTACT / DEMO / Desktop

Formal frame:
- `50 CONTACT DEMO / Desktop` — `zDVVY`

Current status:
- 全体サイズ：1440 × 1127px
- Header — `Z4ghmz`
  - PRICING Desktop Header `fc8Vi` を正本として再利用
  - Base component：`shAlU`
  - Approved VISTA Logo — `zk2Md`
  - CONTACT用Current状態は追加せず、通常Navigationを維持
  - href未設定状態を維持
- Main — `fcK7u`
  - Container — `qyy6k`（1200px）
  - 左480px／Gap 80px／右640px
- Hero / Introduction — `mRI93`
  - Hero Copy — `G1QmeK`（元コンポーネント：`fDAoQ`）
  - Label：`CONTACT / DEMO`
  - Heading：`制作進行の悩みを、 / まずは聞かせてください。`
  - Description：`VISTAのデモ依頼や導入のご相談、料金についてのご質問など、制作進行に関するご相談を受け付けています。`
  - Contact Topics — `KOtqE`
    - デモのご依頼
    - 導入・料金のご相談
    - その他のお問い合わせ
- Contact / Demo Form — `Bs5vM`
  - Form Heading — `Massy`
  - Form Fields — `lzunk`
  - 問い合わせ種別 — `b5Gi4v`、Select閉状態、候補3種は正式仕様として確定済み
  - 会社名 — `BZGpK`
  - お名前 — `UrGlr`
  - メールアドレス — `QKfsT`、placeholder `name@example.com`
  - ご相談内容 — `e6HoeM`、Textarea 144px
  - 5項目すべて既存Accent Soft＋Accent textの`必須`表示
  - Submit — `i8wr9`、既存Button `S6K7Fd`のPrimary / Large、full width、`内容を送信する`
- 正式Input / Select / Textareaコンポーネントが存在しないため、既存変数のみで通常状態をフォーム内に構成
- 新規Reusable Componentは追加していない
- 1366px / 1440pxで確認済み
  - Headingは自然な2行を維持
  - 左Introductionと右Formの役割を分離
  - Form width 640px、Field width 560px、Submit width 560px
  - 文字切れ、横はみ出し、レイアウト警告、placeholderなし
- Error State — `kIByV`
  - Frame：`50 CONTACT DEMO / Desktop / Error`
  - 全体サイズ：1440 × 1311px
  - 5つの必須Fieldすべてに`$color-risk` Borderと仮Error Messageを配置
  - Email Surface — `Ptofs`：`$color-risk-soft`背景、入力例`name@example`
  - Email Format Error — `hk9Ph`：`メールアドレスの形式を確認してください（仮）`
  - その他4Fieldの仮文言：`入力内容を確認してください（仮）`
  - Submit Area — `kh0CM`
  - Submit Error Inline — `YCF9y`：`$color-risk-soft`背景＋`$color-risk` Icon / Text
  - 仮文言：`送信できませんでした。時間をおいて再度お試しください。`
- Loading State — `v7a5dm`
  - Frame：`50 CONTACT DEMO / Desktop / Loading`
  - 全体サイズ：1440 × 1127px
  - Submit — `SFHj6`
  - 既存Button `S6K7Fd`内の`loader-circle` Spinnerを有効化し、既存Loading表現を再利用
  - Button width 560px / height 56pxを維持
- Success State — `z7mgQU`
  - Frame：`50 CONTACT DEMO / Desktop / Success`
  - 全体サイズ：1440 × 1127px
  - Form Surface — `FQdv8`：通常Formと同じ640 × 887px
  - Success Content — `mt5zL`
  - Success Icon — `WXG9N`：既存Lucide `check`＋`$color-accent`／`$color-accent-soft`
  - Heading：`お問い合わせを受け付けました。`
  - Description：`内容を確認のうえ、担当者よりご連絡します。`
  - Field群とSubmitは表示せず、新規CTAなし
- 3状態とも1366px / 1440pxで確認済み
  - Header / Hero / Introductionは通常状態と同一
  - Error Message追加後もField幅560px、Form幅640pxを維持
  - Submit ErrorとField Errorは別領域で表示
  - LoadingでButton幅・ページレイアウトの変動なし
  - Successでも通常状態と同じSurface / ページ高さを維持
  - 文字切れ、横はみ出し、レイアウト警告、placeholderなし
- 制作時点の未作成項目：CONTACT / DEMO Mobile、正式Validation文言、Privacy Consent、Global Footer、Final CTA。後続実装および公開形態決定後の正式状態はSection 16〜18を参照
- 新規変数・新規コンポーネント・新規素材なし
- `$color-risk` / `$color-risk-soft`のForm Error用途はCONTACT / DEMO状態内のみに限定し、既存RISK表現は未変更
- TOP / FEATURES / CASE STUDIES / PRICINGは未変更
- 制作時点の未解決事項：Privacy正式文言・URL、Input系共通コンポーネント化、正式Validation / Submit Error文言、CTA / Navigationの正式href。後続の正式決定はSection 16〜18を参照

### CONTACT / DEMO / Mobile

Formal frame:
- `50 CONTACT DEMO / Mobile` — `Zb8tN`

Current status:
- 通常状態サイズ：390 × 1402px / 375 × 1427px
- Header Closed — `L3fZ8d`
  - Base component：`YVGaA`
  - Approved VISTA Logo — `nCXdn`
- Header Open State — `vyzPr`
  - Base component：`S5KR7`
  - Open Header — `a29rct`
  - Approved VISTA Logo — `qDpDo`
  - CONTACT用Current状態は追加せず通常Navigationを維持
  - 390px時1793px / 375px時1818px
- Hero — `npYVE`
  - Hero Copy — `fNj6M`（元コンポーネント：`fDAoQ`）
  - Label：`CONTACT / DEMO`
  - Heading：`制作進行の悩みを、 / まずは聞かせてください。`
  - DescriptionはDesktop正式コピーを維持
  - Contact Topics — `G45M17`
    - デモのご依頼
    - 導入・料金のご相談
    - その他のお問い合わせ
  - 390px / 375pxともHeadingは2行
- Contact Form Section — `wfIM4`
  - Form — `UUQiA`（390px時358px / 375px時343px、height 833px）
  - Form Fields — `U5TdsC`
  - 問い合わせ種別 — `jRg45`、Filled例`導入・料金について相談したい`
  - 会社名 — `FUG3P`
  - お名前 — `jTrVr`
  - メールアドレス — `k3qL0`、`name@example.com`
  - ご相談内容 — `gIeaL`、Textarea 120px
  - 5項目すべてDesktopと同じAccent Soft＋Accent textの`必須`表示
  - Submit — `qW05K`、既存Button `S6K7Fd`のPrimary / Large、full width
- Field Focus State — `sSA72`
  - Company Input Surface — `tUaVY`
  - `$color-focus`＋`$stroke-focus`を使用
  - 390px時1402px / 375px時1427px
- Error State — `KUvMR`
  - 390px時1500px / 375px時1525px
  - Email Surface — `MXlCu`：`$color-risk` Border＋`$color-risk-soft`背景
  - 入力例：`name@example`
  - Email Error — `f8cUMj`：`メールアドレスの形式を確認してください`
  - Submit Area — `C7uk8i`
  - Submit Error Inline — `URWuO`：`$color-risk-soft`背景＋`$color-risk` Icon / Text
  - 仮文言：`送信できませんでした。時間をおいて再度お試しください。`
- Loading State — `Rodni`
  - Submit — `G70hGk`
  - 既存Button `S6K7Fd`の`loader-circle` SpinnerとLoading表現を再利用
  - 390px時1402px / 375px時1427px
- Success State — `ULcnY`
  - Form Surface — `o0EJ6k`：通常Formと同じ高さ833px
  - Success Content — `WLwkM`
  - Success Icon — `T3bHi`：既存Lucide `check`＋Accent / Accent Soft
  - Heading：`お問い合わせを受け付けました。`
  - Description：`内容を確認のうえ、担当者よりご連絡します。`
  - Field群とSubmitは表示せず、新規CTAなし
  - 390px時1402px / 375px時1427px
- 390px / 375pxで全状態確認済み
  - Hero → Formの1カラム接続を維持
  - 375px時Form幅343px、Field / Button幅295px
  - 長いSelect値`導入・料金について相談したい`は1行で表示
  - Email Error / Submit Errorに文字切れなし
  - LoadingでButton幅・Formレイアウトの変動なし
  - Success Headingは自然な2行
  - 横はみ出し、レイアウト警告、placeholderなし
- Privacy Consent、Global Footer、Final CTA、Thanks Pageなし。公開形態決定後もConsent / Global Footerは現時点で追加不要（Section 18参照）
- 新規変数・新規Reusable Component・新規素材なし
- `$color-risk` / `$color-risk-soft`はCONTACT / DEMO Error状態内だけで限定使用
- CONTACT / DEMO Desktop / TOP / FEATURES / CASE STUDIES / PRICINGは未変更
- 制作時点の未解決事項：Privacy正式文言・URL、Input系共通コンポーネント化、正式Validation / Submit Error文言、CTA / Navigationの正式href。後続の正式決定はSection 16〜18を参照

## 8. Existing Assets / Components Confirmed on TOP Mobile

Variables:
- `$space-64`
- `$space-16`
- 既存背景色変数
- 既存文字色変数

Components:
- Mobile Header — `YVGaA`
- Button — `S6K7Fd`
- Section Heading — `fDAoQ`
- Metric Card — `DnLLl`
- Case Study Card — `bNFYb`
- Pricing Card — `N3pig`
- Final CTA — `RQtTa`

新規作成前に必ず既存コンポーネントを確認する。
繰り返す値は既存変数を使用し、直書きを増やさない。

## 9. Node / Flow-Line Background Rules

VISTAのノード背景は、接続された六角形セル、接続点、短いフローラインで構成する。

必須ルール：
- 完成済み・検証済みグループを再利用する
- 点、線、六角形セルを分解して個別に継ぎ足さない
- 線の両端は必ずノードまたは接続点につなぐ
- 孤立した点・孤立した線を残さない
- 点を3つ連続で並べない
- 六角形セルを欠けさせない
- 一辺だけない六角形を残さない
- 不自然に長い線、不要な折れ曲がり、交差、宙に浮いた線を作らない
- 塗りセルと枠線の位置・形・サイズを一致させる
- ノードサイズ変更時も縦横比・基本形状を維持する
- 背景装飾はプロダクト画像、コピー、CTAより背面に置く
- フレーム端でセルが不自然に半分に切れないようにする
- 色・不透明度は背景に対して見えないほど薄くしない
- 同一グループを複数並べる場合、コピペ感が強くならないよう完成済み別パターンを混ぜる

Layer order:
1. Section background
2. Node / flow-line background
3. Product / case image
4. Copy / CTA / controls

### SP Hero
- 正式プロダクトモックアップより必ず背面
- 画像の上下左右でノードが適度に見えるよう分散
- テキスト背面に入ってもよいが可読性を下げない
- 375px / 390pxで確認

### SP Final CTA
- Dark Navy背景
- 上下にノード群を配置
- コピー・CTAより背面
- 上部・下部とも適度な密度を持たせる
- 同じ形のグループを繰り返しすぎない
- 下部ノード群は現在の構成が良好
- 上部は形状バリエーションを持たせる
- 視認性は「一目で存在が分かるが、コピーとCTAが最初に目に入る」程度

## 10. Pencil Prompt Format

Pencil向けプロンプトは原則として次の7項目で作成する。

1. 目的（Purpose）
2. 対象環境（Platform）
3. レイアウト（Layout）
4. 操作（Interactions）
5. 制約（Constraints）
6. 状態（States）
7. スタイル（Style）

必ず含める：
- 開始前監査
- 対象フレーム名・ノードIDの確認
- 編集対象
- 変更禁止範囲
- 停止条件
- 375 / 390 / 1366 / 1440など対象幅での確認
- スクリーンショット検証
- 完了報告内容

## 11. Important Production Rules

- 既存画面を最初から作り直さない
- 一度に1画面または1セクションだけ変更する
- PC版だけが対象ならSP版を変更しない
- SP版だけが対象ならPC版を変更しない
- 指定範囲以外を変更しない
- 新規作成前に既存コンポーネントを検索する
- 新しい色・変数・コンポーネントは必要性が明確で承認された場合のみ追加する
- 場当たり的な座標調整を重ねず、コンテナ・変数・元コンポーネントから直す
- 正式画像や元ノードがない場合は推測で作らず停止する
- Pencil上のレンダリング成功とローカル実ファイル保存を区別する
- Pencilからの画像ダウンロードはユーザーが手動で行う

## 12. Stop Conditions

次の場合は推測で続行せず停止する。

- 指定された正式画面・セクション・コンポーネントが存在しない
- 正式画像または元ノードが存在しない
- 画像参照先を特定できない
- 必須サイズと実ファイルサイズが一致しない
- 制約を守るとクリップ・文字切れ・レイアウト破綻を避けられない
- 対象外の画面変更が必要になる
- 複数選択肢があり、選択によって成果物が大きく変わる

停止報告では、確認した正式名称、ノードID、実寸、存在する候補、未変更範囲、推奨案を示す。

## 13. Completion Criteria

ノードツリーだけで完了にしない。必ずスクリーンショットで確認する。

- 文字切れ・意図しない改行・はみ出しがない
- 画像の縦横比が崩れていない
- 重要UIが見切れていない
- Header、コピー、画像、CTA、背景装飾が意図せず重なっていない
- 背景装飾のレイヤー順が正しい
- セクション間余白が自然
- placeholder・画像参照切れがない
- PC版とSP版の内容対応が取れている
- 対象外が未変更
- 指定された全ビューポートで確認済み

## 14. Next Work

TOPページはPC / Mobileとも主要制作・確認が進み、Mobileは375px / 390pxの通し確認まで完了。

次の制作候補：
**FEATURES page**

FEATURESページ開始時は、すぐに新規画面を作り始めず、まず現在のPencil内に既存FEATURESフレーム、Screen Map、共通Header / Footer、Button、Section Heading、既存Feature関連Previewが存在するか監査する。

機能紹介の正式内容は以下を基準とする：
- Waiting Inbox
- Risk Report
- Flow Analytics

既存の正式Preview・正式画像を再利用し、Mobile向けに内容そのものを勝手に再構成しない。

## 15. Handoff Update Policy

作業終了時にこの`HANDOFF.md`を更新する。

最低限記録する内容：
- 完了した画面・セクション
- 正式コピー・正式素材
- CTA遷移先または遷移予定
- 使用した変数・コンポーネント
- 書き出し済み素材と格納先
- 未解決事項
- 次に行う作業

`IMAGE_ASSETS.md`が存在する場合、素材追加・差し替え時にはそちらも更新する。

## 16. Final Cross-page Audit — TOP / FEATURES / CASE STUDIES / PRICING / CONTACT DEMO

Audit scope:
- Phase 1：CONTACT / DEMO Desktop / Mobile最終通し確認
- Phase 2：主要5ページ横断監査
- 実施幅：Desktop 1440px / 1366px、Mobile 390px / 375px
- 現在のPencilファイル内の正式フレームとNode IDを再取得して確認

Completed formal pages:
- TOP Desktop — `v7bCmP` — 1440 × 8330px
- TOP Mobile — `UeK3y` — 390 × 10742px / 375 × 10871px
- FEATURES Desktop — `q5zyY` — 1440 × 4864px
- FEATURES Mobile — `GfF2G` — 390 × 4681px / 375 × 4710px
- CASE STUDIES Desktop — `Z4GDKE` — 1440 × 4072px
- CASE STUDIES Mobile — `YQHYq` — 390 / 375 × 4105px
- PRICING Desktop — `Aoc03` — 1440 × 3957px
- PRICING Mobile — `gKC7C` — 390 / 375 × 5419px
- CONTACT / DEMO Desktop — `zDVVY` — 1440 × 1127px
- CONTACT / DEMO Mobile — `Zb8tN` — 390 × 1402px / 375 × 1427px

CONTACT / DEMO final review:
- Desktop Normal / Error / Loading / Successを1440px・1366pxで確認
- Mobile Normal / Field Focus / Error / Loading / Success / Menu Openを390px・375pxで確認
- Desktopの左Introduction 480px／Gap 80px／右Form 640pxを維持
- Field順、Label、Required、Field width、Textarea、Submitの対応はDesktop / Mobileで一致
- `$color-risk` / `$color-risk-soft`はCONTACT Error Stateと既存の正式RISK表現／Token specimen内だけで使用
- Error Border、Field Error、Submit Errorは別領域で識別可能
- LoadingでButton幅とForm layoutの変動なし
- SuccessはAccent / Accent Softのみで構成し、通常Form Surfaceと同じ寸法を維持
- Privacy Consent、Final CTA、Global Footer、Thanks Pageなし。公開形態決定後もConsent / Global Footerは現時点で追加不要（Section 18参照）

Cross-page findings:
- Header：全正式ページでDesktop 80px、Mobile 64px、正式VISTA Logo、既存Header Componentを使用
- Header Current：FEATURES Desktopのみ正式Current反映済み。CASE STUDIES / PRICING / CONTACT DEMOのDesktop Currentは未対応。Mobileのページ別Open Currentも未対応。TOPはDefaultを維持
- Hero：5ページで役割を分離しつつ、Section Heading系Typography、Accent Eyebrow、Canvas背景、1200px Desktop Containerを共有
- Typography：正式ページ内のFont Sizeは既存Typography変数を使用。数値直書きFont Sizeなし
- Container：Desktop主要Containerは1200px。Mobileは390px時358px、375px時343pxを基本に維持
- Spacing：通常Desktop Sectionは上下`$space-96`、通常Mobile Sectionは上下`$space-64`＋左右`$space-16`。TOP Mobile HeroとCONTACTは意図的なコンパクト設定
- Button：`S6K7Fd`を正本として再利用。正式ページ内でDetachされた共通Buttonなし
- Final CTA：TOP / FEATURES / CASE STUDIES / PRICINGで`RQtTa`、Dark Navy、共通Copy / Button / Badge、検証済みNetwork Groupを使用。CONTACTには配置なし
- Product UI：TOP Mobile / FEATURES Mobileは正式Mobile Preview PNGを使用。Hero Product Mockup、Desktop Preview、Flow Analytics正式PNGはfitでAspect Ratioを維持
- CASE Cover：CASE-01〜03はDesktop 648 × 432px、Mobile 343 × 229px、3:2、fit。42% / 55% / 3件は正式Cover内に保持
- PRICING：Starter 9,800円 / 10ユーザー、Team 29,800円 / 30ユーザー、Business お問い合わせ / 個別設定がTOP / PRICING / Desktop / Mobileで一致。比較項目は13件で一致
- Form：Desktop / MobileのField順、Required、Error、Loading、Successは対応
- Background：`$color-canvas` / `$color-surface` / `$color-surface-subtle` / `$color-brand-deep`を用途別に使用
- Responsive：1440 / 1366 / 390 / 375で全正式ページを再確認。文字切れ、横スクロール、主要UI見切れ、Visible layout problemなし
- Images：正式画像参照はすべてローカル実在確認済み。Missing / Broken reference / Placeholderなし
- Components：新規Reusable Componentなし。Header / Button / Section Heading / Pricing Card / Final CTA / Product Previewを既存Componentから再利用

Minimal correction performed:
- CASE STUDIES Mobile `Direct Signal Lines` — `gjukI`
  - 直書き透明色`#00000000`を既存変数`$color-transparent`へ置換
  - Copy、Geometry、Stroke、Layoutは未変更
  - Workflow Diagram `OehRx`をスクリーンショットで再確認

Screen Map gap:
- Screen Map `UtzPg`は制作前状態のまま
- TOPは`IN PROGRESS`
- FEATURES / CASE STUDIES / PRICING / CONTACT DEMOは`PLANNED`
- 現在の完成済みDesktop / Mobile画面とStatusが不一致
- Status更新は今回実施せず、更新候補として保留

Open items:
- Metadata copy / OGP方針：未決定
- favicon HTML補完、robots、sitemap、404：未実装
- Performance最適化：未実施
- ポートフォリオサイト全体としてのPrivacy Policy要否：Hosting / Portfolio運用判断として保留
- Screen Map Status：完成状態への更新待ち
- Input / Select / Textarea共通Component：未定義。現時点では新規作成しない

Resolved by publication type decision:
- VISTAはポートフォリオ用架空SaaSであり、実サービスではない
- Trial / Login / Account / Payment / 実契約機能は非提供
- CONTACTはDevelopment UIのみで、External Form Endpointを接続しない
- Pricingは架空サービス設計として現在の表示を維持
- Global Footerは現時点で追加しない

New additions during audit:
- Variable：なし
- Component：なし
- Asset：なし
- Copy：変更なし
- Pricing / Form仕様：変更なし

Historical recommended next step at the time of the Pencil audit:
- 当時は「実装前仕様確定」を推奨していた。実装完了後および公開形態決定後の最新Next StepはSection 18を参照する。

## 17. Implementation Specification Created

Created:
- `03_Docs/IMPLEMENTATION_SPEC.md`

Recorded implementation decisions:
- 正式5ページとURL：`/`、`/features/`、`/case-studies/`、`/pricing/`、`/contact/`
- Header Navigation / CTA href
- TOP・Final CTA・Pricing Card CTAの遷移
- ページ別Header Currentと`aria-current="page"`
- CONTACT Field順、全5項目Required、Validation / Submit Error / Successコピー
- `$color-risk` / `$color-risk-soft`のCONTACT Form Error限定利用
- Input / Select / TextareaのHTML / CSS共通実装方針
- 正式Pencil Frame / State Node IDと確認幅

Resolved publication decisions:
- Publication Type：`DECIDED — PORTFOLIO FICTIONAL SAAS`
- CONTACT Form：Development UIのみ。External Form Endpointなし
- Trial / Login / Account / Payment：非提供
- Pricing：架空サービス設計として表示
- Global Footer：現時点で不要
- Form送信用Privacy Consent：実送信しないため追加しない

Still unresolved for publication preparation:
- Metadata copy / OGP方針
- favicon HTML補完、robots、sitemap、404
- Performance最適化
- ポートフォリオ全体としてのPrivacy Policy要否
- Screen Map Status：既存候補は`PLANNED` / `IN PROGRESS`のみ。`DESIGN COMPLETE`は未定義のため更新停止

Change scope:
- Pencilデザイン未変更
- 正式素材未変更
- 新規Variable / Componentなし
- `IMAGE_ASSETS.md`変更なし

## 18. Publication Type Decision

Status: `DECIDED — PORTFOLIO FICTIONAL SAAS`

VISTAは、Webデザインポートフォリオ掲載を目的とする架空BtoB SaaSサイトとして公開する。架空SaaSの企画、UIデザイン、Web実装事例であり、実在するSaaSのProduction Siteとしては公開しない。

Formal policy:

- Trial、Trial申込み、Login、Account、Payment、自動課金、実契約機能を提供しない
- 支払方法、契約期間、解約条件、初期費用詳細、Business契約詳細を追加しない
- サービス資料Downloadを提供しない
- PricingのStarter / Team / Business、月額価格、ユーザー数、Feature、税別注記、Contact CTAは架空サービス設計表現として維持する
- 実際に決済、契約、Trial開始ができると誤認させる機能を追加しない
- CONTACTは現状のDevelopment UIのみを維持する
- External Endpoint、Formspree、Firebase、Email API、Google Forms、`mailto:`、Database保存を接続しない
- 通常Submitが実送信成功を装わない現在の挙動を維持する
- Form送信用Consent Checkbox / Privacy同意を追加しない
- ポートフォリオ全体としてのPrivacy Policy要否はProduction Domain / Hosting決定後の運用判断で扱い、本文を推測で作成しない
- Global Footerは現時点で追加しない
- Mobile Menuは「機能」「導入事例」「料金」「デモを依頼する」の4項目を正式仕様とし、Login、サービス資料、Trial CTAを表示しない
- Metadata作成時は実在サービスであると誤認させる表現を避ける

Publication Type決定時点では、HTML、CSS、JavaScript、Assets、Pencil、Git、Hosting設定、Metadata、OGP、favicon、Form送信処理を変更していない。

## 19. GitHub Pages Project Site Preparation

Status: `PREPARED — NOT COMMITTED / NOT PUSHED`

Formal hosting decision:

- Hosting：GitHub Pages
- Repository：`Coconattsu0723/vista-progress-saas`
- Repository URL：`https://github.com/Coconattsu0723/vista-progress-saas.git`
- Pages方式：Project Site
- Base Path：`/vista-progress-saas/`
- Production URL予定：`https://coconattsu0723.github.io/vista-progress-saas/`
- 公開Source予定：`main` / `/(root)`

Preparation completed:

- 全HTMLの内部Linkと一部Root Absolute Asset PathをProject Site対応の相対Pathへ変更
- TOPは`./`基準、下層4ページは`../`基準でNavigationとAssetを解決
- CSS / JavaScriptにはRoot Absolute内部Pathがないことを確認
- Project Rootへ`.gitignore`と空の`.nojekyll`を追加
- Project RootでGit初期化、branch `main`、`origin`設定
- `/vista-progress-saas/`を再現したローカルHTTP環境で5ページを1440px / 390px / 375px確認
- CSS、JavaScript、Logo、画像、favicon、Navigationの読込成功
- 404、Console Error、Horizontal Scroll、画像破損なし
- CONTACTのDevelopment Form Stateおよび`?state=focus|error|loading|success`を維持

Not performed:

- `git add`
- commit
- push
- GitHub Pages Settings変更
- Metadata / canonical / OGP meta / robots / sitemap / 404 / Performance最適化

Recommended next step:
- `初回Commit前の最終Git監査 → Initial Commit → Push`。本更新時点ではまだ実行しない。

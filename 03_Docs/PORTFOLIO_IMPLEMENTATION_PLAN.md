# VISTA｜Portfolio Implementation Plan

> **Status: Pre-implementation Specification**

VISTAをポートフォリオ本体へ掲載するための実装準備・掲載仕様書です。文章は`PORTFOLIO_SHORT_COPY.md`、制作判断は`PORTFOLIO_CASE_STUDY.md`、画像情報は`IMAGE_ASSETS.md`を正本とします。本書では新しいサービス情報を追加せず、掲載内容・Asset・Link・情報優先度を定義します。

## 1. Implementation Boundary

### 今回確定すること

- Work一覧Cardの文章・Tag・代表Image
- 詳細ページ冒頭の情報とCTA
- 詳細ページのSection順と掲載量
- Product UI、Responsive、Performance、Accessibilityの見せ方
- 既存Assetの用途と優先度
- Long-form Case Studyの扱い

### 今回行わないこと

- ポートフォリオ本体のHTML / CSS / JavaScript実装
- VISTA側の実装・Design・Asset変更
- Thumbnail、Screenshot、Device Mockup、図解の新規制作
- 架空サービスの機能・実績・数値追加

## 2. Portfolio Card

### Official Content

- **Title:** VISTA｜制作会社向け進捗可視化SaaS
- **Eyebrow / Category:** 制作会社向け進捗可視化SaaS
- **短縮Category候補:** BtoB SaaS / Product UI
- **一言版:** 制作進行の「止まり」を可視化する、制作会社向けSaaSサイト
- **Description:** 制作進行情報の分散により、確認待ちや停滞を見つけにくい課題を可視化する、制作会社向けの架空BtoB SaaS。企画、Product UI、Webデザインから実装・公開まで一貫して制作しました。

Categoryは正式名称を優先します。Portfolio全体でCategoryを短く統一する場合のみ、正式なSkill Tagから「BtoB SaaS / Product UI」を使用します。

### Skill Tags

Cardでは次の6個を優先表示します。

1. BtoB SaaS
2. Multi-page
3. Product UI
4. Responsive
5. HTML / CSS
6. JavaScript

`Product UI`がVISTAの独自性を、`Multi-page`が情報設計の範囲を、`HTML / CSS`と`JavaScript`が実装範囲を示します。`UI Design`はProduct UIと意味が近く、`GitHub Pages`は詳細情報で確認できるためCardでは省略します。詳細ページでは正式8個をすべて表示します。

## 3. Card Image Selection

実ファイルの内容を比較した結果、OGPを形式だけで選ぶのではなく、Brand、Main Copy、Product UIが小さな画面でも同時に認識できる点を評価し、第一候補とします。

### 第一候補｜VISTA OGP

- **File:** `VISTA_OGP_DEFAULT.png`
- **Path:** `05_Assets/images/ogp/VISTA_OGP_DEFAULT.png`
- **Dimensions:** 1200 × 630px
- **Aspect Ratio:** 40:21（約1.90:1）
- **Alpha:** あり。Visual上は明るい背景で構成
- **用途:** Work一覧Cardの代表Image
- **内容:** VISTA Logo、Category、Hero Copy、Overview Dashboard
- **Card向きの理由:** Brand名、中心価値、Product UIが1枚で伝わり、VISTAであることを最も早く識別できる。UIの細部を読めなくても、SaaSの画面を設計した作品だと分かる
- **Crop可能範囲:** 原則Cropしない。左右端にBrandとProduct UIがあるため、大きなCropは禁止。Card比率が異なる場合は背景余白を残して全体表示する
- **object-fit:** `contain`推奨。Card側を可能なら約1.90:1に合わせる
- **Mobile:** CopyとUI詳細は小さくなるが、Logo、太いMain Copy、Dashboardの構図は維持される。画像内Textを本文情報の代替にはしない

### 第二候補｜Hero Product Mockup

- **File:** `VISTA_HERO_PRODUCT_MOCKUP_1280.png`
- **Path:** `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP_1280.png`
- **Dimensions:** 1280 × 800px
- **Aspect Ratio:** 8:5（1.60:1）
- **Alpha:** あり。透明背景
- **用途:** Image中心のCard、または詳細ページMain Visual
- **内容:** Waiting Inbox、Overview Dashboard、Project Detailを重ねたProduct Mockup
- **Card向きの理由:** Product UI制作を強く見せられ、CopyがないPortfolio Layoutにも合わせやすい
- **Crop可能範囲:** Crop非推奨。左右奥のUIと下部Shadowまで含めて1つの構図であるため、全体を表示する
- **object-fit:** `contain`必須。Portfolio側の背景色を別途指定する
- **Mobile:** UI内Textは読ませず、複数画面を設計したことが分かるシルエットとして扱う。必要に応じて800px派生へ切り替える

### Card Image Decision

第一候補のOGPを正式採用候補とします。第二候補は、Portfolio全体のCardが文字入りImageを使用しない方針の場合に限り切り替えます。

OGPはCard専用で使用し、詳細ページのHeroには流用しません。詳細HeroはHero Product Mockupを使用します。

## 4. Detail Hero

### 正式順

1. Project Title
2. 一言版
3. Overview
4. Project Info
5. Live Demo
6. GitHub
7. Hero / Main Visual

この順は、最初に作品の種類と課題を理解し、その後に制作範囲、外部Link、Visualを確認できるため適切です。DesktopではTitleからCTAまでとMain Visualを同一Hero領域に置き、視線上ではCopyとVisualを並列に扱って構いません。Mobileでは上記の意味順を維持します。

### Alternative Layout

唯一の代替案として、`Title → 一言版 → Main Visual → Overview → Project Info → CTA`があります。PortfolioがVisual主導の構成なら有効ですが、VISTAでは課題設定を先に理解してもらうことを優先し、正式順を第一候補とします。

### Hero Copy

- **Title:** VISTA｜制作会社向け進捗可視化SaaS
- **一言版:** 制作進行の「止まり」を可視化する、制作会社向けSaaSサイト
- **Overview:** `PORTFOLIO_SHORT_COPY.md`の`Official｜Portfolio Overview`を使用
- **Disclosure:** `自主制作 / 架空サービス / Multi-page Website`をOverview付近に常時表示

### CTA

- **Primary:** Live Demo — `https://coconattsu0723.github.io/vista-progress-saas/`
- **Secondary:** GitHub — `https://github.com/Coconattsu0723/vista-progress-saas`

PrimaryとSecondaryはHeroとページ末尾の2か所に配置します。外部遷移であることを表示上またはAccessible Nameで伝えます。

### Main Visual

- **Desktop:** `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP_1280.png`
- **Small / Mobile:** `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP_800.png`
- **Fallback / Source Master:** `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP.png`
- **Display:** Cropせず`contain`。透明背景を活かし、Portfolio側のSurface上に配置

## 5. Project Info

### 常時表示

HeroまたはHero直下に、採用担当が短時間で把握すべき項目を表示します。

- **Project:** VISTA
- **Category:** 制作会社向け進捗可視化SaaS
- **Type:** 自主制作 / 架空サービス / Multi-page Website
- **Pages:** TOP / FEATURES / CASE STUDIES / PRICING / CONTACT（DEMO）
- **Role:** Planning / Information Architecture / Copy / Product UI / Web Design / Front-end / QA

### 詳細に回す項目

Project Scopeまたはページ下部へ配置します。

- **Design Tools:** Pencil / Figma
- **Development:** HTML5 / CSS3 / Vanilla JavaScript / Git
- **Publication:** SEO / GitHub / GitHub Pages / Production QA

Roleを常時表示し、Tool名の詳細を後段へ回すことで、最初の閲覧では担当範囲を優先して伝えます。

## 6. Detail Page Section Order

長文Case Studyをそのまま貼らず、短縮CopyとVisualを中心に次の順で構成します。

1. **Project Hero**
   - Title、一言版、Overview、Project Info、CTA、Main Visual
2. **Problem / Solution**
   - 課題設定と中心価値を対で表示
3. **Production Points**
   - 正式3点を簡潔に提示
4. **Information Architecture**
   - 5ページの役割をDiagramまたは短いListで説明
5. **Product UI**
   - Overview Dashboard、Waiting Inbox、Risk Report、Flow Analytics、Project Detail
6. **Design**
   - Clean Tech、VISTA Blue、Whitespace、情報階層
7. **Responsive**
   - Desktop / MobileのLayout比較
8. **Implementation & Accessibility**
   - 実装範囲と操作・状態設計
9. **Performance**
   - IssueからResultまでを図解
10. **Challenges & Solutions**
    - Main 3件を掲載し、残り2件はMore Detailsへ
11. **Project Scope**
    - Planning、Design、Development、Publication
12. **Final Links**
    - Live Demo、GitHub、架空サービス注記

Pricingは独立したMain Sectionにせず、Information ArchitectureまたはProject Scope内のSupplementとして扱います。CONTACTも独立Sectionではなく、Implementation & Accessibility内でForm State Designとして紹介します。

## 7. Key Sections

### Problem / Solution

`PORTFOLIO_SHORT_COPY.md`の正式ProblemとSolutionを使用します。左右比較または連続する2ブロックで示し、機能説明より先に「なぜ作ったか」を理解できるようにします。

### Production Points

次の3点を同じ優先度で表示します。

1. 業務課題から情報設計する
2. Product UIまで含めてサービス体験を設計する
3. 実装後も計測・検証して改善する

各項目は正式短文と1点の関連Visualで構成し、長い技術一覧にはしません。

### Product UI

Product UIはVISTAの独自性を示す中核Sectionとし、画面ごとに役割を分けます。

- **Hero / Service Overview:** Hero Product Mockup。複数画面を設計したことを最初に示す
- **Product UI Section Lead:** Overview Dashboard。案件状況、確認待ち、停滞リスクを一画面で見せる
- **Feature Visual 01:** Waiting Inbox。誰の確認で止まっているかを見る
- **Feature Visual 02:** Risk Report。対応が必要な案件を見つける
- **Feature Visual 03:** Flow Analytics。工程ごとの滞留を俯瞰する
- **Supplement:** Project Detail。個別案件へ情報を掘り下げる流れを補足する

Waiting Inbox、Risk Report、Flow Analyticsは同格のFeature Visualとして扱います。Overview Dashboardは導入、Project Detailは補足に置き、5画面を同じ大きさのGridへ押し込まない方針です。

### Challenges & Solutions

Main 3件を本文へ掲載し、残り2件を折りたたまない短い`More Details`として後置します。

#### Main 01｜Hero NetworkのDesktop / Mobile重複取得

VisualとPerformanceが直接関係し、Designを実装した後もNetworkを確認した姿勢を示せるため採用します。

#### Main 02｜Product UIの軽量化と視認性

VISTAの主要VisualであるProduct UIを、見た目だけでなくTransferまで検証した判断を示せます。Waiting / Riskを採用し、Flow派生を実測で不採用にした過程も含めます。

#### Main 03｜GitHub Pages Project Site Path

Multi-page Siteを実際に公開し、`/vista-progress-saas/`配下のPathまで調整したことを示せるため採用します。

#### More Details

- Nested 404のAsset Path
- Google Fontsの発見経路

More Detailsは各3〜4行に圧縮します。5件を同じ量で並べず、最初の3〜5分ではMain 3件まで読めば制作範囲が伝わる構成にします。

## 8. Case Studies and Pricing

### Case Studies

NALU Inc.、ASTERIA FOODS、KINARIを紹介する場合は、Section冒頭と各Image Captionに**「サイト内で設計した架空の導入事例」**と明記します。

42% / 55% / 3件はVISTAサイト内のDesign設定であり、制作者本人や実在顧客の成果として強調しません。Portfolioでは3枚を大きな成果Cardとして並べず、Multi-page設計を示すSupplementとして縮小掲載します。

### Pricing

**判断：Supplement**

3プランの比較設計は制作範囲を示せますが、VISTAの主な強みはProblem設定、Product UI、Multi-page情報設計、Implementation / QAです。PricingはInformation Architecture内に1点の縮小Visualまたは説明文として含め、独立したMain Sectionにはしません。料金は架空設定で、契約・決済機能はないことを明記します。

## 9. CONTACT Presentation

CONTACTはImplementation & Accessibility Section内のSupplementとして扱います。

- Form UI
- Focus
- Error
- Loading
- Success Preview
- Keyboard / Screen Readerへの状態通知

見出しまたはCaptionに**「BackendなしのUI State Design」**と明記します。通常Submitは`Validation → Loading → Submit Error`、Successは`?state=success`によるDevelopment Previewのみであり、入力情報は送信・保存されないことを併記します。

## 10. Responsive Presentation

### 採用案｜Desktop + MobileのLayout比較

同じSectionのDesktopとMobileを並列で見せ、Device Mockupではなく実画面のLayout比較として掲載します。

- HeroまたはProduct UIのDesktop / Mobileを1組
- Case Card、Pricing、CONTACTのうち情報再構成が分かりやすい1組
- Captionで「縮小」ではなく、Content順・表示Asset・操作を再構成した点を説明

VISTAではProduct UIのMobile PreviewやCard構成が正式に存在するため、装飾的なDevice Mockupを新規作成するより、実際の情報優先度の差を直接見せる方法が適しています。

## 11. Performance Presentation

数字だけを大きく表示せず、2つのDecision Flowとして図解します。

### Diagram 01｜重複Downloadの解消

`Desktop / Mobile画像を両方取得`<br>
→ `Network Requestを幅別に確認`<br>
→ `picture / sourceへ統合`<br>
→ `必要なSourceだけを取得`

### Diagram 02｜Flow Analytics派生の不採用

`軽量化候補を作成`<br>
→ `Visual Qualityは基準内`<br>
→ `TransferがMasterより約59%増加`<br>
→ `派生を不採用、Masterを維持`

Diagram 01では問題発見から実装変更、Diagram 02では作ったAssetを実測で採用しなかった判断を見せます。TOPの約2.67MBと約128〜178KBは必要に応じて小さな参考注記にとどめ、計測条件差を併記します。

## 12. Accessibility Presentation

ARIA属性一覧ではなく、次の4項目を短いLabelと説明で表示します。

1. **Keyboard:** Mobile MenuをKeyboardとEscapeで操作
2. **Focus:** Menu終了後の復帰とError Fieldへの移動
3. **Form Error:** FieldとMessageを関連付けて修正箇所を明確化
4. **State Announcement:** Loadingや結果をScreen Readerへ通知

実装属性の詳細は必要に応じてCaptionまたはMore Detailsへ回します。

## 13. Link CTA Policy

- **Primary CTA:** Live Demo
- **Secondary CTA:** GitHub
- **Placement:** HeroとFinal Links

Long-form Case Study MarkdownへのLinkはMain CTAにしません。Portfolio本文がCase Studyの要点を掲載するため必須ではなく、GitHub内の補足資料として扱います。Portfolioに`More Details`や制作資料Link欄がある場合のみ、目立たないText Linkとして追加します。

## 14. Desktop / Mobile Page Structure

### Desktop

- HeroではCopy / Project Info / CTAとMain Visualを同一領域で関連付ける
- Problem / Solutionは比較しやすい2ブロック
- Production Pointsは3点を同じ視線上に置く
- Product UIはOverviewを大きく、3機能を交互または段階的に配置
- ChallengesはMain 3件を先に見せ、More Detailsを後置
- Final LinksでLive Demoを再提示

### Mobile

Sectionの意味順はDesktopと同じにします。

- Title、一言版、Overview、Type、CTA、Main Visualの順に積む
- Problemの後にSolutionを置き、比較内容を分断しない
- Production Pointsは01から03まで縦に並べる
- Product UIはCopyの直後に対応するImageを置く
- Desktop / Mobile比較は縦積みでも同じSectionだと分かるLabelを付ける
- Main Challengesを先にし、技術詳細は後段へ回す

## 15. Asset Inventory

| Asset | Path | Purpose | Priority | Notes |
|---|---|---|---|---|
| VISTA正式Logo SVG | `01_Brand/VISTA_LOGO_A_TRANSPARENT.svg` | Detail Hero / Brand識別 | A | 880 × 300px。背景なし。Text Titleと重複する場合は省略可 |
| OGP | `05_Assets/images/ogp/VISTA_OGP_DEFAULT.png` | Work一覧Card | A | 1200 × 630px、Alphaあり。Cropせず使用 |
| Hero Mockup 1280 | `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP_1280.png` | Detail Hero Main Visual | A | 1280 × 800px、Alphaあり、8:5 |
| Hero Mockup 800 | `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP_800.png` | Detail Hero Small / Mobile | A | 800 × 500px、Alphaあり、8:5 |
| Overview Dashboard | `05_Assets/images/product-ui/VISTA_UI_OVERVIEW_DASHBOARD.png` | Product UI Section Lead | A | 1440 × 1376px、Alphaあり。Cropせず表示 |
| Waiting Inbox 1440 | `05_Assets/images/product-ui/VISTA_UI_WAITING_INBOX_1440.png` | Feature Visual | A | 1440 × 688px、全画素不透明 |
| Risk Report 1440 | `05_Assets/images/product-ui/VISTA_UI_RISK_REPORT_1440.png` | Feature Visual | A | 1440 × 688px、全画素不透明 |
| Flow Analytics | `05_Assets/images/product-ui/VISTA_UI_FLOW_ANALYTICS.png` | Feature Visual | A | 2880 × 1376px、Alphaあり。既存Masterを使用 |
| Mobile UI Previews | `05_Assets/images/product-ui/mobile-preview/` | Responsive Layout比較 | A | Waiting / Risk / Flow、各720 × 688px |
| Project Detail | `05_Assets/images/product-ui/VISTA_UI_PROJECT_DETAIL.png` | Product UI Supplement | B | 2880 × 1376px、Alphaあり |
| Hero Network Desktop | `05_Assets/images/hero/VISTA_BG_HERO_NETWORK_DESKTOP.png` | Concept補助Visual | B | 1440 × 864px。Product UIとCopyより背面に限定 |
| Hero Network Mobile | `05_Assets/images/hero/VISTA_BG_HERO_NETWORK_MOBILE.png` | Responsive補助Visual | B | 375 × 634px、透明背景 |
| Case Cover 01 | `05_Assets/images/case-studies/VISTA_CASE_RECRUIT_SITE_1296.png` | 架空事例Supplement | B | 1296 × 864px、3:2。架空Label必須 |
| Case Cover 02 | `05_Assets/images/case-studies/VISTA_CASE_EC_RENEWAL_1296.png` | 架空事例Supplement | B | 1296 × 864px、3:2。架空Label必須 |
| Case Cover 03 | `05_Assets/images/case-studies/VISTA_CASE_BRAND_LP_1296.png` | 架空事例Supplement | B | 1296 × 864px、3:2。架空Label必須 |
| Integration Settings | `05_Assets/images/product-ui/VISTA_UI_INTEGRATION_SETTINGS.png` | Scope補足 | C | 正式UIだが、主要3機能より優先度を下げる |
| Final CTA Desktop / Mobile | `05_Assets/images/final-cta/` | VISTAサイト紹介の補足 | C | Portfolio側CTA背景には流用しない |
| OGP Source | `05_Assets/images/ogp/source/VISTA_OGP_SOURCE.png` | OGP加工元 | C | 2400 × 1260px。通常表示にはProduction版を使用 |
| Hero / UI / Case Masters | 各Master Path | 再加工時のSource | C | 上書きせず保持。Portfolio表示は既存派生を優先 |

Priority Aは本文の中核、Bは説明を補うAsset、Cは原本保持または必要時のみ使用するAssetです。

## 16. Copy Mapping

| Official Copy | Portfolio UI | Usage |
|---|---|---|
| Portfolio Card Title | Work一覧 | Card Title |
| 一言版 | Work一覧 / Detail Hero | Card補足、Hero Subcopy |
| Portfolio Card Description | Work一覧 | Card本文 |
| Portfolio Overview | Detail Hero | 作品概要 |
| Detailed Intro | Project Overview | Overview補足。全文ではなくLayoutに応じて使用 |
| Problem | Problem Section | 見出しと本文を使用 |
| Solution | Solution Section | 見出しと本文を使用 |
| Production Points | Key Points | 正式3点を使用 |
| Design | Design Section | Design判断の要約 |
| Responsive | Responsive Section | Layout比較の導入文 |
| Implementation | Implementation & Accessibility | 実装範囲の要約 |
| Accessibility | Implementation & Accessibility | 4項目の導入文 |
| Performance | Performance Section | 2つの図解の導入文 |
| Project Info | Hero / Project Scope | 常時表示と詳細に分割 |
| Skill Tags | Card / Detail | Card 6個、Detail 8個 |
| Interview 30秒版 | Interview準備 | 一次説明用。Web本文には掲載しない |
| Interview 60秒版 | Interview準備 | 詳細説明用。Web本文には掲載しない |
| Usage Notes | Hero近く / Final Links | 架空サービス・非送信仕様の注記 |

## 17. Long-form Case Study Policy

**判断：一部掲載**

Portfolio Webでは、Short Copy、Main Challenge 3件、主要Visualを使い、採用担当が3〜5分で全体を把握できる量にします。Long-form Case Study全文は制作判断の正式記録としてRepositoryに維持します。

全文掲載は情報量が多くVisualの流れを弱めるため採用しません。要約のみではChallengesや判断過程が不足するため、主要Sectionを一部掲載する方針が適切です。必要な場合のみ、ページ末尾からLong-form Markdownへ補足Linkを設けます。

## 18. Thumbnail / Main Visual Decision

### Decision A｜既存Assetで十分

- CardはVISTA OGPでBrand、中心価値、Product UIを同時に伝えられる
- Detail HeroはHero Product Mockupの800 / 1280px派生を利用できる
- Responsive比較には正式Mobile Previewが存在する
- Product UI Sectionには主要画面とProduction derivativeがそろっている

そのため、Portfolio専用Thumbnail / Main Visualは実装前の必須制作物としません。Portfolio本体が全作品で固定比率のCropを要求する場合のみ、OGPを上書きせず、既存OGPをベースに別名のPortfolio derivativeを検討します。

## 19. Missing Assets

実装開始を妨げる不足Assetはありません。

任意の追加候補は、Portfolio本体の共通Layoutが確定した後に判断します。

- 固定比率がOGPと合わない場合のPortfolio専用Thumbnail
- Portfolio内で実画面全体を見せる必要が生じた場合のDesktop / Mobile Screenshot

現時点では新規制作せず、既存AssetでLayoutを検証する方針です。

## 20. Pre-implementation Checklist

- [ ] Portfolio本体のCard Image Ratioを確認
- [ ] Cardでは正式6 Tags、Detailでは正式8 Tagsを使用
- [ ] Hero付近に`自主制作 / 架空サービス`を表示
- [ ] CTAはLive DemoをPrimary、GitHubをSecondaryにする
- [ ] OGPをDetail Heroへ流用しない
- [ ] Product UIはCropせず、Textが読めないSizeへ縮小しすぎない
- [ ] Case Coverに`サイト内で設計した架空の導入事例`Labelを付ける
- [ ] Pricingを実契約・決済として見せない
- [ ] CONTACTを`BackendなしのUI State Design`として説明
- [ ] Performance数値には計測条件差を併記
- [ ] Long-form全文を初期表示へ載せない
- [ ] Desktop / MobileでSectionの意味順を維持

## 21. Next Recommended Step

次工程は**Portfolio本体の詳細ページ設計**を先に行います。

既存AssetでCardとMain Visualが成立するため、Thumbnail制作を先行する必要はありません。詳細ページのGrid、Image比率、Section密度を確定した後で、既存Assetでは合わない箇所が判明した場合のみPortfolio derivativeを検討します。

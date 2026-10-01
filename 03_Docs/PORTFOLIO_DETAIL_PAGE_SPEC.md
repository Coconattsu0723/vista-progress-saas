# VISTA｜Portfolio Detail Page Specification

> **Status: Design Specification / Pre-implementation**

VISTAをPortfolio本体の作品詳細ページへ掲載するための設計仕様です。採用担当者が3〜5分で、作品テーマ、課題設定、Design判断、実装範囲、検証内容を理解できる情報量を基準とします。

文章の正本は`PORTFOLIO_SHORT_COPY.md`、制作判断の正本は`PORTFOLIO_CASE_STUDY.md`、掲載準備の方針は`PORTFOLIO_IMPLEMENTATION_PLAN.md`です。Long-form全文を転載せず、短いCopyと既存Visualを組み合わせます。

## 1. Page Goal

最初の3〜5分で次の内容が分かるページにします。

- 制作会社向け進捗可視化SaaSという作品テーマ
- 情報分散により確認待ちや停滞を見つけにくい課題
- 課題から情報設計とProduct UIへつなげた判断
- 5ページのWebデザインと実装範囲
- Responsive、Accessibility、Performanceの検証
- 自主制作・架空サービスであること

「作ったものをすべて同じ量で並べる」のではなく、Problem / Solution、Production Points、Product UI、Challengesを優先します。

## 2. Information Priority

### Priority A｜最初の閲覧で必ず伝える

- Project Title、Category、一言版
- 自主制作 / 架空サービス
- Overview
- Problem / Solution
- Production Points 3点
- Product UI
- Role
- Live Demo / GitHub

### Priority B｜制作範囲を補強する

- Information Architecture
- Design Approach
- Responsive Design
- Implementation & Accessibility
- Performance Decision Flow
- Main Challenges 3件

### Priority C｜深く読む人向け

- Project Detail UI
- Pricingと架空Caseの補足
- Nested 404 / Google Fonts
- Long-form Case Study Link

## 3. Official Section Order

正式Section順は次の12区分とします。提示された基本順を維持し、順序変更は行いません。

1. **Project Hero**
2. **Problem / Solution**
3. **Production Points**
4. **Information Architecture**
5. **Product UI**
6. **Design Approach**
7. **Responsive Design**
8. **Implementation & Accessibility**
9. **Performance**
10. **Challenges & Solutions**
11. **Project Scope**
12. **Final CTA / Links**

課題から考え方、Visual、実装、検証へ進むため、`Problem → Decision → Execution → Validation`の流れを維持できます。

## 4. Project Hero

### Required Content

- Project名
- Category
- `自主制作 / 架空サービス`
- 一言版
- Official Portfolio Overview
- Project Info
- Primary CTA：Live Demo
- Secondary CTA：GitHub
- Main Visual

### Official Copy

- **Title:** VISTA｜制作会社向け進捗可視化SaaS
- **Category:** 制作会社向け進捗可視化SaaS
- **Type Label:** 自主制作 / 架空サービス / Multi-page Website
- **一言版:** 制作進行の「止まり」を可視化する、制作会社向けSaaSサイト
- **Overview:** `PORTFOLIO_SHORT_COPY.md`の`Official｜Portfolio Overview`

架空サービスの表記はTitle付近のType Labelへ置きます。Case StudiesやPricingを実績・提供中サービスと誤認させないため、ページ末尾だけの注記にはしません。

### Desktop Layout

**第一候補：Text + Main Visualの2column Hero**

- 左側：Type Label、Category、Title、一言版、Overview、CTA
- 右側：Hero Product Mockup
- Hero下段：Project Infoを2〜3列のInfo GridとしてHero内に接続
- Main Visualは同一Viewport内でCopyと関係が分かる位置に置く
- Overviewを長く見せすぎず、一言版とCTAを先に認識できる階層にする

HeroはCard Gridにせず、Text Blockと大きなVisualの対比で構成します。Project Infoは独立Cardを多数並べず、LabelとValueの簡潔なGridにします。

### Mobile Layout

1. Type Label
2. Category
3. Title
4. 一言版
5. Overview
6. CTA
7. Main Visual
8. Project Info

MobileではMain VisualをDesktopの縮小配置にせず、CopyとCTAを読んだ後に独立したVisualとして全幅表示します。Project Infoは縦積みとし、LabelとValueの組を短く保ちます。

### Project Info

#### 常時表示

- **Project:** VISTA
- **Category:** 制作会社向け進捗可視化SaaS
- **Type:** 自主制作 / 架空サービス / Multi-page Website
- **Pages:** TOP / FEATURES / CASE STUDIES / PRICING / CONTACT（DEMO）
- **Role:** Planning / Information Architecture / Copy / Product UI / Web Design / Front-end / QA

#### 後段へ回す

- **Design Tools:** Pencil / Figma
- **Development:** HTML5 / CSS3 / Vanilla JavaScript / Git
- **Publication:** SEO / GitHub / GitHub Pages / Production QA

### CTA

- **Primary:** Live Demo — `https://coconattsu0723.github.io/vista-progress-saas/`
- **Secondary:** GitHub — `https://github.com/Coconattsu0723/vista-progress-saas`

Live Demoを視覚的に優先します。GitHubはSecondaryとして隣接させます。Long-form Case Study LinkはHeroに置きません。

### Main Visual

- **Desktop:** `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP_1280.png`
- **Mobile:** `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP_800.png`
- **Fallback:** `05_Assets/images/hero/VISTA_HERO_PRODUCT_MOCKUP.png`
- **Display Ratio:** 8:5
- **Fit:** `contain`
- **Crop:** 禁止
- **Loading:** Hero VisualのためEager候補

透明背景を活かし、Portfolio側の既存Surface上へ配置します。OGPはWork一覧Card用とし、Detail Heroには使用しません。

## 5. Problem / Solution

### Official Copy

#### Problem

**制作進行の情報が分散し、<br>
「どこで止まっているか」が見えにくい**

本文は`PORTFOLIO_SHORT_COPY.md`の`Official｜Problem`を使用します。

#### Solution

**確認待ちと停滞を、<br>
ひとつの視点で見つける**

本文は`PORTFOLIO_SHORT_COPY.md`の`Official｜Solution`を使用します。

### Adopted Layout

**Desktop：左右対比**

- 左にProblem、右にSolution
- 2つの独立Cardではなく、同じSection内をDividerまたは方向表示でつなぐ
- Problemは分散、Solutionは統合という関係が一視線で分かる構成
- 両者の本文量と見出し階層をそろえる

**Mobile：上下対比**

- Problem → Solutionの順に縦積み
- 間に短いTransition LabelまたはArrowを置く
- 横並びを縮小せず、理解順を維持する

### Visual Decision

このSectionではProduct UI Imageを使用しません。Text、Page内の簡潔なDivider、Tool名のText Labelだけで構成します。

理由：Product UIをここで出しすぎると、後続の最重要Visual Sectionとの差が弱くなるためです。Slack / Figma / BacklogはLogoを新規制作せず、本文内の名称として扱います。

## 6. Production Points

### Official Points

1. **業務課題から情報設計する**
2. **Product UIまで含めてサービス体験を設計する**
3. **実装後も計測・検証して改善する**

本文は`PORTFOLIO_SHORT_COPY.md`の正式3点を使用します。

### Adopted Layout

**Desktop：1 → 2 → 3が流れるHorizontal Sequence**

3 Cardを独立して並べるより、番号、見出し、短文を一続きのProcessとして見せます。VISTAの価値が、課題設定からVisual設計、実装後検証へ進んだことを表現できるためです。

- NumberをVISTA Blueの小さなAccentとして使用
- 各Pointは見出しと本文を中心にし、装飾Iconは必須にしない
- Point間はLineまたは余白でつなぎ、Boxを増やしすぎない

**Mobile：Vertical Sequence**

01 → 02 → 03の順に縦積みします。Numberと見出しを先に読み、本文が続く構成とします。

## 7. Information Architecture

### Purpose

1ページLPに集約せず、閲覧目的に応じて5ページへ分けた判断を短時間で伝えます。

### Page Map

- **TOP:** 課題からCTAまでをつなぎ、全体像を伝える
- **FEATURES:** 主要機能への理解を深める
- **CASE STUDIES:** 架空の制作案件から利用場面を想像させる
- **PRICING:** 3プランと機能差を比較する
- **CONTACT（DEMO）:** デモ依頼を想定したForm UIと状態を示す

### Layout

**Desktop：HTML / CSSで構成するHorizontal Page Map**

TOPを入口として、FEATURES、CASE STUDIES、PRICING、CONTACTへ役割が分かれる構成を、Page Name、1行説明、Connectorで表します。新規図版は作りません。

**Mobile：Vertical Page Map**

TOPから各Pageへ順に進む縦のListへ変換します。Connectorは装飾として扱い、Screen ReaderではPage名と説明だけが自然に読める構造にします。

PricingはここでMulti-page設計の一部として見せ、独立した大Sectionにはしません。

## 8. Product UI

VISTAの最重要Visual Sectionです。5画面を同じ大きさのGridにせず、サービス全体、主要機能、補足画面の順で強弱を付けます。

### Visual Order

1. **Section Lead:** Overview Dashboard
2. **Feature 01:** Waiting Inbox
3. **Feature 02:** Risk Report
4. **Feature 03:** Flow Analytics
5. **Supplement:** Project Detail

### Lead Visual｜Overview Dashboard

- サービス全体の利用イメージを示す
- 個別Featureと同量の説明を付けず、短いIntroと大きなVisualを中心にする
- 案件状況、確認待ち、停滞リスクを一画面で確認できる点を見せる
- Desktop / MobileともFeature Visualより先に配置

**Asset:** `05_Assets/images/product-ui/VISTA_UI_OVERVIEW_DASHBOARD.png`<br>
**Native Ratio:** 45:43に近い縦長<br>
**Fit:** `contain`<br>
**Crop:** 禁止

### Feature 01｜Waiting Inbox

**見出し:** Waiting Inbox

**説明:** 複数案件の確認待ちを横断して一覧化し、誰の確認で止まっているかを把握しやすくする画面です。

**Desktop Asset:** `05_Assets/images/product-ui/VISTA_UI_WAITING_INBOX_1440.png`<br>
**Mobile Asset:** `05_Assets/images/product-ui/mobile-preview/VISTA_UI_WAITING_INBOX_PREVIEW.png`

### Feature 02｜Risk Report

**見出し:** Risk Report

**説明:** 案件の停滞や納期遅延の兆しを整理し、対応が必要な案件を早めに見つける画面です。

**Desktop Asset:** `05_Assets/images/product-ui/VISTA_UI_RISK_REPORT_1440.png`<br>
**Mobile Asset:** `05_Assets/images/product-ui/mobile-preview/VISTA_UI_RISK_REPORT_PREVIEW.png`

### Feature 03｜Flow Analytics

**見出し:** Flow Analytics

**説明:** 制作工程ごとの滞留時間や案件の流れを俯瞰し、Team全体の制作フローを確認する画面です。

**Desktop Asset:** `05_Assets/images/product-ui/VISTA_UI_FLOW_ANALYTICS.png`<br>
**Mobile Asset:** `05_Assets/images/product-ui/mobile-preview/VISTA_UI_FLOW_ANALYTICS_PREVIEW.png`

### Desktop Layout

- Overview DashboardをSection Leadとして大きく配置
- Feature 01〜03はTextとVisualの交互Layout
- Featureごとに同じ比率・Caption位置を維持
- Visualを十分な幅で見せ、UI内Textが判別できないほど縮小しない
- Product UIの背景を新しいCardで囲みすぎず、既存UIのFrameとShadowを活かす

### Mobile Layout

各Featureを必ず`Text → Visual`の順にします。

1. Feature Label
2. Feature Name
3. 1〜2文の説明
4. Mobile Preview

Desktop用Imageをそのまま縮小せず、正式Mobile Previewへ切り替えます。

### Supplement｜Project Detail

Project DetailはProduct UI全体の厚みを示す補足として掲載します。

- DesktopではSection末尾の短いText + 中サイズVisual
- Mobileでは必要な説明とVisualを1組で表示
- Overview Dashboardや主要3機能より小さくする
- ページ長が過剰になる場合はVisualのみ省略可能。ただしProject Detailの名称はProject ScopeまたはCaptionに残す

**Asset:** `05_Assets/images/product-ui/VISTA_UI_PROJECT_DETAIL.png`<br>
**Ratio:** 90:43に近い横長<br>
**Fit:** `contain`<br>
**Crop:** 禁止

### Loading

Product UI Section以降はBelow-the-foldのためLazy Loading候補です。画像が遅れて表示されてもLayoutが動かないよう、実装時は固有寸法またはAspect Ratioを保持します。

## 9. Design Approach

### Official Direction

- Clean Tech
- 明るい背景
- Wide Whitespace
- VISTA Blue
- Product UI中心
- 装飾より情報階層を優先

本文は`PORTFOLIO_SHORT_COPY.md`の`Official｜Design`を使用します。

### Visual Composition

新規Brand Boardは作らず、既存Assetを組み合わせます。

1. **Logo:** 正式Logo SVG
2. **Color:** VISTA実装内で使用中の既存Color Tokenから代表的な役割を示す
3. **Typography:** Inter / Noto Sans JPと使用Weightの事実だけを示す
4. **UI:** Overview Dashboardまたは主要Featureの一部を、情報階層の例として全体表示する

ColorはHex値を新しく決めず、実装済みTokenをPortfolio実装時に参照します。Spacingは数値Style Guideとして捏造せず、Wide WhitespaceとSection Rhythmの判断を文章と実画面で示します。

### Layout

**Desktop：Logo / Color / Typographyの簡潔な情報列 + Product UI Visual**<br>
**Mobile：Design方針のText → Logo / Color / Typography → UI Visual**

VISTA BlueはAccent、Caption、Feature Labelに限定し、Portfolio本体のPrimary Colorを置き換えません。

## 10. Responsive Design

### Adopted Presentation

Device Mockupは使用せず、同じSectionのDesktopとMobileを並べた**Layout比較**とします。

### Comparison Targets

#### 01 Hero

- CopyとProduct Mockupの優先順位
- Desktopの2columnからMobileの縦積みへの変化
- Hero NetworkとCTAの配置差

#### 02 Product UI

- Desktopの横長UIからMobile Previewへの切替
- TextとVisualの順序
- UI内情報の可読性維持

#### 03 CONTACT

- Formの1column化
- CTAとFieldの操作順
- Error / Loading / Success Previewの状態設計

Case StudiesとPricingはInformation Architectureで補足できるため、Responsive比較では省略します。3組までに絞り、同じ説明を繰り返しません。

### Screenshot Specification

今回は撮影せず、Portfolio本体設計確定後に必要な場合のみBrowser Screenshotを作成します。

| Screenshot | Purpose | Recommended Ratio | Notes |
|---|---|---|---|
| TOP Hero Desktop | Heroの2columnとProduct Mockup | 16:10前後 | Copy、CTA、Visualを同時に含める |
| TOP Hero Mobile | Mobileの意味順 | 9:16前後 | HeaderからMain Visualまでを含める |
| Product UI Desktop | 横長UIとFeature Copy | 約2:1 | WaitingまたはRiskを代表にする |
| Product UI Mobile | Mobile Previewへの切替 | 45:43前後 | 対応する同一Featureを使用 |
| CONTACT Desktop | Form LayoutとState | 4:3前後 | ErrorまたはLoadingを代表にする |
| CONTACT Mobile | Focus / Error / State | 9:16前後 | UIが読み取れる範囲に限定 |

Screenshotは比較用であり、実装画面の比率を歪めません。重要箇所を切り取る場合も、Image内部のProduct UIはCropしません。

### Desktop Layout

同一FeatureのDesktop / Mobileを対で配置し、Captionを共通化します。Visualを先に見せた後、差分を3項目以内で説明します。

### Mobile Layout

Desktop Screenshot → Desktop Label → Mobile Screenshot → Mobile Labelのように分断せず、Section名、説明、Desktop、Mobileの順に積みます。各Visualへ明確なCaptionを付けます。

## 11. Implementation & Accessibility

### Implementation Message

「コードを書いた」ことだけでなく、課題設定・Design・実装・公開まで一貫して担当したことを示します。

- HTML5
- CSS3
- Vanilla JavaScript
- Multi-page Static Site
- Git / GitHub
- GitHub Pages

本文は`PORTFOLIO_SHORT_COPY.md`の`Official｜Implementation`を使用します。

### Layout

**Desktop：Implementation Summary + Accessibility 4項目の2column**<br>
**Mobile：Implementation → Accessibilityの順で縦積み**

技術名をBadgeだけで並べず、何を実装したかを短い本文で説明します。

### Accessibility Items

1. **Keyboard:** Mobile MenuをKeyboardとEscapeで操作
2. **Focus:** Menu終了後の復帰とError Fieldへの移動
3. **Form Error:** FieldとMessageを関連付けて修正箇所を伝える
4. **State Announcement:** Loadingや結果をScreen Readerへ通知

ARIA属性一覧は本文に載せません。実装詳細が必要な場合のみLong-form Case Studyへ誘導します。

### CONTACT Form State Supplement

Portfolioでは次の3状態を簡潔に見せます。

- Error
- Loading
- Success Preview

Normalは他の3状態の共通Baseとして推測できるため、独立Visualを省略します。Error、Loading、Success Previewを同じ大きさで並べる必要はなく、Errorを主Visual、LoadingとSuccess Previewを補助として扱います。

必ず**「BackendなしのUI State Design」**と明記します。通常Submitは`Validation → Loading → Submit Error`であり、Successは`?state=success`によるDevelopment Previewのみです。入力情報は送信・保存されません。

## 12. Performance

数値Cardを並べず、2つのDecision FlowをHTML / CSSで表現します。各StepはTextとConnectorでつなぎ、新規Imageは作成しません。

### Flow 01｜Responsive Image Request

1. **Issue:** Desktop / Mobile画像を両方取得
2. **Investigation:** Network Requestを幅別に確認
3. **Decision:** `picture` / `source`へ統合
4. **Result:** 必要なSourceのみ取得

### Flow 02｜Flow Analytics Derivative

1. **Issue:** Product UIの表示負荷を下げたい
2. **Investigation:** 2400px派生のVisual QualityとTransferを比較
3. **Decision:** Visual Qualityは基準内でもTransferがMasterより約59%増加
4. **Result:** 派生を不採用、Masterを維持

### Desktop Layout

Flow 01とFlow 02を上下に置き、各Flow内の4 Stepを横方向に進めます。Flow同士を別Cardへ閉じ込めず、共通の`Issue → Investigation → Decision → Result`軸で比較します。

### Mobile Layout

各Flowを縦方向へ変換します。Step Labelを先に読み、その下に1文を置きます。Arrowは装飾扱いとし、読み上げ順はTextだけで成立させます。

TOPの約2.67MBとProduction約128〜178KBは、必要な場合のみ小さな参考注記として表示し、計測条件差があり厳密なBenchmarkではないことを併記します。

## 13. Challenges & Solutions

### Main Challenges

1. Hero NetworkのDesktop / Mobile重複取得
2. Product UIの軽量化と視認性
3. GitHub Pages Project Site Path

Main 3件は常時表示し、各項目を`Challenge → Investigation → Solution → Result`の順で短くまとめます。

### More Details

- Nested 404のAsset Path
- Google Fontsの発見経路

### Desktop Layout

- Main 3件：3column
- More Details：Mainの下に2件
- 3 Main Cardsは見出しと4段階の短文だけで構成し、装飾Imageは追加しない

### Mobile Layout

Main 3件を縦積みします。MainはAccordionにせず常時表示します。

More Detailsはページ長を抑えるため、Native HTMLの`details`要素を候補とします。JavaScriptを追加せずKeyboard操作を維持できるためです。`summary`には「Nested 404のAsset Path」など内容が分かる名称を使います。

## 14. Case Studies and Pricing

### Case Studies

掲載する場合は**「VISTA内で設計した架空の導入事例」**とSection、Image Captionの両方で明記します。

- 42%
- 55%
- 3件

これらを制作者本人の成果として大きく見せません。Case CoverはPriority Bで、Information ArchitectureまたはProject ScopeのSupplementとして最大3枚まで小さく使用します。

### Pricing

PricingはSupplementです。Information Architectureで料金ページを含むMulti-page設計であることを示せば十分です。独立Sectionは作りません。実契約・決済機能がないことを必要に応じてCaptionへ記載します。

## 15. Project Scope

ページ終盤で次の4カテゴリに整理します。

### Planning

- 企画
- 課題設定
- Target設計
- Brand設計

### Design

- Information Architecture
- Copy
- Product UI
- Web UI
- Responsive Design

### Development

- HTML
- CSS
- Vanilla JavaScript
- Accessibility
- Performance

### Publication

- Git / GitHub
- SEO
- GitHub Pages
- Production QA

### Layout

Desktopは4カテゴリを同じ階層で表示します。MobileはPlanningからPublicationまで縦積みし、担当工程の流れが分かる順序を維持します。

## 16. Final CTA / Links

### Required Links

- **Primary:** Live Demo
- **Secondary:** GitHub

Heroと同じ優先順位を維持します。

### Supplement Link

Long-form Case Studyは、制作判断の正式記録としてGitHub上に維持します。Final Linksにのみ、小さなText Linkとして追加可能です。Main CTAにはしません。

### Disclosure

Final CTA付近でも、VISTAが自主制作・架空サービスであり、CONTACTが実送信されないことを短く再掲します。ただし初出はHero付近とし、末尾だけの注記にはしません。

## 17. Section Rhythm

全SectionをCard Gridにせず、次のリズムで構成します。

1. **Hero:** Text + Visual
2. **Problem / Solution:** Text-heavy
3. **Production Points:** Process-oriented
4. **Information Architecture:** Diagram-oriented
5. **Product UI:** Visual-heavy
6. **Design Approach:** Text + Reference Visual
7. **Responsive:** Comparison-heavy
8. **Implementation & Accessibility:** Text-heavy + State Supplement
9. **Performance:** Diagram-oriented
10. **Challenges:** Text-heavy
11. **Project Scope:** Compact Summary
12. **Final CTA:** Focused Action

Product UIとResponsiveのVisual-heavy Sectionの前後にText-heavy Sectionを置き、長いページでも情報密度が一定にならないようにします。

## 18. Background Policy

Portfolio本体のDesign Systemを優先します。VISTA専用Colorでページ全体を上書きしません。

候補となる役割：

- **Portfolio Base Background:** Hero、Project Scope
- **Light Neutral:** Problem / Solution、Implementation
- **Soft Blue Accent Area:** Product UI Lead、PerformanceのLabel
- **White / Surface:** Production Points、Challenges

色名は役割を示す仮称です。実装時にはPortfolio既存Tokenへ置き換えます。新しいHex値は本Specで定義しません。

## 19. Image Specification

| Usage | Asset | Native / Recommended Ratio | Fit | Crop | Loading |
|---|---|---|---|---|---|
| Hero Desktop | `VISTA_HERO_PRODUCT_MOCKUP_1280.png` | 8:5 | contain | 禁止 | Eager候補 |
| Hero Mobile | `VISTA_HERO_PRODUCT_MOCKUP_800.png` | 8:5 | contain | 禁止 | Eager候補 |
| Overview Dashboard | `VISTA_UI_OVERVIEW_DASHBOARD.png` | 約45:43 | contain | 禁止 | Lazy候補 |
| Waiting Desktop | `VISTA_UI_WAITING_INBOX_1440.png` | 約90:43 | contain | 禁止 | Lazy候補 |
| Waiting Mobile | `VISTA_UI_WAITING_INBOX_PREVIEW.png` | 約45:43 | contain | 禁止 | Lazy候補 |
| Risk Desktop | `VISTA_UI_RISK_REPORT_1440.png` | 約90:43 | contain | 禁止 | Lazy候補 |
| Risk Mobile | `VISTA_UI_RISK_REPORT_PREVIEW.png` | 約45:43 | contain | 禁止 | Lazy候補 |
| Flow Desktop | `VISTA_UI_FLOW_ANALYTICS.png` | 約90:43 | contain | 禁止 | Lazy候補 |
| Flow Mobile | `VISTA_UI_FLOW_ANALYTICS_PREVIEW.png` | 約45:43 | contain | 禁止 | Lazy候補 |
| Project Detail | `VISTA_UI_PROJECT_DETAIL.png` | 約90:43 | contain | 禁止 | Lazy候補 |
| Logo | `VISTA_LOGO_A_TRANSPARENT.svg` | 44:15 | contain | 禁止 | EagerまたはInline候補 |
| Case Covers | 1296px derivatives | 3:2 | contain | 原則禁止 | Lazy候補 |

Product UIは原則`contain`です。Section高さを合わせる目的でImageをCrop、Stretchしません。

## 20. Asset Mapping

| Section | Primary Asset | Priority | Fallback / Alternative |
|---|---|---|---|
| Project Hero | Hero Mockup 1280 / 800 | A | Hero Mockup Master |
| Problem / Solution | なし | — | TextとCSS Connectorのみ |
| Production Points | なし | — | NumberとTextのみ |
| Information Architecture | なし | — | HTML / CSS Page Map |
| Product UI Lead | Overview Dashboard | A | 省略不可。既存Imageを使用 |
| Product UI Features | Waiting 1440 / Risk 1440 / Flow Master | A | Mobile Previewへ切替 |
| Product UI Supplement | Project Detail | B | ページ長によりVisual省略可 |
| Design Approach | Logo SVG + Product UI | A / B | Logo PNG、既存UI |
| Responsive | 将来のBrowser Screenshot | B | 現行Hero MockupとMobile Preview |
| CONTACT Supplement | 将来のState Screenshot | B | Text説明のみ |
| Performance | なし | — | HTML / CSS Decision Flow |
| Case Supplement | Case Cover 1296 3点 | B | Section自体を省略可 |
| Final CTA | なし | — | Portfolio既存CTA Component |

## 21. Copy Mapping

| Section | Primary Source | Secondary Source | Rule |
|---|---|---|---|
| Hero | SHORT_COPY | README | Title、一言版、Overviewをそのまま使用 |
| Problem / Solution | SHORT_COPY | CASE_STUDY | 表示本文はShort Copy。背景説明を追加しすぎない |
| Production Points | SHORT_COPY | CASE_STUDY | 正式3点を使用 |
| Information Architecture | IMPLEMENTATION_PLAN | CASE_STUDY | 各Pageを1〜2行へ要約 |
| Product UI | CASE_STUDY | SHORT_COPY | 機能説明を1〜2文に限定 |
| Design Approach | SHORT_COPY | CASE_STUDY | Design判断の補足だけを追加 |
| Responsive | SHORT_COPY | CASE_STUDY | 比較Captionに必要な判断だけを使用 |
| Implementation | SHORT_COPY | README | Tech一覧を重複させない |
| Accessibility | SHORT_COPY | CASE_STUDY | 4項目に圧縮 |
| Performance | CASE_STUDY | IMPLEMENTATION_PLAN | Decision Flow 2件を中心にする |
| Challenges | CASE_STUDY | IMPLEMENTATION_PLAN | Main 3件 + More Details 2件 |
| Project Scope | CASE_STUDY | SHORT_COPY | 4カテゴリへ整理 |
| Final CTA | SHORT_COPY | README | Official LinkとUsage Notesを使用 |

表に見える短文はSHORT_COPYを優先し、背景や判断理由だけをCASE_STUDYから要約します。Long-formの段落をそのまま転載しません。

## 22. Long-form Case Study Policy

Portfolio Webには**要約のみ掲載**します。

- Short Copyを表示本文に使う
- Main Challenges 3件のみ一定量を掲載
- More Details 2件はNative `details`候補
- Long-formはGitHub上の正式記録として維持
- 必要な場合のみFinal LinksからSupplement Linkを置く

全文転載は3〜5分の閲覧時間に対して情報量が多いため行いません。

## 23. SEO Copy Source

Portfolio本体の作品詳細としてMetadataを作成します。VISTA公開サイトのMetadataはそのままコピーしません。

### Title Candidate

`VISTA｜制作会社向け進捗可視化SaaS｜Portfolio`

### Description Candidate

`制作進行情報の分散で確認待ちや停滞を把握しにくい課題をテーマに、Product UI、5ページのWeb実装、アクセシビリティ、パフォーマンス検証まで行った架空BtoB SaaS「VISTA」の制作事例です。`

### OGP Source

- **Image Source Candidate:** `05_Assets/images/ogp/VISTA_OGP_DEFAULT.png`
- **Context:** Portfolio作品詳細のOGPとして利用する場合は、Portfolio側のURL、Title、Descriptionを使用
- **Restriction:** VISTA公開サイトのCanonicalやSite Nameを流用しない

実際のMetadata実装はPortfolio本体のRoutingとSEO方針を確認してから行います。

## 24. Accessibility Specification for Portfolio Page

### Heading Hierarchy

- `h1`は作品Titleの1件
- Sectionは`h2`
- FeatureやChallengeは`h3`
- 見た目のSizeではなく情報階層でHeadingを選ぶ

### Image Alternative Text

- Hero Mockup：複数のVISTA管理画面を重ねたVisualであることを簡潔に説明
- Product UI：画面名と、このSectionで示す情報を説明
- 同じ内容をCaptionで説明する場合は重複を避ける
- 装飾背景は空AltまたはPresentation扱い

### Link Text

`こちら`ではなく、`VISTA Live Demo`、`VISTA GitHub Repository`のように遷移先が分かるTextを使用します。新しいTabを使う場合は挙動を通知します。

### Keyboard and Focus

- すべてのCTAとLinkをKeyboardで操作可能にする
- Focus IndicatorをPortfolio既存Design Systemに合わせて維持
- ScreenshotやImageだけを操作対象にしない
- MobileでVisual順とDOM順を一致させる

### Native Details

More Detailsに`details`を使う場合はNative操作を維持し、独自JavaScriptで挙動を置き換えません。`summary`だけで内容が分かるLabelにします。

## 25. Desktop Section Specification

| Section | Text Position | Visual Position | Layout | Density |
|---|---|---|---|---|
| Hero | Left | Right | 2column + Info Grid | Medium |
| Problem / Solution | Left / Right | なし | 2column comparison | Text-heavy |
| Production Points | Horizontal sequence | Number Accent | 3-step flow | Medium |
| Information Architecture | Above / within map | CSS Page Map | 1column diagram | Light |
| Product UI | Alternating | Large | Lead + alternating sections | Visual-heavy |
| Design | Left | Right | 2column | Medium |
| Responsive | Above comparison | Desktop / Mobile pair | Comparison | Visual-heavy |
| Implementation & Accessibility | Left / Right | CONTACT supplement below | 2column + supplement | Text-heavy |
| Performance | Above | 2 Decision Flows | 1column flows | Medium |
| Challenges | Within cards | なし | 3 Main + 2 More Details | Text-heavy |
| Project Scope | Within categories | なし | 4 categories | Compact |
| Final CTA | Center or Portfolio standard | なし | Focused CTA | Light |

## 26. Mobile Section Specification

Mobileはすべて`Text → Visual`を基本とします。

- HeroはCopyとCTAを先にし、Visualを独立表示
- Problem → Solutionを順に読む
- Production Pointsは01 → 02 → 03
- Page MapはVertical
- Product UIはFeatureごとにText → Mobile Preview
- Designは説明 → Logo / Color / Typography → UI
- Responsive比較はSection説明 → Desktop → Mobile
- Implementation → Accessibility → CONTACT State
- PerformanceはStepを縦方向へ並べる
- ChallengesはMain 3件を常時表示し、More Detailsを後置
- Project ScopeはPlanning → Design → Development → Publication
- Final CTAはLive Demoを先にする

横並びのDesktop Layoutを縮小して残さず、DOM順と視覚順を一致させます。

## 27. Recommended Implementation Order

Portfolio本体のBlocker解消後は、次の順で進めます。

1. **Repository / Design System確認**
   - Routing、Template、Token、Component、Asset配置、Deploymentを確認
2. **Page Route / Base Layout**
   - Detail PageのRoute、Heading、Container、Section Rhythmを設定
3. **Hero / Project Info / CTA**
   - Main Visual、Official Copy、Disclosure、External Linkを配置
4. **Problem / Production Points / Information Architecture**
   - Text主体の前半Sectionを構築
5. **Product UI / Design / Responsive**
   - Responsive ImageとVisual-heavy Sectionを構築
6. **Implementation / Accessibility / CONTACT**
   - 実装範囲とState Designを配置
7. **Performance / Challenges / Scope / Final CTA**
   - Decision Flow、Main Challenge、More Detailsを配置
8. **SEO / Accessibility / Performance QA**
   - Metadata、Heading、Alt、Keyboard、Focus、Image Loading、各Viewportを検証

## 28. Pre-implementation Blockers

VISTA側のCopyとAssetには、実装開始を止める不足はありません。以下はPortfolio本体側で未確認のBlockerです。

### Blocker 01｜Portfolio Repository Path

- 正式Project Root
- Repository URL
- Branch
- Asset格納規則
- Build / Deployment方法

### Blocker 02｜Portfolio Design System

- Color Token
- Typography
- Spacing
- Grid / Container
- Button / Link / Card Component
- Focus Style
- Dark / Light Themeの有無

### Blocker 03｜既存Page Structure

- Route命名
- Header / Footer
- Breadcrumb
- Page Metadata生成方法
- External Link Policy

### Blocker 04｜Portfolio Card Specification

- Image Ratio
- Card高さ
- Description行数
- Tag表示数
- CardからDetailへのLink範囲

### Blocker 05｜Detail Page Template

- Hero Templateの有無
- Section Component
- Image Caption
- Full-width Visual
- `details`の既存Style
- Responsive Breakpoint方針

これらはVISTA Asset不足ではなく、Portfolio本体の実装環境が未確認であることによるBlockerです。

## 29. Design Handoff Checklist

- [ ] 正式12 Sectionを維持
- [ ] Hero付近で`自主制作 / 架空サービス`を表示
- [ ] Live DemoをPrimary、GitHubをSecondaryにする
- [ ] Long-form LinkをHeroへ置かない
- [ ] Problem / SolutionでProduct UIを先出ししない
- [ ] Production Pointsを01 → 02 → 03のProcessとして表示
- [ ] Product UIを同サイズGridにしない
- [ ] Overview DashboardをLead Visualにする
- [ ] MobileはText → Visualの順にする
- [ ] Product UIをCropしない
- [ ] Responsive比較はHero / Product UI / CONTACTの3件まで
- [ ] CONTACTに`BackendなしのUI State Design`を明記
- [ ] Performanceは2つのDecision Flowを中心にする
- [ ] Main Challenges 3件を常時表示
- [ ] 架空Caseの数値を本人の成果として見せない
- [ ] VISTA BlueでPortfolioのPrimary Colorを置換しない
- [ ] Below-the-fold ImageをLazy候補とする
- [ ] Long-form全文を転載しない

## 30. Next Recommended Step

次工程は**Portfolio本体の既存Design System / Repository構造の確認**を先に行います。

Portfolio側のRoot、Routing、Design Token、既存Component、Card比率、Detail Templateが不明なままPencil Designへ進むと、再設計が必要になる可能性があります。これらを確認した後に、Portfolio詳細ページのPencil Designへ進む方針です。

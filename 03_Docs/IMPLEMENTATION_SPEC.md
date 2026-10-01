# VISTA Implementation Specification

## 1. Document Status

- Project: VISTA
- Document: HTML / CSS / JavaScript実装前仕様
- Status: `APPROVED FOR IMPLEMENTATION PREPARATION`
- Scope: URL / href、Header Current、CONTACTフォーム、Privacy / Consent、Validation、Global Footer、Screen Map Status、Pricing公開方針、公開形態、正式実装対象ページ
- Canonical project root: `/Users/natsumikato/Documents/ポートフォリオ/VISTA_PROJECT_DOWNLOAD`
- Pencil source: `/Users/natsumikato/Documents/ポートフォリオ/VISTA_PROJECT_DOWNLOAD/02_Pencil/Vista.pen`
- Last source audit: 主要5ページ Desktop / Mobile完成後の横断監査結果を基準とする

この文書は実装用の仕様書であり、Pencilデザイン、料金、契約条件、サービス仕様を新規定義するものではない。未確定事項は推測で補完せず、明示されたTBD / BLOCKED状態を維持する。

### 1.1 Publication Type

Status: `DECIDED — PORTFOLIO FICTIONAL SAAS`

VISTAは、Webデザインポートフォリオ掲載を目的とする架空BtoB SaaSサイトとして公開する。企画、UIデザイン、Web実装の事例であり、実在するSaaSのProduction Siteではない。

提供しないもの：

- TrialおよびTrial申込み
- Login / Account機能
- 決済、自動課金、支払機能
- 実契約、契約期間、解約手続き
- サービス資料Download
- CONTACT Formによる実データ送信・保存

今後Metadataを作成する場合も、実在サービスとして運用中であると誤認させる表現を使用しない。

## 2. Source of Truth

矛盾がある場合は次の順で判断する。

1. 現在の承認済みユーザー指示
2. `AGENTS.md`
3. `04_Skills/vista-pencil-production/SKILL.md`
4. `03_Docs/DESIGN_RULES.md`（存在する場合）
5. `03_Docs/HANDOFF.md`
6. 本書 `03_Docs/IMPLEMENTATION_SPEC.md`（実装判断の詳細）
7. `03_Docs/IMAGE_ASSETS.md`
8. 現在のPencilファイル内の正式画面・変数・コンポーネント

本書は、現在のユーザー指示で確定した実装判断を記録する。プロジェクト全体の正本優先順位は`AGENTS.md`に従う。PencilのNode ID、画面名、正式素材の実在確認には現在のPencilファイルを正本とする。

## 3. Formal Implementation Pages and URLs

以下の5ページを正式な実装対象とする。

| Page | Formal URL | Static HTML path |
|---|---|---|
| TOP | `/` | `/index.html` |
| FEATURES | `/features/` | `/features/index.html` |
| CASE STUDIES | `/case-studies/` | `/case-studies/index.html` |
| PRICING | `/pricing/` | `/pricing/index.html` |
| CONTACT / DEMO | `/contact/` | `/contact/index.html` |

静的HTML実装では、原則として次の構成を使用する。

```text
/
├── index.html
├── features/
│   └── index.html
├── case-studies/
│   └── index.html
├── pricing/
│   └── index.html
└── contact/
    └── index.html
```

上表のFormal URLはサイト内の論理Routeを示す。GitHub Pages Project SiteではBase Path `/vista-progress-saas/`配下に展開されるため、HTML実装はページ階層を基準とした相対Pathを使用する。

- TOP：`./`、`./features/`、`./case-studies/`、`./pricing/`、`./contact/`
- 下層ページ：`../`、`../features/`、`../case-studies/`、`../pricing/`、`../contact/`
- TOP Asset：`./05_Assets/...`または`./assets/...`
- 下層Asset：`../05_Assets/...`または`../assets/...`

## 4. Formal Pencil Frames

### 4.1 Main pages

| Page | Desktop | Mobile |
|---|---|---|
| TOP | `v7bCmP` | `UeK3y` |
| FEATURES | `q5zyY` | `GfF2G` |
| CASE STUDIES | `Z4GDKE` | `YQHYq` |
| PRICING | `Aoc03` | `gKC7C` |
| CONTACT / DEMO | `zDVVY` | `Zb8tN` |

### 4.2 CONTACT / DEMO states

Desktop:

| State | Node ID |
|---|---|
| Default | `zDVVY` |
| Error | `kIByV` |
| Loading | `v7a5dm` |
| Success | `z7mgQU` |

Mobile:

| State | Node ID |
|---|---|
| Default | `Zb8tN` |
| Focus | `sSA72` |
| Error | `KUvMR` |
| Loading | `Rodni` |
| Success | `ULcnY` |
| Menu Open | `vyzPr` |

## 5. Formal Review Widths

正式基準幅：

- Desktop: `1366px`, `1440px`
- Mobile: `375px`, `390px`

実装中は必要に応じて中間幅も確認する。ただし、デザイン照合と完了判定では上記4幅を必須とする。

## 6. Header Navigation and href

### 6.1 Global navigation

| Element | Label | href |
|---|---|---|
| Logo | VISTA Logo | `/` |
| Navigation | 機能 | `/features/` |
| Navigation | 導入事例 | `/case-studies/` |
| Navigation | 料金 | `/pricing/` |
| Demo / inquiry CTA | デモを依頼する | `/contact/` |

- Desktop / Mobile Closed / Mobile Openで同じURLを使用する。
- Pencilへhrefを設定しない。hrefは実装側のみで付与する。
- 公開実装ではTrial関連CTAを使用しない。`無料で試す`、`14日間無料で試す`を新規追加しない。

### 6.2 Mobile Menu formal specification

表示項目は次の4件に限定する。

| Label | href |
|---|---|
| 機能 | `/features/` |
| 導入事例 | `/case-studies/` |
| 料金 | `/pricing/` |
| デモを依頼する | `/contact/` |

非表示：

- Login
- サービス資料
- Trial CTA

### 6.3 Header Current state

| Page | Current navigation | Implementation rule |
|---|---|---|
| TOP | なし | Logo / Homeとして扱う。Navigation Currentを設定しない |
| FEATURES | 機能 | 機能リンクをCurrentにする |
| CASE STUDIES | 導入事例 | 導入事例リンクをCurrentにする |
| PRICING | 料金 | 料金リンクをCurrentにする |
| CONTACT / DEMO | なし | 通常Navigationに対応項目がないためCurrentなし |

- Header CTAをCurrent風に変更しない。
- DesktopとMobile Openで同じCurrent判定を使用する。
- Currentページのリンクには可能な限り`aria-current="page"`を付与する。
- TOPおよびCONTACT / DEMOでは、通常Navigationに`aria-current`を付与しない。
- Pencilへ新しいHeader Variantを追加しない。

## 7. Page and CTA Routing

### 7.1 TOP page

| Location | CTA | href |
|---|---|---|
| Hero | デモを依頼する | `/contact/` |
| Hero | 機能を見る | `/features/` |
| Features | 機能を詳しく見る / すべての機能を見る | `/features/` |
| Case Studies | 導入事例をすべて見る | `/case-studies/` |
| Pricing | 料金・機能を詳しく見る | `/pricing/` |
| Final CTA | デモを依頼する | `/contact/` |
| Final CTA | お問い合わせ | `/contact/` |

### 7.2 Shared Final CTA

TOP / FEATURES / CASE STUDIES / PRICINGのFinal CTAは以下とする。

| CTA | href |
|---|---|
| デモを依頼する | `/contact/` |
| お問い合わせ | `/contact/` |

CONTACT / DEMOにはFinal CTAを実装しない。

### 7.3 Pricing Card CTA

| Plan | CTA | Destination |
|---|---|---|
| Starter | プランを見る | `/pricing/` |
| Team | デモを依頼する | `/contact/` |
| Business | 相談する | `/contact/` |

Starter CTAの例外：

- TOP上では`/pricing/`へリンクする。
- PRICINGページ内では自ページリンクを無理に付与しない。
- PRICINGページ内のStarter CTAは、非リンク表示または将来承認された同ページAnchorのいずれかとする。
- 現時点でAnchorを新設しない。

### 7.4 Link implementation rules

- ページ遷移は通常の`<a href="...">`を使用する。
- 見た目がButtonでもページ遷移なら`button`ではなく`a`を使用する。
- Form Submitだけは`<button type="submit">`を使用する。
- 未確定URL、架空URL、`#`だけの仮リンクを本番仕様として追加しない。

## 8. CONTACT / DEMO Form Specification

### 8.1 Field order

以下の順序をDesktop / Mobile共通とする。

1. お問い合わせ種別
2. 会社名
3. お名前
4. メールアドレス
5. ご相談内容
6. Submit

### 8.2 Inquiry type options

正式選択肢：

1. `デモを依頼したい`
2. `導入・料金について相談したい`
3. `その他のお問い合わせ`

未選択状態は空値として扱い、選択肢のいずれかを選ぶまでRequired Errorの対象とする。

### 8.3 Required fields

以下の5項目をすべて必須とする。

- お問い合わせ種別
- 会社名
- お名前
- メールアドレス
- ご相談内容

実装ルール：

- 対応するHTML form controlへ`required`を付与する。
- 視覚上の`必須`表示をDesktop / Mobileで維持する。
- `label`とform controlを`for` / `id`で関連付ける。
- Error時は`aria-invalid="true"`を使用する。
- Error Messageは可能な限り`aria-describedby`で対応Fieldと関連付ける。

### 8.4 Common HTML / CSS structure

Pencil上のInput / Select / Textareaはローカル構成であり、正式Reusable Componentではない。実装では共通クラスへ整理してよい。

推奨クラス：

```text
.form-field
.form-label
.form-required
.form-input
.form-select
.form-textarea
.form-error
.form-submit-error
```

- この整理をPencilへ逆輸入しない。
- Pencilへ新規Componentを作らない。
- 見た目は正式CONTACT Desktop / Mobileフレームを基準とする。

## 9. Form Validation and State Copy

以下を実装開始時の正式UIコピー候補として使用する。

| Case | UI copy |
|---|---|
| Common Required | `入力してください。` |
| Select Required | `お問い合わせ種別を選択してください。` |
| Email format | `メールアドレスの形式を確認してください。` |
| Submit Error | `送信できませんでした。時間をおいて再度お試しください。` |
| Success Heading | `お問い合わせを受け付けました。` |
| Success Description | `内容を確認のうえ、担当者よりご連絡します。` |

実装ルール：

- Required Errorは対象Field直下に表示する。
- SelectにはSelect専用コピーを使用する。
- Emailが空の場合はCommon Required、値があるが形式不正の場合はEmail formatを使用する。
- Submit ErrorはField Errorとは別領域で表示する。
- Error表示後もユーザー入力を保持する。
- Loading中はButton幅とForm layoutを変更しない。
- Loading中は多重送信を防止し、Submit Buttonを一時的に操作不可にする。
- Form全体またはSubmit周辺へ適切に`aria-busy="true"`を付与する。
- Successは別ページへ遷移せず、PencilどおりForm Surface内のInline Completionへ切り替える。
- Success状態に追加CTAを設けない。
- 返信期限、営業日、返答保証など未確認事項を追加しない。

CONTACTはDevelopment UIとしてのみ維持する。External Endpoint、Formspree、Firebase、Email API、Google Forms、`mailto:`、Database保存は接続しない。通常Submitは実送信成功を装わず、現在のLoading後にSubmit Errorへ戻る挙動を維持する。Successは開発用State Previewに限定する。

## 10. Form Error Colors

CONTACT / DEMO Form Errorでは、既存の以下を限定的に再利用する。

- `$color-risk`
- `$color-risk-soft`

適用範囲：

- Error Border
- Error Message
- Submit Error
- 必要なError背景

禁止事項：

- RISK Status Badgeの既存仕様を変更しない。
- CONTACT Form以外へError用途を横展開しない。
- 新しいError Color Tokenを現時点では追加しない。
- 既存Token名を変更しない。

Web実装時はPencil Tokenに対応するCSS Custom Propertyを使用し、個別の赤色を追加しない。

## 11. Privacy / Consent

Status: `DECIDED FOR CURRENT PORTFOLIO SCOPE`

CONTACT FormはDevelopment UIのみで、個人情報を送信・保存しない。この公開範囲では次を追加しない。

- Consent Checkbox
- Form送信用Privacy同意
- Privacy / Termsへの仮リンク
- 推測したPrivacy / Terms本文

ポートフォリオサイト全体としてPrivacy Policyが必要かは、Production Domain / Hostingとポートフォリオ全体の運用方針を確定する後工程で判断する。正式本文とURLは現在も未定義であり、勝手に作成しない。

## 12. Pricing and Commercial Copy

Status: `DECIDED — FICTIONAL SERVICE DESIGN EXPRESSION`

現在表示済みの次の内容は、架空SaaSのサービス設計表現として維持する。

- Starter / Team / Business
- 月額価格
- ユーザー数
- Feature
- 税別注記
- Contact CTA

実サービスを提供しないため、次は非提供・実装不要とする。

- 14日間無料TrialおよびTrial申込み
- 自動課金、支払方法、決済
- 実契約、契約期間、解約条件
- 初期費用の詳細条件
- Business契約詳細

実際に決済、契約、Trial開始ができると誤認させる機能やコピーを追加しない。確定済みのPlan Name / Price / User Limit / Feature Comparisonは変更しない。

## 13. Global Footer

Status: `DECIDED — NOT REQUIRED FOR CURRENT PORTFOLIO SCOPE`

現在：

- 正式Global Footer Componentなし
- 5ページとも正式Footer未実装

今回の実装仕様：

- Global Footerは現段階では実装対象外。
- Footerを勝手にデザイン・追加しない。

現在のPencilに存在せず、ページ構造上の破綻もなく、ポートフォリオ用架空SaaSとして必須ではないため、現時点では追加しない。将来、ポートフォリオ全体のPrivacy / Copyright導線が必要になった場合のみ別工程で再検討する。

## 14. Screen Map Status

Screen Map Node ID: `UtzPg`

現在の状態：

| Page | Current status |
|---|---|
| TOP | `IN PROGRESS` |
| FEATURES | `PLANNED` |
| CASE STUDIES | `PLANNED` |
| PRICING | `PLANNED` |
| CONTACT / DEMO | `PLANNED` |

デザイン実態：全5ページの正式Desktop / Mobileデザインは完成済み。

更新候補：

| Page | Proposed semantic status |
|---|---|
| TOP | `DESIGN COMPLETE` |
| FEATURES | `DESIGN COMPLETE` |
| CASE STUDIES | `DESIGN COMPLETE` |
| PRICING | `DESIGN COMPLETE` |
| CONTACT / DEMO | `DESIGN COMPLETE` |

現状のScreen Map内で確認できた正式Status値は以下のみ。

- `PLANNED`
- `IN PROGRESS`

`DESIGN COMPLETE`は既存の正式Status値として存在しないため、Screen Mapを更新しない。新しいStatusの追加、既存Statusの流用、`IN PROGRESS`への一括変更は行わない。

Status: `UPDATE BLOCKED — STATUS VOCABULARY DECISION REQUIRED`

次回、Status語彙を正式決定した後にのみScreen Mapを更新する。

## 15. Responsive Implementation Rules

- DesktopとMobileの正式フレームは単純縮小ではなく、それぞれを実装基準とする。
- `1366px`, `1440px`, `375px`, `390px`で必ず確認する。
- 中間幅ではHeader、2カラム、Table、Card、Form、Node背景、Product UIの破綻を確認する。
- Desktop / Mobileの切替Breakpointは実装技術に応じて決めてよいが、正式4幅の表示と矛盾させない。
- PRICING Mobile ComparisonはPencilどおり横スクロールなしで成立させる。
- Mobile Product UIは正式Mobile Preview PNGを使用し、Desktop UIを無理に縮小しない。

## 16. Explicitly Prohibited Changes

実装前および実装中に、承認なしで以下を変更しない。

- Pencilデザイン
- 正式画像
- Pricing Card内容
- Header ComponentのPencilデータ
- Form Design
- 正式本文コピー
- 料金・契約・Trial条件
- 新規Pencil Variable
- 新規Pencil Component
- Pencil上のhref
- Privacy / Termsの架空文言・URL
- Global Footerの新規デザイン
- 未承認の同ページAnchor

## 17. Pre-implementation Blockers and Decisions

### Implementation preparation may proceed

- 5ページのHTML構造
- Header / Navigationの共通実装
- Current判定
- CSS Token / Typography / Layout基盤
- 正式画像の参照
- CONTACT FormのUIとClient-side Validation表示

### Current portfolio publication decisions

- VISTAはポートフォリオ用架空SaaSであり、実サービスではない
- CONTACTはDevelopment UIのみとし、本番送信先を接続しない
- Trial / Login / Account / Payment / 実契約機能を提供しない
- Pricingは架空サービス設計として表示する
- Global Footerは現時点で追加しない

### Still pending for publication preparation

- Metadata copy / OGP方針
- favicon HTML補完
- robots / sitemap / 404
- Performance最適化
- ポートフォリオ全体としてのPrivacy Policy要否
- Screen MapのStatus語彙

## 18. Implementation Start Checklist

- [ ] 正式5ページとURL構成を使用する
- [ ] Pencilの正式Node IDを参照する
- [ ] Header Navigation hrefを共通化する
- [ ] ページごとのCurrent判定と`aria-current="page"`を実装する
- [ ] Button遷移とForm Submitを意味的に分ける
- [ ] 4つの正式確認幅で検証する
- [ ] 正式画像のみを使用する
- [ ] CONTACT Field順・Required・Validation copyを維持する
- [ ] Error Colorの利用範囲をCONTACT Form内に限定する
- [ ] CONTACTを実送信可能にせず、Development UIとして維持する
- [ ] Trial / Login / Account / Payment / 実契約機能を追加しない
- [ ] Footerを勝手に追加しない
- [ ] Screen Mapへ未承認Statusを追加しない

## 19. GitHub Pages Hosting

Status: `DECIDED — PROJECT SITE PREPARATION COMPLETE`

- Hosting：GitHub Pages
- Repository：`Coconattsu0723/vista-progress-saas`
- Repository URL：`https://github.com/Coconattsu0723/vista-progress-saas.git`
- Pages方式：Project Site
- Base Path：`/vista-progress-saas/`
- Production URL予定：`https://coconattsu0723.github.io/vista-progress-saas/`
- 公開Source予定：`main` / `/(root)`
- Internal Path：Project Site対応の相対Pathへ変更済み
- `.nojekyll`：Project Rootに配置
- Git：Project Rootで初期化、Default branch `main`、`origin`設定済み
- Commit / Push / GitHub Pages公開設定：未実施

Metadata、canonical、OGP meta、robots、sitemap、404、Performance最適化は本工程の対象外として未変更。

## 20. Next Step

次工程候補は、**初回Commit前の最終Git監査 → Initial Commit → Push**とする。

本書更新時点では、`git add`、commit、push、GitHub Pages Settings変更を実行しない。

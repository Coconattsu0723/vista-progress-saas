# VISTA｜制作会社向け進捗可視化SaaS

## Portfolio Summary

制作会社の進行情報がSlack・Figma・Backlogなどに分散し、確認待ちや停滞を見つけにくい課題をテーマにした、架空BtoB SaaSの自主制作です。課題設定、情報設計、Product UI、Webデザイン、HTML・CSS・JavaScript実装、アクセシビリティ、パフォーマンス改善、GitHub Pages公開まで一貫して担当しました。

## Project

- **Project:** VISTA
- **Category:** 制作会社向け進捗可視化SaaS
- **Type:** 自主制作 / 架空サービス / Multi-page Website
- **Scope:** 企画、情報設計、Product UI、Web UI、実装、公開・検証
- **Tech:** HTML5 / CSS3 / Vanilla JavaScript / Git / GitHub Pages
- **Design Tools:** Pencil / Figma
- **Live Demo:** [VISTA](https://coconattsu0723.github.io/vista-progress-saas/)
- **GitHub:** [Coconattsu0723/vista-progress-saas](https://github.com/Coconattsu0723/vista-progress-saas)

## Overview

VISTAは、制作会社の進捗可視化をテーマにした架空のBtoB SaaSです。複数案件にまたがる確認待ちや停滞を見つけ、対応が必要な状況を短時間で判断できるサービスとして設計しました。

TOP、FEATURES、CASE STUDIES、PRICING、CONTACT / DEMOの5ページと、管理画面を想定したProduct UIを制作しています。

## Background / Problem

制作会社では、連絡はSlack、デザイン確認はFigma、タスク管理はBacklogというように、進行情報が複数のToolへ分散しやすくなります。

個別のToolを見れば各情報は確認できます。しかし案件を横断すると、誰の確認で止まっているのか、どの案件を優先すべきか、どこに納期リスクがあるのかを一度に把握しにくい状態が生まれます。状況確認のやり取りが増え、停滞への気づきも遅れます。

そこで、タスクを増やして管理するのではなく、**制作を止めている要因を見つけるSaaS**をテーマに設定しました。分散した情報をひとつの視点に集め、次に対応すべき案件を判断できることをVISTAの役割としています。

## Goal

サイトで達成したいことを3点に絞りました。

1. 制作現場の課題とVISTAの価値を短時間で理解できる
2. Product UIを通して、導入後の利用場面を想像できる
3. BtoB SaaSとしての信頼感を保ちながら、情報を読みやすく伝える

機能の多さではなく、`課題を知る → 解決方法を理解する → 利用場面を想像する`という理解の流れを重視しています。

## Target

想定利用者は、Web制作会社やCreative Agencyで制作進行に関わるPM、Director、Designerです。特定の年齢や企業規模には限定せず、複数案件の進捗と確認状況を管理するTeamを対象としました。

## Concept

中心価値は「**確認待ちや停滞を見つける**」です。

Hero Copyは、その価値を利用者側の変化として表現しました。

> 止まっている案件が、<br>
> ひと目でわかる。

Heroに機能名を並べるのではなく、「これまで見えなかった停滞が見える」という業務上の変化をMain Copyにしています。周囲のNode / Flow Networkは、分散した進行情報がひとつの視界へ集まる構造を表現するものです。

装飾はCopyとProduct Mockupを支える強さに抑え、サービスの価値を最初の画面で理解できるVisual Hierarchyにしました。

## Information Architecture

サービス概要、機能比較、利用場面、料金では、読者が求める情報の深さが異なります。そのため1ページLPに集約せず、目的ごとに5ページへ分けました。

- **TOP:** 課題からCTAまでをつなぎ、サービス全体を短時間で伝える
- **FEATURES:** Waiting Inbox、Risk Report、Flow Analyticsへの理解を深める
- **CASE STUDIES:** 架空の制作案件を通して、具体的な利用場面を想像できるようにする
- **PRICING:** 3プランの対象と機能差を比較しやすくする
- **CONTACT / DEMO:** 検討後の最終CTAとして、デモ依頼を想定したForm UIを提示する

TOPでは`課題 → 解決 → 機能 → 導入イメージ → 料金 → CTA`の順を維持し、詳細を知りたい読者を各ページへ導きます。

CASE STUDIESのNALU Inc.「42%」、ASTERIA FOODS「55%」、KINARI「3件」は、利用イメージを伝えるための架空設定です。PRICINGのStarter、Team、Businessもデザイン上の設定であり、実際の契約・決済には対応していません。

## Design Approach

### Product UIを主役にする

抽象的なイラストだけでは、何を確認できるサービスなのかが伝わりにくいと考えました。そこで管理画面を想定したProduct UIを主要Visualにし、Copyと画面を対応させています。

### 装飾より情報階層を優先する

SaaSらしさを装飾量でつくるのではなく、見出し、状態、次の行動が順に見えることを優先しました。Node表現や背景Graphicは、CopyやProduct UIより前に出ないレイヤーへ置いています。

### VISTA Blueを状態理解のAccentにする

Light BackgroundとDark Textを基本に、VISTA BlueはCurrent、CTA、重要状態へ限定しました。色を役割と結び付けることで、画面を追ったときに判断箇所を見つけやすくしています。

### Wide Whitespaceで信頼感をつくる

情報を詰め込まず、Section間とCopy周辺に広い余白を設けました。BtoB SaaSとしての落ち着きを保ちながら、堅くなりすぎない明るい印象を目指しています。

## Product UI

機能説明を文章だけで終わらせず、実際の利用画面を想像できるよう、Overview Dashboard、Waiting Inbox、Risk Report、Flow Analytics、Project Detailを制作しました。

- **Waiting Inbox:** 案件を横断し、誰の確認で止まっているかを見る
- **Risk Report:** 停滞や納期遅延の兆しから、対応が必要な案件を見つける
- **Flow Analytics:** 工程ごとの滞留時間を俯瞰し、Team全体の流れを見る

各画面を単独の機能紹介にせず、確認待ち・リスク・制作フローを**ONE VIEW**で捉える考え方へつなげています。WebサイトとProduct UIで色、Badge、状態表現をそろえ、説明と利用画面が分離して見えないようにしました。

## Key Design Decisions

### 1. HeroでProduct UIを早く見せる

**Decision:** Main Copyの直後にProduct Mockupを配置しました。<br>
**Why:** 架空サービスでも、何を扱うProductなのかを最初の画面で具体的に理解できるようにするためです。

### 2. 課題から機能へ段階的につなぐ

**Decision:** TOPを`課題 → 解決 → 機能`の順に構成しました。<br>
**Why:** 機能名から説明を始めるより、なぜ必要なのかを理解した後のほうが、各機能の役割を判断しやすいためです。

### 3. Product UIを説明Visualとして使う

**Decision:** 各機能のCopyに対応する正式なProduct UIを設計しました。<br>
**Why:** 装飾画像ではなく、表示情報と状態からサービス価値を読み取れるVisualにするためです。

### 4. Case StudiesとPricingを独立させる

**Decision:** 利用場面とプラン比較をTOPから分けました。<br>
**Why:** 全体理解と比較検討で必要な情報量を分け、読者が目的に応じて深掘りできるようにするためです。

### 5. Mobileでも情報の優先度を維持する

**Decision:** Desktopを縮小せず、Content順、Product UI、Case Card、Pricing、CTAを再構成しました。<br>
**Why:** 画面幅が変わっても、課題から次の行動までの理解順を崩さないためです。

## Responsive Design

Mobile Firstで375 / 390pxを基準にし、広い画面で必要なLayoutと情報量を段階的に加えました。単純縮小ではなく、Product UIはMobile Previewへ切り替え、Case CardとPricingは1カラムで読める順序へ再構成しています。

NavigationはMobile Menuへ切り替え、FormやCTAも操作しやすい幅を確保しました。Hero Networkは画面幅別のSourceを用意し、中間幅でもCopyやMockupと干渉しない表示にしています。

確認幅：375 / 390 / 430 / 600 / 768 / 900 / 1000 / 1024 / 1366 / 1440px

## Implementation

デザインした5ページを、HTML5、CSS3、Vanilla JavaScriptによるMulti-page Static Siteとして自ら実装しました。Framework、Build Tool、Package Managerは使用していません。

Responsive Layout、Navigation、Mobile Menu、CONTACTのValidationとState、Accessibilityを実装し、Gitで管理してGitHub Pagesへの公開まで確認しています。

## Contact Form State Design

VISTAは架空サービスで、CONTACTにBackendやExternal Endpointはありません。存在しない送信処理をあるように見せないため、通常操作では架空の受付完了を表示しない設計にしました。

通常Submitは`Validation → Loading → Submit Error`へ遷移します。Successは`?state=success`から確認するDevelopment Previewのみです。入力情報は送信・保存されません。

Login、Account、14-day Trial、Payment、実契約も提供していません。

## Accessibility

マウス以外でも主要導線を利用でき、Formの状態変化がScreen Readerにも伝わることを基準にしました。

- Mobile MenuをKeyboardとEscapeで操作でき、閉じた後は元の位置へFocusを戻す
- Skip Linkと`focus-visible`で、移動先と現在位置を認識しやすくする
- Error発生時は最初の対象FieldへFocusを移し、MessageとFieldを関連付ける
- Loadingや結果を視覚表示だけにせず、支援技術へ通知する

補足として、`aria-current`、`aria-invalid`、`aria-describedby`、`aria-busy`、`aria-live`を状態に応じて使用しています。各ページの`h1`は1件とし、意味のある画像と装飾画像の代替Textも分けました。

## Performance

### Before

初期監査時、TOPの初期画像転送量は約2.67MBでした。

### Problem

CSSで片方を非表示にしてもDesktop / Mobile画像が両方Downloadされていました。大きなProduct UIとCase Cover、Google Fontsの`@import`による遅い発見経路も初期表示の負担になっていました。

### Action

- Below-the-fold画像へLazy Loadingを設定
- `picture` / `source`で幅に合う画像だけを取得
- Hero Mockupへ800 / 1280px派生と`srcset`を設定
- Waiting InboxとRisk Reportへ1440px派生を採用
- Case Coverへ1296px派生を採用
- Google FontsをHTML `head`から直接読み込み、`preconnect`を追加

### Result

Production確認時のTOP初期画像転送量は、参考値で約128〜178KBでした。計測環境と条件に差があるため、厳密なBenchmarkや割合としては扱っていません。

軽量化はFileを作ることではなく、実測結果で採否を決めました。Flow Analyticsの2400px派生はVisual Qualityに問題がなかった一方、MasterよりTransferが約59%増えたため不採用としています。

## SEO / Publication

各ページのMetadata、Canonical URL、OGP、Twitter Cardを整備しました。`robots.txt`、`sitemap.xml`、Custom 404、faviconも含め、GitHub Pagesでの公開まで一通り対応しています。

## QA

Productionでは、正式5ページとCustom 404を対象に37のResponsiveケースを検証しました。

Console Error、Runtime Exception、Asset 404、Broken Image、Font Failure、Horizontal Overflowがないことを確認しています。あわせてRouting、Mobile Menu、Form State、Responsive Imageの選択も実機相当のBrowser表示で確認しました。

## Challenges & Solutions

### 1. Hero NetworkのDesktop / Mobile重複取得

**Challenge:** CSSで片方を非表示にしても、表示されないNetwork画像までDownloadされていました。

**Investigation:** Cacheを無効にして幅ごとのRequestを調べ、中間幅では背景画像を含む複数Assetが取得されることを確認しました。

**Solution:** Hero Networkを単一の`picture`へまとめ、画面幅ごとの`source`を明示しました。

**Result:** 各幅で必要な画像だけを取得する構成になり、Visualを保ったまま重複Requestを解消しました。

### 2. Product UIの軽量化と視認性

**Challenge:** 大きなMaster画像は転送量が多い一方、UI内の文字や細線を損なう圧縮は避ける必要がありました。

**Investigation:** Waiting Inbox、Risk Report、Flow Analyticsを候補Sizeで書き出し、Visual QualityとTransferを比較しました。

**Solution:** WaitingとRiskは1440px派生を採用。`VISTA_UI_FLOW_ANALYTICS_2400.png`はVisual Qualityに問題がなくても、MasterよりTransferが約59%増えたため不採用としました。

**Result:** 作ったAssetを一律に使わず、実測上の効果がある画像だけをProductionへ反映しました。

### 3. GitHub Pages Project Site Path

**Challenge:** 公開先が`/vista-progress-saas/`配下のため、Root Siteと同じPath前提では下層ページのAssetやNavigationが解決できませんでした。

**Investigation:** TOPと各下層ページから、CSS、JavaScript、画像、Linkの解決先を確認しました。

**Solution:** Project Siteの階層を基準に相対Pathを整理しました。

**Result:** 正式5ページのRoutingとAssetが、Production Base Path配下で正しく表示されました。

### 4. Nested 404のAsset Path

**Challenge:** `/not-found-test/`のようなNested URLでは、404ページの相対AssetがMissing URL基準で解決され、CSSやLogoが読み込めませんでした。

**Investigation:** Root直下とNested URLで、Browserが要求するAsset URLを比較しました。

**Solution:** Custom 404へProduction Baseを追加し、Project Site Rootを基準に解決させました。

**Result:** Nested URLでも404ページのデザインとTOPへの導線を維持し、Documentは正しくHTTP 404を返しています。

### 5. Google Fontsの発見経路

**Challenge:** `@import`では、`HTML → base.css → Google CSS → Font`の順になり、Fontの発見が遅れていました。

**Investigation:** NetworkのRequest Initiatorを確認し、Google CSSがLocal CSSの読込後に見つかる構造を特定しました。

**Solution:** `@import`を廃止し、HTML `head`からStylesheetを直接読み込み、`preconnect`も追加しました。

**Result:** 発見経路が`HTML → Google CSS`へ短くなり、Local CSSと並行してFontを取得できる構成になりました。

## What I Focused On

### 1. 見た目の前に業務課題を定義する

機能や装飾から考え始めず、制作進行のどこで判断が遅れるのかを整理し、「停滞を見つける」という中心価値へつなげました。

### 2. Product UIまで含めてサービス体験をつくる

Marketing Siteと管理画面を別々に扱わず、Copy、状態表現、Product UIを対応させ、導入後の体験を想像できるようにしました。

### 3. 実装後も計測して判断する

見た目の確認だけで終えず、Responsive、Keyboard操作、画像Request、Transferを検証しました。改善案も実測し、効果がないAssetは採用しない方針です。

## Project Scope

- **Planning:** 企画 / 課題設定 / Target / Brand設計
- **Design:** Information Architecture / Copy / Product UI / Web UI / Responsive Design
- **Development:** HTML / CSS / JavaScript / Accessibility / Performance
- **Publication:** Git / GitHub / SEO / GitHub Pages / Production QA
- **Tools:** Pencil / Figma / VS Code / Git / GitHub

## Links

- [Live Demo](https://coconattsu0723.github.io/vista-progress-saas/)
- [GitHub Repository](https://github.com/Coconattsu0723/vista-progress-saas)

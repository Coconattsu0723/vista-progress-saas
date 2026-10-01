# VISTA｜ポートフォリオ掲載用短縮コピー

> **Status: Official Master Copy**

このDocumentは、VISTAをポートフォリオ本体へ掲載する際に使用する正式な文章正本です。`Alternative Copy`を除く各Sectionを正式採用します。

## Portfolio UI Priority

- **一覧Card:** Title → 一言版 → Card Description → Skill Tags
- **作品詳細冒頭:** Title → Overview → Project Info
- **詳細本文:** Problem → Solution → Production Points → Design → Responsive → Implementation → Accessibility → Performance
- **面接:** 30秒版 → 60秒版

## Official｜Portfolio Card Title

VISTA｜制作会社向け進捗可視化SaaS

## Official｜Portfolio Card Description

制作進行情報の分散により、確認待ちや停滞を見つけにくい課題を可視化する、制作会社向けの架空BtoB SaaS。企画、Product UI、Webデザインから実装・公開まで一貫して制作しました。

## Official｜Portfolio Overview

Slack・Figma・Backlogなどに制作進行情報が分散し、確認待ちや停滞を横断して把握しにくい課題をテーマにした、制作会社向けの架空BtoB SaaSです。「止まっている案件が、ひと目でわかる。」を軸に、サービスの利用場面が伝わるProduct UIと5ページのWebサイトを設計。課題設定、情報設計、デザインからHTML・CSS・JavaScriptによる実装・公開まで担当しました。

## Official｜Detailed Intro

制作会社では、連絡、デザイン確認、タスク管理の情報がSlack・Figma・Backlogなどに分かれ、案件を横断すると確認待ちや停滞の場所を把握しにくくなります。この課題に対し、VISTAを「制作を止めている要因を見つける」架空の進捗可視化SaaSとして企画しました。中心価値を「止まっている案件が、ひと目でわかる。」というCopyに集約し、確認待ち・リスク・制作フローをひとつの視点で捉えるProduct UIを設計。TOP、FEATURES、CASE STUDIES、PRICING、CONTACT / DEMOの5ページへ役割を分け、企画、情報設計、Copy、Product UI、Webデザイン、Responsive、実装、公開後の検証まで一貫して担当しました。

## Official｜Problem

### 見出し

制作進行の情報が分散し、<br>
「どこで止まっているか」が見えにくい

### 本文

Slackで連絡し、Figmaでデザインを確認し、Backlogでタスクを管理する制作現場では、必要な情報が複数のToolへ分散します。個別には確認できても、案件を横断すると、誰の確認で止まり、何を優先すべきかを判断しにくいことを課題としました。

## Official｜Solution

### 見出し

確認待ちと停滞を、<br>
ひとつの視点で見つける

### 本文

複数案件の確認待ち、停滞リスク、工程ごとの滞留をまとめて捉え、次に対応すべき状況を見つけやすくする構成です。機能名の多さではなく、分散した制作進行をONE VIEWで理解できることをサービスの中心価値としました。

## Official｜Production Points

### Point 01｜業務課題から情報設計する

画面や機能から考え始めず、制作進行のどこで判断が遅れるのかを整理しました。「確認待ちや停滞を見つける」という中心価値を定め、課題から解決、機能、利用イメージへ進む情報設計に落とし込んでいます。

### Point 02｜Product UIまで含めてサービス体験を設計する

機能説明を文章や装飾画像だけで終わらせず、Waiting Inbox、Risk Report、Flow Analyticsなどの管理画面を設計しました。WebサイトのCopyと画面内の状態表現を対応させ、導入後の使い方を想像できる構成にしています。

### Point 03｜実装後も計測・検証して改善する

デザインを再現して終えるのではなく、複数画面幅での表示、Keyboard操作、画像Request、転送量を検証しました。軽量化案も実測値で比較し、効果のあるAssetだけを採用することで、見た目と表示負荷の両面を調整しています。

## Official｜Design

Clean Techを方向性に、明るい背景と広い余白でBtoB SaaSとしての信頼感を整えました。VISTA BlueはCTAや重要な状態に絞って使い、色の役割を明確化。装飾を増やすよりも見出し・状態・次の行動が順に伝わる情報階層を優先し、Product UIを主要Visualとして配置しています。

## Official｜Responsive

Mobile Firstで375 / 390pxを基準にし、Desktopを単純に縮小せず、Content順やProduct UI、Case Card、Pricingを再構成しました。情報の優先度を画面幅が変わっても維持し、Intermediate Widthでも表示と操作を検証しています。

## Official｜Implementation

デザインした5ページを、HTML、CSS、Vanilla JavaScriptによるMulti-page Siteとして自ら実装しました。Responsive、Navigation、Form Stateを組み込み、Gitで管理してGitHub Pagesへの公開まで行っています。

## Official｜Accessibility

マウス以外でも主要導線を利用できるよう、Mobile MenuのKeyboard・Escape操作とFocus移動を設計しました。Form Errorでは対象FieldへFocusを移し、Loadingや結果は視覚表示だけにせずScreen Readerにも状態を通知する構成です。

## Official｜Performance

Network監査でDesktop / Mobile画像の二重取得を発見し、`picture` / `source`とResponsive Assetで必要な画像だけを取得する構成へ変更しました。Google FontsもHTMLから直接読み込む形へ改善。候補画像は実測して採否を決め、Flow Analytics派生はMasterより重くなったため採用していません。

## Official｜Project Info

- **Project:** VISTA
- **Category:** 制作会社向け進捗可視化SaaS
- **Type:** 自主制作 / 架空サービス / Multi-page Website
- **Pages:** TOP / FEATURES / CASE STUDIES / PRICING / CONTACT（DEMO）
- **Role:** Planning / Information Architecture / Copy / Product UI / Web Design / Front-end / QA
- **Design Tools:** Pencil / Figma
- **Development:** HTML5 / CSS3 / Vanilla JavaScript / Git
- **Publication:** SEO / GitHub / GitHub Pages / Production QA

## Official｜Skill Tags

- BtoB SaaS
- Multi-page
- UI Design
- Product UI
- Responsive
- HTML / CSS
- JavaScript
- GitHub Pages

## Official｜Interview 30秒版

VISTAは、制作会社の進行情報がSlackやFigma、Backlogなどに分散し、確認待ちや停滞を見つけにくい課題をテーマにした架空のBtoB SaaSです。特に、機能説明を文章だけで終わらせず、管理画面のProduct UIまで設計した点を工夫しました。企画と情報設計からWebデザイン、HTML・CSS・JavaScript実装、GitHub Pagesでの公開と検証まで担当しています。

## Official｜Interview 60秒版

VISTAは、制作会社向けの進捗可視化SaaSを想定した自主制作です。制作現場では、連絡はSlack、デザイン確認はFigma、タスク管理はBacklogというように情報が分散し、案件を横断すると確認待ちや停滞を見つけにくくなります。そこで「確認待ちや停滞を見つける」を中心価値に設定し、「止まっている案件が、ひと目でわかる。」というCopyへ落とし込みました。デザインでは装飾より情報階層を優先し、実際の利用場面を想像できるよう、Waiting InboxやRisk ReportなどのProduct UIも自分で設計しています。TOPを含む5ページはHTML、CSS、Vanilla JavaScriptで実装しました。実装後はMobileからDesktopまでのResponsive表示、Keyboard操作、画像Requestを検証し、二重取得の解消やResponsive Assetの採用など、計測結果を基に改善しています。企画から公開後のProduction QAまで一貫して担当した作品です。

## Official｜一言版

制作進行の「止まり」を可視化する、制作会社向けSaaSサイト

採用理由：一覧で意味が早く伝わり、「止まり」という表現がVISTAの中心課題と一致するためです。Product UIや技術要素を前に出しすぎず、作品テーマを一読で理解できる表現を選定しました。

## Alternative Copy

以下はReferenceであり、正式採用文ではありません。

### Reference 01

確認待ちや停滞を横断して見つける、制作会社向け進捗可視化SaaS

### Reference 02

Product UIから実装まで設計した、制作会社向け進捗管理サイト

## Official｜Usage Notes

- VISTAはポートフォリオ用に設定した架空のBtoB SaaSです。
- CONTACTはUI / State DesignのDemoであり、入力情報を送信・保存しません。
- 通常Submitは`Validation → Loading → Submit Error`、Successは`?state=success`によるDevelopment Previewのみです。
- Login、Account、14-day Trial、Payment、実契約、External Endpointは提供していません。

## Official｜Links

- [Live Demo](https://coconattsu0723.github.io/vista-progress-saas/)
- [GitHub Repository](https://github.com/Coconattsu0723/vista-progress-saas)
- [Long-form Case Study](./PORTFOLIO_CASE_STUDY.md)

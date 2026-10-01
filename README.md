# VISTA

制作会社の進捗・確認待ち・停滞リスクをひとつの視界にまとめる、架空BtoB SaaSのマルチページサイトです。企画からブランド、UI、Webデザイン、実装、公開までを一貫して制作したポートフォリオ作品です。

## Live Demo

- [Live Demo](https://coconattsu0723.github.io/vista-progress-saas/)
- [GitHub Repository](https://github.com/Coconattsu0723/vista-progress-saas)

## Overview

VISTAは、制作会社における制作進行の可視化をテーマにした架空のBtoB SaaSです。

Slack、Figma、Backlogなどに分散しやすい進行情報をつなぎ、「確認待ちや停滞を見つける」ことを中心価値として設計しました。案件の状態だけでなく、誰の確認で止まっているか、どこに遅延リスクがあるかを判断しやすくすることを目指しています。

> 本作はWebデザインポートフォリオ用の架空サービスであり、実在するSaaSではありません。

## Problem

制作現場で起こりやすい、次の課題を想定しました。

- 案件の進捗や担当状況が見えにくい
- 確認依頼が複数のツールに散らばる
- どこで制作が止まっているか把握しづらい
- 停滞や納期リスクへの気づきが遅れる
- 進行確認のためのコミュニケーションコストが増える

## Solution

VISTAは、分散した制作進行情報をひとつの画面に集約し、確認待ち・停滞・制作フローを横断して可視化します。

情報を探す時間を減らし、優先して確認すべき案件や次に進める案件をチームで判断しやすい状態を設計しました。

## Core Features

### Waiting Inbox

複数案件の確認待ちを横断して一覧化し、誰の確認で止まっているかを把握しやすくします。

### Risk Report

案件の停滞や納期遅延の兆しを整理し、対応が必要な案件を早めに見つけられるようにします。

### Flow Analytics

制作工程ごとの滞留時間や案件の流れを俯瞰し、チーム全体の進行傾向を共有します。

3つの機能を「ONE VIEW」にまとめ、個別の課題と制作フロー全体を同じ視点で確認できる構成です。

## Pages

- [TOP](https://coconattsu0723.github.io/vista-progress-saas/) — サービス価値、課題、機能、導入事例、料金を横断して紹介
- [FEATURES](https://coconattsu0723.github.io/vista-progress-saas/features/) — 3つの主要機能とONE VIEWの考え方を紹介
- [CASE STUDIES](https://coconattsu0723.github.io/vista-progress-saas/case-studies/) — 制作現場を想定した3つの架空ケースを掲載
- [PRICING](https://coconattsu0723.github.io/vista-progress-saas/pricing/) — チーム規模別の架空プランと機能比較を掲載
- [CONTACT / DEMO](https://coconattsu0723.github.io/vista-progress-saas/contact/) — デモ依頼・導入相談を想定したUIと状態設計

## Design

- Clean Techを基調としたBtoB SaaSデザイン
- Light Background、Dark Text、VISTA Blueによる明確な情報階層
- Wide Whitespaceを活かした読みやすいレイアウト
- 実際の利用イメージが伝わるProduct UIを主役にした構成
- 装飾を抑え、確認待ちや停滞リスクの理解を優先
- 信頼感を保ちながら、堅くなりすぎないトーン

## Responsive

Mobileを含む各画面を個別に設計し、単純縮小ではなく、情報優先度・画像サイズ・CTA・余白を再構成しています。

確認幅：`375` / `390` / `430` / `600` / `768` / `900` / `1000` / `1024` / `1366` / `1440px`

Header、Product UI、Case Cover、Pricing Comparison、Contact Formなどを各幅で検証し、横スクロールや主要コンテンツの見切れがないことを確認しています。

## Accessibility

- Semanticな見出し階層と、各ページ1件の`h1`
- Main Contentへ移動するSkip Link
- Keyboard利用時の`focus-visible`
- Current Navigationの`aria-current`
- Mobile MenuのKeyboard操作、Escape、Focus移動・復帰
- 画像の用途に応じた`alt`と`aria-hidden`
- Form Label、`required`、`aria-invalid`、`aria-describedby`
- Loading／Success状態の`aria-busy`と`aria-live`

## Performance

- Below-the-fold画像へのLazy Loading
- `picture` / `source`によるDesktop・Mobile画像の二重Download解消
- Hero Product MockupのResponsive `srcset`
- Product UIのProduction derivative採用
- Case Coverの軽量な1296px派生を採用
- Google FontsのCSS `@import`を廃止
- `preconnect`とHTML `head`からのStylesheet直接読込

TOPの初期画像転送量は、初期監査時の約2.67MBから、Production確認時の約128〜178KBまで大幅に削減しました。計測環境や条件による差があるため、値は参考値です。

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Git / GitHub
- GitHub Pages
- Figma
- Pencil

## Implementation

- Frameworkを使用しないMulti-page Static Site
- Build Tool、Package Managerなし
- 共通CSSとVanilla JavaScriptによるNavigation、Mobile Menu、Form State実装
- GitHub PagesのProject Siteとして`/vista-progress-saas/`配下へ公開

## Contact Form

CONTACTは、問い合わせ体験のUI / State設計を確認するためのデモです。

- Normal
- Focus
- Validation Error
- Submit Error
- Loading
- Success Preview

External Endpointには接続しておらず、入力内容の送信・保存は行いません。通常SubmitはLoading後にSubmit Errorを表示し、Successは開発確認用のPreview Stateに限定しています。

## SEO / Publication

- ページ別`title`とMeta Description
- Canonical URL
- Open Graph / Twitter Card
- favicon / Apple Touch Icon
- `robots.txt`
- `sitemap.xml`
- Nested Pathに対応したCustom 404

## Project Scope

担当範囲：

- 企画、課題設定、ターゲット設計
- ブランド設計、情報設計、コピー設計
- Product UI、Web UI、Responsive Design
- Pencil / Figmaを用いたデザイン制作・検証
- HTML / CSS / JavaScript実装
- Accessibility、Performance、SEO対応
- Git / GitHubによるVersion管理
- GitHub Pagesへの公開とProduction QA

## Notes

- VISTAはポートフォリオ用の架空サービスです。
- Trial、Login、Account、Payment、実契約機能は提供していません。
- CONTACT Formは実送信せず、External Endpointもありません。
- 料金、導入事例、会社名などは架空サービスのデザイン表現です。

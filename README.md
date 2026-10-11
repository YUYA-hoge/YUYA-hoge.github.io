# Yuya Hirata Portfolio

ItsuとOkiを紹介する日本語の個人開発ポートフォリオ。
HTML / CSS / JavaScriptだけで動作し、ビルドは不要です。

## ローカルで確認

```sh
python3 -m http.server 4173 --directory dist
```

## 公開

GitHub PagesをGitHub Actionsで公開します。mainへのpushでdistをデプロイします。

## 独自ドメイン

yuyahirata.comを取得したあと、GitHubリポジトリのSettings > Pages > Custom domainで設定します。
DNSの設定はGitHub Pagesの案内に従い、確認後にHTTPSを有効にしてください。
現時点ではCNAMEを追加していません。

## コンテンツ

Itsu / OkiのREADMEと実際のプロダクト画像を参照。Okiは開発中として紹介しています。
経歴はユーザー提供の「製造業 / DX推進」を掲載。Xは https://x.com/yuya_developer 。連絡先、App StoreのURLは未確認のため掲載していません。

## デザイン

明るいモノトーンと大きな文字を基調に、「暮らしの、前と先。」という構成でItsuとOkiを紹介します。画像の外にテキストリンクを置いた、横並びの作品紹介です。スマートフォンでは縦に並びます。

矢印アイコンはBootstrap Icons（MIT、dist/assets/bootstrap-icons-LICENSE.txt）を使用しています。

# staticweb-template

静的Webサイトつくるとき用のあれ 自分用

## Requirement

- Unixライクな環境
  - WSLを使う場合は"必ず"WSL側のファイルシステムに入れること。Windows側に保存するとファイル変更監視が正しく動作しません。
- git
- nodenv
- Node.js
  - nodenvが適切なバージョンを取ってきてくれるので気にしなくておｋ

## Getting Started

1. `git clone これ`
2. `cd これ`
3. `nodenv install`
4. `npm ci`

## Usage

### デバッギング

`npm run dev`

ローカルサーバーが立ち上がり、ブラウザで見れるようになります。browser-syncを入れてるので、ファイルに変更を加えると自動的にブラウザに反映されます。

※サーバーを立ち上げている間はターミナルが占有されるので、tmux使うなりウィンドウを増やすなりしないと他のコマンドが入力できません。

## 開発環境のおはなし

### gitを使う準備

1. GitHubアカウントにSSH公開鍵を追加（ググって）
2. `git config --global user.name ユーザー名`
3. `git config --global user.email メールアドレス`

### WSL + VSCode

- Ubuntuのそのとき最新のLTSを使おう
- WSL2の方が動作が速くてよさげ

#### Remote - WSLを使う

1. Windows側にVSCodeを入れておく
2. (WSL上) `$ code .`

色々ダウンロードはじまって普段どおりのWSLが立ち上がる。入れてた拡張機能は有効化が必要なので必要なものは有効化しとく。

#### 入れるべき拡張機能

- 各種言語サポート
- Git Graph
- Rainbow Brackets

## Todo

- altなんちゃら系に対応
  - とりあえずSassかけるようにした
- npm-scriptsになんでもやらせたい
  - デプロイもやらせたいな
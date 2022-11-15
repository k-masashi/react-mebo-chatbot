# react-mebo-chatbox💬
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

「react-mebo-chatbox」はReactで開発したプロジェクトに、スピーディにチャットボットを設置するためのReactコンポーネントです。[mebo(ミーボ)](https://mebo.work)という、チャットボット構築サービスで作成したチャットボットを簡単にサイトへ埋め込めます。


## mebo(ミーボ)とは？
公式サイト  
https://mebo.work  

公式ガイド  
https://zenn.dev/makunugi/books/f3d9eb62b6d133  
  
meboはプログラミング不要で簡単に会話型AI(チャットボット)を構築することができるWebサービスです。短時間で様々な用途に活用ができる会話型AIを構築できます。

<img src="https://mebo.work/images/mebo_eyecatch.png" width="400px">  

## 実現できること

### チャットボット呼び出し用のボタンをページ右下に設置
Reactで開発したWebページの右下にチャットボット呼び出し用のボタンを設置します。  
<img src="https://i.imgur.com/LemEDEm.png" width="400px">  
**詳細は後述しますが、ボタンのデザインは変更が可能です。**

### チャットボット呼び出し用のボタンからチャットボットを起動
meboで作成したチャットボットを簡単にReact製のWebサービスで利用できます。
<img src="https://i.imgur.com/wkDStem.png" width="400px">  


## DEMO
公式サイトの右下にあるボタンから、実際の挙動をご覧いただけます。
https://mebo.work


## 利用手順

### 事前準備
[こちら](https://mebo.work)からミーボを利用して、チャットボットを作成してください。

チャットボットの作成の詳細は公式ガイドをご参照ください。  
https://zenn.dev/makunugi/books/f3d9eb62b6d133  
　　
チャットボットを作成したら、[公開設定画面(要ログイン)](https://mebo-admin.work/admin/publish)にてチャットボットを「一般公開」してください。

<img src="https://i.imgur.com/oK2cHSB.png" width="300px">  
  
公開ができると、チャットページのURLが取得できます。

### インストール
npm経由
```sh
npm install react-mebo-chatbot
```
yarn経由
```sh
yarn add react-mebo-chatbot
```

**⚠️ ver.0.1.7より前のバージョンは正常に動作しませんのでご注意ください。**


### 使い方

import
```ts
import { ChatBoxImageButton, ChatBoxTextButton } from "react-mebo-chatbot"
```

#### Components
コンポーネントは２種類あります。

- ChatBoxImageButton
- ChatBoxTextButton

これらいずれかのコンポーネントをrootページもしくはチャットボットを設置したいページへ追加します。

```ts
      <ChatBoxTextButton
        buttonWidth={200}
        buttonHeight={80}
        chatSrc='<チャットページのURL>'
        buttonLabel='DEMO用の会話AIと話す'
        buttonBorderRadius={10}
        chatHeaderColor={"#303f9f"}
        chatHeaderTitle={"DEMO用のチャットボット"}
      />
```

##### ChatBoxImageButton

ページ右下にチャットボット表示用の「画像」を設置します。

実装例 (最小設定 ※必須の項目のみ指定)
```ts
      <ChatBoxImageButton
        chatSrc='<チャットページのURL>'
        imageButtonImage='<画像のURL>'
      />
```

##### ChatBoxTextButton

<img src="https://i.imgur.com/ACYH1hp.png" width="400px">  

ページ右下にチャットボット表示用のテキスト付きのボタンを設置します。  

実装例 (最小設定 ※必須の項目のみ指定)
```ts
      <ChatBoxTextButton
        chatSrc='<チャットページのURL>'
        buttonLabel='<ボタンに表示する文言>'
      />
```
 
パラメータ一覧
```ts
    // チャットボットの公開URLを指定
    chatSrc: string; 👈 必須

    // チャット画面表示ボタンのプロパティ
    buttonTextColor?: string; // ボタンのテキストカラー
    buttonBackgroundColor?: string; // ボタンの背景色
    buttonLabel: string; 👈 必須 // ボタンの文言
    buttonWidth?: number; // ボタンのWidth
    buttonHeight?: number;// ボタンのHeight
    buttonBorderRadius?: number; // ボタンのRadius
    buttonMerginRight?: number; // ボタンの右下のマージン
    buttonMerginBottom?: number; // ボタンの下のマージン
    buttonFontSize?: number; // ボタンのフォントサイズ

    // チャット画面のヘッダー用プロパティ
    chatHeaderColor?: string; // チャット画面のヘッダーの色
    chatHeaderTitle?: string; // チャット画面のヘッダーのタイトル
```


License
-------

react-mebo-chatbot is licensed under the [MIT](https://opensource.org/licenses/mit-license.php) license.  
Copyright &copy; 2022, maKunugi
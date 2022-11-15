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
TBD


## 利用方法

### 事前準備
[こちら](https://mebo.work)からミーボを利用して、チャットボットを作成してください。

公式ガイド  
https://zenn.dev/makunugi/books/f3d9eb62b6d133  
　　
チャットボットを作成したら、公開設定にてチャットボットを「一般公開」してください。

<img src="https://i.imgur.com/oK2cHSB.png" width="300px">  
  
公開ができると、チャットページのURLが取得できます。

### インストール
npm経由
```sh
npm install --save @makunugi/react-mebo-chatbox
```
yarn経由
```
TBD
```


License
-------

react-mebo-chatbox is licensed under the [MIT](https://opensource.org/licenses/mit-license.php) license.  
Copyright &copy; 2022, maKunugi
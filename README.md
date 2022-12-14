# react-mebo-chatbotð¬
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

ãreact-mebo-chatbotãã¯Reactã§éçºãããã­ã¸ã§ã¯ãã«ãã¹ãã¼ãã£ã«ãã£ããããããè¨­ç½®ããããã®Reactã³ã³ãã¼ãã³ãã§ãã[mebo(ãã¼ã)](https://mebo.work)ã¨ããããã£ãããããæ§ç¯ãµã¼ãã¹ã§ä½æãããã£ããããããç°¡åã«ãµã¤ãã¸åãè¾¼ãã¾ãã


## mebo(ãã¼ã)ã¨ã¯ï¼
å¬å¼ãµã¤ã  
https://mebo.work  

å¬å¼ã¬ã¤ã  
https://zenn.dev/makunugi/books/f3d9eb62b6d133  
  
meboã¯ãã­ã°ã©ãã³ã°ä¸è¦ã§ç°¡åã«ä¼è©±åAI(ãã£ããããã)ãæ§ç¯ãããã¨ãã§ããWebãµã¼ãã¹ã§ããç­æéã§æ§ããªç¨éã«æ´»ç¨ãã§ããä¼è©±åAIãæ§ç¯ã§ãã¾ãã

<img src="https://mebo.work/images/mebo_eyecatch.png" width="400px">  

## å®ç¾ã§ãããã¨

### ãã£ãããããå¼ã³åºãç¨ã®ãã¿ã³ããã¼ã¸å³ä¸ã«è¨­ç½®
Reactã§éçºããWebãã¼ã¸ã®å³ä¸ã«ãã£ãããããå¼ã³åºãç¨ã®ãã¿ã³ãè¨­ç½®ãã¾ãã  
<img src="https://i.imgur.com/LemEDEm.png" width="400px">  
**è©³ç´°ã¯å¾è¿°ãã¾ããããã¿ã³ã®ãã¶ã¤ã³ã¯å¤æ´ãå¯è½ã§ãã**

### ãã£ãããããå¼ã³åºãç¨ã®ãã¿ã³ãããã£ããããããèµ·å
meboã§ä½æãããã£ããããããç°¡åã«Reactè£½ã®Webãµã¼ãã¹ã§å©ç¨ã§ãã¾ãã  

<img src="https://i.imgur.com/wkDStem.png" width="400px">  


## DEMO
å¬å¼ãµã¤ãã®å³ä¸ã«ãããã¿ã³ãããå®éã®æåããè¦§ããã ãã¾ãã
https://mebo.work


## å©ç¨æé 

### äºåæºå
[ãã¡ã](https://mebo.work)ãããã¼ããå©ç¨ãã¦ããã£ããããããä½æãã¦ãã ããã

ãã£ãããããã®ä½æã®è©³ç´°ã¯å¬å¼ã¬ã¤ãããåç§ãã ããã  
https://zenn.dev/makunugi/books/f3d9eb62b6d133  
ãã
ãã£ããããããä½æãããã[å¬éè¨­å®ç»é¢(è¦ã­ã°ã¤ã³)](https://mebo-admin.work/admin/publish)ã«ã¦ãã£ãããããããä¸è¬å¬éããã¦ãã ããã

<img src="https://i.imgur.com/oK2cHSB.png" width="300px">  
  
å¬éãã§ããã¨ããã£ãããã¼ã¸ã®URLãåå¾ã§ãã¾ãã

### ã¤ã³ã¹ãã¼ã«
npmçµç±
```sh
npm install react-mebo-chatbot
```
yarnçµç±
```sh
yarn add react-mebo-chatbot
```

**â ï¸ ver.0.1.7ããåã®ãã¼ã¸ã§ã³ã¯æ­£å¸¸ã«åä½ãã¾ããã®ã§ãæ³¨æãã ããã**


### ä½¿ãæ¹

import
```ts
import { ChatBoxImageButton, ChatBoxTextButton } from "react-mebo-chatbot"
```

#### Components
ã³ã³ãã¼ãã³ãã¯ï¼ç¨®é¡ããã¾ãã

- ChatBoxImageButton
- ChatBoxTextButton

ãããããããã®ã³ã³ãã¼ãã³ããrootãã¼ã¸ãããã¯ãã£ããããããè¨­ç½®ããããã¼ã¸ã¸è¿½å ãã¾ãã

```ts
      <ChatBoxTextButton
        buttonWidth={200}
        buttonHeight={80}
        chatSrc='<ãã£ãããã¼ã¸ã®URL>'
        buttonLabel='DEMOç¨ã®ä¼è©±AIã¨è©±ã'
        buttonBorderRadius={10}
        chatHeaderColor={"#303f9f"}
        chatHeaderTitle={"DEMOç¨ã®ãã£ããããã"}
      />
```

##### ChatBoxImageButton

<img src="https://i.imgur.com/YnO7G6x.png" width="400px">  

ãã¼ã¸å³ä¸ã«ãã£ãããããè¡¨ç¤ºç¨ã®ãç»åããè¨­ç½®ãã¾ãã

å®è£ä¾ (æå°è¨­å® â»å¿é ã®é ç®ã®ã¿æå®)
```ts
      <ChatBoxImageButton
        chatSrc='<ãã£ãããã¼ã¸ã®URL>'
        imageButtonImage='<ç»åã®URL>'
      />
```

ãã©ã¡ã¼ã¿ä¸è¦§
```ts
    // ãã£ãããããã®å¬éURLãæå®
    chatSrc: string; ð å¿é 

    // ãã£ããç»é¢è¡¨ç¤ºãã¿ã³ã®ãã­ããã£
    imageButtonImage: string; ð å¿é  // ç»åã®src (URL)
    buttonWidth?: number; // ãã¿ã³ã®Width
    buttonHeight?: number;// ãã¿ã³ã®Height
    buttonBorderRadius?: number; // ãã¿ã³ã®Radius
    buttonMerginRight?: number; // ãã¿ã³ã®å³ä¸ã®ãã¼ã¸ã³
    buttonMerginBottom?: number; // ãã¿ã³ã®ä¸ã®ãã¼ã¸ã³

    // ãã£ããç»é¢ã®ãããã¼ç¨ãã­ããã£
    chatHeaderColor?: string; // ãã£ããç»é¢ã®ãããã¼ã®è²
    chatHeaderTitle?: string; // ãã£ããç»é¢ã®ãããã¼ã®ã¿ã¤ãã«

    // ãã£ãããããã®ã¦ã£ã³ãã¦ã®è¡¨ç¤ºã¤ãã³ã
    onChatBoxOpend?: () => void;
    onChatBoxClosed?: () => void;
```


##### ChatBoxTextButton

<img src="https://i.imgur.com/ACYH1hp.png" width="400px">  

ãã¼ã¸å³ä¸ã«ãã£ãããããè¡¨ç¤ºç¨ã®ãã­ã¹ãä»ãã®ãã¿ã³ãè¨­ç½®ãã¾ãã  

å®è£ä¾ (æå°è¨­å® â»å¿é ã®é ç®ã®ã¿æå®)
```ts
      <ChatBoxTextButton
        chatSrc='<ãã£ãããã¼ã¸ã®URL>'
        buttonLabel='<ãã¿ã³ã«è¡¨ç¤ºããæè¨>'
      />
```
 
ãã©ã¡ã¼ã¿ä¸è¦§
```ts
    // ãã£ãããããã®å¬éURLãæå®
    chatSrc: string; ð å¿é 

    // ãã£ããç»é¢è¡¨ç¤ºãã¿ã³ã®ãã­ããã£
    buttonTextColor?: string; // ãã¿ã³ã®ãã­ã¹ãã«ã©ã¼
    buttonBackgroundColor?: string; // ãã¿ã³ã®èæ¯è²
    buttonLabel: string; ð å¿é  // ãã¿ã³ã®æè¨
    buttonWidth?: number; // ãã¿ã³ã®Width
    buttonHeight?: number;// ãã¿ã³ã®Height
    buttonBorderRadius?: number; // ãã¿ã³ã®Radius
    buttonMerginRight?: number; // ãã¿ã³ã®å³ä¸ã®ãã¼ã¸ã³
    buttonMerginBottom?: number; // ãã¿ã³ã®ä¸ã®ãã¼ã¸ã³
    buttonFontSize?: number; // ãã¿ã³ã®ãã©ã³ããµã¤ãº

    // ãã£ããç»é¢ã®ãããã¼ç¨ãã­ããã£
    chatHeaderColor?: string; // ãã£ããç»é¢ã®ãããã¼ã®è²
    chatHeaderTitle?: string; // ãã£ããç»é¢ã®ãããã¼ã®ã¿ã¤ãã«

    // ãã£ãããããã®ã¦ã£ã³ãã¦ã®è¡¨ç¤ºã¤ãã³ã
    onChatBoxOpend?: () => void;
    onChatBoxClosed?: () => void;
```


License
-------

react-mebo-chatbot is licensed under the [MIT](https://opensource.org/licenses/mit-license.php) license.  
Copyright &copy; 2022, maKunugi

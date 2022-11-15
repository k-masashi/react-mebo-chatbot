import React from "react";
import { useState } from "react";
import "./chatBox.css";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

export interface ChatBoxImageButtonProps {
    // チャットボットの公開URLを指定
    chatSrc: string;

    // チャット画面表示ボタンのプロパティ
    imageButtonImage: string;
    buttonWidth?: number;
    buttonHeight?: number;
    buttonBorderRadius?: number;
    buttonMerginRight?: number;
    buttonMerginBottom?: number;

    // チャット画面のヘッダー用プロパティ
    chatHeaderColor?: string;
    chatHeaderTitle?: string;
}

export class ChatBoxImageButton extends React.Component<ChatBoxImageButtonProps> {
    state = { isOpen: false }
    render() {
        const {
            chatSrc,
            imageButtonImage,
            buttonWidth,
            buttonHeight,
            buttonBorderRadius,
            buttonMerginRight,
            buttonMerginBottom,
            chatHeaderColor,
            chatHeaderTitle,
        } = this.props;
        return (
            <>
                <div className={["mebo-chat-button"].join(" ")}>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                                isOpen: true
                            });
                        }}
                    >
                        <img
                            style={{
                                margin: 0,
                                top: "auto",
                                right: buttonMerginRight ? buttonMerginRight : 16,
                                bottom: buttonMerginBottom ? buttonMerginBottom : 16,
                                width: buttonWidth ? buttonWidth : "100",
                                height: buttonHeight ? buttonHeight : "100",
                                borderRadius: buttonBorderRadius ? buttonBorderRadius : "100",
                                left: "auto",
                                position: "fixed",
                                zIndex: "1000",
                                display: this.state.isOpen ? "none" : "",
                            }}
                            src={imageButtonImage}
                            alt=""
                        />
                    </a>
                </div>
                <div
                    style={{
                        margin: 0,
                        top: "auto",
                        right: buttonMerginRight,
                        bottom: buttonMerginBottom,
                        height: "80%",
                        width: "70%",
                        left: "auto",
                        position: "fixed",
                        zIndex: "1000",
                        display: this.state.isOpen ? "" : "none",
                    }}
                >
                    <div className="chatbot">
                        <div
                            className="chatbot-header"
                            style={{ background: chatHeaderColor }}
                        >
                            <div className="chatbot-logo">{chatHeaderTitle}</div>
                            <div className="chatbot-close-icon">
                                <IconButton
                                    onClick={(e) => {
                                        this.setState({
                                            isOpen: false
                                        });
                                    }}
                                >
                                    <CloseIcon style={{ color: "white" }} />
                                </IconButton>
                            </div>
                        </div>
                        <div className="chatbot-body">
                            <iframe
                                id="mebo-iframe"
                                className="iframe"
                                title="Mebo Inline Frame"
                                width="100%"
                                height="100%"
                                scrolling="no"
                                frameBorder="no"
                                src={chatSrc}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}
import { useState } from "react";
import "./chatBox.css";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import React from "react";

export interface ChatBoxTextButtonProps {
    // チャットボットの公開URLを指定
    chatSrc: string;

    // チャット画面表示ボタンのプロパティ
    buttonTextColor?: string;
    buttonBackgroundColor?: string;
    buttonLabel: string;
    buttonWidth?: number;
    buttonHeight?: number;
    buttonBorderRadius?: number;
    buttonMerginRight?: number;
    buttonMerginBottom?: number;
    buttonFontSize?: number;

    // チャット画面のヘッダー用プロパティ
    chatHeaderColor?: string;
    chatHeaderTitle?: string;
}

export const ChatBoxTextButton = ({
    chatSrc,
    buttonTextColor,
    buttonBackgroundColor,
    buttonLabel,
    buttonWidth,
    buttonHeight,
    buttonBorderRadius,
    buttonMerginRight,
    buttonMerginBottom,
    buttonFontSize,
    chatHeaderColor,
    chatHeaderTitle,
}: ChatBoxTextButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* <img className="avatar-img" src={imageSrc} alt="" /> */}
            <div className={["mebo-chat-button"].join(" ")}>
                <button
                    type="button"
                    className={["mebo-chat-button"].join(" ")}
                    onClick={(e) => {
                        setIsOpen(true);
                    }}
                    style={{
                        fontSize: buttonFontSize ? buttonFontSize : 15,
                        color: buttonTextColor ? buttonTextColor : "#ffffff",
                        backgroundColor: buttonBackgroundColor
                            ? buttonBackgroundColor
                            : "#303f9f",
                        top: "auto",
                        right: buttonMerginRight ? buttonMerginRight : 16,
                        bottom: buttonMerginBottom ? buttonMerginBottom : 16,
                        height: buttonHeight ? buttonHeight : 100,
                        width: buttonWidth ? buttonWidth : 100,
                        borderRadius: buttonBorderRadius ? buttonBorderRadius : 100,
                        left: "auto",
                        position: "fixed",
                        zIndex: "1000",
                        display: isOpen ? "none" : "",
                    }}
                >
                    {buttonLabel}
                </button>
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
                    display: isOpen ? "" : "none",
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
                                    setIsOpen(false);
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
};

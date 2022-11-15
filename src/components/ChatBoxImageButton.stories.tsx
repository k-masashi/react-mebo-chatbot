import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ChatBoxImageButton } from "./ChatBoxImageButton";

export default {
    title: "Mebo/ChatBoxImageButton",
    component: ChatBoxImageButton,
} as ComponentMeta<typeof ChatBoxImageButton>;

const Template: ComponentStory<typeof ChatBoxImageButton> = (args) => (
    <ChatBoxImageButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    chatSrc:
        "https://mebo.work/chat/4083e938-1986-4676-8354-dc308982e73817a579a8fd4d?name=maKunugi",
    imageButtonImage: "https://mebo.work/images/mebo_book.png",
};

import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ChatBoxTextButton } from "./ChatBoxTextButton";

export default {
    title: "Mebo/ChatBoxTextButton",
    component: ChatBoxTextButton,
} as ComponentMeta<typeof ChatBoxTextButton>;

const Template: ComponentStory<typeof ChatBoxTextButton> = (args) => (
    <ChatBoxTextButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    chatSrc:
        "https://mebo.work/chat/4083e938-1986-4676-8354-dc308982e73817a579a8fd4d?name=maKunugi",
    buttonLabel: "hello, world",
};

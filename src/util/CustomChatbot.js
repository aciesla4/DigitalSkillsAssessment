import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import SpyLogo from '../Initial/spyLogo.jpg';

function CustomChatbot(props) {
    const theme = {
        background: "white",
        fontFamily: "Oxanium",
        botBubbleColor: "gray",
        botFontColor: "white",
        userBubbleColor: "gray",
        userFontColor: "white",
    };

    const config = {
        width: "100%",
        height: "605px",
    };

    const steps = [
        {
            id: "Greet",
            message: "Hello Agent.",
            trigger: "Ask status"
        },
        {
            id: "Ask status",
            message: "How is your training going?",
            trigger: "Give status options"
        },
        {
            id: "Give status options",
            options: [
                { value: "Poorly", label: "Poorly", trigger: "Respond to poor status" },
                { value: "Okay", label: "Okay", trigger: "Respond to okay status" },
                { value: "Great", label: "Great", trigger: "Respond to great status" },
            ],
            hideInput: true
        },
        {
            id: "Respond to poor status",
            message: "I'm sorry to hear that agent! What can we do to help?",
            trigger: "Ask for help"
        },
        {
            id: "Respond to okay status",
            message: "Keep going Agent! Is there anything we can do to help?",
            trigger: "Ask for help"
        },
        {
            id: "Respond to great status",
            message: "Glad to hear it Agent. Keep up the good work!",
            trigger: "Done"
        },
        {
            id: "Ask for help",
            user: true,
            trigger: "Respond to help"
        },
        {
            id: "Respond to help",
            message: "Thanks for the input Agent. We'll bring your feedback to HQ.",
            trigger: "Done"
        },
        {
            id: "Done",
            message: "Good luck with your remaining missions Agent.",
            end: true
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <ChatBot className="chat-window" handleEnd={props.handleEnd} botAvatar={SpyLogo} hideHeader={true} steps={steps} placeholder={"Enter your message..."} {...config} />
        </ThemeProvider>
    )
}

export default CustomChatbot;
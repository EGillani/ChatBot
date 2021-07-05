import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "MLH Bot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to know about MLH init 2022?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "challenges",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Chat Challenge",
            answer:
              " Create a chat application that allows users to communicate with each other. For added complexity, you could put in moderation features or even bots to chat with. Say hello to us by submitting on the Week-long Devpost.",
            id: 1,
          },
          {
            question: "Tweet about your Hack",
            answer:
              "Tweet about a project you made! Make sure to tag our sponsors if you tried out one of their challenges using the following: @XylemInc #LetsSolveWater, @dottechdomains #MyStartInTech, @JinaAI_ , and @Replit! ",
            id: 2
          },
        ],
      },
    },
  ],
};

export default config;
import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "MLH Events",
      handler: props.actionProvider.handleEventQuestion,
      id: 1,
    },
    { text: "Challenges", handler:  props.actionProvider.handleChallenges, id: 2 },
    { text: "Leaderboard", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
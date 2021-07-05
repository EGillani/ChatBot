
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  handleChallenges = () => {
    const message = this.createChatBotMessage(
      "Challenge Details!",
      {
        widget: "challenges",
      }
    );

    this.addMessageToState(message);
  };

  
  handleEventQuestion = () => {
    var win = window.open("https://organize.mlh.io/participants/events/6813-init-2022", '_blank');
    const message = this.createChatBotMessage(
      "A link showing you the event details should have opened!", 
      win.focus()
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
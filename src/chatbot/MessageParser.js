// MessageParser starter code
//this is where you implement the message parser 
//every message is run through this parse message 
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowercase.includes("mlh events") || lowercase.includes("events")) {
      this.actionProvider.handleEventQuestion();
    }

    if (lowercase.includes("challenges")) {
      this.actionProvider.handleChallenges();
    } 
  }
}

export default MessageParser;
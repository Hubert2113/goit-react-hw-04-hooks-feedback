import { Component } from "react";
import { FeedbackOptions } from './Buttons/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  btnFunctions = {
    handleIncrementGood: () => {
      this.setState({good: this.state.good + 1});
    },

    handleIncrementNeutral: () => {
      this.setState({neutral: this.state.neutral + 1});
    },

    handleIncrementBad: () => {
    this.setState({bad: this.state.bad + 1});
    },
  }

  countTotal = () => {
  return this.state.good + this.state.neutral + this.state.bad;
  }
  countPosititeFeedback = () => {
    return Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100);
  }

  render(){
    return (
        <>
          <Section title='Please leave feedback'>
            <FeedbackOptions options={this.btnFunctions}/>
          </Section>
          <Section title='Statistics'>
            {this.state.good || this.state.neutral || this.state.bad ?
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal()}
              positivePercentage={this.countPosititeFeedback()}
            /> : 
            <Notification message='There is no feedback'/>}
          </Section>
        </>
      )
    }
}
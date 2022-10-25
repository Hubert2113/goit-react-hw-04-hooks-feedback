import { useState } from "react";
import { FeedbackOptions } from './Buttons/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export const Feedback = () => {

  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const btnFunctions = {
    handleIncrementGood: () => {setGood(good += 1)},

    handleIncrementNeutral: () => {setNeutral(neutral += 1)},

    handleIncrementBad: () => {setBad(bad += 1)},
  }

  const countTotal = () => good + neutral + bad;
  
  const countPosititeFeedback = () => Math.round(good / (good + neutral + bad) * 100);

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={btnFunctions}/>
      </Section>
      <Section title='Statistics'>
        {good || neutral || bad ?
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotal()}
          positivePercentage={countPosititeFeedback()}
        /> : 
        <Notification message='There is no feedback'/>}
      </Section>
    </>
  )
}
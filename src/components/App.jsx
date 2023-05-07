import { Component } from 'react';
import { Section } from "./Section/Section"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';


const options = [
    { title: 'good'},
    { title: 'neutral'},
    {title: 'bad'}
]

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (event) => {
    const {name} = event.target
    this.setState(
      prevState => ({
      [name]: prevState[name] + 1,
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback
  }
  
  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.ceil(this.state.good / this.countTotalFeedback() * 100)
    return positivePercentage
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick} />
        </Section>
        
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ?
            <Notification message="There is no feedback" /> :
            <Statistics
              options={options}
              stats={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}/>}
        </Section>
      </div>
    )
  }
}




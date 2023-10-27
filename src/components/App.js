import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Sections from './Section/Section';
import { MainSection } from './App.styled';
import Notification from './Notification/Notification';
import Statistic from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = button =>
    this.setState(prevState => {
      return { [button]: prevState[button] + 1 };
    });
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback !== 0
      ? Math.cell((good / totalFeedback) * 100) + '%'
      : 0;
  };
  render() {
    const values = Object.keys(this.state);
    const isFeedback = Object.values(this.state).every(value => value === 0);
    return (
      <MainSection>
        <Sections title='Please leave feedback'>
          <Feedback value={values} countFeedbacks={this.countFeedback} />
        </Sections>

        {!isFeedback ? (
          <Sections title="Statistic">
            <Statistic
              state={this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedback={this.countPositiveFeedbackPercentage} />
          </Sections>
        ) : (
          <Sections>
            <Notification message="Click the button and share your experience using this app." />

          </Sections>
        )
        }
        
      </MainSection>
    );
  }
}

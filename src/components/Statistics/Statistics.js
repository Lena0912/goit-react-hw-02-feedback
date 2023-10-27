import {
  StatisticContainer,
  StatisticName,
  StatisticResult,
} from './Statistics.styled';

const Statistic = ({
    state: { good, neutral, bad },
    countTotalFeedback,
    contPositiveFeedback,
}) => {
    return (
      <StatisticContainer>
        <StatisticName>
          Good: <StatisticResult>{good}</StatisticResult>
        </StatisticName>
        <StatisticName>
          Neutral: <StatisticResult>{neutral}</StatisticResult>
        </StatisticName>
        <StatisticName>
          Bad: <StatisticResult>{bad}</StatisticResult>
        </StatisticName>
        <StatisticName>
          Total: <StatisticResult>{countTotalFeedback()}</StatisticResult>
        </StatisticName>
            {/* <StatisticName>
                PositiveFeedback: <StatisticResult>{countPositiveFeedback()}</StatisticResult>
        </StatisticName> */}
      </StatisticContainer>
    );
};

export default Statistic;
import { ButtonContainer, ButtonFeedback } from './Feedback.styled';

const Feedback = ({ values, countFeedback }) => {
    if (!Array.isArray(values)) {
      return null; // або ви можете повернути пустий рендер
    }
    return (
        <ButtonContainer>
            {values.map(value => (
                <ButtonFeedback
                    key={value}
                    onClick={() => countFeedback(value)}>
                    {value}
                </ButtonFeedback>
            ))}
        </ButtonContainer>
    );
};

export default Feedback;
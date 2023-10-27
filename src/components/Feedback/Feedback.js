import { ButtonContainer, ButtonFeedback } from './Feedback.styled';

const Feedback = ({ values, countFeedback }) => {
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
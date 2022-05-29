import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styles';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            <FeedbackBtn onClick={options.handleIncrementGood} name='good'>Good</FeedbackBtn>
            <FeedbackBtn onClick={options.handleIncrementNeutral} name='neutral'>Neutral</FeedbackBtn>
            <FeedbackBtn onClick={options.handleIncrementBad} name='bad'>Bad</FeedbackBtn>
        </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.object,
}
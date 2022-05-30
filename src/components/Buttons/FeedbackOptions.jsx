import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styles';

export const FeedbackOptions = ({options}) => {
    return (
        <>
            <FeedbackBtn onClick={options.handleIncrementGood}>Good</FeedbackBtn>
            <FeedbackBtn onClick={options.handleIncrementNeutral}>Neutral</FeedbackBtn>
            <FeedbackBtn onClick={options.handleIncrementBad}>Bad</FeedbackBtn>
        </>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.object,
}
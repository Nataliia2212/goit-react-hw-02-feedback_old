import PropTypes from 'prop-types';



export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <>
        <ul>
            {options.map(({title}) => (
                <li key={title}>
                    <button name={title} type="button" onClick={onLeaveFeedback}>{title}</button>
                </li>
            ))}
        </ul>
    </>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
        })
    ),
    onLeaveFeedback: PropTypes.func.isRequired
}
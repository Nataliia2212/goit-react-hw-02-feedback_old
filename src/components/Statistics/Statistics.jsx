import PropTypes from 'prop-types';


export const Statistics = ({options, stats, total, positivePercentage}) => {
    return <>
        <ul>
            {options.map(({title}) => (
                <li key={title}>{title}: <span>{stats[title]}</span></li>
            ))}
            <li>Total: {total()}</li>
            <li>Positive feedback: {positivePercentage()}%</li>
        </ul>
    </>
    
}

Statistics.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string.isRequired,
        })
    ),
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}

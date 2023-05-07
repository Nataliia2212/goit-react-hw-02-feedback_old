import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({options, stats, total, positivePercentage}) => {
    return <>
        <ul>
            {options.map(({title}) => (
                <li key={title} className={css.item}>{title}: <span>{stats[title]}</span></li>
            ))}
            <li className={css.item}>Total: {total()}</li>
            <li className={css.item}>Positive feedback: {positivePercentage()}%</li>
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

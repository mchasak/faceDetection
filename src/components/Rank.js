import React from 'react';
import '../styles/Rank.scss';

const Rank = ({ name, entries }) => {
    return (
        <div className='rank'>
           <span className="rank__text">
                {`${name}, your current entry count is: `}
           </span>
           <span className="rank__number">
            {entries}
           </span>
        </div>
    )
}

export default Rank; 
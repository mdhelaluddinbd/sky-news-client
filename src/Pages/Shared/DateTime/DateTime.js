import React from 'react';

const DateTime = () => {

    const showDate=new Date();
    const displayTodayDates=showDate.getDate()+ '-'+showDate.getMonth()+ '-'+showDate.getFullYear();

    return (
        <div>
            <span className='fw-bold text-primary'>{displayTodayDates} </span>
        </div>
    );
};

export default DateTime;
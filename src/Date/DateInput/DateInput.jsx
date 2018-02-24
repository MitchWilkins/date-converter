import React from 'react';

const DateInput = (props) => {
    const getResult = () => {
        props.result()
    };

    return (
        <div className={'input-group'}>
            <input className={'form-control'} type="text" placeholder={'time'} onChange={props.time}/>
            <div className="input-group-append">
                <button className={'btn btn-secondary'} onClick={()=> getResult()}>Submit</button>
            </div>
        </div>
    )
};

export default DateInput;
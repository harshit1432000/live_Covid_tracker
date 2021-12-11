import React from 'react'

const Datalist = ({data}) => {
    return (
        <>
         <ul>
            <li className='card c1'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>OUR </span>Country</p>
                        <p className='card_total card_small'>INDIA</p>
                    </div>
                </div>
            </li>
            <li className='card c2'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL </span>RECOVERED</p>
                        <p className='card_total card_small'>{data.recovered}</p>
                    </div>
                </div>
            </li>

            <li className='card c3'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL </span>CONFIRMED</p>
                        <p className='card_total card_small'>{data.confirmed}</p>
                    </div>
                </div>
            </li>

            <li className='card c4'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL </span>DEATHS</p>
                        <p className='card_total card_small'>{data.deaths}</p>
                    </div>
                </div>
            </li>

            <li className='card c5'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>TOTAL </span>ACTIVE</p>
                        <p className='card_total card_small'>{data.active}</p>
                    </div>
                </div>
            </li>
            <li className='card c6'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>LAST </span>UPDATED</p>
                        <p className='card_total card_small'>{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>

            </ul>
        </>
    )
}

export default Datalist

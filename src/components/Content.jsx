import data from '../data.json';
import React, {useState} from 'react';

export default function Content({year}) {
    const curData = data.filter(({Date}, index) => (
        Date.substring(3, 6) === year
    ))

    const monthConver = new Map([
        ["01", "January"],
        ["02", "Febuary"],
        ["03", "March"],
        ["04", "April"],
        ["05", "May"],
        ["06", "June"],
        ["07", "July"],
        ["08", "August"],
        ["09", "September"],
        ["10", "October"],
        ["11", "November"],
        ["12", "December"],
    ])
    return (
        <div >
            {curData.map(({Date, English, Chinese, photos}, index) => (
                 <div className='flex bg-white opacity-70 m-24 mt-5 mb-10 p-7 rounded rounded-lg drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'>
                   
                   <div>
                    <h3 className='font-custom text-2xl mb-3'>{monthConver.get(Date.substring(0, 2))} {Date.substring(3, 7)}</h3>
                    <p className='font-custom text-lg mb-3'>{English}</p>
                    <p className='font-custom text-lg'>{Chinese}</p>
                    </div>
                    {photos.map((photo, index) => (
                        <img className='ml-5 max-w-96 float-right' src={photo} key={index} alt={`Photo from ${monthConver.get(Date.substring(0, 2))} ${Date.substring(3, 7)}`} />
                    ))}
                    
                </div>
            ))}
        </div>
    )
}
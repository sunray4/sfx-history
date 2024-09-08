import data from '../data.json'

export default function TimelineNav({handleClick}) {
    const yearSet = new Set();
    {data.map(({Date}, index) => (
        yearSet.add(Date.substring(3, 6))
    ))}
    const yearArray = Array.from(yearSet);
    
    return (
    <nav className='flex items-center justify-center m-10 mt-0 drop-shadow-lg'>
        <span className='text-3xl text-white'><i className="fa-solid fa-angle-down fa-rotate-90"></i></span>       
        <ul className='flex items-center space-x-2 md:space-x-4'>
            
            {yearArray.map((year, index) => (              
                <div className='flex items-center space-x-2 md:space-x-4' key={index}>
                    <hr className="w-5 sm:w-10 md:w-20 lg:w-32 xl:w-40 h-1 bg-white rounded" />
                    <li className='text-white text-2xl font-custom drop-shadow-lg'>
                        <button name={year} onClick={handleClick}>{year}0</button>
                    </li>
                </div>
            ))}
            <hr className="w-5 sm:w-10 md:w-20 lg:w-32 xl:w-40 h-1 bg-white rounded" />
        </ul>
        
        <span className='text-3xl text-white'><i className="fa-solid fa-angle-down fa-rotate-270"></i></span>
    </nav>)
}

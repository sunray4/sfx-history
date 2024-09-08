import data from '../data.json'

export default function TimelineNav({handleClick}) {
    const yearSet = new Set();
    {data.map(({Date}, index) => (
        yearSet.add(Date.substring(3, 6))
    ))}
    // console.log(data)
    const yearArray = Array.from(yearSet);
    console.log(yearArray)
    return (
    <nav className='flex items-center justify-center m-10 mt-0 drop-shadow-lg'>
        <span className='text-3xl text-white'><i class="fa-solid fa-angle-down fa-rotate-90"></i></span>       
        <ul className='flex items-center space-x-5'>
            <hr className="w-48 h-1 bg-white rounded" />
            {yearArray.map((year, index) => (
                <div className='flex items-center space-x-5'>
                <li key={index} className='text-white text-2xl font-custom drop-shadow-lg'><button name={year} onClick={handleClick}>{year}0</button></li>
                <hr className="w-48 h-1 bg-white rounded" />
                </div>
            ))}
            
        </ul>
        <span className='text-3xl text-white'><i class="fa-solid fa-angle-down fa-rotate-270"></i></span>
    </nav>)
}
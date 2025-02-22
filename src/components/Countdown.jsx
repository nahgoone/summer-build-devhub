import React, {useState, useEffect} from 'react'

// dateTime Format "YYYY-MM-DDTHH:MM:SS"
function Countdown(props){

    return(
        <div className='pt-10 flex flex-col items-center w-auto'>
            <div className='py-5 flex flex-col items-center rounded-md bg-[#FADA7A]'>
                <h2 className="text-2xl font-bold mb-4">{props.timer}</h2>
                <div className="flex items-center">
                    {timerComponents.length ? timerComponents : <span className="text-xl">Time's up!</span>}
                </div>
            </div>
            <button className='bg-[#81BFDA] text-[#1E1E1E] font-bold uppercase rounded-md my-6 mx-auto p-3 px-5'>Sign up now!</button>
        </div>
    )
}

export default Countdown
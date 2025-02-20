import React, {useState, useEffect} from 'react'
function Countdown(){

    return(
        <div className='pt-10 flex flex-col'>
            <div className='border-4 text-center justify-center w-[300px]'>
                DAYS HOURS MINUTES SECONDS
            </div>
            <button className='bg-[#81BFDA] text-[#1E1E1E] uppercase rounded-md font-medium my-6 mx-auto p-3'>Sign up now!</button>
        </div>
    )
}

export default Countdown
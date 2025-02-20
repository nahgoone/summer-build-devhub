import React, {useState, useEffect} from 'react'
function Countdown(){

    return(
        <div className='pt-10 flex flex-col w-auto'>
            <div className='border-2 text-center justify-center w-[300px] m-auto'>
                DAYS HOURS MINUTES SECONDS
            </div>
            <button className='bg-[#81BFDA] text-[#1E1E1E] font-bold uppercase rounded-md my-6 mx-auto p-3 px-5'>Sign up now!</button>
        </div>
    )
}

export default Countdown
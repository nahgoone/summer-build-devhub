import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

function FAQCard(props){
    
    const [arrow, setArrow] = useState(false)

    const handleArrow = () => {
        setArrow(!arrow)
    }

    return(
        <div className='flex rounded-xl text-[25px] bg-white m-3 px-5 py-3'>
            <div className=' h-[25px] mt-2 pr-1' onClick={handleArrow}>
                {!arrow ? <IoIosArrowForward size ={18}/>: <IoIosArrowDown className='mt-0.5' size ={18}/>}
            </div>
            <div className='flex flex-col'> 
                <p className='font-bold'>{props.question}</p>
                <div className={!arrow ? 'hidden' : 'text-[18px] pt-2'}>
                    <p>{props.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default FAQCard
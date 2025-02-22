import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import FAQCard from './FAQCard.jsx';

function FAQ(){

    const [active, setActive] = useState('General');

    const handleClick = (item) => {
        setActive(item);
    };

    return(
        <div className='flex flex-col'>
            <h1 className='uppercase justify-center text-center font-bold text-2xl'> 
                <span className='text-[#FA6B1C]'>frequently </span>
                <span className='text-[#1E1E1E]'>asked questions </span> 
            </h1>
            <div className='flex w-auto justify-center mx-10'>
                {['General', 'Registration', 'Resources'].map((item) => (
                    <h1 
                        key={item}
                        className={`font-bold text my-5 mx-20 cursor-pointer ${active === item ? 'text-[#1E1E1E]' : 'text-[#81BFDA]'}`}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </h1>
                ))}
            </div>
            <div className='flex flex-col justify-center m-auto rounded-xl bg-[#81BFDA] w-[700px]'>
                <FAQCard question='Who can participate in SummerBuild 2025?'
                    answer='SummerBuild 2025 is open to all CCDS students, no matter the study year or course!
                    Join now and start building!'/>
                <FAQCard question='Question' answer='Answer'/>
                <FAQCard question='Question' answer='Answer'/>
                
            </div>
            <div className='flex flex-col justify-center mt-10 m-auto rounded-xl bg-[#F5F0CD] w-[700px]'>
                <p className='text-[#81BFDA] font-bold p-5 '>Question</p>
            </div>

        </div>
    )
}
export default FAQ
import PrizesCard from "./PrizesCard.jsx"

function Prizes(){
    return(
        <div className='flex flex-col pt-10'>
            <h1 className='uppercase justify-center text-center font-bold text-2xl'> 
                <span className='text-[#1E1E1E]'>special </span> 
                <span className='text-[#FA6B1C]'>prizes</span>
            </h1>
            <div className='flex w-auto justify-center'>
                <PrizesCard color='#F5F0CD' text='Prize 1'/>
                <PrizesCard color='#81BFDA' text='Prize 2'/>
            </div>
        </div>
    )
}

export default Prizes
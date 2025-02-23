import ScheduleCard from "./ScheduleCard.jsx"
function Schedule(){
    return(
        <div id='schedule' className='flex flex-col mt-20'>
            <h1 className='text-[#1E1E1E] uppercase justify-center text-center font-bold md:text-4xl sm:text-3xl text-2xl'>
                Schedule</h1>
            <div className='absolute z-[-1] bg-[#C6C6C6] w-1 h-[300px] ml-[535px] mt-20 '></div>
            <div className='flex flex-col justify-center mt-5 ml-[400px] w-[400px]'>
                <ScheduleCard color='#81BFDA' fontWeight='bold' header='WEEK 1'/>
                <ScheduleCard color='#B1F0F7' fontWeight='600' header='26 May'/>
            </div>
        </div>
    )

}

export default Schedule
import ScheduleCard from "./ScheduleCard.jsx"
function Schedule(){
    return(
        <div className='flex flex-col pt-10'>
            <h1 className='text-[#1E1E1E] uppercase justify-center text-center font-bold text-2xl'>Schedule</h1>
            <div className='mt-5 ml-35 w-[400px]'>
                <ScheduleCard color='#81BFDA' fontWeight='bold' header='WEEK 1'/>
                <ScheduleCard color='#B1F0F7' fontWeight='600' header='26 May'/>
            </div>
        </div>
    )

}

export default Schedule
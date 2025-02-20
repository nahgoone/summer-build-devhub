import AchievementCard from "./AchievementCard.jsx"

function Achievement(){
    return(
        <div className='flex flex-col pt-10'>
            <h1 className='uppercase justify-center text-center font-bold text-2xl'> 
                <span className='text-[#1E1E1E]'>levels </span> 
                <span className='text-[#FA6B1C]'>of achievement</span>
            </h1>
            <div className='flex w-auto justify-center m-2'>
                <AchievementCard color='#B1F0F7' text='Achievement 1'/>
                <AchievementCard color='#B1F0F7' text='Achievement 2'/>
                <AchievementCard color='#B1F0F7' text='Achievement 3'/>
            </div>
        </div>
    )
}

export default Achievement
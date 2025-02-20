import AboutCard from "./AboutCard.jsx"

function About(){
    return(
        <div className='flex flex-col'>
            <h1 className='uppercase justify-center text-center font-bold text-2xl'> 
                <span className='text-[#1E1E1E]'>about </span> 
                <span className='text-[#FA6B1C]'>summerbuild 2025</span>
            </h1>
            <AboutCard/>
        </div>
    )
}

export default About
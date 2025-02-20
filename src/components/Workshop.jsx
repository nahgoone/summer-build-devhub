import WorkshopCard from "./WorkshopCard.jsx";
import HTMLLogo from '../assets/htmlIcon.svg';
import ReactLogo from '../assets/reactIcon.svg';
import ExpressLogo from '../assets/expressIcon.svg';

function Workshop(){
    return(
        <div className='flex flex-col pt-10'>
            <h1 className='uppercase justify-center text-center font-bold text-2xl'> 
                <span className='text-[#1E1E1E]'>workshops </span> 
                <span className='text-[#FA6B1C]'>available</span>
            </h1>
            <div className='flex w-auto justify-center'>
                <WorkshopCard imgSrc={HTMLLogo} color='#FADA7A' text='HTML/CSS'/>
                <WorkshopCard imgSrc={ReactLogo} color='#FADA7A' text='React'/>
                <WorkshopCard imgSrc={ExpressLogo} color='#FADA7A' text='Express.js'/>
            </div>
        </div>
    )
}

export default Workshop
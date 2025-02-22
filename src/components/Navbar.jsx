import React, { useState, useEffect } from 'react'

function Navbar(){

    const [scrollPosition, setScrollPosition] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [open, setOpen] = useState(false)

    //make navbar sticky and hide when scrolling
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollState = window.scrollY

            //determine visibility based on scroll position
            if(currentScrollState > scrollPosition && currentScrollState > 50){
                setIsVisible(false) //hide navbar when scrolling down
            } else {
                setIsVisible(true) //show navbar when scrolling up
            }

            setScrollPosition(currentScrollState)
        }

        window.addEventListener('scroll', handleScroll)

        return() =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPosition]);


    return(
        <div>
            <div>
                <svg class="absolute top-0 left-0 w-auto h-auto z-0" viewBox="0 0 1440 320">
                    <path fill="#f8f4d8" fill-opacity="1" d="M0,160L17.1,154.7C34.3,149,69,139,103,128C137.1,117,171,107,206,122.7C240,139,274,181,309,218.7C342.9,256,377,288,411,288C445.7,288,480,256,514,229.3C548.6,203,583,181,617,181.3C651.4,181,686,203,720,213.3C754.3,224,789,224,823,208C857.1,192,891,160,926,160C960,160,994,192,1029,186.7C1062.9,181,1097,139,1131,112C1165.7,85,1200,75,1234,85.3C1268.6,96,1303,128,1337,160C1371.4,192,1406,224,1423,240L1440,256L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path>
                </svg>
            </div>
            <ul className={`flex z-10 justify-between items-center h-24 max-w-[1240px] font-bold mx-auto px-4 pt-10 text-[#FA6B1C] md:text-4xl sm:text-3xl text-2xl
            ${isVisible ? "translate-y-0" : "-translate-y-full"} 
            ${scrollPosition > 50 ? "bg-violet-100" : "bg-neutral-100/10"}`}
            >
                <li className='pt-4'>About</li>
                <li className='pt-4'>Schedule</li>
                <li className='pt-4'>Logo</li>
                <li className='pt-4'>Workshops</li>
                <li className='pt-4'>FAQ</li>
            </ul>
        </div>
    )
}

export default Navbar
import SponsorCard from "./SponsorCard"

function Sponsor(){
    return(
        <div className='flex flex-col pt-10'>
            <h1 className='text-[#1E1E1E] uppercase justify-center text-center font-bold text-2xl'>sponsors</h1>
            <h1 className='text-[#FA6B1C] mt-5 uppercase justify-center text-center font-bold italic text-2xl'>gold sponsors</h1>
            <div className='flex w-auto justify-center'>
                <SponsorCard color='#B1F0F7' text='Sponsor 1'/>
                <SponsorCard color='#B1F0F7' text='Sponsor 2'/>
            </div>
            <h1 className='text-[#FA6B1C] mt-5 uppercase justify-center text-center font-bold italic text-2xl'>venue sponsors</h1>
            <div className='flex w-auto justify-center'>
                <SponsorCard color='#B1F0F7' text='Sponsor 1'/>
                <SponsorCard color='#B1F0F7' text='Sponsor 2'/>
            </div>
        </div>
    )
}

export default Sponsor
function SponsorCard(props) {
    return(
        <div className='rounded-md text-center w-[300px] h-20 mx-2' style={{ backgroundColor: props.color || 'transparent'}}>
            <h1 className='font-bold p-2'>{props.text || 'Default Theme'}</h1>
        </div>
    )
} 

export default SponsorCard
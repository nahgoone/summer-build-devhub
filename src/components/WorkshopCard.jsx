function WorkshopCard(props){
    return(
        <div className='rounded-2xl text-center w-[200px] h-auto m-10' style={{ backgroundColor: props.color || 'transparent'}}>
            <img className='w-90 p-3' src={props.imgSrc} alt='PlaceHolder'></img>
            <h1 className='font-bold p-2'>{props.text || 'Default Theme'}</h1>
        </div>
    )
}

export default WorkshopCard
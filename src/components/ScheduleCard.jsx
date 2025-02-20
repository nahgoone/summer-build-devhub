function ScheduleCard(props){
    return(
        <div className='rounded-4xl w-[200px] h-15 mb-25 ml-10 text-center flex items-center' style={{ backgroundColor: props.color || 'transparent'}}>
            <h1 className='text-xl m-auto' style={{fontWeight: props.fontWeight}}>{props.header || 'PlaceHolder'}</h1>
        </div>
    )
}

export default ScheduleCard
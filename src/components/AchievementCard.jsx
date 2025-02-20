function AchievementCard(props){
    return(
        <div className="w-0 h-0 mx-5
            border-l-[100px] border-l-transparent
            border-b-[125px] border-b-yellow-100
            border-r-[100px] border-r-transparent"
            style={{ borderBottomColor: props.color || 'transparent'}}>
            <h1 className='font-bold mt-20'>{props.text || 'PlaceHolder'}</h1>
        </div>
    )
}

export default AchievementCard
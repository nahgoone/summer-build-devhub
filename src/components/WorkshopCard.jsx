import { useState } from 'react';

function WorkshopCard(props){

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <div className='rounded-2xl text-center w-[200px] h-auto mx-10' 
        onClick = {handleClick}
        style={{ backgroundColor: props.color || 'transparent'}}>
            <div className={!click ? 'visible' : 'hidden'}>
                <img className='w-90 p-3' src={props.frontImgSrc} alt='PlaceHolder'></img>
                <h1 className='font-bold p-2'>{props.frontText || 'Default Theme'}</h1>
            </div>
            <div className={!click ? 'hidden' : 'visible'}>
                <img className='w-90 p-3' src={props.backImgSrc} alt='PlaceHolder'></img>
                <h1 className='font-bold p-2'>{props.backText || 'Default Theme'}</h1>
            </div>
        </div>
    )
}

export default WorkshopCard
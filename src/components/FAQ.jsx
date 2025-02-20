function FAQ(){
    return(
        <div className='flex flex-col'>
            <h1 className='uppercase justify-center text-center font-bold text-2xl'> 
                <span className='text-[#FA6B1C]'>frequently </span>
                <span className='text-[#1E1E1E]'>asked questions </span> 
            </h1>
            <div className='flex w-auto justify-center mx-10'>
                <h1 className='text-[#81BFDA] font-bold text my-5 mx-20'>General</h1>
                <h1 className='text-[#81BFDA] font-bold text my-5 mx-20'>Registration</h1>
                <h1 className='text-[#81BFDA] font-bold text my-5 mx-20'>Resources</h1>
            </div>
            <div className='flex flex-col justify-center m-auto rounded-xl bg-[#81BFDA] w-[700px]'>
                <div className='rounded-xl bg-white mt-5 m-3 p-2'>
                    <p>Text</p>
                </div>
                <div className='rounded-xl bg-white m-3 p-2'>
                    <p>Text</p>
                </div>
                <div className='rounded-xl bg-white m-3 p-2'>
                    <p>Text</p>
                </div>
            </div>
            <div className='flex flex-col justify-center mt-10 m-auto rounded-xl bg-[#F5F0CD] w-[700px]'>
                <p className='text-[#81BFDA] font-bold p-5 '>Question</p>
            </div>

        </div>
    )
}
export default FAQ
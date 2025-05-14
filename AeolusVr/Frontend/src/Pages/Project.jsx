import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function Project({image, title, description}){
    return(
        <>
        <div className="flex flex-col justify-center items-center bg-white w-75 rounded-3xl shadow-lg m-5">
           <img src={image} alt="" className='h-40 w-full rounded-t-3xl object-cover'/>

            <div className='py-5 px-8'>
                <h1 className="text-sm text-black font-bold">{title}</h1>
                <p className="text-xs text-black my-2">{description}</p>
                <div className='flex justify-center'>
                    <button className="text-sm bg-blue-500 font-bold rounded-2xl mt-2 py-2 px-5 cursor-pointer hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600">
                        Learn More <ArrowForwardIosRoundedIcon/>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}export default Project;
function Problematic({image, icon, title, description}) {
    return(
        <>
            <div className='bg-gray-200 rounded-[3vw] w-1/2 m-5'>
                <img src={image} alt="" className="rounded-t-[3vw] object-cover h-50 w-full"/>
                <div className="flex flex-col justify-center items-center p-15 pt-5">
                    <div className="bg-blue-500 rounded-full p-5">{icon}</div>
                    <h2 className="text-blue-950 text-2xl font-bold m-5">{title}</h2>
                    <p className="text-sm text-black">{description}</p>
                </div>
            </div>
        </>
    )
}export default Problematic;
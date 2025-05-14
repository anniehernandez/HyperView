function Objective({icon, title, description}){
    return(
        <>
            <div className="flex flex-col w-1/3 m-10 p-5">
                <div className="flex flex-row items-center">
                    <div className="bg-blue-950 rounded-full p-10">{icon}</div>
                    <h2 className="text-blue-950 text-[3rem] font-bold uppercase m-5">{title}</h2>
                </div>
                <p className="text-base text-black my-5">{description}</p>
            </div>
        </>
    )
}export default Objective;
function Goal({number, title, description}){
    return(
        <>
            <div className="flex flex-col justify-center w-90 items-center border-4 border-blue-500 rounded-4xl m-10 p-5">
                <h2 className="flex justify-center text-[8rem] text-blue-500 font-medium w-2/3 border-b-6 border-blue-500">{number}</h2>
                <h3 className="text-4xl text-blue-500 font-bold m-5">{title}</h3>
                <p className="text-justify text-base text-black px-5 my-3">{description}</p>
            </div>
        </>
    )
}export default Goal;
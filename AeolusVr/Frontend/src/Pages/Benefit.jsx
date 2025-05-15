function Benefit({ title, description, image }) {
    return(
        <>
        <div className="flex flex-row justify-between bg-gray-200 rounded-r-4xl mx-10 my-5">
            <div className="flex flex-col justify-center items-start w-2/3 p-10">
                <h2 className="text-3xl font-bold text-blue-950 uppercase">{title}</h2>
                <p className="text-black text-md">{description}</p>
            </div>
            <img src={image} alt="" className="w-80 rounded-r-4xl object-cover" />`
        </div>
        </>
    )
}export default Benefit;
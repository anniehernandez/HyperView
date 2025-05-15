import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
function Team_Member({image, name, role, description, email}){
    return(
        <>
            <div className='flex flex-row justify-center items-center bg-gray-200 p-6 rounded-[2vw]'>
                <img src={image} alt="" className="mr-6 w-1/4 h-full object-cover"/>
                <div className="flex flex-col">
                    <h2 className="text-lg text-blue-950 font-bold">{name}</h2>
                    <h3 className="text-blue-500 font-semibold m-1">{role}</h3> 
                    <p className="text-xs text-black">{description}</p>
                    <h3 className='text-blue-950 font-semibold my-2'><PermContactCalendarRoundedIcon className='mr-2'/>{email}</h3>
                </div>
            </div>
        </>
    )
}export default Team_Member;
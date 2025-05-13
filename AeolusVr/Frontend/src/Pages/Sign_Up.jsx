import { useState } from 'react'
import HyperViewLogo from '../assets/HyperViewLogo.png';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Sign_Up(){
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange() {
        if (isChecked) {
            setIsChecked(false);
        }else{
            setIsChecked(true);
        }
    }
    return(
        <>
            <Header/>

            <div className="flex flex-row justify-center items-center h-screen bg-linear-to-b from-blue-950 from-30% to-blue-900 h-full">
                <div className='m-10'>
                    <h3 className='text-2xl'>Don’t miss on our latest News & Projects!</h3>
                    <h1 className='text-[5rem] font-bold m-2'>Sign Up Today!</h1>
                    <div className='m-20'>
                        <h3 className='font-bold'>You will receive:</h3>
                        <ol className='text-regular m-10'>
                            <li className='my-2'><CheckRoundedIcon className='mr-2'/> News & Updates on all of our New Projects.</li>
                            <li className='my-2'><CheckRoundedIcon className='mr-2'/> Early information on all our projects release dates.</li>
                            <li className='my-2'><CheckRoundedIcon className='mr-2'/> Exclusive work in progress content.</li>
                            <li className='my-2'><CheckRoundedIcon className='mr-2'/> Exclusive insight on our future projects.</li>
                        </ol>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center bg-[var(--background-color)]/50 rounded-[3vw] w-1/3 h-3/4 m-10 py-20 px-25 '>
                    <img src={HyperViewLogo} alt="" className='w-1/3'/>

                        <div className='flex flex-col justify-between my-5 w-full'>
                            
                            <div className='my-4'>
                                <h3 className='font-bold'>Full name</h3>
                                <input type="text" placeholder='Full Name' className='w-full border-b-2 border-blue-500/70 p-1 my-2 focus:outline-0 focus:border-blue-500'/>
                            </div>

                            <div className='my-4'>
                                <h3 className='font-bold'>Email</h3>
                                <input type="text" placeholder='Email' className='w-full border-b-2 border-blue-500/70 p-1 my-2 focus:outline-0 focus:border-blue-500'/>
                            </div>
                             
                            <div className='my-4'>
                                <h3 className='font-bold'>Phone Number</h3>
                                <input type="text" placeholder="00-0000-0000"className='w-full border-b-2 border-blue-500/70 p-1 my-2 focus:outline-0 focus:border-blue-500' />
                            </div>

                            <div className='flex flex-row justify-center items-center my-4'>
                                <div className="relative">
                                    <input 
                                        type="checkbox" 
                                        checked={isChecked}
                                        onChange={handleCheckboxChange} 
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleCheckboxChange();
                                            }
                                        }} 
                                        className='m-4 mb-3 appearance-none border-2 border-blue-500 rounded-md w-8 h-8 checked:bg-blue-500 checked:border-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500'
                                    />
                                    { isChecked && (<CheckRoundedIcon className="absolute top-5 left-5 pointer-events-none" />)}
                                </div>
                                <h3 className='text-sm'>Would you like to receive notifications from us? </h3>
                            </div>
                        </div>

                        <button className="bg-blue-500 font-bold rounded-2xl cursor-pointer w-full py-2 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600 ">
                            Sign Up
                        </button>
                    </div>

                </div>
            
            <Footer/>
        </>
    )
}export default Sign_Up;
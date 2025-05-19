import { useState } from 'react'
import HyperViewLogo from '../assets/HyperViewLogo.png';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Swal from 'sweetalert2';
import { Sign_Up } from "../API/Service_Client.js";

function SignUp(){
    const [Email, setEmail] = useState();
    const [FullName, setFullName] = useState();
    const [CellPhone, setCellPhone] = useState();
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange() {
        if (isChecked) {
            setIsChecked(false);
        }else{
            setIsChecked(true);
        }
    }

    const handleSignUp = async () => {
        let Notification_Status;
        isChecked ? Notification_Status = 1 : Notification_Status = 0;

        const response = await Sign_Up(Email, FullName, CellPhone, Notification_Status);

        if (response.status === true){
            console.log(response.message);

            Swal.fire({
                icon: "success",
                title: "Succesful sign up!",
                text: "We'll be in contact as soon as possible.",
                customClass: {
                    confirmButton: "text-white bg-blue-500 font-bold rounded-3xl cursor-pointer w-full py-2 px-6 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600"
                },
                buttonsStyling: false
            });

            setEmail('');
            setFullName('');
            setCellPhone('');
            setCellPhone('');
            setIsChecked(false);
            document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
        }else{
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Something went wrong, try again.",
                customClass: {
                    confirmButton: "text-white bg-blue-500 font-bold rounded-3xl cursor-pointer w-full py-2 px-6 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600"
                },
                buttonsStyling: false
            });
        }
    }

    function validateFields(){
        const emailRegExp = new RegExp('^[\\w.-]+@([\\w-]+\\.)+[\\w]{2,4}$');
        const cellPhoneRegExp = new RegExp('^\\+\\d{2}-\\d{2}-\\d{4}-\\d{4}$');
        
        if(!Email || !FullName || !CellPhone){
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Please fill out all fields.",
                customClass: {
                    confirmButton: "text-white bg-blue-500 font-bold rounded-3xl cursor-pointer w-full py-2 px-6 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600"
                },
                buttonsStyling: false
            });
            return;
        }else{
            if(!emailRegExp.test(Email) ){
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "Invalid email.",
                    customClass: {
                        confirmButton: "text-white bg-blue-500 font-bold rounded-3xl cursor-pointer w-full py-2 px-6 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600"
                    },
                    buttonsStyling: false
                });
                return;
            }else if(!cellPhoneRegExp.test(CellPhone)){
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "Invalid phone number, check formating.",
                    customClass: {
                        confirmButton: "text-white bg-blue-500 font-bold rounded-3xl cursor-pointer w-full py-2 px-6 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600"
                    },
                    buttonsStyling: false
                });
                return;
            }else{
                handleSignUp();
            }
        }
    }

    function formatPhoneNumber(value) {
        let cleaned = value.replace(/[^\d+]/g, '');
        if (!cleaned.startsWith('+')) {
            cleaned = '+' + cleaned.replace(/^\+/, '');
        }
        cleaned = cleaned.replace(/(?!^)\+/g, '');

        let digits = cleaned.replace('+', '');

        digits = digits.slice(0, 14);

        let formatted = '+';
        if (digits.length > 0) formatted += digits.slice(0, 2);
        if (digits.length > 2) formatted += '-' + digits.slice(2, 4);
        if (digits.length > 4) formatted += '-' + digits.slice(4, 8);
        if (digits.length > 8) formatted += '-' + digits.slice(8, 12);

        return formatted;
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
                                <input type="text" placeholder='Full Name'
                                    onChange={e => setFullName(e.target.value)} 
                                    className='w-full border-b-2 border-blue-500/70 p-1 my-2 focus:outline-0 focus:border-blue-500'
                                />
                            </div>

                            <div className='my-4'>
                                <h3 className='font-bold'>Email</h3>
                                <input type="text" placeholder='Email' 
                                    onChange={e => setEmail(e.target.value)}
                                    className='w-full border-b-2 border-blue-500/70 p-1 my-2 focus:outline-0 focus:border-blue-500'
                                />
                            </div>
                             
                            <div className='my-4'>
                                <h3 className='font-bold'>Phone Number</h3>
                                <input
                                    type="text"
                                    placeholder="+00-00-0000-0000"
                                    value={CellPhone || ''}
                                    onChange={e => setCellPhone(formatPhoneNumber(e.target.value))}
                                    className='w-full border-b-2 border-blue-500/70 p-1 my-2 focus:outline-0 focus:border-blue-500'
                                    maxLength={17}
                                />
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

                        <button onClick={validateFields} className="bg-blue-500 font-bold rounded-2xl cursor-pointer w-full py-2 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600 ">
                            Sign Up
                        </button>
                    </div>

                </div>
            
            <Footer/>
        </>
    )
}export default SignUp;
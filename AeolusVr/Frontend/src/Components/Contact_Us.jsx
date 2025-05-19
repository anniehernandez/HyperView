import { useState } from 'react'; 
import HyperViewLogo from '../assets/HyperViewLogo.png';
import Footer from '../Components/Footer.jsx';
import Swal from 'sweetalert2';
import { Send_Message } from '../API/Service_Client.js';

function Contact_Us(){
    const [Email, setEmail] = useState();
    const [FullName, setFullName] = useState();
    const [Message, setMessage] = useState();

    const handleSendMessage = async () => {
        const response = await Send_Message(Email, FullName, Message);

        if(response.status === true){
            console.log(response.message);

            Swal.fire({
                icon: "success",
                title: "Message sent!",
                text: "We'll be in contact as soon as possible.",
                customClass: {
                    confirmButton: "text-white bg-blue-500 font-bold rounded-3xl cursor-pointer w-full py-2 px-6 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600"
                },
                buttonsStyling: false
            });

            setEmail('');
            setFullName('');
            setMessage('');
            document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
            document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');
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
        
        if(!Email || !FullName || !Message){
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
            if(!emailRegExp.test(Email)){
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
            }else{
                handleSendMessage();
            }
        }
    } 

    return(
        <>
          <div className='h-screen flex flex-col justify-between'>
                <div className='flex flex-row justify-center bg-linear-to-b from-blue-950 from-30% to-blue-900 h-full p-10'>
                    <div className='justify-start max-w-1/4 mx-10 my-30'>
                        <h2 className='text-4xl font-bold'>Contact Us</h2>
                        <p className='text-xl m-2'>we’ll get in touch with you as soon as possible!</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-[var(--background-color)]/50 rounded-[3vw] w-1/4 m-10 py-10 px-20 '>
                        <img src={HyperViewLogo} alt="" className='w-1/3'/>

                        <div className='my-5 w-full'>
                            <div className='my-4'>
                                <h3 className='font-bold'>Full name</h3>
                                <input type="text" placeholder='Full Name' 
                                    onChange={e => setFullName(e.target.value)}
                                    className='w-full border-b-2 border-blue-500/70 p-1 focus:outline-0 focus:border-blue-500'
                                />
                            </div>

                            <div className='my-4'>
                                <h3 className='font-bold'>Email</h3>
                                <input type="text" placeholder='Email' 
                                    onChange={e => setEmail(e.target.value)}
                                    className='w-full border-b-2 border-blue-500/70 p-1 focus:outline-0 focus:border-blue-500'
                                />
                            </div>
                            
                            <div className='my-4'>
                                <h3 className='font-bold'>Message</h3>
                                <textarea type="text" 
                                    onChange={e => setMessage(e.target.value)}
                                    className='w-full border-b-2 border-blue-500/70 p-1 focus:outline-0 focus:border-blue-500'
                                />
                            </div>
                        </div>

                        <button  onClick={validateFields} className="bg-blue-500 font-bold rounded-2xl cursor-pointer w-full py-2 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600 ">
                            Contact Us
                        </button>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}export default Contact_Us;
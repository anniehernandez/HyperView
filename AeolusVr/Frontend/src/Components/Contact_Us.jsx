import HyperViewLogo from '../assets/HyperViewLogo.png';
import Footer from '../Components/Footer.jsx';

function Contact_Us(){
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
                                <input type="text" placeholder='Full Name' className='w-full border-b-2 border-blue-500/70 p-1 focus:outline-0 focus:border-blue-500'/>
                            </div>

                            <div className='my-4'>
                                <h3 className='font-bold'>Email</h3>
                                <input type="text" placeholder='Email' className='w-full border-b-2 border-blue-500/70 p-1 focus:outline-0 focus:border-blue-500'/>
                            </div>
                            
                            <div className='my-4'>
                                <h3 className='font-bold'>Message</h3>
                                <textarea type="text" className='w-full border-b-2 border-blue-500/70 p-1 focus:outline-0 focus:border-blue-500'/>
                            </div>
                        </div>

                        <button className="bg-blue-500 font-bold rounded-2xl cursor-pointer w-full py-2 m-2 hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600 ">
                            Contact Us
                        </button>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}export default Contact_Us;
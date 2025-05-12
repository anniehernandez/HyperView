import HyperViewLogo from '../assets/HyperViewLogo.png';
import AeolusVrLogo from '../assets/AeolusVrLogo.png';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Windows from '../assets/windows.jpg';
import Rectangle from '../assets/Rectangle.png';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

function Home(){
    return(
        <>
            <Header/>

            <div className='h-screen flex flex-col justify-between'>
                <div 
                    className="px-30 py-32 bg-blend-multiply bg-cover bg-center" 
                    style={{ 
                        backgroundImage: `linear-gradient(to bottom, rgba(13, 42, 84, 0.8), rgba(13, 42, 84, 0) 100%), url(${Windows})` 
                    }}
                >
                    <h3 className="text-4xl font-semibold text-white">Technology for the real world.</h3>
                    <img src={HyperViewLogo} alt="Logo" className="w-1/12 m-2"/>
                </div>

                {/* WHO ARE WE */}
                <div className="flex flex-row justify-center items-center h-full">
                    <div className="flex flex-row w-3/4 h-auto bg-gray-200 rounded-bl-[3vw] rounded-tr-[3vw] shadow-lg ">
                        <div className="p-20">
                            <h2 className="text-4xl font-bold text-blue-950">Who are we?</h2>
                            <p className="text-base text-black my-10">
                            We are a technology, innovation, and research oriented company dedicated to provide and develop the most creative, 
                            technological and innovating solutions for a variety of fields including Education, World exploration, Investigation etc.
                                <br /><br />
                                Our goal is to use technology as a bridge between simulation and reality, creating effective tools for overcoming phobias, 
                                specialized training, and rehabilitation in various areas.
                            </p>

                            <button className="bg-blue-950 font-bold rounded-2xl py-2 px-5 cursor-pointer hover:bg-blue-900 focus:outline-2 focus:outline-offset-2 focus:outline-blue-950 active:bg-[var(--background-color)]">Learn More <ArrowForwardIosRoundedIcon/></button>
                        </div>
                        <img src={Windows} alt="" className="max-w-4/10 object-cover rounded-tr-[3vw]"/>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-center items-center h-screen'>
                <div 
                    className="bg-[var(--background-color)]/50 bg-blend-multiply bg-cover bg-center py-12" 
                    style={{ 
                        backgroundImage: `radial-gradient(circle, rgba(13, 42, 84, 0), rgba(13, 42, 84, 0.8)), url(${Windows})` 
                    }}
                >
                    <h2 className='uppercase semi-bold bg-blue-950 w-full px-30 py-3'><EmojiObjectsOutlinedIcon className='mr-2'/>New Project</h2>

                    <div className='flex flex-row justify-center my-10 mx-60'>
                        <div className='w-2/3 '>
                            <img src={AeolusVrLogo} alt="" className='h-30' />
                            <h3 className='text-xl font-semibold m-3'>An experience on bigger heights</h3>
                            <p className="text-base my-10 mr-10">
                                Aeolus VR, the hang-gliding simulator, is the most innovative solution to bring the experience of this extreme sport 
                                to places never before seen. Overcome your fears, practice your most daring skills, or dare to live a unique sensory 
                                experience accompanied by incredible views that will leave you in the clouds.
                                <br /><br />
                                Learn more about our latest project! From its origins as a safe alternative for hang-gliding flight training, to the 
                                development process of this technology and the results we have achieved.
                            </p>
                            <button className="bg-blue-500 font-bold rounded-2xl py-2 px-5 cursor-pointer hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600">
                                Learn More <ArrowForwardIosRoundedIcon/>
                            </button>
                        </div>
                        <div className='flex flex-row justify-center items-center w-2/3'>
                            <img src={Rectangle} alt="" className='h-full w-1/2 rounded-[2vw] m-3'/>
                            <div className='flex flex-col justify-center items-center w-full h-full m-3'>
                                <img src={Rectangle} alt="" className='h-2/3 object-cover rounded-[2vw] mb-3'/>
                                <img src={Rectangle} alt="" className='h-1/3 w-full object-cover rounded-[2vw] mt-3'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-screen flex flex-col justify-between'>
                <div className='flex flex-row justify-center bg-linear-to-b from-blue-950 from-30% to-blue-900 h-full p-10'>
                    <div className='justify-start max-w-1/4 mx-10 my-30'>
                        <h2 className='text-4xl font-bold'>Contact Us</h2>
                        <p className='text-xl m-2'>we’ll get in touch with you as soon as possible!</p>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-[var(--background-color)]/50 rounded-[3vw] w-1/4 m-10 py-10 px-20 '>
                        <img src={HyperViewLogo} alt="" className='h-10'/>

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
}export default Home;
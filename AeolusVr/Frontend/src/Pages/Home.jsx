import { Link } from 'react-router-dom';
import HyperViewLogo from '../assets/HyperViewLogo.png';
import AeolusVrLogo from '../assets/AeolusVrLogo.png';
import Simulation from "../assets/Simulation.webm";
import Landscape from "../assets/Landscape.png";
import Scenery from '../assets/Scenery.png';
import Process from '../assets/Process.png';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import Header from '../Components/Header.jsx';
import Contact_Us from '../Components/Contact_Us.jsx';

function Home(){
    return(
        <>
            <Header/>

            <div className='h-screen flex flex-col justify-between'>
                <div 
                    className="relative px-30 py-32 bg-blend-multiply bg-cover bg-center overflow-hidden"
                >
                    <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline >
                        <source src={Simulation} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute top-0 left-0 w-full h-full z-10" style={{
                        background: 'linear-gradient(to bottom, rgba(13, 42, 84, 0.8), rgba(13, 42, 84, 0) 100%)'
                    }} />

                    <div className="relative z-20">
                        <h3 className="text-4xl font-semibold">Technology for the real world.</h3>
                        <img src={HyperViewLogo} alt="Logo" className="w-1/12 m-2"/>
                    </div>
                </div>

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

                            <Link to="/About_Us" className="bg-blue-950 font-bold rounded-2xl py-2 px-5 cursor-pointer hover:bg-blue-900 focus:outline-2 focus:outline-offset-2 focus:outline-blue-950 active:bg-[var(--background-color)]"> 
                                Learn More <ArrowForwardIosRoundedIcon/>
                            </Link>
                        </div>
                        <img src={Scenery} alt="" className="max-w-4/10 max-h-120 object-cover rounded-tr-[3vw]"/>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-center items-center h-screen'>
                <div 
                    className="bg-[var(--background-color)]/50 bg-blend-multiply bg-cover bg-center py-12" 
                    style={{ 
                        backgroundImage: `radial-gradient(circle, rgba(13, 42, 84, 0), rgba(13, 42, 84, 0.8)), url(${Landscape})` 
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
                            <Link to="/Projects/Aeolus_Vr" className='bg-blue-500 font-bold rounded-2xl py-2 px-5 cursor-pointer hover:bg-blue-400 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-600'>
                                Learn More <ArrowForwardIosRoundedIcon/>
                            </Link>
                        </div>
                        <div className='flex flex-row justify-center items-center w-2/3'>
                            <div className='grid grid-cols-2 grid-rows-2 gap-5'>
                                <img src={Scenery} alt="" className='row-span-2 object-cover rounded-[2vw] h-full'/>
                                <img src={Landscape} alt="" className='col-span-1 object-cover rounded-[2vw] h-full'/>
                                <img src={Process} alt="" className='col-span-1 object-cover rounded-[2vw] h-full'/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Contact_Us/>
        </>
    )
}export default Home;
import Windows from '../assets/windows.jpg';
import Rectangle from '../assets/Rectangle.png';
import AlaDelta from '../assets/Ala_Delta.jpg';
import FearofHeights from '../assets/Fear_of_heights.jpg';
import DeltaWing from '../assets/DeltaWing.jpeg';
import Heights from '../assets/Heights.jpeg';
import AeolusVrLogo2 from '../assets/AeolusVrLogo2.png';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Problematic from '../Components/Problematic';
import Benefit from './Benefit';
import Team_Member from '../Components/Team_Member';

function Aeolus_Vr() {
return (
    <>
            <Header/>
            <div className="flex justify-center items-center h-screen w-full bg-[var(--background-color)]/50 bg-blend-multiply bg-cover bg-center"
                    style={{ 
                            backgroundImage: `linear-gradient(to bottom, rgba(13, 42, 84, 0.8), rgba(13, 42, 84, 0) 100%), url(${Windows})` 
                    }}
            >
                    <div className='flex justify-center items-center bg-white w-full p-15'>
                            <div className='flex flex-row  items-center w-3/4'>
                                    <div className='flex flex-col w-1/2 p-5'>
                                            <img src={AeolusVrLogo2} alt="" className='w-100'/>
                                            <h3 className='text-xl text-blue-950 font-bold m-4'>An experience on bigger heights</h3>
                                            <p className='text-base text-black mx-4'>
                                                    Aeolus VR, the hang-gliding flight simulator based on virtual reality and haptic technology, 
                                                    is the most innovative solution for bringing the experience of this extreme sport to previously 
                                                    unseen places. From providing safe training for interested future athletes to providing support 
                                                    for patients with a fear of heights.
                                                    <br /><br />
                                                    Enjoy this unforgettable, immersive experience, 100% open to all audiences and explore our goals 
                                                    and challenges throughout the development process from paper to reality.
                                            </p>
                                    </div>
                                    <div className='flex justify-center items-center w-1/2 h-full p-5'>
                                            <img src={Windows} alt="" className='object-cover rounded-[3vw]' />
                                    </div>
                            </div>
                    </div>
            </div>

            <div className='flex flex-col justify-center items-center h-screen'>
                    <h1 className='text-4xl text-blue-950 font-bold w-3/5 mx-10 my-5'>Why a Hang-gliding Simulator?</h1>
                    <div className='flex flex-row items-start w-3/5 mx-10'>
                            <Problematic image={AlaDelta}
                                    icon={<GppGoodRoundedIcon/>}
                                    title="Safe training for hang gliding"
                                    description={<>
                                            Hang gliding is considered one of the most extreme sports, requiring excellent technical preparation 
                                            and body control. However, traditional learning presents challenges such as:                   
                                            <br /><br />
                                            <ol className='list-disc mx-5 mx-10'>
                                                    <li>Dependence on weather conditions.</li>
                                                    <li>Need for trained instructors.</li>
                                                    <li>Risks inherent in first flight experiences.</li>
                                            </ol>
                                    </>}
                            />
                            <Problematic image={FearofHeights}
                                    icon={<ThumbUpRoundedIcon/>}
                                    title="Overcoming the fear of heights"
                                    description={<>
                                            The fear of heights is one of the most common phobias and affects a large part of the population, 
                                            generating symptoms such as:             
                                            <br /> <br />
                                            <ol className='list-disc mx-5 mx-10'>
                                                    <li>Dizziness.</li>
                                                    <li>Difficulty breathing.</li>
                                                    <li>Excessive sweating.</li>
                                                    <li>Tremors, etc.</li>
                                            </ol>
                                            <br />
                                            Traditional treatments for acrophobia include progressive exposure therapy, where the patient 
                                            confronts their fear in a controlled environment until their anxiety subsides. However, in many cases, 
                                            exposure in real-life settings can be difficult or even dangerous.
                                    </>}
                            />
                    </div>
                    
            </div>

            <div className='flex flex-row justify-center items-center m-20'>
                    <h1 className='text-right text-4xl text-blue-950 font-bold w-1/4 p-10'>Integrating Virtual Reality and Haptic Technology: Benefit</h1>
                    <div className='border-l-5 border-blue-950'>
                            <Benefit image={DeltaWing} title="Sports" 
                            description={<>
                                    <ol className='list-disc m-5'>
                                            <li>Recreates realistic environments without exposing yourself to risks.</li>
                                            <li>Effective training.</li>
                                            <li>Builds confidence.</li>
                                            <li>Accessible and flexible.</li>
                                    </ol> 
                            </>}
                            />
                            <Benefit image={Heights} title="Acrophobia" 
                            description={<>
                                    <ol className='list-disc m-5'>
                                            <li>Gradual Exposure.</li>
                                            <li>Ease of desensitization and anxiety reduction.</li>
                                            <li>Therapeutic alternative with gradual exposure and sensory control.</li>
                                            <li>Controlled environment.</li>
                                    </ol> 
                            </>}
                            />
                    </div>
            </div>

            <div className='flex justify-center items-center m-20 p-20 rounded-[3vw]'>
                <div className='grid grid-cols-2 grid-rows-2 gap-5 w-2/3 '>
                    <img src={DeltaWing} alt="" className='row-span-2 object-cover h-full rounded-tl-[3vw]'/>
                    <img src={AlaDelta} alt="" className='col-span-1 object-cover h-full rounded-tr-[3vw]'/>
                    <img src={Heights} alt="" className='col-span-1 object-cover h-full'/>
                    <img src={FearofHeights} alt="" className='col-span-2 object-cover h-100 w-full'/>
                    <div className='flex flex-row justify-center items-center col-span-2 row-span-3'>
                        <div className='p-5 m-5'>
                            <h3 className='text-4xl text-blue-500 font-bold'>Explore the world</h3>
                            <p className='text-md text-black my-4'>
                                Like the view? Take a look at preview of the beautiful landscape Aeolus Vr has prepared for you to explore. 
                            </p>
                        </div>
                        <img src={Windows} alt="" className='w-1/2 object-cover h-80'/>
                    </div>
                </div>
            </div>

            <div 
                className="bg-[var(--background-color)]/50 bg-blend-multiply bg-cover bg-center my-20" 
                style={{ 
                    backgroundImage: `radial-gradient(circle, rgba(13, 42, 84, 0), rgba(13, 42, 84, 0.8)), url(${Windows})` 
                }}
            >
                <div className='flex flex-row justify-center items-center p-20'>
                    <img src={Rectangle} alt="" className='w-1/2 m-10 max-h-135'/>
                    <div className='flex flex-col justify-center items-center w-1/3 p-10'>
                        <h1 className='text-4xl font-bold'>Connecting to the virtual world: The Haptic</h1>
                        <p className='my-5'>
                            Part of the development of this experience involved the creation of a haptic 
                            that would serve as our physical connection to this virtual environment, not 
                            only pragmatically, by harmoniously implementing the functionality of the haptic 
                            to react with the virtual environment, but also by making it part of the illusion 
                            of reality that we wish to provide.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center bg-gradient-to-b from-blue-950 from-30% to-blue-900'>
                <div className='flex flex-col bg-gray-200 rounded-t-[3vw] m-20 mb-0 w-3/5 h-full px-30 py-20'>
                    <h1 className='text-4xl text-blue-950 font-bold'>Creating a Hang-gliding Simulator: Aeolus Vr</h1>
                    <img src={Windows} alt="" className='my-10'/>
                    <h3 className='text-2xl text-blue-950 font-bold'>Aeolus Vr: An experience on bigger heights</h3>
                    <p className='text-black my-2'>
                        Learn more about the process and the team behind the development of Aeolus VR: the origins of the idea,
                        the challenges we overcame, the setbacks that arose along the way, and much more!
                    </p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center h-screen m-20'>
                <div className='w-3/4'>
                    <h1 className='text-4xl text-center font-bold bg-blue-950 p-10 w-full rounded-full uppercase'>Our Team</h1>
                    <div className='my-10 grid grid-cols-2 grid-rows-3 gap-5'>
                        <Team_Member image={Windows} name="Your Name" role="Your Role"
                            description="A little presentation about yourself, what you do, your participation in this 
                            project. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            email="youremail@gmail.com"
                            className="row-span-2"
                        />
                        <Team_Member image={Windows} name="Your Name" role="Your Role"
                            description="A little presentation about yourself, what you do, your participation in this 
                            project. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            email="youremail@gmail.com"
                            className="row-span-2"
                        />
                         <Team_Member image={Windows} name="Your Name" role="Your Role"
                            description="A little presentation about yourself, what you do, your participation in this 
                            project. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            email="youremail@gmail.com"
                            className="row-span-2"
                        />
                        <Team_Member image={Windows} name="Your Name" role="Your Role"
                            description="A little presentation about yourself, what you do, your participation in this 
                            project. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            email="youremail@gmail.com"
                            className="row-span-2"
                        />
                         <Team_Member image={Windows} name="Your Name" role="Your Role"
                            description="A little presentation about yourself, what you do, your participation in this 
                            project. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            email="youremail@gmail.com"
                            className="row-span-2"
                        />
                        <Team_Member image={Windows} name="Your Name" role="Your Role"
                            description="A little presentation about yourself, what you do, your participation in this 
                            project. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            email="youremail@gmail.com"
                            className="row-span-2"
                        />
                    </div>
                </div>
            </div>

            <Footer/>
    </>
)
}export default Aeolus_Vr; 
import { useRef, useEffect } from 'react';
import Windows from '../assets/windows.jpg';
import AlaDelta from '../assets/Ala_Delta.jpg';
import FearofHeights from '../assets/Fear_of_heights.jpg';
import DeltaWing from '../assets/DeltaWing.jpeg';
import Heights from '../assets/Heights.jpeg';
import AeolusVrLogo2 from '../assets/AeolusVrLogo2.png';
import Stibaly from '../assets/Stibalyy.jpeg';
import Annie from '../assets/Annie.jpeg';
import Person from '../assets/Person.jpg';
import Landscape from '../assets/Landscape.png';
import Map from '../assets/Map.jpeg';
import Process from '../assets/Process.png';
import Landscape2 from '../assets/Landscape2.png';
import Haptic_Trials from '../assets/Haptic Trials.webm';
import Scenery from '../assets/Scenery.webm';
import Simulation from '../assets/Simulation.webm';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Problematic from '../Components/Problematic';
import Benefit from '../Components/Benefit';
import Team_Member from '../Components/Team_Member';

function Aeolus_Vr() {
    function useAutoplayOnScroll(videoRefs) {
        useEffect(() => {
            if (!('IntersectionObserver' in window)) return;

            const observer = new window.IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const video = entry.target;
                        if (entry.isIntersecting) {
                            video.play().catch(() => {});
                        } else {
                            video.pause();
                        }
                    });
                },
                { threshold: 0.5 }
            );

            videoRefs.forEach(ref => {
                if (ref.current) observer.observe(ref.current);
            });

            return () => {
                videoRefs.forEach(ref => {
                    if (ref.current) observer.unobserve(ref.current);
                });
            };
        }, [videoRefs]);
    }

    const sceneryRef = useRef(null);
    const hapticRef = useRef(null);

    useAutoplayOnScroll([sceneryRef, hapticRef]);

    return (
        <>
            <Header/>
            <div className="relative flex justify-center items-center h-screen w-full bg-[var(--background-color)]/50 bg-blend-multiply bg-cover bg-center"
                style={{ 
                    backgroundImage: `linear-gradient(to bottom, rgba(13, 42, 84, 0.8), rgba(13, 42, 84, 0) 100%), url(${Windows})` 
                }}
            >
                <video src={Simulation} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" style={{ pointerEvents: 'none' }}/>
                <div className="absolute inset-0 z-10" style={{
                    background: 'linear-gradient(to bottom, rgba(13, 42, 84, 0.8), rgba(13, 42, 84, 0) 100%)'
                }} />

                <div className='flex justify-center items-center bg-white/70 w-full p-15 relative z-20'>
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
                            <video ref={sceneryRef} src={Scenery} controls className='object-cover rounded-[3vw] w-full h-full' />
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
                        description={<>Hang gliding is considered one of the most extreme sports, requiring excellent technical preparation 
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
                        description={<>The fear of heights is one of the most common phobias and affects a large part of the population, 
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
                    <img src={Landscape2} alt="" className='row-span-2 object-cover h-full rounded-tl-[3vw]'/>
                    <img src={Process} alt="" className='col-span-1 object-cover h-full rounded-tr-[3vw]'/>
                    <img src={Map} alt="" className='col-span-1 object-cover h-full'/>
                    <img src={Landscape} alt="" className='col-span-2 object-cover h-100 w-full'/>
                    <div className='flex flex-row justify-center items-center col-span-2 row-span-3'>
                        <div className='p-5 m-5'>
                            <h3 className='text-4xl text-blue-500 font-bold'>Explore the world</h3>
                            <p className='text-md text-black my-4'>
                                Like the view? Take a look at preview of the beautiful landscape Aeolus Vr has prepared for you to explore. 
                            </p>
                        </div>
                        <video ref={sceneryRef} src={Scenery} controls className='w-1/2 object-cover h-80 rounded-3xl'/>
                    </div>
                </div>
            </div>

            <div 
                className="bg-[var(--background-color)]/50 bg-blend-multiply bg-cover bg-center my-20" 
                style={{ 
                    backgroundImage: `radial-gradient(circle, rgba(13, 42, 84, 0), rgba(13, 42, 84, 0.8)), url(${Landscape})` 
                }}
            >
                <div className='flex flex-row justify-center items-center p-20'>
                    <video ref={hapticRef} src={Haptic_Trials} controls className='w-1/2 m-10 max-h-135 rounded-4xl'/>
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
                        <Team_Member image={Person} name="Leonardo Moreno Gonzálesz" role="Vr Technical Desinger"
                            description="Apasionado por el diseño de mecánicas interactivas y experiencias inmersivas 
                            en Unreal Engine, con enfoque en la integración de tecnologías de realidad virtual. 
                            Encargado del desarrollo y ajuste de las interacciones del usuario, 
                            incluyendo la optimización del rendimiento para plataformas de realidad virtual. Trabajé 
                            en la integración de sistemas de física y elementos de UI adaptados a VR, asegurando una 
                            experiencia fluida y envolvente."
                            email="youremail@gmail.com"
                            className="row-span-2"
                        />
                        <Team_Member image={Annie} name="Ana Sofía Hernández" role="Web Page Developer"
                            description="A little presentation about yourself, what you do, your participation in this 
                            project. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            email="anasofia.hernandez002@gmail.com"
                            className="row-span-2"
                        />
                        <Team_Member image={Person} name="Jose María Noriega" role="Haptic Engenieer"
                            description="Soy un artista 3D y 2D con un enfoque creativo y técnico. Aspiro a poder 
                            diseñar soluciones que puedan integrar el uso de tecnologia. En este proyecto participé  
                            en el desarrollo tanto del hardware como del software del sistema háptico buscando una 
                            forma de integrar elementos visuales con componentes físicos que permitieran crear una 
                            experiencia inmersiva e interactiva."
                            email="youremail@gmail.com"
                            className="row-span-2"
                        />
                        <Team_Member image={Stibaly} name="Stibaly Jaretzi Ríos" role="Social Media Manager"
                            description="Soy una profesional creativa con gran gusto por el marketing y el diseño 3D. 
                            Disfruto crear personajes y objetos, así como editar fotos y videos para dar vida a cada proyecto. 
                            Además, me gusta combinar la creatividad con estrategias digitales."
                            email="stibalyrios@outlook.com"
                            className="row-span-2"
                        />
                        <Team_Member image={Person} name="David Emanuel Rodríguez" role="Enviorment Artist"
                            description="Entusiasta en la creación de entornos digitales en Unreal Engine, con experiencia 
                            en el diseño y construcción de escenarios virtuales. Mi tarea fue 
                            desarrollar un entorno virtual que reflejara una ambientación natural y realista, prestando 
                            especial atención a la iluminación y texturas para maximizar la inmersión. Me enfoqué en optimizar 
                            la funcionalidad del escenario para la simulación, asegurando el cumplimiento 
                            de las especificaciones del proyecto y contribuyendo a los objetivos del equipo."
                            email="daviderdz14@gmail.com"
                            className="row-span-2"
                        />
                        <Team_Member image={Person} name="Erick Franco Mendez" role="Content Creator for Advertising"
                            description="En este proyecto, mi responsabilidad fue encargarme de la publicidad y la creación 
                            de contenido para diferentes redes sociales,con el objetivo de comunicar de forma clara y 
                            atractiva el enfoque de nuestro proyecto y así poder llamar la atención de potenciales clientes 
                            o inversores. "
                            email="franco.mendez2003@outlook.com"
                            className="row-span-2"
                        />
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}export default Aeolus_Vr; 
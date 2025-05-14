import Windows from "../assets/windows.jpg";
import Rectangle from "../assets/Rectangle.png";
import Fcfm from "../assets/Fcfm.jpg";
import Medicina from "../assets/Medicina.webp";
import Exintor from "../assets/Extintor.jpeg";
import Electric from "../assets/Electric.webp";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Header from "../Components/Header";
import Contact_Us from "../Components/Contact_Us";
import Objective from "../Components/Objective";
import Goal from "../Components/Goal";
import Project from "./Project";

function About_Us(){
    return(
        <>
        <Header/>
        
        <div className="h-screen flex flex-col justify-between">
            <div className="px-20 py-32 bg-blend-multiply bg-cover bg-center"
                style={{ 
                    backgroundImage: `linear-gradient(to bottom, rgba(13, 42, 84, 0.8), rgba(13, 42, 84, 0) 100%), url(${Windows})` 
                }}
            >
                <h3 className="text-4xl font-semibold">About Us</h3>
            </div>

            <div className="flex flex-row justify-center items-center h-full">
                <div className="flex flex-row w-3/4 h-auto bg-gray-200 rounded-bl-[3vw] rounded-tr-[3vw] shadow-lg ">
                    <div className="p-15">
                        <h2 className="text-4xl font-bold text-blue-950">Who are we?</h2>
                        <p className="text-base text-black my-5">
                            We are a technology, innovation, and research oriented company dedicated to provide and develop the most creative, 
                            technological and innovating solutions for a variety of fields including Education, World exploration, Investigation etc.
                            <br /><br />
                            HyperView emerged with a clear purpose: to provide experiences in a creative, modern, and, above all, technologically-rich way. 
                            Our goal is to use technology as a bridge between simulation and reality, creating effective tools for overcoming phobias, 
                            specialized training, and rehabilitation in various areas. 
                            <br /><br />
                            From the beginning, HyperView has sought to distinguish itself by implementing technology in environments that could serve 
                            a medium beyond mere entertainment, implementing educational experiences, immersive tours, and, more recently, psychological therapies.
                        </p>
                    </div>
                    <img src={Windows} alt="" className="max-w-4/10 object-cover rounded-tr-[3vw]"/>
                </div>
            </div>
        </div>

        <div className="flex flex-row justify-center items-center bg-gray-200 px-25 my-20">
            <Objective icon={<CodeRoundedIcon className="scale-200"/>} 
                title="Develop" 
                description="Realistic and progressive simulations that expose users to scenarios designed 
                to strengthen their capabilities and improve their adaptation to challenging environments."
            />   
            <Objective icon={<GppGoodRoundedIcon className="scale-200"/>} 
                title="Create" 
                description="Flexible and scalable solutions that can be adapted to different uses, from 
                therapeutic treatments to specialized training."
            />
            <Objective icon={<VideogameAssetRoundedIcon className="scale-200"/>} 
                title="Integrate" 
                description="State-of-the-art haptic systems to provide precise tactile feedback, increasing 
                immersion and facilitating experiential learning."
            />        
        </div>

        <div className="flex flex-col justify-center items-center my-30">
            <h2 className="uppercase text-[4rem] text-blue-500 font-bold">Goals</h2>
            
            <div className="flex flex-row justify-center w-3/4">
                <Goal number="1" title="Technological" 
                    description="Design a modular and scalable system that allows for the continuous 
                    integration of new features and technological improvements."
                    />
                <Goal number="2" title="Market" 
                    description="Establish strategic alliances with clinics, hospitals, research 
                    centers, companies, and academies to expand the reach and adoption of our solutions."
                    />
                <Goal number="3" title="Innovation" 
                    description="Establish strategic alliances with clinics, hospitals, research centers, 
                    companies, and academies to expand the reach and adoption of our solutions."
                    />
            </div>
        </div>

        <div className="flex justify-center bg-blue-950">
            <div className="w-4/5 p-10">
                <h2 className="uppercase text-4xl font-bold m-10"><ArrowForwardIosRoundedIcon className="mx-4 scale-150"/>Our Projects</h2>

                <div className="flex flex-row justify-center items-center m-10">
                    <Project image={Fcfm} title="Explore FCFM"  
                    description="Explore the facilities of the Faculty of Physics and Mathematics 
                    through our virtual tour created at full scale."/>
                    <Project image={Medicina} title="STAT Simulator" 
                    description="Participate in different types of medical simulations, from CPR to complex surgeries."/>
                    <Project image={Exintor} title="Fire Combat Vr" 
                    description="Learn about different types of fires and their corresponding 
                    extinguishers through specific scenarios."/>
                    <Project image={Electric} title="Electric Vr" 
                    description="Learn to work with electrical networks safely and dynamically 
                    with this immersive experience."/>
                </div>
            </div>
        </div>

        <Contact_Us/>
        </>
    );
}export default About_Us;
import { Link } from 'react-router-dom';
import HyperViewLogo from '../assets/HyperViewLogo.png'
import HyperViewLogo2 from '../assets/HyperViewLogo2.png'

function Header (){
    return(
        <>
            <div className="flex flex-row justify-between items-center fixed top-0 left-0 right-0 bg-gradient-to-b from-[var(--background-color)] to-[var(--gradient-color)] mix-blend-multiply py-3 px-30">
                <img src={HyperViewLogo} alt="HyperView" className='h-10 cursor-pointer'/>
            </div>
            <div className='flex flex-row justify-between items-center fixed top-0 left-0 right-0 py-3 px-30'>

              <Link to={"/"}>
                <img src={HyperViewLogo} alt="HyperView" className='h-10 cursor-pointer'/>
              </Link>

                <div className='flex items-center justify-center text-sm text-regular'>
                    <ol className='flex flex-row mx-10'>
                        <Link to={"/About_Us"}>
                            <li className="relative mx-10 cursor-pointer hover:underline">About Us</li>
                        </Link>
                        <Link to={"/Projects/AeolusVr"}>
                            <li className='relative mx-10 cursor-pointer hover:underline'>Projects</li>
                        </Link>
                        <Link to={"/Sing_Up"}>
                            <li className='relative mx-10 cursor-pointer hover:underline'>Sign Up</li>
                        </Link>
                        {/* <li className="relative mx-10 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-white after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:w-full">About Us</li> */}
                    </ol>
                    <img src={HyperViewLogo2} alt="HyperView" className='h-10'/>
                </div>
            </div>
        </>
    )
}export default Header;
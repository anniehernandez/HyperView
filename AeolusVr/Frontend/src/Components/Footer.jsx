import HyperViewLogo from '../assets/HyperViewLogo.png'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(){
    return(
        <>
            <div className='bg-[var(--background-color)] px-30 text-sm'>
                    <div className='flex flex-row p-5'>
                        <div className='flex flex-col'>
                            <h3 className='font-bold text-base'>About Us:</h3>
                            <ol className='m-3'>
                                <li className='m-2 cursor-pointer hover:underline'>Mision & Vision</li>
                                <li className='m-2 cursor-pointer hover:underline'>Our Team</li>
                            </ol>
                        </div>

                        <div className='flex flex-col'>
                            <h3 className='font-bold text-base'>Contact Us:</h3>
                            <ol className='m-3'>
                                <li className='flex flex-row m-2 cursor-pointer hover:underline'><LocalPhoneRoundedIcon className='mr-2'/>00-0000-0000</li>
                                <li className='flex flex-row m-2 cursor-pointer hover:underline'><EmailRoundedIcon className='mr-2'/>hyperview@gmail.com</li>
                                <li className='flex flex-row m-2 cursor-pointer hover:underline'><InstagramIcon className='mr-2'/>hyperview.official</li>
                            </ol>
                        </div>
                    </div>
                    <div className='border-b border-white'></div>
                    <div className='flex flex-row justify-between items-center p-5'>
                        <img src={HyperViewLogo} alt="HyperView Logo" className='h-8'/>
                        @2025 HyperView.com All rights reserved.
                    </div>
            </div>
        </>
    )
}export default Footer;
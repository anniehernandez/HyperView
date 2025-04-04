import AeolusVrLogo from '../assets/AeolusVrLogo.png';
import AeolusVrLogo2 from '../assets/AeolusVrLogo2.png';

function Home(){
    return(
        <>
            <div className='flex flex-col justify-center items-center p-70'>
                <div className='flex items-center justify-center'>
                    <img src={AeolusVrLogo} alt="AeolusVr Logo" className='w-12 m-2'/>
                    <h1 className='text-3xl text-center text-white m-2'>HyperView</h1>
                </div>
                <img src={AeolusVrLogo2} alt="AeolusVr Logo" className='w-150'/>
            </div>
        </>
    )
}export default Home;
import cal from '../img/Cal.png';
import email from '../img/email.png';
import build from '../img/Build.png';
import Cart from './Cart';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="w-full headerr mt-1 mb-40">
            <div className="relative w-full max-w-[1200px] flex flex-col items-center font-mono mx-auto">
                <button className='open-modal-btn py-2 px-4 bg-blue-600 text-xl font-extrabold rounded-md mx-10 top-24 hover:underline right-1 absolute text-white'>
                    Add Task
                </button>
                <div className="mt-20 flex flex-col items-center gap-10 black-white mx-w-[852px] text-center">
                    <p className="font-semibold leading-8 text-xl">{t("Contact Us")}</p>
                    <h1>{t("say")} <span className="text-blue-600">{t("Hello")}!</span> {t("We’re always here to help")}.</h1>
                    <p className="text-xl font-normal leading-7 ">
                        {t("Interested in learning more about SmartMoving? Give us a call or send an email and one of our team members will be happy to assist you")}.
                    </p>
                </div>
                <div className="max-w-[870px] flex gap-5 flex-wrap mt-40 black-white">
                    <div className="w-[420px] shadow-slate-500 shadow-sm p-4 flex rounded-xl items-center gap-3">
                        <img src={cal} alt="" />
                        <div className='flex flex-col gap-2'>
                            <span className='text-xl font-medium leading-7'>{t("CALL US")}</span>
                            <h1 className='font-semibold text-3xl leading-10 '>+1(214)9604130</h1>
                        </div>
                    </div>
                    <div className="w-[420px] shadow-slate-500 shadow-sm p-4 flex rounded-xl items-center gap-3">
                        <img src={email} alt="" />
                        <div className='flex flex-col gap-2'>
                            <span className='text-xl font-medium leading-7'>{t("EMAIL US")}</span>
                            <h1 className='font-semibold text-3xl leading-10 '>hello@aiinfo.com</h1>
                        </div>
                    </div>
                    <div className="flex-1 w-[870px] shadow-slate-500 shadow-sm p-4 flex rounded-xl items-center gap-3">
                        <img src={build} alt="" />
                        <div className='flex flex-col gap-2'>
                            <span className='text-xl font-medium leading-7'>{t("HEADQUARTERS")}</span>
                            <h1 className='font-semibold text-3xl leading-10'>12720 Hillcrest Road Suite 980, Dallas, TX 75230</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-10 w-full flex flex-wrap justify-evenly">
                    <Cart />
                </div> 
            </div>
        </div>
    );
}

export default Home;

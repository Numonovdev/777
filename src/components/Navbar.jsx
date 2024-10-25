import { useDispatch } from 'react-redux'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Navbar() {
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation();

    function handleChange(e) {
        if (e.target.checked) {
            dispatch({ type: 'DARK' });
            localStorage.setItem('theme', 'dark');
        } else {
            dispatch({ type: 'LIGHT' });
            localStorage.setItem('theme', 'light');
        }
    }

    function handleLangChange(e) {
        const selectedLanguage = e.target.value;
        dispatch({ type: selectedLanguage === 'en' ? 'EN' : 'UZ' });
        i18n.changeLanguage(selectedLanguage);
    }

    return (
        <div className='shadow-xl sticky top-1 z-40'>
            <div className="max-w-[1200px] w-full flex mx-auto py-3 px-3 items-center justify-between">
                <div className="w-28 h-10 rounded-md flex">
                    <img src={logo} className='h-full' alt="" />
                    <span className='font-sans text-4xl font-semibold leading-10 black-white'>Brave</span>
                </div>
                <ul className='flex items-center'>
                    <li className='px-3 leading-6 text-base font-medium black-white rounded hover:underline '>
                        <Link to={'/'}>{t("Home")}</Link>
                    </li>
                    <li className='px-3 leading-6 text-base font-medium black-white rounded hover:underline '>
                        <Link to={'/addtask'}>{t("Add Task")}</Link>
                    </li>
                </ul>
                <div className='flex gap-4'>
                    <select onChange={handleLangChange}>
                        <option value="en">EN</option>
                        <option value="uz">UZ</option>
                    </select>
                    <label className="grid cursor-pointer place-items-center">
                        <input onChange={(e) => { handleChange(e) }} type="checkbox" className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

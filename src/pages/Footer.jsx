import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className="w-full footerr bg-black h-[439px] flex justify-center items-center">
            <div className="flex flex-wrap items-center justify-center max-w-[1200px] mx-auto black-white">
                <div className="w-[830px] h-[164px] flex flex-col items-center gap-10 text-white white-black">
                    <h1 className="font-semibold text-5xl white-black leading-[60px]">{t("signUp")}</h1>
                    <button className="w-[202px] py-2 px-3 hover:bg-blue-700 bg-blue-600 text-white font-semibold text-base rounded-md">
                        {t("getStarted")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;

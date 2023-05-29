// Utils
import Videos from "./utils/Videos";
import SocialLink from "./utils/SocialLink";

const HeroSection = ({ heroSection: {title, subtitle, videos, img, btnText, socialLinks} }) => {

    return (
        <div className="relative h-auto w-auto flex flex-col">
            <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
            <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
                <div className="grid items-center justify-items-center mt-28 md:mt-24">
                    <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{title}</h1>
                    <h2 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{subtitle}</h2>
                    <button type="button" className="button-theme bg-slate-200 shadow-slate-200 rounded-xl mt-5 mb-7">{btnText}</button>
                    <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto xsm:mt-5">
                        {videos?.map((video, index) => (
                            <Videos
                                key={index}
                                imgSrc={video.imgSrc}
                                clip={video.clip}
                            />
                        ))}
                    </div>
                    <div className='grid items-center absolute top-[33vh] lg:top-[28vh] right-0 gap-4 z-50 xsm:mt-3'>
                        {socialLinks?.map((link, index) => (
                            <SocialLink
                                key={index}
                                icon={link.icon}
                            />
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <img className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[20vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill" src={img} alt="basket" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
import React from 'react';

const FlexContent = ({ ifExists, details : {heading, title, text, btn, url, img}}) => {
    return (
        <div className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center">
                <h2 className="text-4xl sm:text-3xl font-bold text-gradient">{heading}</h2>
                <h3 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">{title}</h3>
                <p className="xl:text-sm my-4 text-slate-900">{text}</p>
                <a href={url} className="flex items-center" target={"_blank"} role="button">
                    <button className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5" type="button">{btn}</button>
                </a>
            </div>
            <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full lg:mt-7">
                <img src={img} alt="chaussure" className="w-auto object-fill transitions-theme h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12"/>
            </div>
        </div>
    );
};

export default FlexContent;
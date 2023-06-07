// React
import { useEffect } from "react";

const Error = () => {

    useEffect(() => {
        setTimeout(() => window.location.href = "https://frederic-b-shop-shoes.netlify.app/", 5000)
    }, [])

    return (
        <div className="flex items-center justify-center text-center w-screen h-screen bg-blue-600">
            <div className="text-[2rem] text-white">
                <p><span className="font-bold">Oups !!</span> cette page n'existe pas.<br/> Ne vous inquiétez pas, vous êtes redirigé vers l'accueil du site.</p>
            </div>
        </div>
    );
};

export default Error;
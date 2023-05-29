// Picture
import icon from "../../assets/img/icon.png";


const Footer = () => {
  return (
    <div className=" flex justify-around bg-theme pt-7 pb-5 md:grid xsm:text-center">
      <div className="text-base flex flex-col gap-2 my-4">
        <div className="xsm:mx-auto mb-1">
          <img src={icon} alt="logo du site" className="w-[100px]"/>
        </div>
        <div>
          <p>© 2023, Shop-Shoes</p>
        </div>
      </div>
      <div className="text-base flex flex-col gap-2 my-4">
        <h2 className="text-2x1 font-semibold text-white mb-4">Nos locaux</h2>
        <p>Paris, 75000</p>
        <p>rue chaussure n°1</p>
        <p>Téléphone: 05.00.00.00.02</p>
        <p>E-mail: shop-shoes@gmail.com</p>
      </div>
      <div className="text-base flex flex-col gap-2 my-4">
        <h3 className="text-2x1 font-semibold text-white mb-4">
          Nos partenaires
        </h3>
        <p>Nike</p>
        <p>Puma</p>
        <p>Adidas</p>
        <p>Asics</p>
      </div>
    </div>
  );
};

export default Footer;

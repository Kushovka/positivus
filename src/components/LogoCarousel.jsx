import { logoCarousels } from "../constants";

const LogoCarousel = () => {
  return (
    <div className="pt-[70px] overflow-hidden whitespace-nowrap">
      <div className="flex space-x-12 animate-marquee">
        {logoCarousels.concat(logoCarousels).map((logoCarousel, i) => (
          <img
            key={i}
            src={logoCarousel.imgPath}
            alt={logoCarousel.name}
            height={12}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

import "./Hero.scss";
import heroImg from "../../assets/images/image-web-3-desktop.jpg";
import HeroNewCard from "../HeroNewCard/HeroNewCard";

const Hero = () => {
  const heroHeading = "The Bright Future of Web 3.0?";
  const heroDescription =
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?";
  const heroBtn = "READ MORE";

  const heroNewData = [
    {
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <main>
      <div className="grid__wrapper">
        <img src={heroImg} alt="" className="img__wrapper" />
        <h1 className="header__wrapper">{heroHeading}</h1>
        <div className="heading__btn__wrapper">
          <p>{heroDescription}</p>
          <button>{heroBtn}</button>
        </div>
        <div className="hero__right">
          <h1>New</h1>
          {heroNewData.map((item, index) => (
            <HeroNewCard key={index} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;

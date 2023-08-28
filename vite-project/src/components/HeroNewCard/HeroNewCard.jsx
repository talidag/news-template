import "./HeroNewCard.scss";

const HeroNewCard = ({ title, text }) => {
  return (
    <div className="hero__new__card">
      <h3>{title}</h3>
      <p>{text}</p>
      <hr />
    </div>
  );
};

export default HeroNewCard;

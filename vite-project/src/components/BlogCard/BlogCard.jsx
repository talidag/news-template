import "./BlogCard.scss";

const BlogCard = ({ picture, title, description, number }) => {
  return (
    <div className="blog__card">
      <img src={picture} alt="" />
      <div className="blog__card__text">
        <h1>{`0${number}`}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;

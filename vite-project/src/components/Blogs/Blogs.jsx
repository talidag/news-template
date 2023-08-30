import "./Blogs.scss";
import BlogCard from "../BlogCard/BlogCard";
import blog1 from "../../assets/images/image-retro-pcs.jpg";
import blog2 from "../../assets/images/image-top-laptops.jpg";
import blog3 from "../../assets/images/image-gaming-growth.jpg";

const Blogs = () => {
  const blogsData = [
    {
      picture: blog1,
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
    },
    {
      picture: blog2,
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
    },
    {
      picture: blog3,
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  console.log(blogsData);

  return (
    <section className="blogs">
      {blogsData.map((blog, index) => (
        <BlogCard key={index} number={index + 1} {...blog} />
      ))}
    </section>
  );
};

export default Blogs;

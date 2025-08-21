import React from "react";
import styled from "./blogSection.module.css";

function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: "/images/blog(1).png",
      author: "JOHN HELTON",
      date: "JAN 6, 2025",
      title: "Eco-Friendly Cleaning: How We Keep Your Home Green",
      description:
        "Learn about our commitment to eco-friendly practices. We share the eco-conscious products...",
      link: "#",
      btn: false,
    },
    {
      id: 2,
      image: "/images/blog(2).png",
      author: "JOHN HELTON",
      date: "JAN 6, 2025",
      title: "How to Maintain a Clean Home Between Professional Visits",
      description:
        "Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...",
      link: "#",
      btn: true,
    },
    {
      id: 3,
      image: "/images/blog(3).png",
      author: "JOHN HELTON",
      date: "JAN 6, 2025",
      title: "The Benefits of Regular Professional Cleaning",
      description:
        "Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...",
      link: "#",
      btn: false,
    },
  ];

  return (
    <section className={styled.blogSection}>
      {/* Heading */}
      <div className={styled.header}>
        <div>
          <h2 className={styled.heading}>
            Stay Updated with Our <br /> Tips & Service News!
          </h2>
        </div>
        <div>
          <h4 className={styled.blogTitle}>Our Blog</h4>
          <p className={styled.blogDesc}>
            Stay informed with our latest cleaning tips, service updates, expert
            advice on maintaining an immaculate home
          </p>
        </div>
      </div>
      <hr className={styled.hline} />
      {/* Blog Cards */}
      <div className={styled.blogCards}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styled.card}>
            <div className={styled.imageBox}>
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className={styled.cardBody}>
              <p className={styled.meta}>
                {blog.author} &nbsp; {blog.date}
              </p>
              <h3 className={styled.cardTitle}>{blog.title}</h3>
              <p className={styled.cardDesc}>{blog.description}</p>
              {blog.btn ? (
                <a href={blog.link} className={styled.readMoreBtn}>
                  Read More
                </a>
              ) : (
                <a href={blog.link} className={styled.readMoreLink}>
                  Read More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;

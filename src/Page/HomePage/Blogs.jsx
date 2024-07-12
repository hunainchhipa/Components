import React from "react";

const blogs = [
  {
    id: 1,
    title: "Why Coworking Spaces are the Future",
    content:
      "Coworking spaces offer flexibility and community, making them ideal for freelancers and startups.",
  },
  {
    id: 2,
    title: "Top 10 Coworking Spaces in 2024",
    content:
      "Discover the best coworking spaces that offer excellent facilities and environment.",
  },
  {
    id: 3,
    title: "How to Choose the Right Coworking Space",
    content:
      "Tips and tricks for selecting the perfect coworking space for your needs.",
  },
];

const Blogs = () => {
  return (
    <section className="blogs-section py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">From Our Blog</h2>
      <div className="blogs-grid grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-card bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
            <p className="text-gray-700 mb-4">{blog.content}</p>
            <a
              href={`/blog/${blog.id}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

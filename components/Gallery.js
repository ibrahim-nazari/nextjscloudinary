import axios from "axios";
import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios.get("/api/post").then(({ data }) => {
      setposts(data);
    });
  }, []);
  console.log(posts);
  return (
    <div className="container mx-auto px-4">
      <section className="pt-8 px-4">
        <div className="flex flex-wrap -mx-4">
          {posts.length > 0 &&
            posts.map((post) => (
              <div key={post.public_id} className="md:w-1/3 px-4 mb-8">
                <img className="rounded shadow-md" src={post.url} alt="" />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

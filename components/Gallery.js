import axios from "axios";
import React, { useState, useEffect } from "react";
import { buildImageUrl } from "cloudinary-build-url";
const Gallery = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios.get("/api/post").then(({ data }) => {
      setposts(data);
    });
  }, []);

  const makeUrl = (path) => {
    const url = buildImageUrl(path, {
      cloud: {
        cloudName: "exceldisc",
      },
      transformations: {
        resize: {
          type: "scale",
          width: 400,
          height: 200,
          aspectRatio: "1.5",
        },
      },
    });
    return url;
  };

  return (
    <div className="container mx-auto px-4">
      <section className="pt-8 px-4">
        <div className="flex flex-wrap -mx-4">
          {posts.length > 0 &&
            posts.map((post) => (
              <div key={post.public_id} className="md:w-1/3 px-4 mb-8">
                <img
                  style={{ width: "400px", height: "200px" }}
                  className="rounded shadow-md"
                  src={post.url}
                  alt=""
                />
                {console.log(makeUrl(post.url))}
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

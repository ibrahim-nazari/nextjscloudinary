import React from "react";

const Gallery = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="pt-8 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
          <div className="md:w-1/3 px-4 mb-8">
            <img
              className="rounded shadow-md"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

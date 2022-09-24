import React, { useState, useEffect } from "react";

import { useGlobalContext } from "../context";

const Technology = () => {
  const { isLoading, windowSize, technology, setAppClass } = useGlobalContext();
  const [technologyIndex, setTechnologyIndex] = useState(0);

  useEffect(() => {
    setAppClass("technology");
  }, [setAppClass]);

  return (
    <main className="grid-container grid-container--technology | flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span>Space Launch 101
      </h1>

      {!isLoading && (
        <img
          src={
            windowSize >= 720
              ? technology[technologyIndex].images.portrait
              : technology[technologyIndex].images.landscape
          }
          alt="xd"
        />
      )}

      <div className="technology-body | grid">
        <div className="numbered-indicators flex">
          {technology.map((tech, index) => {
            return (
              <button
                key={tech.name}
                className={index === technologyIndex ? "active" : ""}
                onClick={() => setTechnologyIndex(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        {!isLoading && (
          <article className="technology-info | flow">
            <header className="flow flow--space-small">
              <h2 className="uppercase fs-200 ff-sans-cond text-accent letter-spacing-2">
                The terminology...
              </h2>
              <p className="uppercase fs-700 ff-serif">
                {technology[technologyIndex].name}
              </p>
            </header>
            <p className="text-accent">
              {technology[technologyIndex].description}
            </p>
          </article>
        )}
      </div>
    </main>
  );
};

export default Technology;

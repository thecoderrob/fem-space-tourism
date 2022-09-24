import React, { useState, useEffect } from "react";

import { useGlobalContext } from "../context";

const Destination = () => {
  const { isLoading, destinations, setAppClass } = useGlobalContext();
  const [destinationIndex, setDestinationIndex] = useState(0);

  useEffect(() => {
    setAppClass("destination");
  }, [setAppClass]);

  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <div className="tab-list | underline-indicators flex">
        {destinations.map((destination, index) => {
          const { name } = destination;
          return (
            <button
              key={destination.name}
              className={`uppercase text-accent letter-spacing-2 ff-sans-cond ${
                index === destinationIndex ? "active" : ""
              }`}
              onClick={() => setDestinationIndex(index)}
            >
              {name}
            </button>
          );
        })}
      </div>
      {!isLoading && (
        <>
          <picture>
            <source
              srcSet={destinations[destinationIndex].images.webp}
              type="image/webp"
            />
            <img
              src={destinations[destinationIndex].images.png}
              alt={destinations[destinationIndex].name}
            />
          </picture>

          <article className="destination-info | flow">
            <h2 className="uppercase fs-800 ff-serif">
              {destinations[destinationIndex].name}
            </h2>
            <p className="text-accent">
              {destinations[destinationIndex].description}
            </p>

            <div className="destination-meta | flex">
              <div>
                <h3 className="uppercase fs-200 ff-sans-cond text-accent">
                  Avg. distance
                </h3>
                <p className="uppercase ff-serif">
                  {destinations[destinationIndex].distance}
                </p>
              </div>
              <div>
                <h3 className="uppercase fs-200 ff-sans-cond text-accent">
                  Est. travel
                </h3>
                <p className="uppercase ff-serif">
                  {destinations[destinationIndex].travel}
                </p>
              </div>
            </div>
          </article>
        </>
      )}
      ;
    </main>
  );
};

export default Destination;

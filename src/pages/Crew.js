import React, { useState, useEffect } from "react";

import { useGlobalContext } from "../context";

const Crew = () => {
  const { isLoading, crew, setAppClass } = useGlobalContext();
  const [crewIndex, setCrewIndex] = useState(0);

  useEffect(() => {
    setAppClass("crew");
  }, [setAppClass]);

  return (
    <main className="grid-container grid-container--crew | flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span>Meet your crew
      </h1>

      <div className="dot-indicators flex">
        {crew.map((c, index) => {
          const { role } = c;
          return (
            <button
              key={c.name}
              className={index === crewIndex ? "active" : ""}
              onClick={() => setCrewIndex(index)}
            >
              <span className="sr-only">{role}</span>
            </button>
          );
        })}
      </div>

      {!isLoading && (
        <>
          <article className="crew-details | flow">
            <header className="flow flow--space-small">
              <h2 className="uppercase fs-600 ff-serif">
                {crew[crewIndex].role}
              </h2>
              <p className="uppercase fs-700 ff-serif">
                {crew[crewIndex].name}
              </p>
            </header>
            <p className="text-accent">{crew[crewIndex].bio}</p>
          </article>

          <picture>
            <source srcSet={crew[crewIndex].images.webp} type="image/webp" />
            <img src={crew[crewIndex].images.png} alt={crew[crewIndex].name} />
          </picture>
        </>
      )}

      {/* {crew.map((c, index) => {
        const {
          name,
          images: { webp, png },
          role,
          bio,
        } = c;

        return (
          <>
            <article
              hidden={index !== crewIndex ? "hidden" : ""}
              className="crew-details | flow"
            >
              <header className="flow flow--space-small">
                <h2 className="uppercase fs-600 ff-serif">{role}</h2>
                <p className="uppercase fs-700 ff-serif">{name}</p>
              </header>
              <p className="text-accent">{bio}</p>
            </article>

            <picture hidden={index !== crewIndex ? "hidden" : ""}>
              <source srcSet={webp} type="image/webp" />
              <img src={png} alt={name} />
            </picture>
          </>
        );
      })} */}
    </main>
  );
};

export default Crew;

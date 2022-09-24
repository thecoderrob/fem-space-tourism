import React, { useEffect } from "react";

import { useGlobalContext } from "../context";

const Home = () => {
  const { setAppClass } = useGlobalContext();
  useEffect(() => {
    setAppClass("home");
  }, [setAppClass]);

  return (
    // <main>
    <main className="grid-container grid-container--home">
      <div>
        <h1 className="uppercase text-accent fs-500 ff-sans-cond letter-spacing-1">
          So, you want to travel to{" "}
          <span className="d-block uppercase text-white fs-900 ff-serif">
            Space
          </span>
        </h1>
        <p className="text-accent fs-400">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div>
        <a
          href="#"
          className="large-btn | bg-white text-dark uppercase ff-serif"
        >
          Explore
        </a>
      </div>
    </main>
    // </main>
  );
};

export default Home;

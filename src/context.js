import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [destinations, setDestinations] = useState([]);
  const [crew, setCrew] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [windowSize, setWindowSize] = useState(0);
  const [appClass, setAppClass] = useState("home");

  const fetchData = async () => {
    try {
      const res = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setDestinations(data.destinations);
      setCrew(data.crew);
      setTechnology(data.technology);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    fetchData();
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        windowSize,
        destinations,
        crew,
        technology,
        appClass,
        setAppClass,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

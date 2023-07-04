import React, { useEffect, useState } from "react";
import { useContext } from "react";
const AppContext = React.createContext();
export const api_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppProvider = ({ children }) => {
  const [isloading, setisloading] = useState(true);
  const [movie, setmovie] = useState([]);
  const [query, setquery] = useState("");
  const [iserror, setiserror] = useState({ show: "false", msg: "" });
  const getmovies = async (url) => {
    setisloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisloading(false);
        setmovie(data.Search);
      } else {
        setiserror({ show: "true", msg: data.error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerout = setTimeout(() => {
      getmovies(`${api_url}&s=${query}`);
    }, 2000);
    return () => clearTimeout(timerout);
  }, [query]);

  return (
    <AppContext.Provider value={{ isloading, iserror, movie, query, setquery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };

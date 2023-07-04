import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, setquery,iserror } = useGlobalContext();
  return( <>
  <section className="search-section">
    <h2>search your favourite movie</h2>
    <form action="#" onSubmit={(e) =>{
      e.preventDefault();
    }}>
      <input typeof="text" placeholder="search here" value ={query} onChange={(e) =>setquery(e.target.value)}>

      </input>
    </form>
    <div className="card-error">
      <p>{iserror.show && iserror.msg}</p>
    </div>
  </section>;

  </>);
};

export default Search;

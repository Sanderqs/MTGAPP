import React, { useState, useEffect } from "react";

//import dependencies
import { useDispatch, useSelector } from "react-redux";
//import reduxstate
import {
  fetchAllCards,
  fetchSearch,
  fetchRulings,
} from "../actions/searchActions";
//import components
import SearchedCard from "./SearchedCard";

//TODO:
// 1. searchinput opmaak
// 2. React-Virtualized implementeren voor sneller zoek resultaat

const Search = () => {
  //redux
  const dispatch = useDispatch();
  //data
  const cards = useSelector((state) => state.cardReducer.allCards);
  const searchedCard = useSelector((state) => state.cardReducer.search);
  const rulingsCard = useSelector((state) => state.cardReducer.cardRulings);

  //state
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  //handlers
  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const submitSearch = () => {
    dispatch(fetchSearch(searchInput));

    setSearchInput("");
  };

  const getRulings = () => {
    dispatch(fetchRulings(searchedCard.id));
  };

  return (
    <div>
      <input
        type="text"
        list="list"
        onChange={inputHandler}
        value={searchInput}
        placeholder="Search Card..."
      />
      <button onClick={submitSearch}>Search</button>
      <datalist id="list">
        {cards.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </datalist>

      {searchedCard && (
        <>
          <SearchedCard
            name={searchedCard.name}
            image={searchedCard.image_uris.normal}
            rulesImage={searchedCard.image_uris.art_crop}
            price={searchedCard.prices.eur}
            text={searchedCard.oracle_text}
            rule={rulingsCard}
            getRulings={getRulings}
          />
          {/* <button onClick={() => getRulings()}>Show rulings</button> */}
        </>
      )}
    </div>
  );
};

export default Search;

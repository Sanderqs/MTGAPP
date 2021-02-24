import React, { useState, useEffect } from "react";
import {
  fetchAllCards,
  fetchSearch,
  fetchRulings,
} from "../actions/searchActions";
import { useDispatch, useSelector } from "react-redux";
import SearchedCard from "./SearchedCard";
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

  const showRulingsCard = () => {
    console.log(rulingsCard);
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
          <br></br>
          <button onClick={() => getRulings()}>Show rulings</button>
          <SearchedCard
            name={searchedCard.name}
            image={searchedCard.image_uris.normal}
            rules={rulingsCard}
          />
        </>
      )}
    </div>
  );
};

export default Search;

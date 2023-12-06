import { useState } from "react";
import { usePersistedSearchStr } from "../lib/usePersistedSearchStr";

const SearchForm = function ({ onSearch }) {
  const [searchStr, dispatch] = usePersistedSearchStr();
  console.log(searchStr);

  const [searchOption, setSearchOption] = useState(`movies`);
  const onSearchInputChange = (e) => {
    dispatch({ type: "NEWSEARCH", value: e.target.value });
  };
  const onRadioChange = (e) => {
    setSearchOption(e.target.value);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    const options = { searchStr, searchOption };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />
      <label>
        <input
          type="radio"
          name="search-options"
          checked={searchOption === `movies`}
          value="movies"
          onChange={onRadioChange}
        />
        Movies
      </label>
      <label>
        <input
          type="radio"
          name="search-options"
          checked={searchOption === `actors`}
          value="actors"
          onChange={onRadioChange}
        />
        Actors
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

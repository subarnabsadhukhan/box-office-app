import { useState } from "react";
import { usePersistedSearchStr } from "../lib/usePersistedSearchStr";
import CustomRadio from "./CustomRadio";

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
      <CustomRadio
        label="Movies"
        name="search-options"
        checked={searchOption === `movies`}
        value="movies"
        onChange={onRadioChange}
      />
      <CustomRadio
        label="Actors"
        name="search-options"
        checked={searchOption === `actors`}
        value="actors"
        onChange={onRadioChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

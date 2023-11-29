import { useState } from "react";
import { APIKEY } from "../api-key";
function Home() {
  const [searchStr, setSearchStr] = useState(``);

  const onSearchInputChange = (e) => {
    setSearchStr(e.target.value);
  };
  const onSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchStr}&page=2`
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default Home;

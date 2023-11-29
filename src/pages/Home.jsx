// import { useState } from "react";

function Home() {
  // const [inputValue, setInputValue] = useState(``);
  const onInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={onInputChange} />
    </>
  );
}

export default Home;

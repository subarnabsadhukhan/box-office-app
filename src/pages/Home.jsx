import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/starred">Favourite Items</Link>
    </>
  );
}

export default Home;

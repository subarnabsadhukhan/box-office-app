import { Link } from "react-router-dom";

function Navs() {
  const LINKS = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Starred",
      to: "/starred",
    },
  ];
  return (
    <ul>
      {LINKS.map((item) => (
        <li key={item.to}>{<Link to={item.to}>{item.text}</Link>}</li>
      ))}
    </ul>
  );
}

export default Navs;

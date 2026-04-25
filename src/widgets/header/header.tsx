import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="p-1">
        <Link className="m-1 underline" to="/timer">
          Таймер
        </Link>
        <Link className="m-1 underline" to="/">
          Todo
        </Link>
        <Link className="m-1 underline" to="/fetch">
          Fetch
        </Link>
        <Link className="m-1 underline" to="/accordion">
          Accordion
        </Link>
        <Link className="m-1 underline" to="/carousel">
          Carousel
        </Link>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-50 p-5">
      <div className=" mx-auto flex  max-w-7xl items-center gap-5">
        <div>
          <Link to={"/"}>
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="/green-tea.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

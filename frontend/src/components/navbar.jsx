import { useState, useEffect } from "react";
import "../index.css";
import MenuIcon from "../assets/menu.png";
import CloseIcon from "../assets/reject.png";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, dispatch } = useAuthContext();

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
    localStorage.removeItem("user");
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  return (
    <div className="bg-black">
      <div className="flex items-center justify-between py-7 px-4 mx-3">
        <Link to="/">
          <h1 className="text-2xl font-bold">Fitness Partner</h1>
        </Link>
        {user && (
          <>
            <Link to="/Categories" className="hidden lg:block">
              Categories
            </Link>
            <div onClick={handleLogout} className="pointer">Log out</div>
            <div className="flex items-center justify-end lg:hidden">
              <img
                src={isOpen ? CloseIcon : MenuIcon}
                alt=""
                className="w-6"
                onClick={() => setIsOpen((prev) => !prev)}
              />
            </div>
          </>
        )}
        {!user && (
          <div className="flex gap-4">
            <div>
              <Link to="/login" className="text-white hover:text-gray-300" >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[90px] bg-black/60 backdrop-blur-md flex flex-col items-center z-20">
          <Link
            to="/AddWorkout"
            className="w-full "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            AddWorkout
          </Link>
          <Link
            to="/AddCategory"
            className="w-full"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            AddCategory
          </Link>
          <Link
            to="/Categories"
            className="w-full"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Categories
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import { logout } from "blerg";
import { useDispatch } from "../context/ContextProvider";
import Title from "./Title";
import { types } from "../context/taskReducer";
import { memo } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
    const click = () => {
        dispatch({type: types.logout})
    }
  return (
    <nav className="bg-amber-50 fixed w-full h-fit top-0 left-0 border-b border-amber-200 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Title/>
        <button
          onClick={click}
          className="text-white bg-orange-500 hover:bg-orange-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
export default memo(Navbar);

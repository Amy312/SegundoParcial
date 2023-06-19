import { memo } from "react";
import logo from "../assets/logo.svg"
const Title = () => {
    return(
        <div className="flex items-center mb-6 text-4xl font-bold text-slate-800 ">
      <img className="w-20 h-20 mr-2" src={logo} alt="logo" />
      Calendar App
    </div>
    );
}
export default memo(Title);
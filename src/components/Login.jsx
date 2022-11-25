import React from "react";
import paletasImg from "../img/paletas.jpg";
const Login = () => {
  return (
    <div className=" grid grid-cols-2  shadow-2xl  my-5 max-w-xl p-6 mx-auto   mr-15 rounded-md">
      <div className="m-5  ">
        <img className="p-0 justify-" src={paletasImg} alt="" />
      </div>
      <form className="    gap-2 ">
        <h2 className="text-center text-white uppercase font-bold">
          Bienvenido
        </h2>

        <div className=" ">
          <label className="block  text-white font-bold" htmlFor="user">
            Usuario
          </label>
          <input
            className="w-full  border-b-2  bg-transparent p-1  placeholder-slate-700 k"
            type="text"
            name="user"
          />
        </div>
        <div>
          <label className=" block  text-white font-bold" htmlFor="password">
            Contraseña
          </label>
          <input
            className="w-full  border-b-2 bg-transparent p-1 
         placeholder-slate-700 
         focus:border-none
         active:border-none
         "
            type="password"
            name="user"
          />
        </div>
        <div>
          <input
            className="w-full  p-1  mt-10 bg-indigo-500  text-white rounded-md "
            type="submit"
            name="user"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;

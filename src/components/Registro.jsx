import React from 'react'

const Registro = () => {
  return (
    <div className='bg-blue-900  my-5 max-w-xl p-6 mx-auto   mr-15 rounded-md'>
          <form className="    gap-2 ">
  
  <h2 className="text-center text-white uppercase font-bold">Bienvenido</h2>
  
  <div className=" ">
    <label className="block  text-white font-bold" htmlFor="user">
      Usuario
    </label>
    <input
      className="w-full  p-1 rounded-md placeholder-slate-700 k"
      type="text"
      name="user"
    />
  </div>
  <div>
    <label className=" block  text-white font-bold" htmlFor="password">Contraseña</label>
    <input className="w-full  p-1 rounded-md placeholder-slate-700 " type="password" name="user" />
  </div>
  <div>
  
    <input className="w-full  p-1  mt-10 bg-indigo-500  text-white rounded-md " type="submit" name="user" />
  </div>
</form>
    </div>
  )
}

export default Registro

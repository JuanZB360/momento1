import React from 'react'

const Inputs = ({ type, nombre, required }) => {
  return (
    <div className='relative'>
      <input 
          type={type}
          name={nombre} 
          id={nombre}
          placeholder=" "
          className="peer w-full border-b-2 border-gray-300 py-1 outline-none transition-colors focus:border-[#3E9C7A]"
          required={required}
      />
      
      <label 
          htmlFor={nombre} 
          className="absolute left-0 top-1 text-gray-400 transition-all duration-300 pointer-events-none
                  peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                  peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#3E9C7A]
                  /* CORRECCIÓN AQUÍ: Clases nativas para cuando tiene texto interno */
                  peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400"
      >
          {nombre}
      </label>
    </div>
  )
}

export default Inputs
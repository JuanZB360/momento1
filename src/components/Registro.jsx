import React from 'react'

const Registro = ({ registro, index }) => {
  // Determinamos si el índice es par
  const esPar = index % 2 === 0;

  return (
    <div className={`w-full h-fit border border-[#3E9C7A] rounded-lg shadow-md flex flex-col sm:grid sm:grid-cols-4 justify-center items-center px-4 py-3 transition-colors duration-200 ${esPar ? 'bg-[#2c6e5a] text-white' : 'bg-amber-50 text-gray-800'}`}>
        <div className={`w-full h-fit flex justify-center items-center text-center text-xs font-semibold sm:border-r ${esPar ? 'border-white/20' : 'border-[#3E9C7A]'}`}>
            <h3>{registro.gasto}</h3>
        </div>
        
        <div className={`w-full h-fit flex justify-center items-center text-center text-xs sm:border-r ${esPar ? 'border-white/20' : 'border-[#3E9C7A]'}`}>
            <h3>${Number(registro.valor).toLocaleString()}</h3>
        </div>
        
        <div className={`w-full h-fit flex justify-center items-center text-center text-xs sm:border-r ${esPar ? 'border-white/20' : 'border-[#3E9C7A]'}`}>
            <h3>{registro.tipo}</h3>
        </div>
        
        <div className='w-full h-fit flex justify-center items-center text-center text-xs'>
            <h3>{registro.fecha}</h3>
        </div>
    </div>
  )
}

export default Registro
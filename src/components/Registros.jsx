import React from 'react'
import Registro from './Registro'

const Registros = ({ registros }) => {
  return (
    <div className='w-full max-w-2xl h-fit border border-[#3E9C7A] rounded-lg shadow-lg shadow-[#3E9C7A]/50 flex flex-col justify-start items-center py-5 px-4 sm:px-5 mt-5 mx-4'>
        {registros.length === 0 ? (
          <p className="text-gray-500 text-sm">No hay registros guardados.</p>
        ) : (
          registros.map((registro, index) => (
              <Registro key={registro.id} registro={registro} index={index} />
          ))
        )}
    </div>
  )
}

export default Registros
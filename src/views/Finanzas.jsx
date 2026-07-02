import React from 'react'
import Form from '../components/Form'
import Registros from '../components/Registros'
import Balance from '../components/Balance'

const Finanzas = ({agregarRegistro, registros}) => {
  return (
    <div>
        <div className='w-full h-fit py-30 bg-linear-to-b from-[#3E9C7A] to-[#15201B] flex justify-center items-center'>
            <div className='w-4/5 h-fit bg-[#DED6C5] border border-[#15201B] rounded-lg shadow-lg px-5 py-10 flex flex-col justify-start items-center pt-25 relative'>
                
                <Balance registros={registros} />

                <Form  agregarGasto={agregarRegistro}/>

                <Registros registros={registros} />

            </div>
        </div>
    </div>
  )
}

export default Finanzas
import React, { useState } from 'react'
import Inputs from './Inputs'

const Form = ({agregarGasto}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget); 
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        

        const nuevoRegistro = {
            id: Date.now(),
            gasto: data.Gasto,
            valor: Number(data.Valor),
            tipo: data.Tipo,
            fecha: data.Fecha
        };

        agregarGasto(nuevoRegistro);
        e.currentTarget.reset();

    };

    return (
        <div className='w-full max-w-2xl h-fit py-10 px-6 sm:px-10 bg-amber-50 border-2 border-[#3E9C7A] rounded-lg shadow-lg shadow-[#3E9C7A]/50 flex justify-center items-center mx-4'>
            <form onSubmit={handleSubmit} className='w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center items-end'>
                <Inputs type="text" nombre="Gasto" name="gasto" required={true} />
                <Inputs type="number" nombre="Valor" name="valor" required={true} />
                <div className="relative w-full flex flex-col">
                    <select 
                        name="Tipo" 
                        id="Tipo"
                        required
                        defaultValue="" 
                        className="peer w-full bg-transparent border-b-2 border-gray-300 py-1 outline-none transition-colors focus:border-[#3E9C7A] text-gray-700 appearance-none"
                    >
                        <option value="" disabled hidden>Selecciona un tipo</option>
                        <option value="Ingreso">Ingreso</option>
                        <option value="Egreso">Egreso</option>
                    </select>
                    <label 
                        htmlFor="tipo" 
                        className="absolute left-0 -top-4 text-xs text-[#3E9C7A]"
                    >
                        Tipo de Gasto
                    </label>
                </div>
                <Inputs type="date" nombre="Fecha" name="fecha" required={true} />
                <div className='w-full md:col-span-2 flex justify-center mt-4'>
                    <button 
                        className='w-full sm:w-1/2 h-10 bg-[#3E9C7A] text-white font-bold rounded-lg shadow-lg shadow-[#3E9C7A]/50 hover:bg-[#2c6e5a] transition-colors duration-300' 
                        type="submit"
                    >
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form
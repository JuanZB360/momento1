import React, { useState } from 'react'

const Balance = ({ registros }) => {

    const [misIngresos, setMisIngresos] = useState(0);
    const [misGastos, setMisGastos] = useState(0);
    const [miBalance, setMiBalance] = useState(0);

    React.useEffect(() => {
        const ingresos = registros
            .filter(registro => registro.tipo === 'Ingreso')
            .reduce((total, registro) => total + Number(registro.valor), 0);
        setMisIngresos(ingresos);

        const gastos = registros
            .filter(registro => registro.tipo === 'Egreso')
            .reduce((total, registro) => total + Number(registro.valor), 0);
        setMisGastos(gastos);

        setMiBalance(ingresos - gastos);
    }, [registros]);

  return (
    <div className='w-[calc(100%-2rem)] max-w-2xl min-h-20 bg-amber-50 border-2 border-[#E8643C] rounded-xl shadow-lg shadow-[#E8643C]/20 absolute -top-16 left-1/2 -translate-x-1/2 p-4 sm:p-6 flex flex-row justify-center sm:justify-between items-center sm:gap-4 backdrop-blur-sm'>
        
        {/* Sección: Ingresos (OCULTO EN MÓVIL) */}
        <div className='hidden sm:flex w-1/3 flex-col justify-center items-center border-r border-[#E8643C]/20'>
            <span className='text-xs font-bold text-gray-500 uppercase tracking-wider mb-1'>
                Ingresos
            </span>
            <p className='text-[#D97706] font-extrabold text-2xl text-center wrap-break-word max-w-full'>
                ${misIngresos.toLocaleString()}
            </p>
        </div>

        {/* Sección: Gastos (OCULTO EN MÓVIL) */}
        <div className='hidden sm:flex w-1/3 flex-col justify-center items-center border-r border-[#E8643C]/20'>
            <span className='text-xs font-bold text-gray-500 uppercase tracking-wider mb-1'>
                Gastos
            </span>
            <p className='text-[#DC2626] font-extrabold text-2xl text-center wrap-break-word max-w-full'>
                ${misGastos.toLocaleString()}
            </p>
        </div>

        {/* Sección: Balance (SIEMPRE VISIBLE) */}
        {/* En móvil toma 'w-full' para centrarse por completo, en PC pasa a 'w-1/3' */}
        <div className='w-full sm:w-1/3 flex flex-col justify-center items-center'>
            <span className='text-xs font-bold text-gray-500 uppercase tracking-wider mb-1'>
                Balance Total
            </span>
            <p className={`font-extrabold text-2xl text-center transition-all duration-300 wrap-break-word max-w-full ${miBalance >= 0 ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
                ${miBalance.toLocaleString()}
            </p>
        </div>

    </div>
  )
}

export default Balance
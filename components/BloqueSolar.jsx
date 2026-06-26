"use client"

import { useState } from "react"

export default function BloqueSolar({ nombreBloque, eficiencia, clima, temperatura }) {

    const [energia, setEnergia] = useState(0)

    const calcularMultiplicador = (clima, temperatura) =>{

    }

    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg border border-gray-600 shadow-md">
            <h2 className="text-xl font-bold">{nombreBloque}</h2>
            <p>Eficiencia: {eficiencia}</p>
            <p className="mt-2">Energía generada: {energia} kWh</p>

            <button
                onClick={() => setEnergia(energia + 10)}
                className="mt-3 bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
            >
                Generar Energía
            </button>
        </div>
    )
}
"use client"

import BloqueSolar from "@/components/BloqueSolar";
import { useEffect, useState } from "react"

export default function Home() {

  const [temperatura, setTemperatura] = useState("Cargando...");
  const [clima, setClima] = useState("");


  useEffect(() => {
    async function llamarAltiempo() {

      const API_KEY = '5adc3c574dade8c0f8b3d097bd79c3c2'; // Estamos utilizando esta web: https://openweathermap.org/ 
      const lat = 42.85 // Latitud de Vitoria 
      const lon = -2.67 // Longitud 
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      const respuesta = await fetch(url)
      const datos = await respuesta.json()
      console.log(datos)
      setTemperatura(datos.main.temp)
      setClima(datos.weather[0].description)
    }

    llamarAltiempo()
  }, []); // El array vacío significa: "Hazlo solo una vez al cargar la página por primera vez" 


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">
        Panel de Control Vitoria-Sun
      </h1>

      <div className="mb-6 p-4 bg-gray-800 rounded border border-gray-600">
        <p>🌡 Temperatura: {temperatura} ºC</p>
        <p>☁ Estado del cielo: {clima}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BloqueSolar nombreBloque="Sector Norte" eficiencia="95%" clima={clima} temperatura={temperatura} />
        <BloqueSolar nombreBloque="Sector Sur" eficiencia="90%" />
        <BloqueSolar nombreBloque="Sector Este" eficiencia="92%" />
      </div>
    </div>
  );
}

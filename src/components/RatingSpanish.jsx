import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles';


// Custom styled Slider component
const CustomSlider = styled(Slider)`
  .MuiSlider-thumb {
    background-color: gray;
  }

  .MuiSlider-rail {
    background-color: black;
  }

`;

const Rating = () => {
  return (
    <section>
      {/* Header */}
      <header  >
        <Button component={Link} to="/" variant="contained">
          Home
        </Button>
        
      </header>

      {/* Form */}
      <div className="flex ms-8 me-8 mt-2">
        <form className="inline-flex ">
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="name">
              Nombre:
            </label>
            <input
              className="input-style"
              id="name"
              type="text"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="age">
              Edad:
            </label>
            <input
              className="input-style"
              id="age"
              type="number"
              placeholder="Ingrese su edad"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="id">
              ID #:
            </label>
            <input
              className="input-style"
              id="id"
              type="number"
              placeholder="Ingrese su ID"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="session">
              Sesión #:
            </label>
            <input
              className="input-style"
              id="session"
              type="number"
              placeholder="Ingrese el número de sesión"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="date">
              Fecha:
            </label>
            <input
              className="input-style"
              id="date"
              type="text"
              placeholder="Ingrese la fecha"
            />
          </div>
        </form>
      </div>

      {/* Rating for the session */}
      <div className="flex justify-center mt-4">
        <p className="text-center">
          Por favor indique como fué la cita de hoy poniendo una marca vertical en la línea que más cerca se aproxime a su experiencia.
        </p>
      </div>

      {/* Relationship slider rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Relación con terapeuta
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            Sentí que el terapeuta no me escuchó, no me entendió, y no me respetó.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            size="small"
          />
          <p className="text-center w-1/3 pl-4">
            Sentí que el terapeuta me escuchó, me entendió y me respetó.
          </p>
        </div>
      </div>

      {/* Goals and topics slider rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Metas y Temas
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            No trabajamos ni hablamos de lo que yo quería trabajar y hablar.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            size="small"
          />
          <p className="text-center w-1/3 pl-4">
            Trabajamos y hablamos de lo que yo quería hablar.
          </p>
        </div>
      </div>

      {/* Approach or Method rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Enfoque o Método
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            El enfoque del terapeuta no va conmigo.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            size="small"
          />
          <p className="text-center w-1/3 pl-4">
            El enfoque del terapeuta va conmigo.
          </p>
        </div>
      </div>

      {/* Overall rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Global (en general)
      </h1>
      <div className="flex justify-center mt-2 mb-20">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            Algo faltó en la cita de hoy.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            size="small"
          />
          <p className="text-center w-1/3 pl-4">
            Globalmente, la cita de hoy fué buena para mi.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Rating
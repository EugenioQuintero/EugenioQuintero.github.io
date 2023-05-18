import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


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
      <div className="flex justify-center mt-2">
        <form className="inline-flex">
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
          Cómo nos fué en la sesión de hoy? Por favor pon una marca vertical en las lineas de abajo que indique cómo te sentiste.
        </p>
      </div>

      {/* Relationship slider rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Escuchar
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            Michelle no me escuchó.
          </p>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <SentimentSatisfiedAltIcon fontSize="large" />
          <p className="text-center w-1/3 pl-4">
            Michelle me escuchó.
          </p>
        </div>
      </div>

      {/* Important slider rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Qué tan importante
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            Lo que hicimos y de lo que hablamos no fué muy importante para mi.
          </p>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <SentimentSatisfiedAltIcon fontSize="large" />
          <p className="text-center w-1/3 pl-4">
            Lo que hicimos y de lo que hablamos fué importante para mi.
          </p>
        </div>
      </div>

      {/* Approach or Method rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Lo que hicimos
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            No me gustó  lo que hicimos hoy.
          </p>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <SentimentSatisfiedAltIcon fontSize="large" />
          <p className="text-center w-1/3 pl-4">
            Me gustó lo que hicimos hoy.
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
            Quisiera que hicieramos algo diferente.
          </p>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <SentimentSatisfiedAltIcon fontSize="large" />
          <p className="text-center w-1/3 pl-4">
            Espero que hagamos lo mismo la próxima vez.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Rating
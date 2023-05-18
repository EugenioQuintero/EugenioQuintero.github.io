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

const Couples = () => {
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
              Name:
            </label>
            <input
              className="input-style"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="session">
              Session #:
            </label>
            <input
              className="input-style"
              id="session"
              type="number"
              placeholder="Enter the session number"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="date">
              Date:
            </label>
            <input
              className="input-style"
              id="date"
              type="text"
              placeholder="Enter the date"
            />
          </div>
        </form>
      </div>

      {/* Rating for the session */}
      <div className="flex justify-center mt-4">
        <p className="text-center">
          Please rate today's session by placing a mark on the line nearest to the description
          that best fits your experience.
        </p>
      </div>

      {/* Relationship slider rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Relationship
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            I did not feel heard, understood, and respected.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <p className="text-center w-1/3 pl-4">
            I felt heard, understood, and respected.
          </p>
        </div>
      </div>

      {/* Goals and topics slider rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Goals and Topics
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            We did not work on or talk about what I wanted to work on and talk about.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <p className="text-center w-1/3 pl-4">
            We worked on and talked about what I wanted to work on and talk about.
          </p>
        </div>
      </div>

      {/* Approach or Method rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Approach or Method
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            The therapist's approach is not a good fit for me.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <p className="text-center w-1/3 pl-4">
            The therapist's approach is a good fit for me.
          </p>
        </div>
      </div>

      {/* Overall rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Overall
      </h1>
      <div className="flex justify-center mt-2 mb-20">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            There was something missing in the session today.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <p className="text-center w-1/3 pl-4">
            Overall, today's session was right for me.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex justify-center mt-2">
        <form className="inline-flex">
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="input-style"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="session">
              Session #:
            </label>
            <input
              className="input-style"
              id="session"
              type="number"
              placeholder="Enter the session number"
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2" htmlFor="date">
              Date:
            </label>
            <input
              className="input-style"
              id="date"
              type="text"
              placeholder="Enter the date"
            />
          </div>
        </form>
      </div>

      {/* Rating for the session */}
      <div className="flex justify-center mt-4">
        <p className="text-center">
          Please rate today's session by placing a mark on the line nearest to the description
          that best fits your experience.
        </p>
      </div>

      {/* Relationship slider rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Relationship
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            I did not feel heard, understood, and respected.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <p className="text-center w-1/3 pl-4">
            I felt heard, understood, and respected.
          </p>
        </div>
      </div>

      {/* Goals and topics slider rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Goals and Topics
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            We did not work on or talk about what I wanted to work on and talk about.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <p className="text-center w-1/3 pl-4">
            We worked on and talked about what I wanted to work on and talk about.
          </p>
        </div>
      </div>

      {/* Approach or Method rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Approach or Method
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            The therapist's approach is not a good fit for me.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <p className="text-center w-1/3 pl-4">
            The therapist's approach is a good fit for me.
          </p>
        </div>
      </div>

      {/* Overall rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        Overall
      </h1>
      <div className="flex justify-center mt-2 mb-20">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            There was something missing in the session today.
          </p>
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            
          />
          <p className="text-center w-1/3 pl-4">
            Overall, today's session was right for me.
          </p>
        </div>
      </div>
    </section>
    
  )
}

export default Couples
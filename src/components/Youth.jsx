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
      <div className="flex ms-8 me-8 mt-2">
        <form className="inline-flex ">
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
            <label className="block  font-bold mb-2" htmlFor="age">
              Age:
            </label>
            <input
              className="input-style"
              id="age"
              type="number"
              placeholder="Enter your age"
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
              placeholder="Enter your ID number"
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
        Listening
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            Michelle did not always listen to me.
          </p>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            size="small"
          />
          <SentimentSatisfiedAltIcon fontSize="large" />
          <p className="text-center w-1/3 pl-4">
            Michelle listened to me.
          </p>
        </div>
      </div>

      {/* Important slider rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        How important
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            What we did and talked about was not really that important to me.
          </p>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            size="small"
          />
          <SentimentSatisfiedAltIcon fontSize="large" />
          <p className="text-center w-1/3 pl-4">
            What we did and talked about were important to me.
          </p>
        </div>
      </div>

      {/* Approach or Method rating */}
      <h1 className="flex justify-center mt-5 text-4xl">
        What we did
      </h1>
      <div className="flex justify-center mt-2">
        <div className="w-3/4 flex items-center">
          <p className="text-center w-1/3 pr-4">
            I did not like what we did today.
          </p>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            size="small"
          />
          <SentimentSatisfiedAltIcon fontSize="large" />
          <p className="text-center w-1/3 pl-4">
            I liked what we did today.
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
            I wish we could do something different.
          </p>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
          <CustomSlider
            track={false}
            min={0}
            max={100}
            style={{ width: '1/3' }}
            size="small"
          />
          <SentimentSatisfiedAltIcon fontSize="large" />
          <p className="text-center w-1/3 pl-4">
            I hope we do the same kind of things next time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Rating
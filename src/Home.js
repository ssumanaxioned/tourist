import React, { useState } from 'react'
import DisplayData from './DisplayData';
import Header from './Header';

function Home() {
  const [text, setText] = useState('')
  const [city, setCity] = useState('')

  const handleOnChange = e => {
    setText(e.target.value);
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    setCity(text);
  }
  return (
    <>
      <Header city={city} handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} />
      <DisplayData data={city} />
    </>
  )
}

export default Home

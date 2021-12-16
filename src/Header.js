import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Header(props) {

  return (
    <div>
      <h1>Tourist</h1>
      <form onSubmit={props.handleOnSubmit}>
        <input type="text" onChange={props.handleOnChange} />
        <button type='submit'><SearchIcon /></button>
      </form>
    </div>
  )
}

export default Header
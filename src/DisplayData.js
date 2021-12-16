import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import { Mumbaiplaces,Delhiplaces } from './data';

function DisplayData(props) {
  const [cityData, setCityData] = useState([''])
  const {data} = props;
  const [showCity, setShowCity] = useState(false)
  
  useEffect(() => {
    if(data === 'mumbai'){
      setShowCity(true)
      setCityData(Mumbaiplaces)
    }else if(data === 'delhi'){
      setShowCity(true)
      setCityData(Delhiplaces)
    }else{
      setShowCity(false)
      setCityData('error')
    }
  }, [data])

  return (
      <ul>
        {showCity &&
        cityData.map((places) => (
          <li key={places.id}>
            <img src={places.src} alt='img'/>
              <Link to={{pathname:`/${data}/${places.placeUrl}`}}>{places.placeName}</Link>
              <p>{places.description}</p>
         </li>
        ))
        }
      </ul>
      )
}

export default DisplayData

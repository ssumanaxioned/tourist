import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mumbaiguides, delhiguides } from './data';

function DisplayDetails() {
  const params = useParams();
  const [guides, setGuides] = useState([])

  useEffect(()=> {
    if(params.cityid === 'mumbai'){
      setGuides(mumbaiguides)
    }else if(params.cityid === 'delhi'){
      setGuides(delhiguides)
    }else{
      setGuides('error')
    }
  }, [params.cityid])

  const filter =  guides.filter(g => g.guideName === params.guideid)
  return (
      <>
      {
        filter.map(f => (
          <div key={f.id}> 
            <h1>Name: {f.guideName}</h1>
            <p>Age: {f.age}</p>
            <p>About: {f.description}</p>
          </div>  
        ))}
      </>
  )
}

export default DisplayDetails

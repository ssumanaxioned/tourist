import { useEffect, useState  } from 'react';
import { useRouteMatch, Link, useParams } from 'react-router-dom';
import { mumbaiguides, delhiguides } from './data';

function DisplayGuides(props) {
  const {url} = useRouteMatch();
  const params = useParams();
  const [guides, setGuides] = useState([])
  const [show, setShow] = useState(false)

  useEffect(()=> {
    if(params.cityid === 'mumbai'){
      setShow(true)
      setGuides(mumbaiguides)
    }else if(params.cityid === 'delhi'){
      setShow(true)
      setGuides(delhiguides)
    }else{
      setShow(false)
      setGuides('error')
    }
  }, [params.cityid])
  
  return (
    show ? 
      <ul>
      {guides.map(guide => (
        <li key={guide.id}>
            <Link to={{pathname: `${url}/${guide.guideName}`}}>{guide.guideName}</Link>
       </li>
      ))
      }
    </ul> : null
  )
}

export default DisplayGuides

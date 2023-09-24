import {useParams} from "react-router-dom"
import momtazVilla from "../villas"

import ModalImage from "../module/ModaImage"

function VillaMomtaz() {

  const {id}=useParams()


  const data=momtazVilla[id]


  return (
    <div>
      <div>
        <ModalImage data={data}/>
      </div>
    </div>
  )
}

export default VillaMomtaz
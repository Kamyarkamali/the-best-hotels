import React from "react"
import { MOMTAZ } from "../villas"
import {Link} from "react-router-dom"

const CardMomtaz:React.FC<MOMTAZ>=({id,title,image})=>{
    return(
        <div>
            <Link to={`/detailse/${id}`}>
            <div className="border-2 p-4 bg-slate-50 rounded-lg border-blue-500">
                <img src={image} alt="momtazVillas" className="w-[400px] rounded-md h-[400px] object-cover"/>
                <p className="text-center text-[17px] font-bold text-gray-500 mt-4">{title}</p>
            </div>
            </Link>
        </div>
    )
}


export default CardMomtaz

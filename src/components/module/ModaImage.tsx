import {Link, useParams} from "react-router-dom"
import momtazVilla, { MOMTAZ } from "../villas"
import { Modal, ModalContent } from "./Modal";
import { useState } from "react";
import Slider from "./Slider";


import TaghvimVilla from "./TaghvimReserve"


function ModaImage({data}) {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const showModal = () => setIsopen((prev) => !prev);


  const {id}=useParams()

  const villaId = parseInt(id, 10);

  const selectedVilla:MOMTAZ | undefined=momtazVilla.find((villas)=>villas.id===villaId)
 

  const clickHandeler=()=>{
    window.location.href="/"
  }

  return (
    <>
    <div className="flex flex-col items-center">
      <h1 className="text-xl mb-4">{selectedVilla?.title}</h1>
      <div className="lg:flex gap-4 grid md:grid-cols-2 grid-cols-1">
      {selectedVilla?.detailse.map((item)=>(
        <Modal onOpen={showModal}>
        <div className="flex items-center">
        <img key={item.id}  src={item} alt="/" className="w-[400px] h-[300px] rounded-md"/>
        {isOpen && (
          <ModalContent onClose={() => setIsopen(false)}>
        <img key={item.id}  src={item} alt="/"/>
          
        </ModalContent>
      )}
        </div>
        </Modal>
        ))}
        </div>
    </div>
          <div className="flex justify-center gap-8 border-2 border-blue-500 mt-7 rounded-md">
          <button onClick={clickHandeler} className="bg-green-500 h-[30px] mt-[14rem] p-2 flex justify-center items-center text-md rounded-md">ثبت رزرفی</button>
          <TaghvimVilla/>
          </div>

    <div className="border-t-2 mt-4 border-black">
      <h1 className="bg-red-500 text-center text-white text-xl p-3">پیشنهادات ویژه</h1>
        <Slider/>
    </div>
    <div className="flex justify-center">
      <Link to="/">
    <button className="bg-blue-600 p-1 rounded-md text-white text-xl">صفحه اصلی</button>
      </Link>
    </div>
        </>
  )
}

export default ModaImage
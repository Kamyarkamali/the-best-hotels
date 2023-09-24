import {FcOk} from "react-icons/fc"
import { FcOnlineSupport } from "react-icons/fc"
import { FcHome } from "react-icons/fc"

function Namad() {
  return (
    <div className="flex justify-evenly max-w-[1200px] mx-auto mt-5">
        <div className="flex justify-center items-center border-2 p-3 rounded-md bg-red-200 border-blue-500 w-[150px] md:w-[300px] ">
            <FcOk size={30}/>
            <span className="text-xl text-gray-500">اعتباری بیش از 10 سال</span>
        </div>
        <div className="flex items-center justify-center border-2 p-3 rounded-md bg-red-200 border-blue-500 w-[150px] md:w-[300px] ">
            <FcOnlineSupport size={30}/>
            <span className="text-xl text-gray-500">پشتیبانی 24 ساعته</span>
        </div>
        <div className="flex items-center justify-center border-2 p-3 rounded-md bg-red-200 border-blue-500 w-[150px] md:w-[300px] ">
            <FcHome size={30}/>
            <span className="text-xl text-gray-500">تنوع بیش از حد در خانه</span>
        </div>
    </div>
  )
}

export default Namad
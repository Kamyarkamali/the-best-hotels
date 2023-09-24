import khanerostaei from "./components/images/villa/khanerostaei.jpg"
import kolbehjangali from "./components/images/villa/kolbehjangali.jpg"
import villasoesise from "./components/images/villa/kolbehsoesise.jpg"
import villaab from "./components/images/villa/villaab.jpg"
import villaestakhr from "./components/images/villa/villaestakhr.jpg"
import villajakozi from "./components/images/villa/villajakozi.jpg"
import villakhosh from "./components/images/villa/villakhosh.jpg"

export interface VILLAS{
    id:number,
    title:string,
    count:number
    location?:string,
    image:any
}


const villa:VILLAS[]=[
    {id:1,title:"خانه روستایی",count:1200,image:khanerostaei},
    {id:2,title:"کلبه جنگلی",count:987,image:kolbehjangali},
    {id:3,title:"کلبه سوئیسی",count:987,image:villasoesise},
    {id:4,title:"ویلا کنار آب",count:587,image:villaab},
    {id:5,title:"ویلا با استخر",count:787,image:villaestakhr},
    {id:6,title:"ویلا با جکوزی",count:387,image:villajakozi},
    {id:6,title:"ویلا خوش منظره",count:887,image:villakhosh},
]

export default villa
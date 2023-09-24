import momtazvilla1 from "./images/villa/Villamomtaz/1.jpg";
import momtazvilla2 from "./images/villa/Villamomtaz/2.jpg";
import momtazvilla3 from "./images/villa/Villamomtaz/3.jpg";
import momtazvilla4 from "./images/villa/Villamomtaz/4.jpg";
import momtazvilla5 from "./images/villa/Villamomtaz/5.jpg";

import detailse1 from "./images/detailseImages/1.jpg";
import detailse2 from "./images/detailseImages/2.jpg";
import detailse3 from "./images/detailseImages/3.jpg";
import detailse5 from "./images/detailseImages/5.jpg";
import detailse6 from "./images/detailseImages/6.jpg";
import detailse7 from "./images/detailseImages/7.jpg";
import detailse8 from "./images/detailseImages/8.jpg";
import detailse9 from "./images/detailseImages/9.jpg";
import detailse10 from "./images/detailseImages/10.jpg";
import detailse11 from "./images/detailseImages/11.jpg";
import detailse12 from "./images/detailseImages/12.jpg";
import detailse13 from "./images/detailseImages/13.jpg";
import detailse14 from "./images/detailseImages/14.jpg";
import detailse15 from "./images/detailseImages/15.jpg";
import detailse16 from "./images/detailseImages/16.jpg";
import detailse17 from "./images/detailseImages/17.jpg";
import detailse18 from "./images/detailseImages/18.jpg";
import detailse19 from "./images/detailseImages/19.jpg";
import detailse20 from "./images/detailseImages/20.jpg";
import detailse21 from "./images/detailseImages/21.jpg";
import detailse22 from "./images/detailseImages/22.jpg";

export interface MOMTAZ {
  id: number;
  title: string;
  location?: string;
  image: any;
  detailse: any[];
}

const images = {
  momtazvilla1,
  momtazvilla2,
  momtazvilla3,
  momtazvilla4,
  momtazvilla5,
  detailse1,
  detailse2,
  detailse3,
  detailse5,
  detailse6,
  detailse7,
  detailse8,
  detailse9,
  detailse10,
  detailse11,
  detailse12,
  detailse13,
  detailse14,
  detailse15,
  detailse16,
  detailse17,
  detailse18,
  detailse19,
  detailse20,
  detailse21,
  detailse22,
};

const momtazVilla: MOMTAZ[] = [
  {
    id: 1,
    title: "اجاره ویلا در تنکابن - نعمت آباد",
    image: images.momtazvilla1,
    detailse: [
      images.detailse1,
      images.detailse2,
      images.detailse3,
      images.detailse5,
    ],
  },
  {
    id: 2,
    title: "اجاره ویلا سنتی در ماسوله",
    image: images.momtazvilla2,
    detailse: [
      images.detailse6,
      images.detailse7,
      images.detailse8,
      images.detailse9,
      images.detailse10,
    ],
  },
  {
    id: 3,
    title: "اجاره نقلی با چشم انداز زیبا در شیراز",
    image: images.momtazvilla3,
    detailse: [
      images.detailse11,
      images.detailse12,
      images.detailse13,
      images.detailse14,
      images.detailse15,
    ],
  },
  {
    id: 4,
    title: "اجاره نقلی با چشم انداز زیبا در شیراز",
    image: images.momtazvilla4,
    detailse: [
      images.detailse16,
      images.detailse17,
      images.detailse18,
    ],
  },
  {
    id: 5,
    title: "اجاره سوییت مبله در خرم آباد",
    image: images.momtazvilla5,
    detailse: [
      images.detailse19,
      images.detailse20,
      images.detailse21,
      images.detailse22,
    ],
  },
  // {id:6,title:"اجاره سوییت مبله در تبریز",image:momtaz6},
  // {id:7,title:"اجاره سوییت  در اصفهان",image:momtaz7},
];

export default momtazVilla;

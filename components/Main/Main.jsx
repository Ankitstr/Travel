import React ,{useEffect} from "react";
import './main.scss';

//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsClipboardCheck} from 'react-icons/bs';

//let import the images so we dont have this error on the browser.
import img from '../../Assets/img.jpg';
import img2 from '../../Assets/img3.jpg';
import img3 from '../../Assets/img9.jpeg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img13.jpeg';
import img7 from '../../Assets/img7.jpeg';
import img8 from '../../Assets/img12.jpeg';
import img9 from '../../Assets/img10.jpeg';
//import img10 from '../../Assets/img3.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';

//let me paste the array named data

const Data = [
  {
  id:1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  location : 'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'The epitome of romance , Bora Bora is one of the best travel destinations in the AudioWorkletNode. This place is Known for its luxurious stays and adventurous activities.'
},
{
  id:2,
  imgSrc: img2,
  destTitle: 'Goa',
  location : 'India',
  grade:'RELAX',
  fees:'$700',
  description:'Goa is a state on the southwestern coast of India. It is situated within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats. It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India'
},
{
  id:3,
  imgSrc: img3,
  destTitle: 'Ireland',
  location : ' Island',
  grade:'CULTURAL RELAX',
  fees:'$800',
  description:'Ireland is an island in the North Atlantic Ocean, in north-western Europe. It is separated from Great Britain to its east by the North Channel, the Irish Sea, and St George'
},
{
  id:4,
  imgSrc: img4,
  destTitle: 'Maldives',
  location : 'South Asia',
  grade:'Enjoy',
  fees:'$900',
  description:'The epitome of romance , Bora Bora is one of the best travel destinations in the AudioWorkletNode. This place is Known for its luxurious stays and adventurous activities.'
},
{
  id:5,
  imgSrc: img5,
  destTitle: 'Santorini',
  location : 'Island',
  grade:'CULTURAL RELAX',
  fees:'$400',
  description:'The epitome of romance , Bora Bora is one of the best travel destinations in the AudioWorkletNode. This place is Known for its luxurious stays and adventurous activities.'
},
{
  id:6,
  imgSrc: img6,
  destTitle: 'Ballonfahrt',
  location : 'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'The epitome of romance , Bora Bora is one of the best travel destinations in the AudioWorkletNode. This place is Known for its luxurious stays and adventurous activities.'
},
{
  id:7,
  imgSrc: img7,
  destTitle: 'Dubai',
  location : 'UAE',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'The epitome of romance , Bora Bora is one of the best travel destinations in the AudioWorkletNode. This place is Known for its luxurious stays and adventurous activities.'
},
{
  id:8,
  imgSrc: img8,
  destTitle: 'TajMahal',
  location : 'India',
  grade:'CULTURAL RELAX',
  fees:'$500',
  description:'The epitome of romance , Bora Bora is one of the best travel destinations in the AudioWorkletNode. This place is Known for its luxurious stays and adventurous activities.'
},
{
  id:9,
  imgSrc: img9,
  destTitle: 'Beach',
  location : 'Australia',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'The epitome of romance , Bora Bora is one of the best travel destinations in the AudioWorkletNode. This place is Known for its luxurious stays and adventurous activities.'
},
]

const Main = () => {

  //lcreate a react hook to add a scroll animation..
useEffect(()=>{
  Aos.init({duration:2000})
},[])


  return (
 
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* so guys , here we are going to use high ordfer array method(map).
        to do that we shall use a list of object in one array . I'm going to create
        an array named data and from that we shall .map() array
        to fetch each desitnation of once. i hope this will make sence to you! */}
         {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) => {
           
            return(
                <div key ={id} data-aos="fade-up" className="singleDestination">
                  {/* here it will return single id from the map array */}
                 
                 <div className="imageDiv">
                  <img src ={imgSrc} alt=
                   {destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTilte">
                      {destTitle}
                        </h4>
                    <span className="containet flex">
                      <HiOutlineLocationMarker className="icon"/>{location}
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                        </div>
                        </div>
                        <div className="desc">
                          <p>{description}</p>
                          </div>
                      
                      <button className="btn flex">
                        DETAILS <BsClipboardCheck className="icon"/>
                      </button>
                  </div>
                  </div>
              )
          })
         }

      </div>
    </section>
    )
}

export default Main;
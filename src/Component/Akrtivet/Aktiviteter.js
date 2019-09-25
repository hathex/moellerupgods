import React, {useState} from 'react';
import Aktiv from './Aktiv';

import banner1 from '../../img/Aktiviteter/1.jpg';
import banner2 from '../../img/Aktiviteter/2.jpg';
import banner3 from '../../img/Aktiviteter/3.jpg';
import banner4 from '../../img/Aktiviteter/4.jpg';
import banner5 from '../../img/Aktiviteter/5.jpg';
import banner6 from '../../img/Aktiviteter/6.jpg';
import banner7 from '../../img/Aktiviteter/7.jpg';
import banner8 from '../../img/Aktiviteter/8.jpg';
import banner9 from '../../img/Aktiviteter/9.jpg';
import banner10 from '../../img/Aktiviteter/10.jpg';
import banner11 from '../../img/Aktiviteter/11.jpg';
import banner12 from '../../img/Aktiviteter/12.jpg';



function Aktiviteter() { 

const [Aktiviteterne] = useState([

    { aktivitetImg:banner1, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 1 },
    { aktivitetImg:banner2, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 2 },
    { aktivitetImg:banner3, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 3 },
    { aktivitetImg:banner4, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 4 },
    { aktivitetImg:banner5, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 5 },
    { aktivitetImg:banner6, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 6 },
    { aktivitetImg:banner7, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 7 },
    { aktivitetImg:banner8, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 8 },
    { aktivitetImg:banner9, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 9 },
    { aktivitetImg:banner10, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 10 },
    { aktivitetImg:banner11, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 11 },
    { aktivitetImg:banner12, aktivitetH:'Møllerup Hamp', aktivitetP:'På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.',  køb:'Køb produkter her', url:'https://moellerupshop.com/', id: 12 },

]);



return(

    <div className="Nyheder container">
        <Aktiv alleAktivProps={Aktiviteterne} />
    </div>
    );
}
export default Aktiviteter

























































































































// import React from 'react'

// const Aktiviteter = () => {
//     return (
//         <div className="container">
//             <div className="cards3">

//             <figure className="Acard1">
//                     <img src="..." className="Acard-img1" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//                 <figure className="Acard2">
//                     <img src="..." className="Acard-img2" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//                 <figure className="Acard3">
//                     <img src="..." className="Acard-img3" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//             </div>
//             <div className="cards6">

//             <figure className="Acard4">
//                     <img src="..." className="Acard-img4" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//                 <figure className="Acard5">
//                     <img src="..." className="Acard-img5" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//                 <figure className="Acard6">
//                     <img src="..." className="Acard-img6" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//             </div>
//             <div className="cards9">

//             <figure className="Acard7">
//                     <img src="..." className="Acard-img7" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//                 <figure className="Acard8">
//                     <img src="..." className="Acard-img8" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//                 <figure className="Acard9">
//                     <img src="..." className="Acard-img9" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//             </div>
//             <div className="cards12">

//             <figure className="Acard10">
//                     <img src="..." className="Acard-img10" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>
                
//                 <figure className="Acard11">
//                     <img src="..." className="Acard-img11" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//                 <figure className="Acard12">
//                     <img src="..." className="Acard-img12" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//             </div>
            
//         </div>
//     )
// }

// export default Aktiviteter

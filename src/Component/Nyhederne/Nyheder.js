
import React, {useState} from 'react';
import Nyhed from './Nyhed';
import banner1 from '../../img/Nyheder/IMG000200_srcset-large.jfif';
import banner2 from '../../img/Nyheder/350x35000_srcset-large.png';
import banner3 from '../../img/Nyheder/verdensballet0_srcset-large.png';
import banner4 from '../../img/Nyheder/moellerup0_srcset-large.png';



function Nyheder() {


const [Nyhederne] = useState([

    { nyhedImg:banner1, nyhedH:'Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften', nyhedP:'Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020',  link:'Læs mere her', url:'https://www.moellerupgods.dk/verdensballetten11', id: 1 },
    { nyhedImg:banner2, nyhedH:'Køb vores hampeprodukter', nyhedP:'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..', link:'Køb online her', url:'https://moellerupshop.com/', id: 2 },
    { nyhedImg:banner3, nyhedH:'Verdensballetten 2019', nyhedP:'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods', link:'Se mere her', url:'https://verdensballetten.dk/moellerup-gods/', id: 3 },
    { nyhedImg:banner4, nyhedH:'Historien om Møllerup Gods', nyhedP:'Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.', link:'Læs historien her', url:'https://www.moellerupgods.dk/historien111', id: 4 }

]);

return(
<div className="Nyheder container">
    <Nyhed alleNyhederProps={Nyhederne} />
</div>
);

}

export default Nyheder;





// import React from 'react'

// const Nyheder = () => {
//     return (


//         <div className="container">
//             <figure className="card1">
//                 <img src="..." className="card-img1" alt="..." />
//                 <div className="card-body">
//                     <figcaption className="card-title">Card title</figcaption>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" className="btn btn-primary">Go somewhere</a>
//                 </div>
//             </figure>


//             <div className="undercards">
//                 <figure className="card2">
//                     <img src="..." className="card-img2" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//                 <figure className="card3">
//                     <img src="..." className="card-img3" alt="..." />
//                     <div className="card-body">
//                         <figcaption className="card-title">Card title</figcaption>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </figure>

//                 <figure className="card4">
//                     <img src="..." className="card-img4" alt="..." />
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

// export default Nyheder

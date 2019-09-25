import React from 'react'
// import Map from './Map';
// import Nyheder from './Nyheder';

const Nyhed = ({alleNyhederProps}) => {
    console.log(alleNyhederProps)


    const NyhedList = alleNyhederProps.map(
        n => 
            <div key={n.id}>
                <img src={n.nyhedImg} alt="" />
                <h3> {n.nyhedH} </h3>
                <p> {n.nyhedP} </p>
                <a href={n.url}>{n.link}</a>
            </div>
        
    );



    return (
        <div className="lister text-left">
           {NyhedList} 
        </div>
    )
}

export default Nyhed

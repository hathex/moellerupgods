import React from 'react'


const Nyhed = ({alleAktivProps}) => {
    console.log(alleAktivProps)


    const AktivList = alleAktivProps.map(
        n => 
            <div key={n.id}>
                <img src={n.aktivitetImg} alt="" />
                <h3> {n.aktivitetH} </h3>
                <p> {n.aktivitetP} </p>
                <a href={n.url}>{n.køb}</a>
            </div>
        
    );



    return (
        <div className="list text-left col-12">
           {AktivList} 
        </div>
    )
}

export default Nyhed

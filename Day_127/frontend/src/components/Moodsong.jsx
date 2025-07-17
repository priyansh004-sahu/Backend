import React, { useState } from 'react'

const Moodsong = () => {

   const [Songs, setSongs] = useState([
       {
        title: "test_title",
        artist: "test_artist",
        url: "test_url",
       },
        {
        title: "test_title",
        artist: "test_artist",
        url: "test_url",
       },
        {
        title: "test_title",
        artist: "test_artist",
        url: "test_url",
       },
        {
        title: "test_title",
        artist: "test_artist",
        url: "test_url",
       }
   ]);


  return (
    <div className='mood-songs'>
        <h2>Recommended song</h2>
            {Songs.map((Song, index)=> (
               <div key={index}>
                   <div className="title">
                            <h3>{Song.title}</h3>
                            <p>{Song.artist}</p>
                    </div>    
                   <div className="play-pause-button">                  
                            <i className="ri-pause-line"></i>
                            <i className="ri-play-circle-fill"></i>
                    </div> 
               </div>          
            ))}
    </div>
  )
}

export default Moodsong
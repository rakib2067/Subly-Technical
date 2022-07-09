import React, { useEffect, useState } from 'react';
import { Medium,MediaItem } from './models/Medium';
function App() {

  const [mediums,setMediums]=useState<Medium[]>([])


  useEffect(()=>{
    fetchMedia()
  },[])

  async function fetchMedia(){
    try {
      let response= await fetch(`https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b`)
      let data= await response.json();
      let newArray:Medium[]= data.media.map((media: MediaItem)=> new Medium(media.id,media.createdAt,media.updatedAt,media.status,media.cover,media.languages))
      setMediums(newArray)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main style={{padding:'1rem'}}>

      {mediums&& mediums.map(medium=> <li key={medium.id}>{medium.id} {medium.timeDifference}</li>)}
    
    </main>
  );
}

export default App;

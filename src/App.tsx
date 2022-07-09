import React, { useEffect, useState } from 'react';
import { Mediums } from './components/Mediums';
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
      let newArray:Medium[]= data.media.map((media: MediaItem)=> new Medium(media.id,media.name,media.createdAt,media.updatedAt,media.status,media.cover,media.languages,media.errorMessage))
      setMediums(newArray)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main style={{padding:'1rem'}}>

      {mediums&&  <Mediums items={mediums} />}
     
    </main>
  );
}

export default App;

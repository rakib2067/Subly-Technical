import React, { useEffect, useState } from 'react';
import { Mediums } from './components/Mediums';
import { Medium,MediaItem } from './models/Medium';

interface hashTable{
  [item: string]: boolean;
}
function App() {

  const [mediums,setMediums]=useState<Medium[]>([])
  const [loading, setLoading]=useState(false)
  const [error,setError]=useState("")
  const [languages,setLanguages]=useState<string[]>([])
  useEffect(()=>{
    fetchMedia()
  },[])

  async function fetchMedia(){
    try {
      setLoading(true)
      let response= await fetch(`https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b`)
      let data= await response.json();
      let newArray:Medium[]= data.media.map((media: MediaItem)=> {
      setLanguages((prev)=> [...prev, ...media.languages])
      return new Medium(media.id,media.name,media.createdAt,media.updatedAt,media.status,media.cover,media.languages,media.errorMessage)})
      setLanguages(prev=>{
        let seen: hashTable= {};
        return prev.filter(item=>{return seen.hasOwnProperty(item) ? false : (seen[item] = true)})
      })
      setMediums(newArray)
      setLoading(false)
      
    } catch (error: unknown) {
      if(typeof error=='string'){
        setError(error)
        setLoading(false)
      }
    }
  }

  return (
    <main style={{padding:'1rem'}}>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error: ${error}</h2>}
      {mediums&&  <Mediums languages={languages}items={mediums} />}
     
    </main>
  );
}

export default App;

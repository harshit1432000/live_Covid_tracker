import React,{useEffect , useState} from 'react'
import './Covid.css';
import Datalist from './Datalist';

const Covid = () => {

    const[data , setdata]=useState([]);
   
   const getcoviddata=async() =>{
       try {
            const res = await fetch('https://data.covid19india.org/data.json');
          const actualdata = await res.json();
         
          setdata(actualdata.statewise[0]);
    }
    catch(err){
        console.log(`Error`);
    }

   }

    useEffect(() => {
        getcoviddata();
          
    }, []);


    return (
        <>
        <section> 
            <h1> LIVE</h1>
            
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            
            <Datalist data={data}/>
           
           </section>
           
        </>
    )
}

export default Covid

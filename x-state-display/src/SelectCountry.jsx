import { useEffect, useState } from "react";

const CountrySelector = ()=>{
   const [country, setCountry] = useState([]);
   const [state, setState] = useState([]);
   const[city, setCity] = useState([]);
   
   const[selectCountry, setSelectCountry] = useState('');
   const[selectState, setSelectState] = useState("");
   const[selectCity, setSelectCity] = useState('')
    
   
//    const fetchData = (url='')=>{
//         fetch(url)
//          .then(data=>data.json())
//          .then((data)=>setCountry(data))
//          .catch((error)=>console.error("fetching error:",error))

//     }
useEffect(()=>{
      let url =  "https://crio-location-selector.onrender.com/countries";       
        fetch(url)
        .then(data=>data.json())
         .then((data)=>setCountry(data))
         .catch((error)=>console.error("fetching error:",error))
        },[selectCountry])


     useEffect(()=>{
        if(selectCountry){
        let url = `https://crio-location-selector.onrender.com/country=${selectCountry}/states`;
        fetch(url)
        .then(data=>data.json())
         .then((data)=>setState(data))
         .catch((error)=>console.error("fetching error:",error));
          
        }
       
     
    },[selectCountry])
    

    
   useEffect(() => {
      if(selectCountry && selectState){
        let url = ` https://crio-location-selector.onrender.com/country=${selectCountry}/state=${selectState}/cities`;
        fetch(url)
        .then(data=>data.json())
         .then((data)=>setCity(data))
         .catch((error)=>console.error("fetching error:",error));
         
        }
}, [selectState, selectCountry]);


    

    return(
        <div style={{
             textAlign:"center",
            marginTop:"100px"
        }}>
            <h3>Select Location </h3>
            <select 
            value={selectCountry}
             onChange={(e) => setSelectCountry(e.target.value)}
             >
                <option value="">Select Country</option>
                {country.map((item)=>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <select  
            value={selectState}
            onChange={(e) => setSelectState(e.target.value)}
            disabled={!selectCountry}
            >
                <option value="">Select State</option>
                {state.map((item)=>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <select  
            value={selectCity}
            onChange={(e) => setSelectCity(e.target.value)}
             disabled={!selectState}
            >
                <option value="">Select City</option>
                 {city.map((item)=>(
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            {selectCity? (<h2>You selected {selectCountry}, {selectState} , {selectCity}.</h2>)
            :(null)}
            
        </div>
    )
}

export default CountrySelector;
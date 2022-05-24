import React, { useEffect, useState } from 'react'
import './App.css';
const App = () =>{
    const[data,setData] = useState([]);

  const getCovidData = async() => {
    try{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
    } catch (error){
        console.log(Error);
    }
}
useEffect(() =>{
    getCovidData();
}, []);
return(
<>
    <section>
    <div className='div_live'>
        <div id='dot'></div>
        <h1>Live</h1>
    </div>

    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    <div className='main_content'>
        <ul className='content'>
            <li className='card1'>
            <div className='card_inner'>
                <p className=' card_name'><span>Our</span> COUNTRY</p>
                <h1 className=' card_total card_small'>INDIA</h1>
            </div>
            </li>
            <li className='card2'>
            <div className='card_inner'>
                <p className=' card_name'><span>Total</span> RECOVERED</p>
                <h1 className=' card_total card_small'>{data.recovered}</h1>
            </div>
            </li>
            <li className='card3'>
            <div className='card_inner'>
                <p className=' card_name'><span>Total</span> CONFIRMED</p>
                <h1 className=' card_total card_small'>{data.deltaconfirmed}</h1>
            </div>
            </li>
            <li className='card4'>
            <div className='card_inner'>
                <p className=' card_name'><span>Total</span> DEATH</p>
                <h1 className=' card_total card_small'>{data.deaths}</h1>
            </div>
            </li>
            <li className='card5'>
            <div className='card_inner'>
                <p className=' card_name'><span>Total</span> ACTIVE</p>
                <h1 className=' card_total card_small'>{data.active}</h1>
            </div>
            </li>
            <li className='card6'>
            <div className='card_inner'>
                <p className=' card_name'><span>Last</span> UPDATED</p>
                <h1 className=' card_total card_small'>{data.lastupdatedtime}</h1>
            </div>
            </li>
        </ul>
    </div>
    </section>
</>
)
}
export default App
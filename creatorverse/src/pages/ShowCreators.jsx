import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';
import './ShowCreators.css';

const ShowCreators = () => {

const [creators, setCreators] = useState([]);

useEffect(() => {
    fetchCreators();
}, []);

const fetchCreators = async () => {
  console.log("inside fetchCreators");
  const {data} = await supabase
  .from('creators')
  .select()
  setCreators(data);
}

return (
    <div className='CreatorsDisplay'>
        {
            creators && creators.length > 0
                ? creators.map((creator, index) => 
                    <Link to={`detail/${creator.id}`}><Card name={creator.name} url={creator.url} description={creator.description} imageURL={creator.imageURL} key={index}/></Link>)
                : <h2 className='NoCreators'>No Creators Yet. Click to Add!!</h2>
        }
    </div>
      
)
}
  
  export default ShowCreators
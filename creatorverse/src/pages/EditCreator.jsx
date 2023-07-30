import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './EditCreator.css';

const EditCreator = () => {

    const{id} = useParams();
    const [creator, setCreator] = useState({});

    useEffect(() => {
        fetchCreator();
    }, [])

    const fetchCreator = async () => {
        const ID = parseInt(id, 10);
        const {data} = await supabase
            .from('creators')
            .select("*")
            .eq('id', ID)
            .single();
        setCreator(data)
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setCreator( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCreator = async (event) => {
        const ID = parseInt(id, 10);
        event.preventDefault();
    
        await supabase
        .from('creators')
        .update(creator)
        .eq('id', ID);
    
        window.location = `/detail/${id}`;
    }

    return (
      
        <div className='EditCreator'>
            <form className='EditCreatorForm'>
                <div>
                    <input className='EditCreatorInputForm' type='text' id='name' name='name' value={creator.name} placeholder="Type the creator's name..." onChange={handleChange}/>
                </div>
                <br></br>
                <div>
                    <input className='EditCreatorInputForm' type='text' id='description' name='description' value={creator.description} placeholder="Type the creator's description..." onChange={handleChange}/>
                </div>
                <br></br>
                <div>
                    <input className='EditCreatorInputForm' type='text' id='imageURL' name='imageURL' value={creator.imageURL} placeholder="Type the creator's imageURL..." onChange={handleChange}/>
                </div>
                <br></br>
                <div>
                    <input className='EditCreatorInputForm' type='text' id='url' name='url' value={creator.url} placeholder="Type the creator's url..." onChange={handleChange}/>
                </div>
                <br></br>
                <button id='EditCreatorInputForm' onClick={updateCreator}>Submit</button>
            </form>
        </div>
      
    )
  }
  
  export default EditCreator
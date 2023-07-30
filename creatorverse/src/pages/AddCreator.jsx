import React, {useState} from 'react';
import { supabase } from '../client';
import './AddCreator.css';

const AddCreator = () => {
    
    const [creator, setCreator] = useState({name: "", description: "", imageURL:"", url:""});
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreator((prev) => {
            return {
                ...prev, [name]: value
            }
        })
        console.log(creator);
    }

    const createCreator = async (event) => {
        
        event.preventDefault(); 

        await supabase
            .from('creators')
            .insert({name: creator.name, description: creator.description, imageURL: creator.imageURL, url: creator.url})
            .select();
          
        console.log('added to supabase');
        
        window.location = "/";   
    }

    return (
      
        <div className='AddCreator'>
            <form className='AddCreatorForm'>
                <div>
                    <input className='AddCreatorInputForm' type='text' id='name' name='name' value={creator.name} placeholder="Type the creator's name..." onChange={handleChange}/>
                </div>
                <br></br>
                <div>
                    <input className='AddCreatorInputForm' type='text' id='description' name='description' value={creator.description} placeholder="Type the creator's description..." onChange={handleChange}/>
                </div>
                <br></br>
                <div>
                    <input className='AddCreatorInputForm' type='text' id='imageURL' name='imageURL' value={creator.imageURL} placeholder="Type the creator's imageURL..." onChange={handleChange}/>
                </div>
                <br></br>
                <div>
                    <input className='AddCreatorInputForm' type='text' id='url' name='url' value={creator.url} placeholder="Type the creator's url..." onChange={handleChange}/>
                </div>
                <br></br>
                <button id='AddCreatorSubmit' onClick={createCreator}>Submit</button>
            </form>
        </div>
      
    )
  }
  
  export default AddCreator
  
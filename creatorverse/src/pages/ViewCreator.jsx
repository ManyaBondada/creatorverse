import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import { supabase } from '../client';
import {AiFillEdit} from 'react-icons/ai';
import {BiSolidTrashAlt} from 'react-icons/bi'
import ReactModal from 'react-modal';
import './ViewCreator.css';

const ViewCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState({});
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        fetchCreator();
    }, [id])

const fetchCreator = async () => {
    const ID = parseInt(id, 10);
    console.log(ID);
    const {data} = await supabase
      .from('creators')
      .select('*')
      .eq('id', ID)
      setCreator(data[0])
      console.log(data);
    }

    const handleDelete = async (event) => {
        const ID = parseInt(id, 10);
        event.preventDefault();
    
        await supabase
        .from('creators')
        .delete()
        .eq('id', id); 
    
        window.location = `/`;
    }

    return (
        <div>
            <div className='ViewCreatorBtns'> 
                <button onClick={() => setDisplay(true)}><BiSolidTrashAlt size={30}/></button>
                <Link to={`edit/${id}`}><button><AiFillEdit size={30}/></button></Link>
            </div>
            <ReactModal isOpen={display} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' }, 
            content: {maxWidth:'500px', maxHeight: '500px', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', borderRadius:'5px', backgroundColor:'#a3b18a'}}}>
                <div className='ModalAlert'>
                    <h2>DELETE CREATOR?</h2>
                    <button className='ModalAlertBtn' onClick={() => setDisplay(false)}>NO!!! FALSE ALARM!!</button>
                    <button className='ModalAlertBtn' onClick={handleDelete}>YES! DELETE THIS CREATOR</button>
                </div>
            </ReactModal>

            <div className='ViewCreator'>  
                <div className='ViewCreatorLeft'>
                    <img id='ViewCreatorImg' src={creator.imageURL} alt='image'></img>
                </div>
                <div className='ViewCreatorRight'>
                    <h2>{creator.name}</h2>
                    <p className='ViewCreatorText'>{creator.description}</p>
                    <p className='ViewCreatorText'>{creator.url}</p>
                </div>   
            </div>
        </div>
    )
  }
  
  export default ViewCreator
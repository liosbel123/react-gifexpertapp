import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGriditem from './GifGriditem';

const GifGrid = ({category}) => {
    const {data, loading} = useFetchGifs(category);
    
  return (
    <>
    <h3 className='animate__animated animate__fadeIn'>{category}</h3>
    {
        loading && <p className='animate__animated animate__flash'>Cargando...</p>
    }
    <div className='card-grid card animate__animated animate__fadeIn'>
        {
            data.map(img => 
                <GifGriditem
                key = {img.id}
                {...img}
                />
                )
        }

    </div>
    </>
  )
}

export default GifGrid
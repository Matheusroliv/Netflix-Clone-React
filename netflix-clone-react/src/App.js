import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      //Getting total list
      let list = await Tmdb.getHomeList();
      setMovieList(list)
    }

    loadAll();
  }, [])

  return (
    <div className="page">
      Header
      Destaque
      Listas
    </div>

  )
}
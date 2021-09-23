import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import './movie.css';
// import Movies from '../data.js';
// console.log(Movies);
import axios from 'axios';
// react hooks 所有的组件都用函数 
// useState 代替类里设置状态
const HookMovie = () => {
  //movies  class this.state  setMovies this.setState 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // movies 在哪里？ 
  useEffect(() => {
    // 请求 真正的接口来的时代 
    // url json 
    // ? axios 
    // ./data.js 写不成  向一个url 去请求数据
    // 前后端是分离 
    // axios 请求 假装一个 mockjs 
    // mockjs 提供假数， 还可以给我们一个访问的url 
    
      axios
        .get('/movies')
        .then(res => {
          // console.log(res);
          setMovies(res.data.movies)
          setLoading(false)
        })
      // setMovies(Movies)
    
  }, [])
  return (
    <div>
      HookMovie
      { loading? <div>Loading</div>:<div>
        {movies.map((movie, index) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
        {movies.length}</div> }
    </div>
  )
}

export default HookMovie;
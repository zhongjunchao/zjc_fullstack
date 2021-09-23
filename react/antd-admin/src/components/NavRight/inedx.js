import React, { useEffect, useState } from 'react';
import { Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';//使用mock
import './index.css';

const NavRight=()=>{
    const [tagList,setTagList]=useState([]);
    const getTagAPIList=()=>{
        axios
            .get('/tags')
            .then(res=>{
                console.log(res);
            })
    }
    useEffect(()=>{
        getTagAPIList();
    },[])
    return (
        <>
        
        </>
    )
}
export default NavRight
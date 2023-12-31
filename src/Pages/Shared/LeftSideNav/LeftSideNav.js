import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://sky-news-server.onrender.com/news-categories')
        .then(res=>res.json())
        .then(data=>{
            console.log("Data received");
            console.log(data);
            setCategories(data)
        })
    },[])
    return (
        <div>
            <h4 className='fw-bold'>All Category</h4>

            <div>
                {
                    categories.map(category=><p key={category.id}>

                        <Link className='p-2 text-decoration-none fw-bold' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;
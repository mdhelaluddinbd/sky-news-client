import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoriesNews=useLoaderData();
    return (
        <div>
            <h2>Our New category:{categoriesNews.length}</h2>
            {
                categoriesNews.map(news=><NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;
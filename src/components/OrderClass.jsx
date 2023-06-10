/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import OrderClassCard from './OrderClassCard';

const OrderClass = ({items}) => {
    const [showAll, setShowAll] = useState(false)
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-10 mt-16 mb-16'>
            { showAll ?
                items.map(item => <OrderClassCard
                key={item.id}
                item={item}
                />) 
                : items
                .slice(0, 4).map(item => <OrderClassCard
                    key={item.id}
                    item={item}
                    />) 

            }
        </div>
        <div className="text-center">
            {!showAll && (
            <button
                onClick={() => setShowAll(true)}
                className="btn btn-sm btn-secondary my-4"
            >
                Show All
                </button>
            )}
        </div>
        </div>
    );
};

export default OrderClass;
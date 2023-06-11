import React from 'react';
import UseClasses from '../../../Hooks/UseClasses';
import PopularClassCategory from '../../../components/popularClassCategory';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const PopularClass = () => {
    const [classes] = UseClasses();
    const popular =  classes.filter (item => item.category ==='popular');
    return (
        <div>
           <div className='text-xl text-center'>
           <TypeAnimation
                style={{ whiteSpace: 'pre-line', height: '50px', display: 'block' }}
                sequence={[
                    `Exciting Music Classes for Children`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                    1000,
                    '',
                ]}
                repeat={Infinity}
                />
           </div>
           <div className='text-3xl font-bold text-center'>
           <TypeAnimation
                style={{ whiteSpace: 'pre-line',  display: 'block' }}
                sequence={[
                    `Our Popular Classes`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                    2000,
                    '',
                ]}
                repeat={Infinity}
                />
           </div>
            <section className='mx-auto'>
             <div className="grid md:grid-cols-3 gap-4">
                {
                    popular.map(item=> <PopularClassCategory
                        key={item.id}
                        item={item}
                    ></PopularClassCategory>)
                }
            </div>
            <div className="text-center">
            <Link to='classes'><button className=" btn btn-outline border-0 border-b-4 mt-4 " >View All Classes </button></Link>
            </div>
        </section>
        </div>
    );
};

export default PopularClass;
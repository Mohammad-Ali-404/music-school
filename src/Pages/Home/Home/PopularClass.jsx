import React from 'react';
import UseClasses from '../../../Hooks/UseClasses';
import PopularClassCategory from '../../../components/popularClassCategory';
import SectionTitle from '../../../SectionTitle/SectionTitle';

const PopularClass = () => {
    const [classes] = UseClasses();
    const popular =  classes.filter (item => item.category ==='popular');
    return (
        <div>
           <SectionTitle
           subheading={"Exciting Music Classes for Children"}
           heading={"Our Popular Classes"}
           />
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
            <button className=" btn btn-outline border-0 border-b-4 mt-4 " >View All Classes </button>
            </div>
        </section>
        </div>
    );
};

export default PopularClass;
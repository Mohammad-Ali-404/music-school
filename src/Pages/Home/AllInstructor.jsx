import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UseInstructor from '../../Hooks/UseInstructor';
import AllInstructorCategory from '../../components/AllInstructorCategory';

const AllInstructor = () => {
    const [instructor] = UseInstructor();
    const [showAll, setShowAll] = useState(false)
    return (
        <div>
            <Helmet><title>Music School || Our Instructor</title></Helmet>
            <section className='grid md:grid-cols-3 gap-4 mt-8 mb-16'>
                { showAll ?
                    instructor.map(item => <AllInstructorCategory
                    key={item.id}
                    item={item}
                    ></AllInstructorCategory>) 
                    : instructor
                    .slice(0, 5).map(item => <AllInstructorCategory
                        key={item.id}
                        item={item}
                        ></AllInstructorCategory>)
                }
            </section>
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

export default AllInstructor;
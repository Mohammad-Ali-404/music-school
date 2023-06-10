import React from 'react';
import UseInstructor from '../../../Hooks/UseInstructor';
import SectionTitle from '../../../SectionTitle/SectionTitle';
import TopInstructorCategory from '../../../components/TopInstructorCategory';

const Instructor = () => {
    const [instructor] = UseInstructor();
    const popular = instructor.filter(teacher => teacher.category === 'popular')
    return (
        <div>
            <SectionTitle
            heading={'Meet Best Our Instructor'}
            subheading={'OUR TEACHERS'}
            />
            <section className='grid md:grid-cols-2 gap-4 ml-16'>
                {
                    popular.map(item => <TopInstructorCategory
                    key={item.id}
                    item={item}
                    ></TopInstructorCategory>)
                }
            </section>
        </div>
    );
};

export default Instructor;
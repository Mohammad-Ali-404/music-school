import React from 'react';
import UseInstructor from '../../../Hooks/UseInstructor';
import TopInstructorCategory from '../../../components/TopInstructorCategory';
import { TypeAnimation } from 'react-type-animation';

const Instructor = () => {
    const [instructor] = UseInstructor();
    const popular = instructor.filter(teacher => teacher.category === 'popular')
    return (
        <div className='mt-16 mb-16'>
            <div className='mb-8'>
                <div className='text-xl text-center'>
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', height: '50px', display: 'block' }}
                        sequence={[
                            `Meet Best Our Instructor`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
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
                            `OUR TEACHERS`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                            2000,
                            '',
                        ]}
                        repeat={Infinity}
                        />
                </div>
            </div>
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
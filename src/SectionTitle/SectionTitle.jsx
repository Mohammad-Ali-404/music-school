/* eslint-disable react/prop-types */
const SectionTitle = ({subheading, heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 mb-10 my-12">
        <p className="text-slate-600 text-xl mb-2">---{subheading}---</p>
        <h3 className="text-2xl uppercase font-semibold border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
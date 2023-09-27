
const Title = ({title , overview}) =>{
    return(
        <div className=" pt-24 px-12 absolute text-white ">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6 text-sm w-1/4">{overview}</p>
            <div>
                <button className="bg-gray-500 text-white p-1 px-6 text-xl border-opacity-50 rounded-lg">Play</button>
                <button className="bg-gray-500 mx-2 text-white p-1 px-6 text-xl border-opacity-50 rounded-lg">More Info</button>
            </div>
        </div>
    )
};

export default Title;
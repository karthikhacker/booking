
const Card = ({ type, count }) => {
    return (
        <div className="card w-96 ">
            <figure><img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
            <div className="mt-2">
                <h2 className="text-md font-extrabold cap">{type}</h2>
                <p>{count}</p>
            </div>
        </div>
    )
}

export default Card
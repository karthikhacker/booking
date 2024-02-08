import useFetch from "../utils/useFetch"
import Card from "./Card"
import Loading from "./Loading";

const City = () => {
    const { data, loading } = useFetch("http://localhost:8000/v1/api/hotels/cities?cities=chennai,banglore,mumbai,pune");
    // console.log(data);
    if (loading) return <Loading />
    return (
        <div className="w-[1200px] m-auto mt-5">
            <h2 className="antialiased mb-2 text-2xl font-bold text-blue-800">Property by city</h2>
            <div className="flex gap-2">
                <div className="card w-96 relative">
                    <figure><img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="mt-2 absolute top-28 left-10 text-white font-extrabold text-2xl">
                        <h2 className="text">Chennai</h2>
                        <h2 className="text">{data && data?.data?.[0]}</h2>
                    </div>
                </div>
                <div className="card w-96 relative ">
                    <figure><img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="mt-2 absolute top-28 left-10 text-white font-extrabold text-2xl">
                        <h2 className="text">Banglore</h2>
                        <h2 className="text">{data && data?.data?.[1]}</h2>
                    </div>
                </div>
                <div className="card w-96 relative">
                    <figure><img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="mt-2 absolute top-28 left-10 text-white font-extrabold text-2xl">
                        <h2 className="text">Mumbai</h2>
                        <h2 className="text">{data && data?.data?.[2]}</h2>
                    </div>
                </div>
                <div className="card w-96 relative">
                    <figure><img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="mt-2 absolute top-28 left-10 text-white font-extrabold text-2xl">
                        <h2 className="text">Pune</h2>
                        <h2 className="text">{data && data?.data?.[3]}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default City
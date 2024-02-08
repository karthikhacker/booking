import useFetch from "../utils/useFetch"
import Card from "./Card"
import Loading from './Loading';

const PropertyType = () => {
    const { data, loading } = useFetch('http://localhost:8000/v1/api/hotels/type');
    console.log(data);
    if (loading) return <Loading />
    return (
        <div className="w-[1200px] m-auto mt-6">
            <h3 className="antialiased mb-2 text-2xl font-bold text-blue-800">Browse by property type</h3>
            <div className="flex gap-2">
                {data?.data?.map(d => <Card type={d?.type} count={d?.count} key={d.type} />)}
            </div>
        </div>
    )
}

export default PropertyType
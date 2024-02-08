import City from "../components/City"
import Featured from "../components/Featured"
import PropertyType from "../components/PropertyType"

const Home = () => {
    return (
        <div className="mt-4">
            <h1 className="text-4xl font-extrabold text-blue-800">Find your next stay</h1>
            <p className="font-light">Search low prices on hotels,homes and  much more...</p>
            <City />
            <PropertyType />
            <Featured />
        </div>
    )
}

export default Home
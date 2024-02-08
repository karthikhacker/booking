import Card from "./Card"

const Featured = () => {
    return (
        <div className="w-[1200px] m-auto mt-5">
            <h2 className="antialiased mb-2 text-2xl font-bold text-blue-800">Featured</h2>
            <div className="flex gap-2">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Featured
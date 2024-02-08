import { useEffect, useState } from "react"
import axios from 'axios';

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                setData(response.data);
                //console.log(response.data)
                setLoading(false)
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data)
                    setLoading(false);
                }
            }
        }
        fetchHotels()
    }, [url])
    return {
        data, loading
    }
}

export default useFetch
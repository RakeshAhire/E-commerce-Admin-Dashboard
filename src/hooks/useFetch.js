import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext";

const useFetch = (url) => {
    // console.log('url: ', url);
    const [data, setData] = useState([])
    // console.log('data: ', data);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const { state } = useContext(AuthContext);
    // console.log('state: ', state);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await axios.get(url, {
                headers: {
                    Authorization: state.token
                }
            })
                .then(res => {
                    console.log('res: ', res);
                    setData(res.data.data);
                    setLoading(false)

                })
                .catch(e => {
                    setError(e)
                    console.log('e: ', e);
                })

        }
        fetchData()
    }, [])

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    return { data, loading, error, reFetch }
};

export default useFetch;

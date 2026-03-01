import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";


export function Border(props) {
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const { border, setLoading } = props;
    const url = `https://restcountries.com/v3.1/alpha/${border}`



    useEffect(() => {
        axios.get(url)
            .then(res => setCountry(res.data[0]))
            .finally(() => setLoading(false));

    }, [setLoading, url]);


    return (
        <motion.button
            whileHover={{ scale: 1.05, y:-2 }}
            whileTap={{ scale: 0.9 }}
            className="border"
            onClick={() => {setLoading(true); navigate(`/${country?.name.common}`)}}>{country?.name.common}</motion.button>
    )
}
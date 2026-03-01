import { useNavigate } from "react-router";
import {motion, useInView} from "framer-motion";
import { useRef } from "react";

export function Card(props) {
    const { country } = props;
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false})

    return (
        <motion.li
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: .6 }}
            animate={ isInView && { opacity: 1, y: 0, scale: 1, transition: { duration: 1, type: "spring" } }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 }, y: -2 }}
            transition={{ duration: 0.3 }}

            className="card" onClick={() => navigate(`/${country?.name.common}`)}>
            <img src={country?.flags.png} alt={`${country?.name.common}'s flag`} />
            <div className="card-content">
                <h2>{country.name.common}</h2>
                <p><span>Population:</span> {country.population.toLocaleString()}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital[0] || "No Capital"}</p>
            </div>
        </motion.li>
    )
}
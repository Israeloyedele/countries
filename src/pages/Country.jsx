import { useNavigate, useParams} from "react-router";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader.jsx";
import { Border } from "../components/Border.jsx";
import axios from "axios";
import { Header } from "../components/Header.jsx";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer.jsx";


export function Country() {
    const params = useParams();
    const url = `https://restcountries.com/v3.1/name/${params.country}?fullText=true`;
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    console.log(country)


    useEffect(() => {
        axios.get(url)
            .then(res => setCountry(res.data[0]))
            .finally(() => setLoading(false));
    }, [params.country, url]);

    return (
        <>
        <Header/>
        <div key={params.country} className="country">

            <motion.button
                whileHover={{ scale: 1.05, y:-2 }}
                whileTap={{ scale: 0.9 }}
                className="back-btn" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                <span>Back</span>
            </motion.button>

            {loading? <Loader /> :
                <div className="country-details">

                <div className="country-image"><img src={country?.flags.png} alt=""/></div>

                <div className="country-content">
                    <div><h1>{country?.name.common}</h1></div>

                    <div className="pop">
                    <div>
                        <p><span>Population:</span> {country?.population.toLocaleString()}</p>
                        <p><span>Region:</span> {country?.region}</p>
                        <p><span>Sub-Region:</span> {country?.subregion}</p>
                        <p><span>Capital:</span> {country?.capital}</p>
                        <br/>
                    </div>

                <div>
                    <p><span>Top Level Domain:</span> {country?.tld}</p>
                    <p className="curr"><span>Currencies:</span> {country?.currencies && Object.values(country?.currencies)[0].name}</p>
                    <div>
                        <p><span>Languages:</span> {country?.languages && Object.values(country.languages).join(", ")}</p><br/>
                    </div>
                </div>
                </div>


                <div>
                    <p><span>Border Countries:</span></p>
                    <div className="border-list">
                        {country?.borders?.map((border, index) => <Border setLoading={setLoading} key={index} border={border} />)}
                    </div>
                </div>
                </div>
            </div>}
            <Footer />
        </div>
        </>
    )
}
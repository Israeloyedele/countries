import { Header } from "../components/Header.jsx";
import { Filters } from "../components/Filters.jsx";
import { Countries } from "../components/Countries.jsx";
import { Footer } from "../components/Footer.jsx";
import { Loader } from "../components/Loader.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

export function Home() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        search: "",
        region: "all"
    });
    let filteredCountries = countries.filter(country => {
        if ((filters.region !== "all") && (country.region.toLowerCase() !== filters.region)) return false

        return !(filters.search && !country.name.common.toLowerCase().includes(filters.search.toLowerCase()));
    });


    const url = "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags";
    useEffect(() => {
        axios.get(url)
             .then(res => setCountries(res.data))
             .finally(() => setLoading(false));
    }, []);




    return (
        <div className="home">
            <Header/>
            <Filters filters={filters} setFilters={setFilters} />
            {loading ? <Loader /> :
            <Countries key={filteredCountries.length} countries={filteredCountries}  />}
            <Footer />
        </div>
    )
}
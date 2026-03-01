import { Card } from "./Card.jsx";

export function Countries(props) {
    const { countries } = props;
    const sortedCountries = countries.sort((a, b) => a.name?.common.localeCompare(b.name?.common));

    return (
        <ul>
            {sortedCountries.length > 0 ?
                sortedCountries?.map(country => <Card key={country.name.common} country={country}/>)
                : <p>No Countries match your search.</p>}
        </ul>
    )
}
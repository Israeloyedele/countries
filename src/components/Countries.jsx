import { Card } from "./Card.jsx";

export function Countries(props) {
    const { countries } = props;

    return (
        <ul>
            {countries.length > 0 ?
                countries?.map(country => <Card key={country.name.common} country={country}/>)
                : <p>No Countries match your search.</p>}
        </ul>
    )
}
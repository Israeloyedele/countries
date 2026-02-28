export function Filters(props) {
    const { filters, setFilters } = props;

    function updateFilters(key, value) {
        setFilters(prev => ({ ...prev, [key]: value }));
    }

    return (
        <div className="filters">
            <div className="input">
                <><svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></><input
                onChange={e => updateFilters("search", e.target.value)}
                type="text"
                value={filters.search}
                placeholder="Search for a country..."/></div>

            <div className="filter">
                {/*<label htmlFor="filter">Filter by Region</label>*/}
                <select

                    name="filter"
                        id="filter"
                        value={filters.region}
                        onChange={e => updateFilters("region", e.target.value.toLowerCase())}>
                    <button><selectedcontent></selectedcontent><span className="picker"><svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 384 512"><path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span></button>

                    <option value="all" id="filter" name="filter" defaultValue>Filter by Region</option>
                    <option value="americas">Americas</option>
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="antarctic">Antarctic</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select></div>
        </div>
    )
}
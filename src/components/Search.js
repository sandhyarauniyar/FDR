import './Search.css';
import { useState } from "react";
import Result from './Result';
import Loader from "../components/Loader";

const Search = () => {
    const [result, setResult] = useState("");
    const [address, setAddress] = useState("");
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (address.length > 0 && address.length < 3) {
            setErr("Please enter a valid address");
            return;
        }
        setLoading(true);
        try {
            const url = `http://localhost:5000/fdrByAddress/${address}`;
            const response = await fetch(url);
            if (response.ok) {
                const restaurant = await response.json();
                setResult(restaurant.restaurant);
            }
            else {
                setResult(response.statusText);
            }
        }
        catch (err) {
            setResult(err);
        }
        setLoading(false);
    }

    const handleChange = (e) => {
        setAddress(e.target.value);
        setResult("");
        setErr("");
    }

    return (
        <div className="search">
            <div>
                <input type="text" placeholder="Enter your delivery location" className="search-bar" value={address} onChange={handleChange} />
                <button className="search-btn" onClick={handleSearch} type="button">FIND FOOD</button>
            </div>
            {err !== "" && <div className="err-message">{err}</div>}
            {result !== "" && <Result result={result} />}
            {loading && <Loader />}
        </div>
    );
}

export default Search;
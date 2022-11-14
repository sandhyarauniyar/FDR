import "./Result.css";

const Result = (props) => {
    return (
        <div className="result">
            <span className="inner-text-1">Your nearest restaurant is</span> : <span className="inner-text-2">{props.result}</span>
        </div>
    );
}

export default Result;
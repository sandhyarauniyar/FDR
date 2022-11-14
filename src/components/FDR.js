import banner from '../banner-img.webp';
import Search from './Search';
import './FDR.css';

const FDR = () => {
    return (
        <div className="fdr">
            <div className="fdr-1">
                <div className="heading">
                    <h1 className="title">Hungry?</h1>
                    <h3 className="subtitle">Order food from favourite restaurants near you!</h3>
                </div>
                <Search />
            </div>
            <div className="fdr-2">
                <img src={banner} className="banner-img" />
            </div>
        </div>
    );
}
export default FDR;
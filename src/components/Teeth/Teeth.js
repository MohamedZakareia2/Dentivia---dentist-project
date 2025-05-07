import "./Teeth.css";
import happypic from "../../Assets/Happy.png";
import sucpic from "../../Assets/suc.png";
import yearpic from "../../Assets/year.png";
import expertpic from "../../Assets/expert.png";

const Teeth = () =>{
    return(
        <div className="t-container">
            <div className="t-e">
                <img alt="" src={happypic}></img>
                <h3>4,500+</h3>
                <span>Happy Clints</span>
            </div>
            <div className="t-e">
                <img alt="" src={sucpic}></img>
                <h3>15,600+</h3>
                <span>Successful Cases</span>
            </div>
            <div className="t-e">
                <img alt="" src={yearpic}></img>
                <h3>20+</h3>
                <span>Years of Experience</span>
            </div>
            <div className="t-e">
                <img alt="" src={expertpic}></img>
                <h3>256+</h3>
                <span>Experienced Doctors</span>
            </div>
        </div>
    )
};

export default Teeth;
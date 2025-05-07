import "./Advantages.css";
import happypic from "../../Assets/Happy.png";
import yearpic from "../../Assets/year.png";
import expertpic from "../../Assets/expert.png";

const Advantages = ()=>{
    return(

        <div className="Advantages-wrapper">
        <div className="c-Advantages">
        <h1>Advantages</h1>
        <div className="content-adv">
        <div className="l-adv">
            <div className="group-adv">
                <img alt="" src={yearpic}></img>
                <h2>Qualified Consulting</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua</p>
            </div>
            <div className="group-adv">
                <img alt="" src={happypic}></img>
                <h2>Dental Implants</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. </p>
            </div>
        </div>
        <div className="r-adv">
        <div className="group-adv">
                <img alt="" src={happypic}></img>
                <h2>Dental Implants</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua. </p>
            </div>
            <div className="group-adv">
                <img alt="" src={expertpic}></img>
                <h2>Qualified Consulting</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua.</p>
            </div>
        </div>
        </div>
        </div>
        </div>
        
    )
};

export default Advantages;
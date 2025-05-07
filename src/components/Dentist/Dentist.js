import "./Dentist.css";
import jonapic from "../../Assets/drjona.jpg"

const Dentist = () =>{
    return(
        <div className="c-dent">
            <h1>Our High Qualified Dentist</h1>
            <div className="main-content">
            <div className="bg-dent"></div>
            <div className="content-dent">
                <div className="l-content-d">
                <img alt="" src={jonapic} ></img>
                </div>
                <div className="r-content-d">
                <h1>Dr : Jone Kura</h1>
            <span>Principal Dentist</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            <div className="icons">
            <a href="#" class="icon fb"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="icon tw"><i class="fab fa-twitter"></i></a>
            <a href="#" class="icon ig"><i class="fab fa-instagram"></i></a>
            <a href="#" class="icon li"><i class="fab fa-linkedin-in"></i></a>
            </div>
                </div>
            </div>
            </div>
           
        </div>
    )
};

export default Dentist ;
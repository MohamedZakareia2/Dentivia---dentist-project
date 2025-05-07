import "./Book.css";
import l_book from "../../Assets/55.png";
import CEO from "../../Assets/ceo.jpg";


const Book = () => {
    return(
        <div className="book-wrapper">
            <div className="c-Book">
                <div className="l-book">
                    <h2>Book an Appointment</h2>
                    <div className="form">
                        <input className="name" type={'text'} placeholder={"Name"} ></input>
                        <input className="mail" type={"email"} placeholder={"Email"} ></input>
                        <input className="number" type={"text"} placeholder={"Phone Number"} ></input>
                        <select defaultValue="">
                            <option value="" disabled>Select your gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <textarea className="large-input" placeholder={"Additional information..."} rows={4}></textarea>

                    </div>
                    <button>Book Now</button>
                </div>
                <div className="r-book">
                    <div className="r-book-content">
                        <div className="top-r-book">
                            <img alt="" src={l_book}></img>
                            <p>Lorem ipsum dolor sit ametconse ctetur adipisicing elitvolup 
                                tatem error sit qui dolorem facilis.
                            </p>
                        </div>
                        <div className="bot-r-book">
                            <img alt="" src={CEO}></img>
                            <h5>Walter Ashlock<span>CEO & founder</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Book;
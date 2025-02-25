import Button from "../UI/button/button";
import './RegisterSection.sass';

export default function RegisterSection() {
    return (
        <div className="form">
            <h1>JOIN HYDRA</h1>
            <h2>Let’s Build Your VR Experience</h2>
            <div className="input-group">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
            </div>
            <div className="input-group">
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Phone Number" />
            </div>
            <input type="text" placeholder="Subject" className="full-width" />
            <textarea placeholder="Tell Us Something..." className="full-width"></textarea>
            <Button text="SEND TO HYDRA" />
        </div>
    );
}

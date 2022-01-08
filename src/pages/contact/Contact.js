import { ContactContainer } from "./Contact.styled";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        let myForm = document.getElementById('contact');
        let formData = new FormData(myForm)
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    return ( 
        <ContactContainer>
            <form onSubmit={handleSubmit} name="contact" method="POST" netlify id="contact" >
                <div>
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" id="name" required value={name} onInput={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" value={email} onInput={(e) => setEmail(e.target.value)}  required/>
                </div>
                <div>
                    <label htmlFor="message"> Message </label>
                    <textarea name="message" id="message" value={message} onInput={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
    </ContactContainer>
    );
}
 
export default Contact;
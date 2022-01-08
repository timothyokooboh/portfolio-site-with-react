import { ContactContainer } from "./Contact.styled";
// import { useState } from "react";

const Contact = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     let myForm = document.getElementById('contact');
    //     let formData = new FormData(myForm)
        
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: new URLSearchParams(formData).toString()
    //     })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    // }

    return ( 
        <ContactContainer>
            <form action="https://www.timothyokooboh.com" name="contact" method="POST" data-netlify="true" id="contact" >
                <div>
                    <label for="name"> Name </label>
                   { /*} <input type="text" name="name" id="name" required value={name} onInput={(e) => setName(e.target.value)} /> */ }
                    <input type="text" name="name" id="name" required />
                </div>
                <div>
                    <label for="email"> Email </label>
                   { /* <input type="email" name="email" id="email" value={email} onInput={(e) => setEmail(e.target.value)}  required/> */ }
                   <input type="email" name="email" id="email" required/> 
                </div>
                <div>
                    <label for="message"> Message </label>
                   { /* <textarea name="message" id="message" value={message} onInput={(e) => setMessage(e.target.value)} required></textarea> */ }
                    <textarea name="message" id="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
    </ContactContainer>
    );
}
 
export default Contact;
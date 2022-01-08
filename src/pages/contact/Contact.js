// import { ContactContainer } from "./Contact.styled";
// import { useState } from "react";

const Contact = () => {
    /*const [name, setName] = useState("");
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
    }*/

    return ( 
      
        <form name="contact" netlify>
            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
}
 
export default Contact;
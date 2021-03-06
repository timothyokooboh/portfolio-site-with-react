import { ContactContainer } from "./Contact.styled";
import { useState } from "react";

const Contact = () => {
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        const form = document.getElementById("form");
        const data = new FormData(form);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data).toString()
        })
        .then(() => {
            setIsPending(false);
            form.reset();
            alert("Thank you for your message. I will get back to you as soon as possible.");
        })
    }
    
    return ( 
        <ContactContainer>
            <form onSubmit={handleSubmit} name="contact" data-netlify="true" id="form">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label for="name"> Name </label>
                   <input type="text" name="name" id="name" required />
                </div>
                <div>
                    <label for="email"> Email </label>
                   <input type="email" name="email" id="email" required  />
                   
                </div>
                <div>
                    <label for="message"> Message </label>
                   <textarea name="message" id="message" required onInput={(e) => e.target.value } ></textarea>
                </div>

                <button type="submit">{ isPending ? 'Sending...' : 'Send'}</button>
            </form>
    </ContactContainer>
    );
}
 
export default Contact;
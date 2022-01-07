import { ContactContainer } from "./Contact.styled";

const Contact = () => {
    return ( 
        <ContactContainer>
            <form name="portfolio-contact" method="POST" data-netlify="true" >
                <div>
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email"  required/>
                </div>
                <div>
                    <label htmlFor="message"> Message </label>
                    <textarea name="message" id="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </ContactContainer>
    );
}
 
export default Contact;
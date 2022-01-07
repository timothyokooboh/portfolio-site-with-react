import { ContactContainer } from "./Contact.styled";

const Contact = () => {
    return ( 
        <ContactContainer>
            <form ame="portfolio-contact" netlify>
                <div>
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div>
                    <label htmlFor="email"> Email </label>
                    <input type="text" name="email" id="email"  required/>
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
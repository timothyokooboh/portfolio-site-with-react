import { ContactContainer } from "./Contact.styled";

const Contact = () => {
    return ( 
        <ContactContainer netlify>
            <div>
                <label htmlFor="name"> Name </label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="email"> Email </label>
                <input type="text" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="message"> Message </label>
                <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit">Send</button>
        </ContactContainer>
    );
}
 
export default Contact;
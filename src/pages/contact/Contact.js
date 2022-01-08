import { ContactContainer } from "./Contact.styled";

const Contact = () => {
    
    return ( 
        <ContactContainer>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label for="name"> Name </label>
                   <input type="text" name="name" id="name" required />
                </div>
                <div>
                    <label for="email"> Email </label>
                   <input type="email" name="email" id="email" required/>
                   
                </div>
                <div>
                    <label for="message"> Message </label>
                   <textarea name="message" id="message" required></textarea>
                </div>

                <button type="submit">Send</button>
            </form>
    </ContactContainer>
    );
}
 
export default Contact;
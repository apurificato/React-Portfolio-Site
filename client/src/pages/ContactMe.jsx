
function ContactMe() {
    return (
    <section id="contact-me">
        <h2>Contact Me</h2>
        <h3>Reach Out to Me So We Can Build Something Cool Together.</h3>
        <h5>Just quickly fill out and submit this form and I will get back to you within 24 hours!</h5>
        <div>
            <form action="https://api.web3forms.com/submit" method="POST">
                <ul>
                    <input type="hidden" name="access_key" value="407a7ac5-808f-4f76-a23c-82e1c88be2d1" />
                    <input type="hidden" name="subject" value="New Message From User" />
                    <li>
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" id="name" name="name" required />
                    </li>
                    <li>
                        <label htmlFor="email">Enter email</label>
                        <input type="email" id="mail" name="email" required />
                    </li>
                    <li>
                        <label htmlFor="msg">Enter your message</label>
                        <textarea id="msg" name="message" required></textarea>
                    </li>
                    <li className="button">
                        <button type="submit">Submit</button>
                    </li>
                </ul>
            </form>
        </div>
    </section>
    )
  }
  
  export default ContactMe
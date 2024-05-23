
function ContactMe() {
    return (
    <section id="contact-me">
        <h2>Contact Me</h2>
        <h3>Reach Out to Me So We Can Build Something Cool Together.</h3>
        <div>
            <form action="/form-submitted" method="post">
                <ul>
                    <li>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label htmlFor="mail">Email:</label>
                        <input type="email" id="mail" name="user_email" />
                    </li>
                    <li>
                        <label htmlFor="msg">Message:</label>
                        <textarea id="msg" name="user_message"></textarea>
                    </li>
                    <li className="button">
                        <button type="submit">Send your message</button>
                    </li>
                </ul>
            </form>
        </div>
    </section>
    )
  }
  
  export default ContactMe
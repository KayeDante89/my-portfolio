import "./styles.css";

export default function ContactForm() {
  return (
  
      <div>
        <div className="form-wrapper">
          <h1>contact</h1>
          <form className="center-container" action="https://formspree.io/f/mpznllnz" method="POST">
            <div class="form-item">
              <input type="text" id="name" name="name" required="required" />
              <label for="name">
                <span>Name</span>
              </label>
            </div>
            <div className="form-item">
              <input type="email" id="mail" name="mail" required="required" />
              <label for="mail">
                <span>Email</span>
              </label>
            </div>
            <div className="form-item">
              <textarea
                id="message"
                name="message"
                required="required"
              ></textarea>
              <label for="message">
                <span>Message</span>
              </label>
            </div>
            <div className="form-item">
              <div id="form-btn-container">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

  );
}

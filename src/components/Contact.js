const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>

      <p style={styles.description}>
        Have questions, feedback, or need assistance? We’d love to hear from
        you!
      </p>

      <div style={styles.contactSection}>
        {/* Contact Form */}
        <div style={styles.formContainer}>
          <h2 style={styles.formHeader}>Send us a message</h2>
          <form style={styles.form}>
            <label style={styles.label}>Name</label>
            <input type="text" placeholder="Your Name" style={styles.input} />

            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Your Email" style={styles.input} />

            <label style={styles.label}>Message</label>
            <textarea placeholder="Your Message" style={styles.textarea} />

            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div style={styles.infoContainer}>
          <h2 style={styles.infoHeader}>Get in touch</h2>
          <p style={styles.infoText}>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@edibles.com" style={styles.link}>
              support@edibles.com
            </a>
          </p>
          <p style={styles.infoText}>
            <strong>Phone:</strong>{" "}
            <a href="tel:+91-9809870967" style={styles.link}>
            +91-9809870967
            </a>
          </p>
          <p style={styles.infoText}>
            <strong>Address:</strong> 123 Your Street, Your City, Country
          </p>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  header: {
    fontSize: "2.5em",
    color: "#ff6347",
    textAlign: "center",
    marginBottom: "10px",
  },
  description: {
    textAlign: "center",
    fontSize: "1.2em",
    color: "#666",
    marginBottom: "30px",
  },
  contactSection: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
  formContainer: {
    flex: 1,
    padding: "20px",
    background: "#fafafa",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  formHeader: {
    fontSize: "1.5em",
    color: "#333",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontSize: "1em",
    color: "#666",
  },
  input: {
    padding: "10px",
    fontSize: "1em",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ddd",
    marginBottom: "15px",
    minHeight: "100px",
  },
  button: {
    padding: "10px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#ff6347",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#e55b5b",
  },
  infoContainer: {
    flex: 1,
    padding: "20px",
    background: "#fafafa",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  infoHeader: {
    fontSize: "1.5em",
    color: "#333",
    marginBottom: "15px",
  },
  infoText: {
    fontSize: "1em",
    color: "#666",
    marginBottom: "10px",
  },
  link: {
    color: "#ff6347",
    textDecoration: "none",
  },
};

export default Contact;

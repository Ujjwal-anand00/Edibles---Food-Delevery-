import UserContext from "../utils/UserContext";
import { useContext } from "react";
const About = () => {
  const data = useContext(UserContext);
    return (
        <div style={styles.container}>
          <h1 style={styles.header}>About Us</h1>

          <h5 className="flex gap-1"><p>Hi,</p> 
            <p><UserContext.Consumer>
              {({loggedInUser})=><p>{loggedInUser} </p>}
            </UserContext.Consumer></p>
            
            <p> Welcome in our page.....</p>

          </h5>
    
          <section style={styles.section}>
            <h2 style={styles.sectionHeader}>Our Mission</h2>
            <p style={styles.text}>
              At Edibles, we aim to bring you the best culinary experiences from your favorite
              restaurants straight to your door. We strive to make food ordering simple, reliable, and
              enjoyable with each delivery.
            </p>
          </section>
    
          <section style={styles.section}>
            <h2 style={styles.sectionHeader}>Why Choose Us?</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Convenient Ordering:</strong> Browse and order from a wide range of local and
                international restaurants with ease.
              </li>
              <li style={styles.listItem}>
                <strong>Reliable Delivery:</strong> We partner with top services to ensure your food
                arrives on time, every time.
              </li>
              <li style={styles.listItem}>
                <strong>Personalized Recommendations:</strong> Our app learns your preferences to bring
                you new, tailored options with each order.
              </li>
            </ul>
          </section>
    
          <section style={styles.section}>
            <h2 style={styles.sectionHeader}>Our Values</h2>
            <p style={styles.text}>
              We believe in connecting communities with great food. Supporting local eateries and bringing
              convenience to our users are at the heart of everything we do.
            </p>
          </section>
    
          <section style={styles.section}>
            <h2 style={styles.sectionHeader}>Contact Us</h2>
            <p style={styles.text}>
              Questions? Reach out to us at{' '}
              <a href="mailto:support@yourapp.com" style={styles.link}>support@yourapp.com</a>.
              We’re here to make your food delivery experience exceptional.
            </p>
          </section>
        </div>
      );
    };
    
    // Inline CSS
    const styles = {
      container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        lineHeight: '1.6',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      header: {
        fontSize: '2.5em',
        color: '#ff6b6b',
        textAlign: 'center',
        marginBottom: '20px',
      },
      section: {
        padding: '20px',
        margin: '20px 0',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
      },
      sectionHeader: {
        fontSize: '1.8em',
        color: '#333',
        borderBottom: '2px solid #ff6b6b',
        paddingBottom: '5px',
        marginBottom: '15px',
      },
      text: {
        fontSize: '1.1em',
        color: '#666',
      },
      list: {
        listStyleType: 'none',
        padding: 0,
      },
      listItem: {
        fontSize: '1.1em',
        color: '#555',
        margin: '10px 0',
        paddingLeft: '20px',
        position: 'relative',
      },
      link: {
        color: '#ff6b6b',
        textDecoration: 'none',
        fontWeight: 'bold',
      },
    };

export default About;

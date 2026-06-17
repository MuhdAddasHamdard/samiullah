import React from "react";

const contactOptions = [
  {
    id: 1,
    title: "Email Us",
    info: "support@example.com",
  },
  {
    id: 2,
    title: "Call Us",
    info: "+1 234 567 890",
  },
  {
    id: 3,
    title: "Visit Us",
    info: "123 Main Street, New York",
  },
];

const Contact = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Page</h1>

      <div className="position-relative" style={styles.container}>
        {contactOptions.map((option) => (
          <div key={option.id} style={styles.card}>
            <h3>{option.title}</h3>
            <p>{option.info}</p>
            <button style={styles.button}>Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  card: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  button: {
    padding: "10px 15px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Contact;

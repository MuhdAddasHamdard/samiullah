import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Spin from "./Spin";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Backend Developer",
  },
];

const About = () => {
  const [message, setMessage] = useState(<Spin />);
  useEffect(() => {
    setTimeout(() => {
      setMessage(<Header />);
    }, 3000);
  }, [null]);
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Page</h1>

      <div style={styles.container}>
        {teamMembers.map((member) => (
          <div key={member.id} style={styles.card}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <button style={styles.button}>View Profile</button>
          </div>
        ))}
      </div>

      <div> {message}</div>
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

export default About;

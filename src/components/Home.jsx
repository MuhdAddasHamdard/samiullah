import React from "react";

const homeCards = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, and JavaScript from scratch.",
  },
  {
    id: 2,
    title: "React Basics",
    description: "Build modern user interfaces using React.",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description: "Create responsive designs quickly.",
  },
];

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>

      <div style={styles.container}>
        {homeCards.map((card) => (
          <div key={card.id} style={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button style={styles.button}>Read More</button>
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

export default Home;

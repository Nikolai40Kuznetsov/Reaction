import React, { useState } from "react";

export default function MoviePoster() {
  const movies = [
    {
      title: "Тень над городом",
      genre: "Триллер",
      image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop",
      author: "Алексей К."
    },
    {
      title: "Северный ветер",
      genre: "Драма",
      image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
      author: "Мария Л."
    },
    {
      title: "Код Бури",
      genre: "Фантастика",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      author: "Илья П."
    }
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.buttons}>
        {movies.map((m, i) => (
          <button
            key={i}
            style={styles.button}
            onClick={() => setSelectedMovie(m)}
          >
            {m.title}
          </button>
        ))}
      </div>

      {selectedMovie && (
        <div style={styles.card}>
          <img src={selectedMovie.image} alt={selectedMovie.title} style={styles.image} />
          <div style={styles.info}>
            <h3 style={styles.title}>{selectedMovie.title}</h3>
            <p style={styles.meta}><strong>Жанр:</strong> {selectedMovie.genre}</p>
            <p style={styles.meta}><strong>Автор:</strong> {selectedMovie.author}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#0f0f12",
    minHeight: "100vh",
    color: "#eaeaea",
    textAlign: "center"
  },
  buttons: {
    marginBottom: "20px"
  },
  button: {
    margin: "0 10px",
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#2a2a33",
    color: "#fff",
    fontSize: "14px",
    transition: "0.3s"
  },
  card: {
    margin: "0 auto",
    maxWidth: "400px",
    borderRadius: "12px",
    overflow: "hidden",
    background: "#1a1a1f",
    boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
    border: "1px solid #2a2a33"
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover"
  },
  info: {
    padding: "12px 14px"
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "20px",
    lineHeight: "1.2"
  },
  meta: {
    margin: "4px 0",
    color: "#b7b7c0"
  }
};

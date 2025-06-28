import React, { useEffect, useState } from 'react';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/topics')
      .then(res => res.json())
      .then(data => setTopics(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📘 MathSync - Core Topics</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>
            {topic.title} — <strong>{topic.difficulty}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

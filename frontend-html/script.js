const topics = [
  { id: 1, title: "Limits", difficulty: "Medium" },
  { id: 2, title: "Differential Equations", difficulty: "Hard" },
  { id: 3, title: "Laplace Transform", difficulty: "Hard" },
  { id: 4, title: "Probability", difficulty: "Easy" }
];

const list = document.getElementById("topic-list");

topics.forEach(topic => {
  const li = document.createElement("li");
  li.textContent = `${topic.title} – ${topic.difficulty}`;
  list.appendChild(li);
});

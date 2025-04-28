import { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, done: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Új feladat..."
      />
      <button onClick={addTask}>Hozzáad</button>
      <ul>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{ textDecoration: t.done ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => toggleTask(index)}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

import { useState } from 'react';
import GuessNumber from './GuessNumber';
import TodoList from './TodoList';

function App() {
  const [menu, setMenu] = useState('guess');

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Single Page App</h1>
      <nav>
        <button onClick={() => setMenu('guess')}>Guess the Number</button>
        <button onClick={() => setMenu('todo')}>To-Do List</button>
      </nav>
      <hr />
      {menu === 'guess' && <GuessNumber />}
      {menu === 'todo' && <TodoList />}
    </div>
  );
}

export default App;

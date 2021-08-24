import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="app container">
      {/* TODO: 1 */}
      <TodoList url="/api/list/這裡要換上你的英文字名喔，啾咪" />
    </div>
  );
}

export default App;

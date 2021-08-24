import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';

export default function TodoList(props) {
  const [list, setList] = useState([]);
  const [filterType, setFilterType] = useState('all');

  // TODO 1
  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((response) => {
        setList(response);
      });
  }, []);

  // TODO 2
  const atAddItem = React.useCallback((text:string) => {
    fetch(props.url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        text,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setList((prev) => prev.concat(response));
      });
  }, []);
  // */

  // TODO 3
  const atToggleItem = useCallback((id:string) => {
    fetch(props.url, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((response) => {
        setList(response);
      });
  }, []);

  const atFilterChange = useCallback((type) => {
    setFilterType(type);
  }, []);

  const filtersList = list.filter((todo) => {
    if (filterType === 'completed') {
      return todo.done;
    }
    if (filterType === 'active') {
      return !todo.done;
    }
    return true;
  });

  return (
    <section className="todo-list" data-name="TodoList.js">
      <TodoForm onAddItem={atAddItem} />
      <TodoFilter
        filterType={filterType}
        onFilterChange={atFilterChange}
      />
      <ul className="todo-items">
        {
          filtersList.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              done={item.done}
              onToggleItem={atToggleItem}
            >
              {item.text}
            </TodoItem>
          ))
        }
      </ul>
    </section>
  );
}

const initialList = [
  { id: 'id1', text: '學會React', done: true },
  { id: 'id2', text: '學會Webpack', done: false },
  { id: 'id3', text: '年薪百萬', done: false },
];
function TodoList() {
  const [list, setList] = React.useState(initialList);

  const atAddItem = (text) => {
    const item = {
      id: new Date().getTime().toString(),
      text,
      done: false,
    };
    setList(list.concat(item));
  };

  const atToggleItem = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          text: item.text,
          done: !item.done,
        };
      }
      return item;
    });
    setList(newList);
  };

  return (
    <section className="todo-list" data-name="TodoList.js">
      <TodoForm onAddItem={atAddItem} />
      <ul className="todo-items">
        {
          list.map((item) => (
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

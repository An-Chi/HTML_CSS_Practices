function TodoForm(props) {
  const inputRef = React.useRef();
  /* // TODO

  const atSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text === '') {
      return;
    }
    inputRef.current.value = '';
    props.onAddItem(text);
  };

  return (
    <section className="style-1" data-name="TodoForm.js">
      <form className="todo-form" onSubmit={atSubmit}>
        <input type="text" ref={inputRef} />
      </form>
    </section>
  );
  // */
}

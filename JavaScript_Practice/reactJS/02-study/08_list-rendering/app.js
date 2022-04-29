// Array map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);

function List(){
  /* // TODO
  const [list, setList] = React.useState(['學會 JS', '學會 React', '年薪百萬']);
  const atAddClick = () => {
    var newList = list.concat(new Date().toString());
    setList(newList);
  }
  return (
    <div>
      <button onClick={atAddClick}>Add</button>
      <ol className="list">
      {
        list.map(function (text) {
          return <li key={text}>{text}</li>;
        })
      }
      </ol>
    </div>
  )
  // */
}

ReactDOM.render(
  <List />,
  document.getElementById('app')
);
// https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABAQQA6oBQEoDeAoRRCBAZykQG1jwoAaREgUygGE4aBdRAXkQCVGAQ2gA6EEwDKUQVEYYADFgDcBIqXIyWAGxgQA1j0TYeAPkT5ChJq3ZgoGancQBqRAEZlqgL6qATsxBfJAxVQgAeABMYADciLUESEgA5QQBbRm4AIlSATwBaYlTUBEY7TJNQyzCAIxAoKAREBG1dPW4cTR19LxMAITqGsDCAelr6hArLKoALNxMcRygvEdnJquGo6LWsPC8gA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2017%2Creact&prettier=false&targets=&version=7.8.7&externalPlugins=%40babel%2Fplugin-proposal-class-properties%407.5.5

/* 
function App(){
  const [count, setCount] = React.useState(0);
  const atClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="my-component">
      <button onClick={atClick}>Button</button>
      <h1>{count}</h1>
    </div>
  )
}
 */


// https://zh-hant.reactjs.org/docs/react-without-jsx.html
// React.createElement(component, props, ...children)

function App() {
  const [count, setCount] = React.useState(0);

  const atClick = () => {
    setCount(count + 1);
  };

  return React.createElement("div", { className: "my-component" },
    React.createElement("button", { onClick: atClick }, "Button"),
    React.createElement("h1", null, count)
  );
}


/* ReactDOM.render(
  <App />,
  document.getElementById('app')
); */
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
);
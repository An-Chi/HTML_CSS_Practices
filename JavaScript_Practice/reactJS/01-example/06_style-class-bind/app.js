
function App(){
  const [isGreen, setGreen] = React.useState(false);
  const atClick = () => {
    setGreen(!isGreen);
  }
  var boxClassName = 'box';
  if (isGreen) {
    boxClassName += ' style-green';
  }
  return (
    <div className="app">
      <button className="my-btn" onClick={atClick}>isGreen</button>
      <div className={boxClassName} />
      <div style={{
        width: 200,
        height: 200,
        backgroundColor: isGreen ? 'green' : 'red',
        display: isGreen ? 'block': 'none'
      }} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
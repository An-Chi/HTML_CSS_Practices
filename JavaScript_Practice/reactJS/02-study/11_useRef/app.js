function UseRefExample(){
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);

  /* // TODO
  const refInput = React.useRef();

  const atShowClick = () => {
    setShow(!show);
    // console.log(refInput.current); // undefined
  }

  React.useEffect(() => {
    console.log('count', count);
  }, [count]);

  React.useEffect(() => {
    if (show) {
      console.log(refInput.current); // correct
      refInput.current.focus();
    }
  }, [show]);

  
  return (
    <div className="ref-example-component">
      <section>
        <button onClick={atShowClick}>show input</button>
        <button onClick={()=> setCount(count+1)}>+1</button>
        {
          show && <input ref={refInput} />
        }
      </section>
    </div>
  );
  // */
}

ReactDOM.render(
  <UseRefExample />,
  document.getElementById('app')
);

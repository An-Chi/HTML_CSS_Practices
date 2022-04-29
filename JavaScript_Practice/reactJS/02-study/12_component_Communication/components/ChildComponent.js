function ChildComponent(props){
  const atClick = () => {
    // TODO
    // props.onCallParent('Hi, daddy');
  }
  return (
    <div className="child-component">
      <h3>ChildComponent</h3>
      <p>props.count:{props.count}</p>
      <button onClick={atClick}>call Parent</button>
    </div>
  );
}

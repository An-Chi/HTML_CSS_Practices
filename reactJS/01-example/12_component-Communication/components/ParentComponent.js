function ParentComponent(){
  const [count, setCount] = React.useState(0);
  const [date, setDate] = React.useState('');
  const atCallParent = (value) => {
    setDate(value);
  }
  return (
    <div className="parent-component">
      <h1>ParentComponent</h1>
      <p>count:{count}</p>
      <button onClick={()=> setCount(count + 1)}>+1</button>
      <p>date:{date}</p>
      <ChildComponent 
        count={count}
        onCallParent={atCallParent}/>
    </div>
  );
}
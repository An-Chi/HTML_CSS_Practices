function FunctionalCard(props){
  
  /* // TODO1
  const {
    img, name, children
  } = props;
  return (
    <div className="card">
      <img className="img" src={img} />
      <div className="name">name:{name}</div>
      <div className="quote">quote:{children}</div>
    </div>
  );
  // */
  console.log(props);
  // Rule
  // Component 接收參數的唯一方法，就是通過 props 取得
  const { img, name, children } = props;
  return (
    <div className="card">
      <img src="{img}" alt="card - image" className="img" />
      <div className="name">name:{name}</div>
      <div className="quote">quote: {children}</div>
    </div>
  );
}

ReactDOM.render(
  // /* // TODO2
  <div className="app">
    <FunctionalCard
      img="http://fakeimg.pl/300x100/ecf0f1/"
      name="milkmidi" />
    <FunctionalCard
      img="http://fakeimg.pl/240x80/ecf0f1/"
      name="奶綠茶">
      <h1>我是子元素</h1>
    </FunctionalCard>
  </div>
  // */
  ,
  document.getElementById('app')
);
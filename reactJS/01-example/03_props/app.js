function FunctionalCard(props){
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
}

ReactDOM.render(
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
  ,
  document.getElementById('app')
);
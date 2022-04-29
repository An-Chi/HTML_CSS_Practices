

function CategoryItem(props){
  /* // TODO1
  return (
    <div className="category-item">
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  )
  // */
}

function List(){
  const [list, setList] = React.useState([]);

  /* // TODO2
  React.useEffect(() => {
    fetch('./categories.json')
      .then((res) => res.json())
      .then((categories) => {
        console.log(categories);
        setList(categories);
      })
  }, []);

  return (
    <div>
      <div className="category-wrap">
      {
        list.map((category)=> {
          return (
            <CategoryItem 
              key={category.id}
              name={category.name}
              image={category.image} />
          )
        })
      }
      </div>
    </div>
  )
  // */
}

ReactDOM.render(
  <List />,
  document.getElementById('app')
);
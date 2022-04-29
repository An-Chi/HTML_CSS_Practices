function FormSelect(){
  const [select, setSelect] = React.useState('');
  const atSelectChange = (e) => {
    setSelect(e.target.value);
  }
  return (
    <section>
      <h4>FormSelect</h4>
      <p>select:{select}</p>
      <select value={select} onChange={atSelectChange}>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
        <option value="Angular">Angular</option>
      </select>
    </section>
  );
}
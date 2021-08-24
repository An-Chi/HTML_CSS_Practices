function FormRadio(){
  const [gender, setGender] = React.useState('');
  /* // TODO
  const atRadioChange = (e) => {
    setGender(e.target.value);
  }
  return (
    <section>
      <h4>FormRadio</h4>
      <p>{gender}</p>
      <label>
        <input
          name="gender"
          checked={gender === '1'}
          type="radio"
          value="1"
          onChange={atRadioChange} />男</label>
      <label>
        <input
          name="gender"
          checked={gender === '0'}
          type="radio"
          value="0"
          onChange={atRadioChange} />女</label>
    </section>
  );
  // */
}
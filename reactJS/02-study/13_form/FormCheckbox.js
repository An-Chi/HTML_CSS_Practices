const initialState = [
  { label: '學會React' , checked: true },
  { label: '學會Webpack' , checked: false },
  { label: '年薪百萬' , checked: false }
];

function FormCheckbox(){
  /* // TODO
  const [checkbox, setCheckbox] = React.useState(initialState);
  const atInputChange = (e) => {
    const idx = e.target.dataset.index / 1;
    const newCheckboxArr = checkbox.concat();
    newCheckboxArr[idx].checked = !newCheckboxArr[idx].checked;
    setCheckbox(newCheckboxArr);
  }

  const onlyCheckListLabel = checkbox
      .filter( item => item.checked )
      .map( item => item.label );

  return (
    <section>
      <h4>FormCheckbox</h4>
      <p>{onlyCheckListLabel.toString()}</p>
      {
        checkbox.map(({label,checked},index) => {
          return (
            <label key={label}>
              <input
                data-index={index}
                type="checkbox"
                value={label}
                checked={checked}
                onChange={atInputChange}
              />{label}</label>
          )
        })
      }
    </section>
  );
  // */
}

// import './comboBox.scss'


const ComboBox = ({
  onChange, 
  name, 
  value, 
  id,
  options,
  placeholder
}) => {
  return (
    <>
      <select
        className="select-name"
        onChange={onChange}
        name={name}
        value={value}
        id={id}
      >
        {/* {console.log('options',options)} */}
        {
          [{id: 0, description: placeholder}, ...options].map((item, i) => 
          <>
            <option 
              key={i}
              className="options" 
              value={item?.id}
              hidden={ i === 0 } 
            >
              {item?.description}
            </option>
          </>
          )
        }
      </select>
    </>
  )
}

export default ComboBox

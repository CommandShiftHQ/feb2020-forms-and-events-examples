import React, {useState} from "react";

const FunctionalForm = () => {
  const options = ["one", "two", "thee"];
  const [fields, setFields] = useState({})

  const renderOption = (options) => {
    return options.map((option, index) => {
      return (
        <option key={index + option} value={option}>
          {option}
        </option>
      );
    });
  };

  const handleChange = (event) => {
      setFields({
          ...fields,
          [event.target.name]: event.target.value
      })
      console.log(fields)
  }

  const handleCheckboxChange = (event) => {
    setFields({
        ...fields,
        [event.target.name]: event.target.checked
    })
    console.log(fields)
}
  return (
    <div>
      <input
        type="text"
        name="username"
        value={fields.username}
        onChange={(event) => handleChange(event)}
      />
      <input
        type="text"
        name="password"
        value={fields.password}
        onChange={(event) => handleChange(event)}
      />
      <select name="number" value={fields.number} onChange={(event) => handleChange(event)}>
        {renderOption(options)}
      </select>
      <input
        type="checkbox"
        name="agree"
        value={fields.agree}
        onChange={(event) => handleCheckboxChange(event)}
      />
    </div>
  );
};

// class Form extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             fields: {
//                 number: 'one',
//             },
//         }
//     }

//     handleChange = (event) => {
//         this.setState({
//             fields: {
//                 [event.target.name]: event.target.value
//             }
//         })
//     }

//     handleCheckboxChange = (event) => {
//         this.setState({
//             fields: {
//                 [event.target.name]: event.target.checked
//             }
//         })
//     }

//     handleSubmit() {
//         const formDate = new FormData();
//         FormData.append(this.state.fields.username)
//     }

//     render() {
//         console.log(this.state.fields)
//         return (

//         )
//     }
// }

export default FunctionalForm;

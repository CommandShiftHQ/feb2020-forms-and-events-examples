import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {
                number: 'one',
            },
        }
    }

    handleChange = (event) => {
        this.setState({
            fields: {
                [event.target.name]: event.target.value
            }
        })
    }

    handleCheckboxChange = (event) => {
        this.setState({
            fields: {
                ...this.state.fields,
                [event.target.name]: event.target.checked
            }
        })
    }

    renderOption(options) {
        return (
            options.map((option, index) => {
            return (<option key={index + option} value={option}>{option}</option>)
            })
        )
    }

    handleSubmit() {
        const formDate = new FormData();
        FormData.append(this.state.fields.username)
    }
    

    render() {
        console.log(this.state.fields)
        const options = ['one', 'two', 'thee']
        return (
            <div>
                <input
                    type='text'
                    name='username'
                    value={this.state.fields.username}
                    onChange={(event) => this.handleChange(event)}
                />
                                <input
                    type='text'
                    name='password'
                    value={this.state.fields.password}
                    onChange={(event) => this.handleChange(event)}
                />
                <select
                    name='number'
                    value={this.state.fields.number}
                    onChange={(event) => this.handleChange(event)}
                >
                    {this.renderOption(options)}
                </select>
                <input
                    type='checkbox'
                    name='agree'
                    onChange={(event) => this.handleCheckboxChange(event)}
                />
            </div>
        )
    }
}

export default Form

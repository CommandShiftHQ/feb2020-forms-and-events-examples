import React from 'react';
import Box from './box'
import FunctionalForm from './functional-form'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: []
    }
  }

  componentDidMount() {
    this.getRandomColour()
  }

  getRandomColour = async () => {
    const colorsResponse = await fetch('https://api.noopschallenge.com/hexbot?count=1000')
    const {colors} = await colorsResponse.json()
    this.setState({colors})    
  }

  handleBoxClick = (color) => {
    this.getRandomColour()
  }

  render = () => (
    <div style={{
      display:'flex',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'center'
      }}>
      {/* {this.state.colors && this.state.colors.map(color => <Box key={color.value} color={color.value} />)} */}
      <FunctionalForm />
    </div>
  )
}

export default App;

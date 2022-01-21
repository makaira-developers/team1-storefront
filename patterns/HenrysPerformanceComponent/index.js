import { Component } from 'react'
import { Button, Heading } from '..'

class HenrysPerformanceComponent extends Component {
  state = { counter: 0 }

  async componentDidMount() {
    console.log(
      'did mount - The React Component is finished inital loading (only runs once)'
    )
    // Use Case:
    //  1. Fetch Data
    const response = await fetch('weather/magdeburg')

    this.setState({ weather: response.json })

    //  2. Register global event handler
    window.addEventListener('overlay:show', this.handleWindowsEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('overlay:show', this.handleWindowEvent)
  }

  handleWindowEvent = () => {
    console.log('showing overlay')
  }

  handleClick = () => {
    console.log(this)

    this.setState({ counter: 1 })
  }

  render() {
    console.log('This is the render cycle')

    return (
      <section className="henrys-component">
        <Heading>Henrys Performance Component</Heading>

        <Button
          type="button"
          // onClick={function () {
          //   console.log('click')
          // }}
          // onClick={() => {
          //   console.log('click')
          // }}

          // onClickCapture={() => console.log('click')}

          onClick={this.handleClick}
          // onClick={this.handleClick()} ← DO NOT DO IT LIKE THIS!
        >
          Click Me
        </Button>
      </section>
    )
  }
}

// Diese Standard Function haben wir ausgetauscht durch eine Class (ist einfacher für Beginner)
// function HenrysPerformanceComponent() {
//   return (
//     <section className="henrys-performance-component">HenrysPerformanceComponent</section>
//   )
// }

export default HenrysPerformanceComponent
export { default as henrysPerformanceComponentVariants } from './variants.js'

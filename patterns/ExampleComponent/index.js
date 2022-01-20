import { Component } from 'react'
import { Button, Heading } from '..'

class ExampleComponent extends Component {
  state = { counter: 0 }

  // handleClick() {
  // console.log(this)

  // this.setState({ counter: 1 })
  // }

  async componentDidMount() {
    console.log('did mount')

    // 1. Use Case: Fetch data
    const response = await fetch('/weather/magdeburg')

    this.setState({ weather: response.json })

    // 2. Register global event handler
    window.addEventListener('overlay:show', this.handleWindowEvent)
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
    console.log('render cycle')

    return (
      <section className="example-component">
        <Heading>ExampleComponent: {this.state.counter}</Heading>

        <Button
          type="button"
          variant="primary"
          // onClick={function () {
          // console.log('click')
          // }}

          // onClick={() => {
          // console.log('click')
          // }}

          // onClick={() => console.log('click')}

          onClick={this.handleClick}
          // onClick={this.handleClick()} DO NOT DO IT LIKE THIS
        >
          Click me
        </Button>
      </section>
    )
  }
}

// function ExampleComponent() {
// return <section className="example-component">ExampleComponent</section>
// }

export default ExampleComponent
export { default as exampleComponentVariants } from './variants.js'

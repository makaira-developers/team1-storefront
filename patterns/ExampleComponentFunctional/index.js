import { useState, useEffect } from 'react'
import { Button, Heading } from '..'

function ExampleComponentFunctional() {
  let [counter, setCounter] = useState(0)
  let [secondaryCounter, setSecondaryCounter] = useState(0)

  // on every render
  useEffect(function () {
    console.log('render')
  })

  // componentDidMount
  useEffect(function () {
    console.log('componentDidMount')

    window.addEventListener('overlay:show', handleWindowEvent)
  }, [])

  // dependency to a variable
  useEffect(
    function () {
      console.log('counter changed')
    },
    [counter]
  )

  // Same function, different syntax
  // useEffect(() => {
  // console.log('effect')
  // })

  function handleClick() {
    setCounter(counter + 1)
  }

  function handleClickSecondary() {
    setSecondaryCounter(secondaryCounter + 1)
  }

  function handleWindowEvent() {
    console.log('showing overlay')
  }

  return (
    <section className="example-component">
      <Heading>ExampleComponent: {counter}</Heading>
      <Heading>Secondary: {secondaryCounter}</Heading>

      <Button type="button" variant="primary" onClick={handleClick}>
        Click me
      </Button>

      <Button type="button" variant="primary" onClick={handleClickSecondary}>
        Click me (Secondary)
      </Button>
    </section>
  )
}

export default ExampleComponentFunctional
export { default as exampleComponentFunctionalVariants } from './variants.js'

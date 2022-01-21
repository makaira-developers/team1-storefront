import { Component } from 'react'
import { Heading } from '..'
import Image from './Image'

class HenrysUndRonsSEOTeaserGridModul extends Component {
  render() {
    const { image = {}, isLazyLoad = true } = this.props

    return (
      <section className="henrys-seoteaser-grid-modul">
        {' '}
        <Heading element="H2">HenrysUndRonsSEOTeaserGridModul</Heading>
        <Image {...image} isLazyLoad={isLazyLoad} />
        <img src="https://picsum.photos/seed/picsum/600/400"></img>
      </section>
    )
  }
}

export default HenrysUndRonsSEOTeaserGridModul
export { default as henrysUndRonsSEOTeaserGridModulVariants } from './variants.js'

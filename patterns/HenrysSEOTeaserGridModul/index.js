import { Component } from 'react'
import { Heading } from '..'
import Image from '../core/TeaserHero/Image'

class HenrysSEOTeaserGridModul extends Component {
  render() {
    const { image = {}, isLazyLoad = true } = this.props

    return (
      <section className="henrys-seoteaser-grid-modul">
        {' '}
        <Heading element="H2">HenrysSEOTeaserGridModul</Heading>
        {/* Warum ... an dieser Stelle, was macht das? */}
        <Image {...image} isLazyLoad={isLazyLoad} />
        <img src="https://picsum.photos/seed/picsum/600/400"></img>
      </section>
    )
  }
}

export default HenrysSEOTeaserGridModul
export { default as henrysSEOTeaserGridModulVariants } from './variants.js'

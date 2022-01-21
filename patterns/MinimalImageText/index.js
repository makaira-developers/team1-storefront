import { Component } from 'react';
import { Link, Heading } from '..';
import Image from './Image';

class MinimalImageText extends Component {
  render() {
    const { title = "", description = "", newTab = false, button = null, image = {}, isLazyLoad = true } = this.props

    return (
      <section className="minimal-image-text">
        <div className="row">
          <div className='col-md-6 mb-3'>
            <Image {...image} isLazyLoad={isLazyLoad} />
          </div>

          <div className='col-md-6'>
            <div className='minimal-image-text-content-container'>
              {title && <Heading element="H2">{title}</Heading>}

              {description && <p>{description}</p>}

              <div className='minimal-image-text-content-button-container'>
                {button ? <Link className="btn-pretty" href={ button.link }>{button.text}</Link> : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default MinimalImageText
export { default as minimalImageTextVariants } from './variants.js'
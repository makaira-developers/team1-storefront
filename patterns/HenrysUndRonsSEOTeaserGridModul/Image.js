import { useRef } from 'react'
import { useConfiguration, useLazyLoading } from '../../utils'

export default function Image(props) {
  const { getImageLink } = useConfiguration()
  const pictureRef = useRef(null)
  const { src = '', alt = '', isLazyLoad = true } = props

  const imageLink = getImageLink({
    source: src,
    width: 1360,
    quality: 90,
    alt: alt,
    isLazyLoad: isLazyLoad,
    // transformationString: 'w_1360,face_pixelated,h_1360,q=85',
  })

  const imageLinkRetina = getImageLink({
    source: src,
    width: 1360,
    quality: 90,
    pixelRatio: 2,
    alt: alt,
    isLazyLoad: isLazyLoad,
  })

  const imageLinkMobile = getImageLink({
    source: src,
    quality: 90,
    width: 600,
    alt: alt,
    isLazyLoad: isLazyLoad,
  })

  const imageLinkMobileRetina = getImageLink({
    source: src,
    width: 600,
    quality: 90,
    pixelRatio: 2,
    alt: alt,
    isLazyLoad: isLazyLoad,
  })

  useLazyLoading({ ref: pictureRef, dependency: src })

  return (
    <picture ref={pictureRef} className="hero-teaser__image">
      <source
        media="(min-width: 768px)"
        srcSet={`${imageLink} 1x, ${imageLinkRetina} 2x`}
      />

      <source srcSet={`${imageLinkMobile} 1x, ${imageLinkMobileRetina} 2x`} />

      <img src={imageLink} alt={alt} />
    </picture>
  )
}

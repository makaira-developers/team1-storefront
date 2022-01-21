import { useRef } from 'react'
import { useConfiguration, useLazyLoading } from '../../utils'

export default function Image(props) {
  const { getImageLink } = useConfiguration()
  const pictureRef = useRef(null)
  const {
    image = '',
    title = '',
    isLazyLoad = true,
    imageOptimized = false,
  } = props
  let imageLink = getImageLink({ source: image })
  if (imageOptimized) {
    imageLink = getImageLink({
      source: image,
      width: 1400,
      height: 800,
      crop: 'fill',
      quality: 70,
    })
  }

  useLazyLoading({ ref: pictureRef, dependency: image })

  return (
    <picture ref={pictureRef} className="brand-carousel__image">
      {isLazyLoad ? (
        <img data-src={imageLink} alt={title} width="100%" height="auto" />
      ) : (
        <img src={imageLink} alt={title} />
      )}
    </picture>
  )
}

import { useConfiguration } from '../../utils'
import { useEffect, useState } from 'react'
import Heading from '../core/Heading'

function NewsGridDynamic(props) {
  let [windowWith, setWindowWith] = useState(0)
  const { news = [], title } = props

  useEffect(function () {
    console.log('setting width')
    setWindowWith(window.innerWidth)
  }, [])

  return (
    <section className="news-grid">
      {title && <Heading className="mb-1">{title}</Heading>}
      <div className="news-grid-container">
        {news.map((item) => (
          <News key={item.title} {...item} width={windowWith}></News>
        ))}
      </div>
    </section>
  )
}

function News(props) {
  const { featuredImage, excerpt, link, title, width } = props
  const { getImageLink } = useConfiguration()

  const breakpointMedium = '850px' // breakpoint-medium
  const breakpointLarge = '1440px' // breakpoint-medium
  function roundUpToSize(fraction) {
    return Math.ceil(width / fraction / 100) * 100
  }

  const imgPropsLarge = {
    source: featuredImage,
    width: roundUpToSize(4),
    height: roundUpToSize(4) / 2,
    crop: 'fill',
    quality: 90,
  }
  const imgLinkLarge = getImageLink(imgPropsLarge)
  const imgPropsLargeRetina = getImageLink({ dpr: 2, ...imgPropsLarge })

  const imgPropsMedium = {
    source: featuredImage,
    width: roundUpToSize(2),
    height: roundUpToSize(2) / 2,
    crop: 'fill',
    quality: 90,
  }
  const imgLinkMedium = getImageLink(imgPropsMedium)
  const imgLinkMediumRetina = getImageLink({ dpr: 2, ...imgPropsMedium })

  const imgPropsSmall = {
    source: featuredImage,
    width: roundUpToSize(1),
    height: roundUpToSize(1) / 2,
    crop: 'fill',
    quality: 90,
  }

  const imgLinkSmall = getImageLink(imgPropsSmall)
  const imgLinkSmallRetina = getImageLink({ dpr: 2, ...imgPropsSmall })

  return (
    <section className="news-item-container">
      <div className="news-item">
        <picture>
          <source
            media={`(min-width: ${breakpointLarge})`}
            srcSet={`${imgLinkLarge} 1x, ${imgPropsLargeRetina} 2x`}
          />
          <source
            media={`(min-width: ${breakpointMedium})`}
            srcSet={`${imgLinkMedium} 1x, ${imgLinkMediumRetina} 2x`}
          />
          <source srcSet={`${imgLinkSmall} 1x, ${imgLinkSmallRetina} 2x`} />
          <img src={imgLinkSmall} alt={title} />
        </picture>
        <div className="news-text">
          <h1>{title}</h1>
          <p>{excerpt}</p>
          <a href={link}>Read more...</a>
        </div>
      </div>
    </section>
  )
}

export default NewsGridDynamic
export { default as newsGridDynamicVariants } from './variants.js'

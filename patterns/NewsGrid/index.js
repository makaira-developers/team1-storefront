import { useConfiguration } from '../../utils'
import Heading from '../core/Heading'

function NewsGrid(props) {
  const { news = [], title } = props
  return (
    <section className="news-grid">
      {title && <Heading className="mb-1">{title}</Heading>}
      <div className="news-grid-container">
        {news.map((item) => (
          <News key={item.title} {...item}></News>
        ))}
      </div>
    </section>
  )
}

function News(props) {
  const { featuredImage, excerpt, link, title } = props
  const { getImageLink } = useConfiguration()

  const breakpointSmall = '550px' // breakpoint-small
  const breakpointMedium = '850px' // breakpoint-medium

  const imgPropsLarge = {
    source: featuredImage,
    width: 800,
    quality: 90,
  }
  const imgLinkLarge = getImageLink(imgPropsLarge)
  const imgPropsLargeRetina = getImageLink({ dpr: 2, ...imgPropsLarge })

  const imgPropsMedium = {
    source: featuredImage,
    width: 600,
    quality: 90,
  }
  const imgLinkMedium = getImageLink(imgPropsMedium)
  const imgLinkMediumRetina = getImageLink({ dpr: 2, ...imgPropsMedium })

  const imgPropsSmall = {
    source: featuredImage,
    width: 400,
    quality: 90,
  }

  const imgLinkSmall = getImageLink(imgPropsSmall)
  const imgLinkSmallRetina = getImageLink({ dpr: 2, ...imgPropsSmall })

  return (
    <section className="news-item-container">
      <div className="news-item">
        <picture>
          <source
            media={`(min-width: ${breakpointMedium})`}
            srcSet={`${imgLinkLarge} 1x, ${imgPropsLargeRetina} 2x`}
          />
          <source
            media={`(min-width: ${breakpointSmall})`}
            srcSet={`${imgLinkMedium} 1x, ${imgLinkMediumRetina} 2x`}
          />
          <source srcSet={`${imgLinkSmall} 1x, ${imgLinkSmallRetina} 2x`} />
          <img src={imgLinkLarge} alt={title} />
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

export default NewsGrid
export { default as newsGridVariants } from './variants.js'

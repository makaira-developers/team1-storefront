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

  return (
    <section className="news-item-container">
      <div className="news-item">
        <img src={getImageLink({ source: featuredImage })} alt={title} />
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

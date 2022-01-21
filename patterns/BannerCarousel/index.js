import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image from './Image'

export default function BannerCarousel(props) {
  const { banners = [] } = props

  return (
    <Carousel arrows={false} className="brand-carousel">
      {banners?.map((item, index) => {
        return (
          <div key={index}>
            <Image key={item.title} {...item} />
          </div>
        )
      })}
    </Carousel>
  )
}

import React from 'react'
import { FullScreen } from '../layouts'
import { Heading, Review } from '../ui'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useMainContext } from '../../hooks'
import { reviewsData } from '../../data/reviews'
import s from '../../styles/components/Reviews.module.css'

export const Reviews = () => {
  const { lang } = useMainContext()

  const { heading, responsive, reviews } = reviewsData

  return (
    <>
      <span id='reviews'></span>
      <FullScreen>
        <Heading class$='heading--long content'>
          {heading[lang]}
        </Heading>
        <div className={`${s.Bg} Reviews-Bg`}>
          <div className='content'>
            <Carousel responsive={responsive}>
              {reviews.map((review, i) => (
                <Review key={i} {...review} />
              ))}
            </Carousel>
          </div>
        </div>
      </FullScreen>
    </>
  )
}

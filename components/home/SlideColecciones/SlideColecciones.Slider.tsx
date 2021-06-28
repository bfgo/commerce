import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import {
  Card,
  CollectionName,
  ImageContainer,
  ArrowNext,
  ArrowPrev,
} from './SlideColecciones.styles'
import Slider from 'react-slick'

function NextArrow(props: any) {
  const { onClick } = props
  return (
    <ArrowNext onClick={onClick}>
      <Image
        src="/assets/home/eligelo/nextarrow.png"
        width={40}
        height={40}
      ></Image>
    </ArrowNext>
  )
}

function PrevArrow(props: any) {
  const { onClick } = props
  return (
    <ArrowPrev onClick={onClick}>
      <Image
        src="/assets/home/eligelo/prevarrow.png"
        width={40}
        height={40}
      ></Image>
    </ArrowPrev>
  )
}

const CollectionSlider: FC = () => {
  const colections = [
    {
      name: 'Tazas',
      img: '/assets/home/collections/taza.png',
      slug: 'all',
    },
    {
      name: 'Playeras',
      img: '/assets/home/collections/playera.png',
      slug: '',
    },
    {
      name: 'Accesorios',
      img: '/assets/home/collections/Pelotadeplaya.png',
      slug: '',
    },
    {
      name: 'Sujetador Pop',
      img: '/assets/home/collections/Bocina.png',
      slug: '',
    },
    {
      name: 'Sujetador Pop',
      img: '/assets/home/collections/Bocina.png',
      slug: '',
    },
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <Slider {...settings}>
      {colections &&
        colections.map &&
        colections.map((colection, i) => {
          return (
            <Card key={i}>
              <Link href={`/search/${colection['slug']}`}>
                <a>
                  <ImageContainer>
                    <Image
                      src={colection['img']}
                      height={206}
                      width={206}
                    ></Image>
                  </ImageContainer>
                  <CollectionName>{colection['name']}</CollectionName>
                </a>
              </Link>
            </Card>
          )
        })}
    </Slider>
  )
}

export default CollectionSlider

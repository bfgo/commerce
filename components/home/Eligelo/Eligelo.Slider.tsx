import { FC } from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import { Card, CardTitle, CardText } from './Eligelo.styles'

const EligeloSlider: FC = () => {
  return (
    <Carousel
      fade={true}
      nextIcon={
        <Image
          src="/assets/home/eligelo/nextarrow.png"
          width={40}
          height={40}
        ></Image>
      }
      prevIcon={
        <Image
          src="/assets/home/eligelo/prevarrow.png"
          width={40}
          height={40}
        ></Image>
      }
    >
      <Carousel.Item interval={1000}>
        <Card>
          <Image
            src="/assets/home/eligelo/elige.png"
            height={258}
            width={328}
          ></Image>
          <CardTitle>Elige un producto</CardTitle>
          <CardText>Encuentra el producto ideal en nuestro catálogo</CardText>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Image
            src="/assets/home/eligelo/personaliza.png"
            height={258}
            width={328}
          ></Image>
          <CardTitle>Personaliza</CardTitle>
          <CardText>
            ¡Entra a nuestro laboratorio, crea y guarda tu proyecto!
          </CardText>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Image
            src="/assets/home/eligelo/ordena.png"
            height={258}
            width={328}
          ></Image>
          <CardTitle>Ordena</CardTitle>
          <CardText>Encuentra el producto ideal en nuestro catálogo</CardText>
        </Card>
      </Carousel.Item>
    </Carousel>
  )
}

export default EligeloSlider

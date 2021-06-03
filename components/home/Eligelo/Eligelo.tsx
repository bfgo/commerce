import React, { FC } from 'react'
import Image from 'next/image'
import EligeloSlider from './Eligelo.Slider'
import {
  SectionCont,
  HeadTitle,
  HeadSubtitle,
  ContainerImg,
  Card,
  CardTitle,
  CardText,
  SlideContainer,
} from './Eligelo.styles'

const Eligelo: FC = () => {
  const settings = {}
  return (
    <SectionCont>
      <HeadTitle>
        ¡Diseñar y pedir tus productos es muy sencillo con Desink!
      </HeadTitle>
      <HeadSubtitle>Consíguelo en solo 3 pasos</HeadSubtitle>

      <ContainerImg>
        <Card>
          <Image
            src="/assets/home/eligelo/elige.png"
            height={258}
            width={328}
          ></Image>
          <CardTitle>Elige un producto</CardTitle>
          <CardText>Encuentra el producto ideal en nuestro catálogo </CardText>
        </Card>
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
        <Card>
          <Image
            src="/assets/home/eligelo/ordena.png"
            height={258}
            width={328}
          ></Image>
          <CardTitle>Ordena</CardTitle>
          <CardText>Encuentra el producto ideal en nuestro catálogo</CardText>
        </Card>
      </ContainerImg>
      <SlideContainer>
        <EligeloSlider></EligeloSlider>
      </SlideContainer>
    </SectionCont>
  )
}

export default Eligelo

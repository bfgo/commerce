import React from 'react'
import {
  Container,
  TextContainer,
  TextTitle,
  TextSubtitle,
  CTAContainer,
  CTAButton,
  TextSubtitleResponsive,
  TextTitleResponsive,
  CTAButtonResponsive,
} from './Hero.styles'

export default function HeroHome() {
  return (
    <Container>
      <TextContainer>
        <TextTitle>
          Personaliza playeras, sudaderas y más productos con la más alta
          calidad!
        </TextTitle>
        <TextTitleResponsive>
          Personalizar tus regalos con tu logo es muy fácil en nuestro
          laboratorio.
        </TextTitleResponsive>
        <TextSubtitle>
          Personalizar tus regalos con tu logo es muy fácil en nuestro
          laboratorio.{' '}
        </TextSubtitle>
        <TextSubtitleResponsive></TextSubtitleResponsive>
      </TextContainer>
      <CTAContainer>
        <CTAButton>¡Haz la prueba!</CTAButton>
        <CTAButtonResponsive>¡Haz la prueba!</CTAButtonResponsive>
      </CTAContainer>
    </Container>
  )
}

import React from 'react'
import {
  Announcement,
  AnnouncementCenter,
  AnnouncementImage,
  AnnouncementMainText,
  AnnouncementsContainer,
  AnnouncementSecondaryText,
  AnnouncementTextContainer,
  Container,
  ResponsiveLine,
} from './Announcements.styles'

export default function Announcements() {
  return (
    <Container>
      <AnnouncementsContainer>
        <Announcement>
          <AnnouncementImage
            src="/assets/home/hero-money-logo.png"
            width={54}
            height={54}
            quality={100}
          ></AnnouncementImage>
          <AnnouncementTextContainer>
            <AnnouncementMainText>
              Descuentos del 10 al 95%
            </AnnouncementMainText>
            <AnnouncementSecondaryText>
              Precios más bajos por volumen
            </AnnouncementSecondaryText>
          </AnnouncementTextContainer>
        </Announcement>
        <ResponsiveLine />
        <AnnouncementCenter>
          <AnnouncementImage
            src="/assets/home/hero-truck-logo.png"
            width={54}
            height={54}
            quality={100}
          ></AnnouncementImage>
          <AnnouncementTextContainer>
            <AnnouncementMainText>Envíos gratis</AnnouncementMainText>
            <AnnouncementSecondaryText>
              ¡Llegamos entre 3 y 5 días!
            </AnnouncementSecondaryText>
          </AnnouncementTextContainer>
        </AnnouncementCenter>
        <ResponsiveLine />
        <Announcement>
          <AnnouncementImage
            src="/assets/home/hero-shopping-bag-logo.png"
            width={54}
            height={54}
            quality={100}
          ></AnnouncementImage>
          <AnnouncementTextContainer>
            <AnnouncementMainText>La mejor calidad</AnnouncementMainText>
            <AnnouncementSecondaryText>
              Y un amplio catálogo de productos.
            </AnnouncementSecondaryText>
          </AnnouncementTextContainer>
        </Announcement>
        <ResponsiveLine />
      </AnnouncementsContainer>
    </Container>
  )
}

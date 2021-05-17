import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  margin: auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
`

export const AnnouncementsContainer = styled.div`
  width: 100%;
  margin-top: 4%;
  padding-bottom: 1.5%;
  border-color: #e2e1e1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    border-bottom: none;
    flex-direction: column;
  }
`

export const Announcement = styled.div`
  width: 33%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 3%;
    justify-content: center;
  }
`

export const AnnouncementCenter = styled.div`
  width: 33%;
  display: flex;
  justify-content: space-around;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: #e2e1e1;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 3%;
    justify-content: center;
  }
`

export const AnnouncementImage = styled(Image)``

export const AnnouncementTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 65%;
    margin-left: 5%;
  }
`

export const AnnouncementMainText = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #282828;
`

export const AnnouncementSecondaryText = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: #282828;
`
export const HorizontalLine = styled.span`
  width: 90%;
  height: 0;
  border-top: 1px solid #e2e1e1;
  margin: auto;
  margin-bottom: 2%;

  @media (max-width: 800px) {
    display: none;
  }
`
export const ResponsiveLine = styled(HorizontalLine)`
  display: none;

  @media (max-width: 800px) {
    display: block;
    width: 85%;
    margin-bottom: 3%;
  }
`

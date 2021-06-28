import styled from 'styled-components'

export const CollectionSection = styled.section`
  max-width: 1440px;
  margin: auto;
  align-items: center;
  background: #f5f5f4;
  padding: 5vh 10vw;
`
export const TitleSection = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  color: #000000;
`
export const SubtitleSection = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #65636a;
  text-align: center;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
  margin: auto;
`
export const CollectionName = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #282828;
  text-align: center;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 3px solid #ffffff;
  box-sizing: border-box;
  justify-content: center;
  margin: 2vw;
  padding: 2.5vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ArrowNext = styled.div`
  position: absolute;
  top: 40%;
  right: -3%;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const ArrowPrev = styled.div`
  position: absolute;
  top: 40%;
  left: -3%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

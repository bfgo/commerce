import styled from 'styled-components'

export const SectionCont = styled.section`
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const HeadTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  color: #000000;
  margin: 12px 0;

  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 22px;
    padding: 0 15%;
  }
`

export const HeadSubtitle = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #65636a;

  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 16px;
  }
`
export const SlideContainer = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;

  @media (max-width: 800px) {
    display: none;
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
  max-width: 25%;
  margin: auto;

  @media (max-width: 800px) {
    max-width: 80%;
  }
`
export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ff6c0e;
  margin-top: 40px;
`
export const CardText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  margin-top: 10px;
`

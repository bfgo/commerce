import styled from 'styled-components'

export const ProductSection = styled.section`
  max-width: 1440px;
  margin: auto auto 5vh;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 4rem auto;

  @media (max-width: 800px) {
    margin: 1.5rem auto;
  }
`
export const GridContainer = styled.div`
  padding: 0 10%;
`

export const ProductsTitle = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  color: #000000;
  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 20px;
  }
`

export const ProductsSubtitle = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #65636a;
  max-width: 60%;
  margin-top: 1rem;

  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 18px;
    max-width: 90%;
  }
`

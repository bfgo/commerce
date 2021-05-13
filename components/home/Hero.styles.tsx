import styled from 'styled-components'

export const Container = styled.div`
  align-items: flex-start;
  margin: auto;
  max-width: 1440px;
  min-height: 580px;
  display: flex;
  background-image: url('/assets/home/hero-background-desktop.png');
  background-repeat: no-repeat;
  flex-direction: column;
  background-size: contain;

  @media (max-width: 800px) {
    width: 100%;
    min-height: 460px;
    background-image: url('/assets/home/hero-background-responsive.png');
    background-size: cover;
  }
`

export const TextContainer = styled.div`
  width: 46%;
  margin-top: 5%;
  margin-left: 10%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 90%;
    margin-left: 5%;
    margin-bottom: 5%;
  }
`

export const TextTitle = styled.h1`
  font-weight: 600;
  font-size: 41px;
  color: #050505;
  margin-top: 39px;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`

export const TextTitleResponsive = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    font-size: 20px;
    margin-top: 24px;
    font-weight: 400;
    color: #000000;
    margin-bottom: 20px;
  }
`

export const TextSubtitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`

export const TextSubtitleResponsive = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
  }
`

export const CTAContainer = styled.button`
  width: 20%;
  margin-left: 10%;
  border: none;

  @media (max-width: 800px) {
    width: 30%;
    margin-left: 5%;
  }
`

export const CTAButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #ff6c0e;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 800px) {
    display: none;
  }
`

export const CTAButtonResponsive = styled.button`
  display: none;

  @media (max-width: 800px) {
    display: block;
    width: 100%;
    height: 30px;
    background-color: #ff6c0e;
    border: none;
    color: white;
    font-size: 12px;
    font-weight: 400;
  }
`

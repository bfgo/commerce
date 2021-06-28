import styled from 'styled-components'
import Image from 'next/image'

export const ProductCardCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  padding: 15% 8%;
  background: #f5f5f4;
  min-height: 100%;
`
export const ImageProduct = styled(Image)`
  width: -webkit-fill-available;
`
export const ProductInfoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 100%;
`
export const CollectionTitle = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #282828;
  text-transform: uppercase;
  margin: 12px 0 6px 0;
`

export const CollectionLine = styled.span`
  width: 100%;
  height: 0;
  border-top: 1px solid #e2e1e1;
`
export const Info = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`
export const ProductDetail = styled.div`
  width: 75%;
`

export const ProductIcon = styled.div`
  width: 25%;
`
export const ProducTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #282828;
  overflow: hidden;
  max-width: 40ch;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 15px 0 5px 0;
`
export const Price = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: #282828;
`

export const ProductCartIcon = styled.div`
  width: 80%;
`

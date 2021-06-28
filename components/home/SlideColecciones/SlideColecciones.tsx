import { FC } from 'react'
import {
  CollectionSection,
  TitleSection,
  SubtitleSection,
} from './SlideColecciones.styles'
import CollectionSlider from './SlideColecciones.Slider'

const SlideColecciones: FC = () => {
  return (
    <CollectionSection>
      <TitleSection>¡Tenemos los productos que necesitas!</TitleSection>
      <SubtitleSection>Conoce el catálogo</SubtitleSection>
      <CollectionSlider></CollectionSlider>
    </CollectionSection>
  )
}

export default SlideColecciones

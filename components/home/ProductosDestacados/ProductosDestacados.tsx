import { ProductCard } from '@components/product'
import { Grid } from '@components/ui'
import {
  ProductSection,
  ProductsTitle,
  GridContainer,
  TextContainer,
  ProductsSubtitle,
} from './ProductosDestacados.style'

export default function ProductosDestacados(props: {
  products: Array<object>
}) {
  const { products } = props
  console.log(products)
  return (
    <ProductSection>
      <TextContainer>
        <ProductsTitle>
          ¡Si lo imaginas, lo puedes personalizar en nuestro laboratorio!
        </ProductsTitle>
        <ProductsSubtitle>
          Las ideas para tu negocio, eventos o regalos son fantásticas, hazlas
          realidad personalizando lo que quieras con nuestro laboratorio de
          última generación.
        </ProductsSubtitle>
      </TextContainer>
      <GridContainer>
        <Grid>
          {props.products.slice(0, 6).map((product: any, i: number) => (
            <ProductCard
              key={product.id}
              product={product}
              imgProps={{
                width: i === 0 ? 1080 : 540,
                height: i === 0 ? 1080 : 540,
              }}
            />
          ))}
        </Grid>
      </GridContainer>
    </ProductSection>
  )
}

import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import HeroHome from '@components/home/HeroHome'
import Announcements from '@components/home/Announcements'
import Eligelo from '@components/home/Eligelo/Eligelo'
import Clientes from '@components/home/Clientes/Clientes'
import ProductosDestacados from '@components/home/ProductosDestacados/ProductosDestacados'
import SlideColecciones from '@components/home/SlideColecciones/SlideColecciones'
export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const { products } = await commerce.getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })
  const { categories, brands } = await commerce.getSiteInfo({ config, preview })
  const { pages } = await commerce.getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 14400,
  }
}

export default function Home({
  products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeroHome />
      <Announcements />
      <Clientes />
      <ProductosDestacados products={products} />
      <SlideColecciones />
      <Eligelo />
    </>
  )
}

Home.Layout = Layout

export const productConnection = `
pageInfo {
  hasNextPage
  hasPreviousPage
}
edges {
  node {
    id
    title
    vendor
    handle
    collections(first: 10){
      pageInfo{
        hasNextPage
        hasPreviousPage
      }
      edges{
        node{
          id
          title
        }
      }
    }
    description
    descriptionHtml
    availableForSale
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 5) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          originalSrc
          altText
          width
          height
        }
      }
    }
  }
}`

export const productsFragment = `
products(
  first: $first
  sortKey: $sortKey
  reverse: $reverse
  query: $query
) {
  ${productConnection}
}
`

const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts(
    $first: Int = 500
    $query: String = "available_for_sale:true"
    $sortKey: ProductSortKeys = RELEVANCE
    $reverse: Boolean = false
  ) {
    ${productsFragment}
  }
`
export default getAllProductsQuery

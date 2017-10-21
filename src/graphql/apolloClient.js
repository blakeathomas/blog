import { ApolloClient, createNetworkInterface } from 'react-apollo'

// https://wordpress.org/plugins/wp-jwt-auth/
const networkInterface = createNetworkInterface({
  uri: 'https://blog-blakeathomas.c9users.io/graphql'
})

const client = new ApolloClient({
  networkInterface: networkInterface
})

export default client

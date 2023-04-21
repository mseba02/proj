import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
})

const authLink = setContext((_, { headers }) => {
  const storedData = localStorage.getItem('userData')
  const { token } = storedData ? JSON.parse(storedData) : ''
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const ApolloClientProvider = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

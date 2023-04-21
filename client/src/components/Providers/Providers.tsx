import { ApolloClientProvider } from '../../graphql/generateApolloClient'
import '../../i18n'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/styles'
import theme from '../../styles/theme/theme'

const Provider = ({ children }: any) => {
  return (
    <ApolloProvider client={ApolloClientProvider}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ApolloProvider>
  )
}

export default Provider

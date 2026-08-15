import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "./config/apollo";
import AppRouter from "./routing/AppRouter";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppRouter />
    </ApolloProvider>
  );
}

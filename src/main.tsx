import ReactDOM from "react-dom/client"
import "./index.css"
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import Home from "./pages/Home.tsx"
import UserRepositories from "./pages/UserRepositories.tsx"
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
})

const authLink = setContext((_, { headers }) => {
  const token: string = import.meta.env.VITE_GITHUB_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/:username/repositories" element={<UserRepositories />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
)

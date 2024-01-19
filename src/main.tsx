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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/:user/repositories" element={<UserRepositories />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
)

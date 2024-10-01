import { Footer, Header } from "./components/index.js"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow flex">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App

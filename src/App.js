import React from "react"
import About from "./components/about"
import Footer from "./components/footer"
import Info from "./components/info"
import Interest from "./components/interest"

export default function App() {
    return (
        <div className="container">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

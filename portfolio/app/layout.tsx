import Footer from "./common/footer"
import Header from "./common/header"
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id='header'>
            <Header></Header>
        </div>

        <div id="container" style={{ height: "100%" }}>
          { children }
        </div>

        <div id='footer'>
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}

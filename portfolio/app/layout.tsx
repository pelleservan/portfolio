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

        <div id="container">
          { children }
        </div>

        <div id='footer'>
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}

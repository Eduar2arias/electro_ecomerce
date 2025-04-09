// import localFont from "next/font/local";
import "./index.css";
import "../globals.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-container">
        <Header />
        {/* <header className="header">
          <section className="header-logo">
            <div className="logo">
              <img alt="logo" />
            </div>
            <div className="header-text">
              electron
            </div>
          </section>
          <section className="header-menu">
            <div className="container-sesion">
              <button>Sing in</button>
              <button>registro</button>
            </div>
          </section>
        </header> */}
        <main className="app-content">
          {children}

        </main>
        {/* <footer className="app-footer">
          foot
        </footer> */}
        <Footer/>
      </body>
    </html>
  );
}

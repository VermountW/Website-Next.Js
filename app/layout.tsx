import "./globals.css";
import Header from '../components/Header'
import Footer from '../components/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />  {/* ✅ Header is now global */}
        <main>{children}</main>  {/* All pages will be rendered here */}
        <Footer />
      </body>
    </html>
  );
}
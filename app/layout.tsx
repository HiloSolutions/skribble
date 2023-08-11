import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Skribble',
  description: 'Showcase and discover remarkable algo art projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

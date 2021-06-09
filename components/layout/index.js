import Head from 'next/head'
import Navigation from '../navigation'
import Footer from '../footer'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col max-w-screen-xl m-auto">
            <Head>
                <title>
                    Lean ExO
                </title>
                <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
            </Head>
            <Navigation />
            <main>{children}
            </main>
            <Footer />
        </div>
    )
}
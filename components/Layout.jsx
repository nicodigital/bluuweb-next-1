import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = "Nicolook"

export default function Layout({ children, title, description, home }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="favicon" href="favico.ico" />
                <meta name="description" content={description} />
            </Head>

            <header className={styles.header}>
                { home ? (
                    <>
                        <Image
                            priority
                            src="/img/1.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/img/1.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <nav>
                <Link href="/">
                    <a>Home |</a>
                </Link>
                <Link href="/blog">
                    <a>Blog |</a>
                </Link>
                <Link href="/about">
                    <a>About |</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </nav>
            <main className={styles.container} >
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
            <footer className={styles.container} >Footer</footer>
        </>
    )
}

Layout.defaultProps = {
    title: "Titulo de la pagina",
    description: "Descripcion de la pagina"
}
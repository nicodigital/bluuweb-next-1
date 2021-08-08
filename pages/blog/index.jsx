import Layout from "../../components/Layout"
import Link from 'next/link'

export default function blog({data}) {
    return (
        <Layout
            title="Blog"
            description="Aqui describimos el blog"
        >
            <h1>Blog</h1>
            {
                data.map( ( {id,title,body} ) => (
                    <article key={id} >
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <Link href={`/blog/${id}`} >
                            <a>Leer mas...</a>
                        </Link>
                    </article>
                ))
            }
        </Layout>
    )
}

export async function getStaticProps(){

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        return{
            props: {
                data
            }
        }

    }catch(error){
        console.log(error);
    }

}
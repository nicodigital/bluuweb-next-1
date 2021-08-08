import Layout from "../../components/Layout"

export default function Post( {data})  {
    return (
        <Layout
            title="Post"
            description="Aqui describimos el blog"
        >
           <article key={data.id} >
                <h1>{data.title}</h1>
                <p>{data.body}</p>
            </article>
        </Layout>
    )
}

export async function getStaticPaths(){
    
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        const paths = data.map( ({id}) => ({
            params: {id:`${id}` }
        }))
        return{
            paths,
            fallback: false
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps( {params} ){

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+ params.id );
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
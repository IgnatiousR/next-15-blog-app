import { notFound } from "next/navigation"
import { getPost } from "@/lib/post"


export async function generateMetadata({params}) {

    try{
        const {frontmatter} = await getPost(params.slug)
        return frontmatter
    }catch(e){}
}
const source = 'Some **mdx** text, with a component'

export default async function BlogPage({params}){
    let post

    try{
        post = await getPost(params.slug)
    } catch(e){notFound}

    return (
        <article className="prose dark:prose-invert">
            {/* <MDXRemote source={post}/> */}
            {post.content}
        </article> 
    )
}
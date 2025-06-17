import Card from "@/components/card"
import { Star }  from 'lucide-react'

export default async function ProjectList(){
    const response = await fetch('http://localhost:3001/repos',
        // { cache: 'force-cache' }
        // {cache:'no-store'}
    )
    const repos = await response.json()
    // throw new Error('oops')
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map(repo => (
            <li key={repo.id} className="mb-4">
                <Card className="font-mono h-full">
                    <div className="flex justify-between items-center mb-4">
                        <div className="font-semibold">{repo.title}</div>
                        <div className="flex items-center"><Star size={16}/>{repo.stargazers_count}</div>
                    </div>
                    <div>{repo.description}</div>
                </Card>
            </li>
        ))}
    </ul>
    )
}
import { useSearchParams } from "react-router-dom"

export const Room = () => { 
    const [searchParams, setSearchParams] = useSearchParams()
    const name = searchParams.get('name') || 'No name'
    return (
        <div>
            <h1> welcome {name}</h1>
        </div>
    )
}
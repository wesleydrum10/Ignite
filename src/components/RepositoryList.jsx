import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'; 
import { useEffect, useState } from "react";

const repository = {
    name: "Unform 2",
    description: "Form in React",
    link: "https://github.com/unform/unform"
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([])

    useEffect(()=> {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <section className="repository-list">
            <h1>Lista de repositório</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}
interface RepositoryItemProps { // A convenção determina que se passe o nome do componente + props no final
     repository: {
        name: string,
        description: string,
        html_url: string 
     }
}


export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}> 
                Acessar repositório
            </a>
        </li>
    );
}
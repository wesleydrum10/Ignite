type User = {
    name: string,
    age: number,
    address: {
        city: string,
        state?: string // ? forma de não torna-lá obrigatória
    }
}

function show(user: User) {
    return `Usuário ${user.name}, ${user.age} anos, residente na cidade de ${user.address.city}, estado ${user.address.state}`
}

show({
    name: "Wesley",
    age: 35,
    address: {
        city: "Franca",
        state: "Sp"
    }
})
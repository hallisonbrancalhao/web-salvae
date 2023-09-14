let users = []

export function Cadastro (body) {
    const user = users.find(({email}) => email === body.email)
    if(user) throw new Error('Usuario já cadastrado')

    user.push(body)
    return body
}

export function Login (body) {
    const user = users.find(({email}) => email === body.email)
    if(!user) throw new Error('Usuario não encontrado')
    if(user.password !== body.password) throw new Error('Senha incorreta')

    return user
}


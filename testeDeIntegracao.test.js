// Módulo de autenticação
function autenticar(usuario, senha) {
    if (usuario === "admin" && senha === "123") {
        return { id: 1, nome: "Administrador" };
    }
    return null;
}

// Módulo de dados
function obterPerfil(usuario) {
    if (usuario) {
        return {
            nome: usuario.nome,
            perfil: "Administrador do sistema"
        };
    }
    return null;
}

// Módulo de resposta
function gerarMensagem(perfil) {
    if (perfil) {
        return `Bem-vindo, ${perfil.nome}. Perfil: ${perfil.perfil}`;
    }
    return "Acesso não autorizado";
}

// Integração dos módulos
function sistema(usuario, senha) {
    const user = autenticar(usuario, senha);
    const perfil = obterPerfil(user);
    return gerarMensagem(perfil);
}

// Testes de integração
test("Fluxo completo com sucesso", () => {
    const resultado = sistema("admin", "123");
    expect(resultado).toBe("Bem-vindo, Administrador. Perfil: Administrador do sistema");
});

test("Fluxo completo com falha", () => {
    const resultado = sistema("user", "123");
    expect(resultado).toBe("Acesso não autorizado");
});
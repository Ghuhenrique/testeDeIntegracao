// import sistema from "./simuladorModulos.js";
const sistema = require("./simuladorModulos.js");

describe('Simulador de Módulos', () => {

  // Testes de integração
  test("Fluxo completo com sucesso", () => {
    const resultado = sistema("admin", "123");
    expect(resultado).toBe("Bem-vindo, Administrador. Perfil: Administrador do sistema");
  });

  test("Fluxo completo com falha", () => {
    const resultado = sistema("user", "123");
    expect(resultado).toBe("Acesso não autorizado");
  });
  
});
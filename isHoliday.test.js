const isHoliday = require("./isHoliday.js");


describe('isHoliday', () => {
  test('Deve retornar true para um feriado conhecido', async () => {
    const date = new Date('2026-01-01'); // Exemplo ano Novo
    const result = await isHoliday(date);
    expect(result).toBe(true);
  });

  test('Deve retornar false para um dia comum', async () => {
    const date = new Date('2026-01-02'); // Dia seguinte ao ano novo, que não é feriado
    const result = await isHoliday(date);
    expect(result).toBe(false);
  });

  test('Hoje não é feriado', async () => {
    const date = new Date(); // Data atual
    const result = await isHoliday(date);
    expect(result).toBe(false);
  });
});

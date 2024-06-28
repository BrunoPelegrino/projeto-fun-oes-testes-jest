const handlerElephants = require('../src/handlerElephants');
const residents = [
    {
      name: 'Ilana',
      sex: 'female',
      age: 11,
    },
    {
      name: 'Orval',
      sex: 'male',
      age: 15,
    },
    {
      name: 'Bea',
      sex: 'female',
      age: 12,
    },
    {
      name: 'Jefferson',
      sex: 'male',
      age: 4,
    },
  ];


describe('Testes da função HandlerElephants', () => {
    test('testa se a funçao retorna undefined sem param', () => { 
        expect(handlerElephants()).toBe(undefined)
     })
     test('testa se a funçao retorna null sem param nao for reconhecido', () => { 
        expect(handlerElephants('irreconhecivel')).toBe(null)
     })
     test('testa se a funçao retorna um erro se o param nao for uma string', () => { 
        expect(handlerElephants(2)).toEqual('Parâmetro inválido, é necessário uma string')
     })
     test('testa se a funçao retorna o valor correto se o param for count', () => { 
        expect(handlerElephants('count')).toEqual(4)
     })
     test('testa se a funçao retorna o valor correto se o param for avarageAge', () => { 
        expect(handlerElephants('averageAge')).toEqual(10.5)
     })
     test('testa se a funçao retorna o valor correto se o param for names', () => { 
        expect(handlerElephants('names')).toEqual(["Ilana", "Orval", "Bea", "Jefferson"])
     })
     test('testa se a funçao retorna o valor correto se o param for location', () => { 
        expect(handlerElephants('location')).toEqual('NW')
     })
     test('testa se a funçao retorna o valor correto se o param for popularity', () => { 
        expect(handlerElephants('popularity')).toEqual(5)
     })
     test('testa se a funçao retorna o valor correto se o param for availability', () => { 
        expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday'])
     })
     test('testa se a funçao retorna o valor correto se o param for residents', () => { 
        expect(handlerElephants('residents')).toEqual(residents)
     })
});

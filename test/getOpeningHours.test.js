const { getOpeningHours, fix12 } = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    const hours = {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
    }
    test('testa a funçao getOpeningHours', () => { 
        expect(getOpeningHours()).toEqual(hours)
     })
     test('testa a funçao getOpeningHours Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => { 
        expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed')
     })
     test('testa a funçao getOpeningHours PPara os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => { 
        expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open')
     })
     test('testa a funçao getOpeningHours Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => { 
        expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed')
     })
     test('testa a funçao getOpeningHours Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: The day must be valid. Example: Monday', () => { 
        expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday')
     })
     test('testa a funçao getOpeningHours Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: The hour should represent a number', () => { 
        expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number')
     })
     test('testa a funçao getOpeningHours Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: The minutes should represent a number', () => { 
        expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number')
     })
     test('testa a funçao getOpeningHours Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: The abbreviation must be \'AM\' or \'PM\'', () => { 
        expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'')
     })
     test('testa a funçao getOpeningHours Para os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem: The hour must be between 0 and 12', () => { 
        expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12')
     })
     test('testa a funçao getOpeningHours Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: The minutes must be between 0 and 59', () => { 
        expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59')
     })
     test('Deve converter 12 para 0 na hora, abertura e fechamento', () => {
      const result = fix12(12, 12, 12);
      expect(result).toEqual({ h: 0, o: 0, c: 0 });
    });
  
    test('Deve manter horas diferentes de 12 inalteradas', () => {
      const result = fix12(11, 10, 9);
      expect(result).toEqual({ h: 11, o: 10, c: 9 });
    });
  
    test('Deve converter 12 para 0 apenas na hora de abertura', () => {
      const result = fix12(11, 12, 9);
      expect(result).toEqual({ h: 11, o: 0, c: 9 });
    });
  
    test('Deve converter 12 para 0 apenas na hora de fechamento', () => {
      const result = fix12(11, 10, 12);
      expect(result).toEqual({ h: 11, o: 10, c: 0 });
    });
  
    test('Deve converter 12 para 0 apenas na hora fornecida', () => {
      const result = fix12(12, 10, 9);
      expect(result).toEqual({ h: 0, o: 10, c: 9 });
    });

     
     

     
});

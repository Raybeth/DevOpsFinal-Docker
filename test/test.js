const fs = require('fs');

describe('Contenido del index.html', () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync('index.html', 'utf8');
  });

  test('Contiene el título ¡Hola Mundo!', () => {
    expect(html).toMatch(/<h1[^>]*>.*¡Hola Mundo!.*<\/h1>/i);
  });

  test('Incluye el nombre Ada Jimenez', () => {
    expect(html).toMatch(/Ada Jimenez/);
  });

  test('Incluye la matrícula 20220790', () => {
    expect(html).toMatch(/20220790/);
  });

  test('Incluye la materia DevOps', () => {
    expect(html).toMatch(/DevOps/);
  });

  test('Incluye emojis divertidos', () => {
    expect(html).toMatch(/💻|🎓|🚀|❤️|☕/);
  });
});

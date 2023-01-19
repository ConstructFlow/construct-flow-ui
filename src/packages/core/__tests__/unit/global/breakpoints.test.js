const sass = require('sass');

describe('Colors variables', () => {
  const result = sass
    .compile('./src/packages/core/__tests__/fixtures/breakpoints.fixtures.scss')
    .css.toString();

  it('Should has correct query for breakpoint', async () => {
    expect(result).toMatchSnapshot();
    expect(result).toContain('@media (min-width: 0)');
    expect(result).toContain('@media (min-width: 480px)');
    expect(result).toContain('@media (min-width: 720px)');
    expect(result).toContain('@media (min-width: 720px)');
    expect(result).toContain('@media (min-width: 960px)');
    expect(result).toContain('@media (min-width: 1200px)');
    expect(result).toContain('@media (min-width: 1400px)');
  });
});

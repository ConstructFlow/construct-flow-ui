const sass = require('sass');
const { colors } = require('../../shared/constants');

describe('Colors variables', () => {
  const result = sass
    .compile('./src/packages/core/src/components/button/_button.scss', { style: 'compressed' })
    .css.toString();

  it('Should match', () => {
    expect(result).toMatchSnapshot();
  });

  it('Should has full list of buttons', async () => {
    expect(result).toContain('.button');
    expect(result).toContain('.button--primary');
    expect(result).toContain('.button--danger');
    expect(result).toContain('.button--success');
    expect(result).toContain('.button--dark');
    expect(result).toContain('.button--brown');
    expect(result).toContain('.button--green');
    expect(result).toContain('.button--blue');
    expect(result).toContain('.button--turquoise');
    expect(result).toContain('.button--violet');
    expect(result).toContain('.button--yellow');
    expect(result).toContain('.button--orange');
    expect(result).toContain('.button--pink');
    expect(result).toContain('.button--red');
    expect(result).toContain('.button--loading');
  });

  it('Should has proper colors', async () => {
    expect(result).toContain(`.button--primary{background:${colors.colorBlue40};color:#fff}`);
    expect(result).toContain(`.button--danger{background:${colors.colorRed40};color:#fff}`);
    expect(result).toContain(`.button--success{background:${colors.colorGreen40};color:#fff}`);
    expect(result).toContain(`.button--dark{background:${colors.colorGray70};color:#fff}`);
    expect(result).toContain(`.button--gray{background:${colors.colorGray40};color:#fff}`);
    expect(result).toContain(`.button--brown{background:${colors.colorBrown50};color:#fff}`);
    expect(result).toContain(`.button--brown{background:${colors.colorBrown50};color:#fff}`);
    expect(result).toContain(`.button--green{background:${colors.colorGreen50};color:#fff}`);
    expect(result).toContain(`.button--blue{background:${colors.colorBlue50};color:#fff}`);
    expect(result).toContain(
      `.button--turquoise{background:${colors.colorTurquoise40};color:#fff}`
    );
    expect(result).toContain(`.button--violet{background:${colors.colorViolet40};color:#fff}`);
    expect(result).toContain(`.button--yellow{background:${colors.colorYellow60};color:#fff}`);
    expect(result).toContain(`.button--orange{background:${colors.colorOrange50};color:#fff}`);
    expect(result).toContain(`.button--pink{background:${colors.colorPink50};color:#fff}`);
    expect(result).toContain(`.button--red{background:${colors.colorRed50};color:#fff}`);
  });
});

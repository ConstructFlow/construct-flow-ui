const sass = require('node-sass');

describe('Colors variables', () => {
    const result = sass.renderSync({
        data: `@import 'src/packages/core/__tests__/fixtures/colors.fixtures';`,
        outputStyle: 'compact'
    });

    it('Should has correct gray colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-gray { background-color: #f8f9fa; }');
        expect(result.css.toString()).toContain('.testColor__color-gray-10 { background-color: #ebedf0; }');
        expect(result.css.toString()).toContain('.testColor__color-gray-20 { background-color: #e9ecef; }');
        expect(result.css.toString()).toContain('.testColor__color-gray-30 { background-color: #dee2e6; }');
        expect(result.css.toString()).toContain('.testColor__color-gray-40 { background-color: #ced4da; }');
        expect(result.css.toString()).toContain('.testColor__color-gray-50 { background-color: #adb5bd; }');
        expect(result.css.toString()).toContain('.testColor__color-gray-60 { background-color: #6c757d; }');
        expect(result.css.toString()).toContain('.testColor__color-gray-70 { background-color: #495057; }');
        expect(result.css.toString()).toContain('.testColor__color-gray-80 { background-color: #343a40; }');
        expect(result.css.toString()).toContain('.testColor__color-gray-90 { background-color: #212529; }');
    });

    it('Should has correct brown colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-brown { background-color: #edc4b3; }');
        expect(result.css.toString()).toContain('.testColor__color-brown-10 { background-color: #e6b8a2; }');
        expect(result.css.toString()).toContain('.testColor__color-brown-20 { background-color: #deab90; }');
        expect(result.css.toString()).toContain('.testColor__color-brown-30 { background-color: #d69f7e; }');
        expect(result.css.toString()).toContain('.testColor__color-brown-40 { background-color: #cd9777; }');
        expect(result.css.toString()).toContain('.testColor__color-brown-50 { background-color: #c38e70; }');
        expect(result.css.toString()).toContain('.testColor__color-brown-60 { background-color: #b07d62; }');
        expect(result.css.toString()).toContain('.testColor__color-brown-70 { background-color: #9d6b53; }');
        expect(result.css.toString()).toContain('.testColor__color-brown-80 { background-color: #8a5a44; }');
        expect(result.css.toString()).toContain('.testColor__color-brown-90 { background-color: #774936; }');
    });

    it('Should has correct green colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-green { background-color: #e9ecef; }');
        expect(result.css.toString()).toContain('.testColor__color-green-10 { background-color: #92e6a7; }');
        expect(result.css.toString()).toContain('.testColor__color-green-20 { background-color: #6ede8a; }');
        expect(result.css.toString()).toContain('.testColor__color-green-30 { background-color: #4ad66d; }');
        expect(result.css.toString()).toContain('.testColor__color-green-40 { background-color: #2dc653; }');
        expect(result.css.toString()).toContain('.testColor__color-green-50 { background-color: #25a244; }');
        expect(result.css.toString()).toContain('.testColor__color-green-60 { background-color: #208b3a; }');
        expect(result.css.toString()).toContain('.testColor__color-green-70 { background-color: #155d27; }');
        expect(result.css.toString()).toContain('.testColor__color-green-80 { background-color: #155d27; }');
        expect(result.css.toString()).toContain('.testColor__color-green-90 { background-color: #10451d; }');
    });

    it('Should has correct blue colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-blue { background-color: #e3f2fd; }');
        expect(result.css.toString()).toContain('.testColor__color-blue-10 { background-color: #bbdefb; }');
        expect(result.css.toString()).toContain('.testColor__color-blue-20 { background-color: #90caf9; }');
        expect(result.css.toString()).toContain('.testColor__color-blue-30 { background-color: #64b5f6; }');
        expect(result.css.toString()).toContain('.testColor__color-blue-40 { background-color: #42a5f5; }');
        expect(result.css.toString()).toContain('.testColor__color-blue-50 { background-color: #2196f3; }');
        expect(result.css.toString()).toContain('.testColor__color-blue-60 { background-color: #1e88e5; }');
        expect(result.css.toString()).toContain('.testColor__color-blue-70 { background-color: #1976d2; }');
        expect(result.css.toString()).toContain('.testColor__color-blue-80 { background-color: #1565c0; }');
        expect(result.css.toString()).toContain('.testColor__color-blue-90 { background-color: #0d47a1; }');
    });

    it('Should has correct turquoise colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-turquoise { background-color: #caf0f8; }');
        expect(result.css.toString()).toContain('.testColor__color-turquoise-10 { background-color: #ade8f4; }');
        expect(result.css.toString()).toContain('.testColor__color-turquoise-20 { background-color: #90e0ef; }');
        expect(result.css.toString()).toContain('.testColor__color-turquoise-30 { background-color: #48cae4; }');
        expect(result.css.toString()).toContain('.testColor__color-turquoise-40 { background-color: #00b4d8; }');
        expect(result.css.toString()).toContain('.testColor__color-turquoise-50 { background-color: #0096c7; }');
        expect(result.css.toString()).toContain('.testColor__color-turquoise-60 { background-color: #0077b6; }');
        expect(result.css.toString()).toContain('.testColor__color-turquoise-70 { background-color: #023e8a; }');
        expect(result.css.toString()).toContain('.testColor__color-turquoise-80 { background-color: #023e8a; }');
        expect(result.css.toString()).toContain('.testColor__color-turquoise-90 { background-color: #03045e; }');
    });

    it('Should has correct violet colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-violet { background-color: #d8c1eb; }');
        expect(result.css.toString()).toContain('.testColor__color-violet-10 { background-color: #ceb2e6; }');
        expect(result.css.toString()).toContain('.testColor__color-violet-20 { background-color: #c4a3e1; }');
        expect(result.css.toString()).toContain('.testColor__color-violet-30 { background-color: #ba93dc; }');
        expect(result.css.toString()).toContain('.testColor__color-violet-40 { background-color: #b084d7; }');
        expect(result.css.toString()).toContain('.testColor__color-violet-50 { background-color: #a674d2; }');
        expect(result.css.toString()).toContain('.testColor__color-violet-60 { background-color: #9c65cd; }');
        expect(result.css.toString()).toContain('.testColor__color-violet-70 { background-color: #9356c8; }');
        expect(result.css.toString()).toContain('.testColor__color-violet-80 { background-color: #8946c3; }');
        expect(result.css.toString()).toContain('.testColor__color-violet-90 { background-color: #7f3cb9; }');
    });

    it('Should has correct yellow colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-yellow { background-color: #ffffb7; }');
        expect(result.css.toString()).toContain('.testColor__color-yellow-10 { background-color: #fff8a5; }');
        expect(result.css.toString()).toContain('.testColor__color-yellow-20 { background-color: #fff599; }');
        expect(result.css.toString()).toContain('.testColor__color-yellow-30 { background-color: #fff185; }');
        expect(result.css.toString()).toContain('.testColor__color-yellow-40 { background-color: #ffee70; }');
        expect(result.css.toString()).toContain('.testColor__color-yellow-50 { background-color: #ffec5c; }');
        expect(result.css.toString()).toContain('.testColor__color-yellow-60 { background-color: #ffe747; }');
        expect(result.css.toString()).toContain('.testColor__color-yellow-70 { background-color: #ffe433; }');
        expect(result.css.toString()).toContain('.testColor__color-yellow-80 { background-color: #ffdd1f; }');
        expect(result.css.toString()).toContain('.testColor__color-yellow-90 { background-color: #ffda0a; }');
    });

    it('Should has correct orange colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-orange { background-color: #ffb600; }');
        expect(result.css.toString()).toContain('.testColor__color-orange-10 { background-color: #ffaa00; }');
        expect(result.css.toString()).toContain('.testColor__color-orange-20 { background-color: #ff9e00; }');
        expect(result.css.toString()).toContain('.testColor__color-orange-30 { background-color: #ff9100; }');
        expect(result.css.toString()).toContain('.testColor__color-orange-40 { background-color: #ff8500; }');
        expect(result.css.toString()).toContain('.testColor__color-orange-50 { background-color: #ff7900; }');
        expect(result.css.toString()).toContain('.testColor__color-orange-60 { background-color: #ff6d00; }');
        expect(result.css.toString()).toContain('.testColor__color-orange-70 { background-color: #ff6000; }');
        expect(result.css.toString()).toContain('.testColor__color-orange-80 { background-color: #ff5400; }');
        expect(result.css.toString()).toContain('.testColor__color-orange-90 { background-color: #ff4800; }');
    });

    it('Should has correct pink colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-pink { background-color: #eaa8a8; }');
        expect(result.css.toString()).toContain('.testColor__color-pink-10 { background-color: #f7cad0; }');
        expect(result.css.toString()).toContain('.testColor__color-pink-20 { background-color: #f9bec7; }');
        expect(result.css.toString()).toContain('.testColor__color-pink-30 { background-color: #fbb1bd; }');
        expect(result.css.toString()).toContain('.testColor__color-pink-40 { background-color: #ff99ac; }');
        expect(result.css.toString()).toContain('.testColor__color-pink-50 { background-color: #ff85a1; }');
        expect(result.css.toString()).toContain('.testColor__color-pink-60 { background-color: #ff7096; }');
        expect(result.css.toString()).toContain('.testColor__color-pink-70 { background-color: #ff5c8a; }');
        expect(result.css.toString()).toContain('.testColor__color-pink-80 { background-color: #ff477e; }');
        expect(result.css.toString()).toContain('.testColor__color-pink-90 { background-color: #ff0a54; }');
    });

    it('Should has correct red colors', async () => {
        expect(result.css.toString()).toContain('.testColor__color-red { background-color: #eaa8a8; }');
        expect(result.css.toString()).toContain('.testColor__color-red-10 { background-color: #e28080; }');
        expect(result.css.toString()).toContain('.testColor__color-red-20 { background-color: #e56b6b; }');
        expect(result.css.toString()).toContain('.testColor__color-red-30 { background-color: #e95555; }');
        expect(result.css.toString()).toContain('.testColor__color-red-40 { background-color: #ec4040; }');
        expect(result.css.toString()).toContain('.testColor__color-red-50 { background-color: #ef2b2b; }');
        expect(result.css.toString()).toContain('.testColor__color-red-60 { background-color: #de1616; }');
        expect(result.css.toString()).toContain('.testColor__color-red-70 { background-color: #cd0000; }');
        expect(result.css.toString()).toContain('.testColor__color-red-80 { background-color: #bb0000; }');
        expect(result.css.toString()).toContain('.testColor__color-red-90 { background-color: #aa0000; }');
    });
});

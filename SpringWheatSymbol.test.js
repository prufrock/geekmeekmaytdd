const SpringWheatSymbol = require("./SpringWheatSymbol");

test("Can create a new SpringWheatSymbol", () => {
    expect(new SpringWheatSymbol).toBeInstanceOf(SpringWheatSymbol);
});

test("all crop symbols for spring wheat for 2018", () => {
    let symbol = new SpringWheatSymbol();
    expect(symbol.currentSymbols()).toEqual('MWH18,MWK18,MWN18,MWU18,MWZ18');
});

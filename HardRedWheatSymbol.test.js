const HardRedWheatSymbol = require("./HardRedWheatSymbol");

test("Can create a new HardRedWheatSymbol", () => {
    expect(new HardRedWheatSymbol()).toBeInstanceOf(HardRedWheatSymbol);
});

test("all crop symbols for spring wheat for 2018", () => {
    let symbol = new HardRedWheatSymbol();
    expect(symbol.currentSymbols()).toEqual('KEH18,KEK18,KEN18,KEU18,KEZ18');
});

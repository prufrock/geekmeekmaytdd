const CornSymbol = require("./CornSymbol");

test("Can create a new CornSymbol", () => {
    expect(new CornSymbol()).toBeInstanceOf(CornSymbol);
});

test("all crop symbols for spring wheat for 2018", () => {
    let symbol = new CornSymbol();
    expect(symbol.currentSymbols()).toEqual('ZCF18,ZCH18,ZCK18,ZCN18,ZCU18,ZCX18,ZCZ18');
});

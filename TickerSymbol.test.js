const TickerSymbol = require("./TickerSymbol");

test('create a new TickerSymbol object', () => {
   expect(new TickerSymbol()).toBeInstanceOf(TickerSymbol);
});

test('all crop symbols for spring wheat for 2018', () => {
    let symbol = new TickerSymbol();
    expect(symbol.currentSymbols()).toEqual('MWH18,MWK18,MWN18,MWU18,MWZ18');
});

test('all crop symbols for hard red wheat for 2018', () => {
    let symbol = new TickerSymbol();
    expect(symbol.currentSymbols("HardRedWheat")).toEqual('KEH18,KEK18,KEN18,KEU18,KEZ18');
});

test('all crop symbols for corn for 2018', () => {
    let symbol = new TickerSymbol();
    expect(symbol.currentSymbols("Corn")).toEqual("ZCF18,ZCH18,ZCK18,ZCN18,ZCU18,ZCX18,ZCZ18");
});
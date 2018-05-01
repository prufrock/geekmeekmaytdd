const HardRedWheatSymbol = require("./HardRedWheatSymbol");
const SpringWheatSymbol = require("./SpringWheatSymbol");
const CornSymbol = require("./CornSymbol");

class TickerSymbol {

    currentSymbols(crop) {
        if (crop == "HardRedWheat") {
            return (new HardRedWheatSymbol()).currentSymbols();
        } else if (crop == "Corn") {
            return (new CornSymbol()).currentSymbols();
        } else {
            return (new SpringWheatSymbol()).currentSymbols();
        }
    }
}

module.exports = TickerSymbol;
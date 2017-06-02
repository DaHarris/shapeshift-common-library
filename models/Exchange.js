const mongoose = require('mongoose')

const SymbolSchema = new mongoose.Schema({
  symbol: {type: String, required: true},
  exchangeSymbol: {type: String, required: true},
  longName: String,
  active: Boolean
})

const TickerSchema = new mongoose.Schema({
  symbol: {type: String, required: true},
  exchangeSymbol: {type: String, required: true},
  high: Number,
  low: Number,
  last: Number,
  bid: Number,
  ask: Number
})

const ExchangeSchema = new mongoose.Schema({
  exchangeID: {type: String, required: true, unique: true},
  exchangeName: {type: String, required: true, unique: true},
  symbolStatus: [SymbolSchema],
  tickers: [TickerSchema]
})

module.exports = {
  model: mongoose.model('Exchange', ExchangeSchema)
}

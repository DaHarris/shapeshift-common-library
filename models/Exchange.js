const mongoose = require('mongoose')

const TickerSchema = new mongoose.Schema({
  symbol: {type: String, required: true, unique: true},
  exchangeSymbol: {type: String, required: true, unique: true},
  high: Number,
  low: Number,
  last: Number,
  bid: Number,
  ask: Number
})

const ExchangeSchema = new mongoose.Schema({
  exchangeID: {type: String, required: true, unique: true},
  exchangeName: {type: String, required: true, unique: true},
  activeSymbols: [String],
  reserveSymbols: [String],
  tickers: [TickerSchema]
})

module.exports = {
  model: mongoose.model('Exchange', ExchangeSchema)
}

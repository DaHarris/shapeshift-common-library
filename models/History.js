const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
  high: Number,
  low: Number,
  last: Number,
  bid: Number,
  ask: Number,
  timeStamp: Number
})

const TickerSchema = new mongoose.Schema({
  symbol: {type: String, required: true, unique: true},
  exchangeSymbol: {type: String, required: true, unique: true},
  timeStamp: Number,
  history: [HistorySchema]
})

const ExchangeSchema = new mongoose.Schema({
  exchangeID: {type: String, required: true, unique: true},
  exchangeName: {type: String, required: true, unique: true},
  tickers: [TickerSchema]
})

module.exports = {
  model: mongoose.model('History', ExchangeSchema)
}

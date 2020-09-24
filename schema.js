import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    url: String,
})

export default mongoose.model('cards', cardSchema)
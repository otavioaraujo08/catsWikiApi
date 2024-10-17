import { model, Schema } from "npm:mongoose@^6.7";
import { v4 as uuidv4 } from 'uuid';

const catsSchema = new Schema({
    id: { type: String, default: uuidv4 },
    name: {type: String, required: true},
    classe: {type: String, required: true},
    curiosidade: {type: String, required: true},
    habilidades: { type: [String], required: true }
})

const Cat = model("Cat", catsSchema)

export default Cat
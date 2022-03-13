const {Schema, mongoose} = require("mongoose");
const userSchema = new Schema({
    nome:{
        type: String
    },

    sobrenome:{
        type: String
    },

    cpf:{
        type: String
    }
})

mongoose.model("userNew", userSchema);


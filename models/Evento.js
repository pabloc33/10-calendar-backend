const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    //lastActiveAt: Date,
    required: true,
  },
  end: {
    type: Date,
    //lastActiveAt: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

EventoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;

  return object;
});

module.exports = model("Evento", EventoSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    img: {
      type: String,
    },
    type: {
      type: String
    },
    date: {
      type: Date
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model('Event', EventSchema);

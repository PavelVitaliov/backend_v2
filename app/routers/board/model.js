import mongoose, { Schema } from 'mongoose';

const BoardSchema = new Schema(
  {
    title: String,
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    developer: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    viewer: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    users: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    columns: [{
      type: Schema.Types.ObjectId,
      ref: 'Column',
    }]
  },
  {
    timestamps: true
  }
);

BoardSchema.methods.getData = function () {
  return {
    _id: this._id,
    title: this.title,
    users: this.users,
    columns: this.columns,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    admin: this.admin,
    developer: this.developer,
    viewer: this.viewer,
  };
};

const Board = mongoose.model('Board', BoardSchema);

export default Board;

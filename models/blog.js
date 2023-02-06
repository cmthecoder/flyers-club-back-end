import mongoose from "mongoose";

const Schema = mongoose.Schema

const commentSchema = new Schema(
    {
    text: {
      type: String,
      required: true
    },
    author: {type: Schema.Types.ObjectId, ref: 'Profile'},
    },
    {timestamps: true}
  )

const blogSchema = new Schema (
  {
    title: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ['FAA', 'Adventure', 'Milestones', 'News', 'Advice', 'Encouragement', 'Other']
    },
    
    author: {type: Schema.Types.ObjectId, ref: 'Profile'}
  },

  {timestamps: true}
)
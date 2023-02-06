import mongoose from "mongoose";

const Schema = mongoose.Schema

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
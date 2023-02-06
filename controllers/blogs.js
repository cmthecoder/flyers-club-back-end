import { Profile } from "../models/profile.js"
import { Blog } from "../models/blog.js"

const create = async (req, res) => {
  console.log('THIS IS IT BRUHHHHH', req.body.profile)
  try {
    req.body.author = req.user.profile
    const blog = await Blog.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { blogs: blog } },
      { new: true}
    )
    blog.author = profile
    res.status(201).json(blog)
  } catch (error) {
    console.log(err)
    res.status(500).json(error)
  }
}

const index = async(req, res) => {
  try {
    const blogs = await Blog.find({})
    .populate('author')
    .sort({createdAt: 'desc'})
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json(error)
  }
}

export {
  create,
  index,
}
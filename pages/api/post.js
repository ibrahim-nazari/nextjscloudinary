import connectDB from "../../middleware/db";
import Post from "../../models/post";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const post = new Post(req.body);
      const saved = await post.save();
      return res.status(200).send(saved);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method == "GET") {
  }
};

export default connectDB(handler);

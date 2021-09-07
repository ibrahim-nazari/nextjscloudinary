import connectDB from "../../middleware/db";
import Post from "../../models/post";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      console.log(req.body);
      const post = new Post(req.body);
      console.log(req.body);
      const saved = await post.save();
      return res.status(200).send(saved);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (req.method == "GET") {
    Post.find({}, function (err, result) {
      if (err) return res.status(500).json({ message: err.message });
      return res.status(200).send(result);
    });
  }
};

export default connectDB(handler);

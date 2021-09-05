import cloudinary from "../../utils/cloudinary";
var path = require("path");
import uniqId from "uniqid";
const handler = async (req, res) => {
  try {
    let id = uniqId();
    let publicId =
      req.query.path + "/" + id + path.extname(req.file.originalname);
    let result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      public_id: publicId,
    });
    console.log(result);
    return res.status(200).send(result);
  } catch (error) {}
};

export default handler;

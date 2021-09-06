import nextConnect from "next-connect";
import multer from "multer";
import { v4 as uuidv4, v4 } from "uuid";
const path = require("path");
const Datauriparser = require("datauri/parser");
const parser = new Datauriparser();
const changeto64 = (file) =>
  parser.format(path.extname(file.originalname), file.buffer);
import cloudinary from "../../utils/cloudinary";
const ALLOWED_FORMATES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (ALLOWED_FORMATES.includes(file.mimetype)) {
      console.log("file", file);
      cb(null, true);
    } else {
      cb(new Error("Not supported file type"), false);
    }
  },
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("image"));
apiRoute.post((req, res) => {
  const file64 = changeto64(req.file);
  cloudinary.uploader.upload(
    file64.content,
    {
      public_id: `${req.query.path}/${uuidv4()}`,
    },
    function (err, result) {
      return res
        .status(200)
        .send({ public_id: result.public_id, url: result.secure_url });
    }
  );
});

export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};

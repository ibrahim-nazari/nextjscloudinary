import nextConnect from "next-connect";
import multer from "multer";
import { v4 as uuidv4, v4 } from "uuid";
import cloudinary from "../../utils/cloudinary";
const ALLOWED_FORMATES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (ALLOWED_FORMATES.includes(file.mimetype)) {
      console.log("true and match");
      cb(null, true);
    } else {
      cb(new Error("Not supported file type"), false);
    }
  },
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.log(error);
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("image"));
apiRoute.post(async (req, res) => {
  console.log("hit");
  cloudinary.uploader.upload(
    req.file.path,
    {
      public_id: `${req.query.path / uuidv4()}`,
      resource_type: "auto",
    },
    function (err, result) {
      console.log(err);
      return res.status(200).send(result);
    }
  );
});

export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};

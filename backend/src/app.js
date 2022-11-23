const express = require("express");
const mongoose = require("mongoose");

const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { error } = require("console");
const bodyParser = require("body-parser");
const router = require("./router");

// Configure Mongoose
mongoose.connect("mongodb://0.0.0.0:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", error);
db.once("open", () => {
  console.warn("Connected to database");
});

const CommentSchema = mongoose.Schema({
  user: String,
  message: String,
  likes: Number,
  editable: Boolean,
  replies: [
    {
      user: String,
      message: String,
      likes: Number,
    },
  ],
});

const CommentsModel = mongoose.model("Comment", CommentSchema);

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use(router);
app.post("/get-data", (req, res) => {
  CommentsModel.find({}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  }).limit(req.body.limitNum);
});

// User creates new comments from Top Comments
app.post("/new-comment", (req, res) => {
  const item = req.body;
  new CommentsModel({
    user: "Super User",
    message: item.messageData,
    likes: 0,
    editable: true,
    replies: [],
  }).save();
  // send back empty data so we can use Promise
  res.send("");
});

// Intersection Observer get more date
app.post("/get-more-data", (req, res) => {
  const item = req.body;
  CommentsModel.find({}, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  })
    .skip(item.commentIncrement)
    .limit(4);
});

// User creates a new comment from Sub
app.post("/new-sub-comment", (req, res) => {
  const item = req.body;
  const newSubMessage = {
    user: "Super User",
    message: item.messageData,
    likes: 0,
  };
  CommentsModel.updateOne(
    { _id: item.messageId },
    { $push: { replies: newSubMessage } },
    (err) => {
      if (err) {
        console.error(err);
      }
      res.send("");
    }
  );
});

// User want to update comment
app.post("/update-comment", (req, res) => {
  const item = req.body;
  CommentsModel.findOne({ _id: item.commentId }, (err, data) => {
    if (!err) res.send(data);
  });
});

// User want to delete message
app.post("/delete-comment", (req, res) => {
  const item = req.body;
  CommentsModel.deleteOne({ _id: item.messageId }, (err) => {
    if (err) console.error(err);
    res.send("");
  });
});

// User want to delete sub message
app.post("/delete-sub-comment", (req, res) => {
  const item = req.body;
  CommentsModel.updateOne(
    { _id: item.messageId },
    { $pull: { replies: { _id: item.subId } } },
    (err) => {
      if (err) console.error(err);
      res.send("");
    }
  );
});

// User hit like of dislike
app.post("/update-like", (req) => {
  const item = req.body;
  CommentsModel.updateOne(
    { _id: item.messageId },
    { likes: item.likes },
    (err) => {
      if (err) console.error(err);
    }
  );
});

// User hit like sub comment
app.post("/update-sub-like", (req) => {
  const item = req.body;
  CommentsModel.updateOne(
    { _id: item.messageId, "replies._id": item.subId },
    { $set: { "replies.$.likes": item.likes } },
    (err) => {
      if (err) console.error(err);
    }
  );
});

// Redirect all requests to the REACT app
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;

import TopCommentsBox from "../../components/CommentsBox/TopCommentsBox/TopCommentsBox";
import MessageScroll from "./MessageScroll";

function Commentaire() {
  return (
    <div className="commentaireComponent containerType1 containerType1--padd20">
      <div className="commentaires">
        <h2 className="commentaireTitle linedTitle">
          <span className="linedTitle__text">Comments</span>
        </h2>
        <div className="commentaireBox">
          <TopCommentsBox autoFocus />
          <MessageScroll />
        </div>
      </div>
      <div className="reviews">
        <h3 className="reviewTitle linedTitle">
          <span className="linedTitle__text">Leave us your opinion</span>
        </h3>
        <div className="reviewNote">*Note*</div>
        <div className="reviewBox">
          <input type="textbox" id="review" name="review" maxLength={75} />
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Commentaire;

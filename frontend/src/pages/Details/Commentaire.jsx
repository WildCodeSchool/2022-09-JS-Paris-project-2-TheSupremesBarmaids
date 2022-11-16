import TopCommentsBox from "../../components/CommentsBox/TopCommentsBox/TopCommentsBox";
import MessageScroll from "./MessageScroll";

function Commentaire() {
  return (
    <div className="commentaireComponent containerType1 containerType1--padd20">
      <div className="commentaires">
        <h2 className="commentaireTitle linedTitle">
          <span className="linedTitle__text">Commentaires</span>
        </h2>
        <div className="commentaireBox">
          <TopCommentsBox autoFocus={false} />
          <MessageScroll />
          <li>
            <h3 className="reviewerName">Toto</h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            id ut quo natus, unde cupiditate placeat rerum velit sapiente,
            suscipit explicabo perferendis tenetur ullam saepe impedit vitae nam
            reiciendis illum cumque amet ea eum obcaecati dolor. Qui doloribus
            autem sequi architecto sit. A quos vero, quo excepturi officia
            commodi unde est qui maxime dolores tenetur sunt veritatis. Eligendi
            aliquid, voluptatum iure laborum quisquam cum quis voluptas ab
            corporis! Odit ipsum doloremque est et nobis repudiandae.{" "}
          </li>
        </div>
      </div>
      <div className="reviews">
        <h3 className="reviewTitle linedTitle">
          <span className="linedTitle__text">Laissez-nous votre avis</span>
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

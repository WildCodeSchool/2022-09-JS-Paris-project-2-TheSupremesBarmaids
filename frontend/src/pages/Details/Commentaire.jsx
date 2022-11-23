import TopCommentsBox from "../../components/CommentsBox/TopCommentsBox/TopCommentsBox";
import MessageScroll from "./MessageScroll";

import { ContextProvider } from "../../services/Context";

function Commentaire() {
  return (
    <div className="commentaireComponent containerType1 containerType1--padd20">
      <div className="commentaires">
        <h2 className="commentaireTitle linedTitle">
          <span className="linedTitle__text">Comments</span>
        </h2>
        <ContextProvider autoFocus>
          <div className="commentaireBox">
            <TopCommentsBox autoFocus={false} />
            <MessageScroll />
          </div>
        </ContextProvider>
      </div>
    </div>
  );
}

export default Commentaire;

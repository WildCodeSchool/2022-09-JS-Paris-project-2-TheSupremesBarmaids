import { AiFillStar } from "react-icons/ai";

function Note() {
  return (
    <div className="cardNote">
      <span className="cardNote__top">
        <AiFillStar className="starNote" />
        <AiFillStar className="starNote" />
        <AiFillStar className="starNote" />
      </span>
    </div>
  );
}

export default Note;

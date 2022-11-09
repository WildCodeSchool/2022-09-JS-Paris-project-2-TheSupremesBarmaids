import { AiFillStar } from "react-icons/ai";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Note() {
  return (
    <div className="cardNote">
      <span className="cardNote__top">
        <AiFillStar className="starNote" />
        <AiFillStar className="starNote" />
        <AiFillStar className="starNote" />
      </span>
      {/* //Autres notes à dynamiser
      <span className="cardNote__high">
        <AiFillStar className="starNote" />
        <AiFillStar className="starNote" />
        <AiOutlineStar className="starNote" />
      </span>
      <span className="cardNote__medium">
        <AiFillStar className="starNote" />
        <AiOutlineStar className="starNote" />
        <AiOutlineStar className="starNote" />
      </span>
      <span className="cardNote__low">
        <AiOutlineStar className="starNote" />
        <AiOutlineStar className="starNote" />
        <AiOutlineStar className="starNote" />
      </span>
      */}
    </div>
  );
}

export default Note;

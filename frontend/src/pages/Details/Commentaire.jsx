function Commentaire() {
  return (
    <div className="commentaireComponent containerType1 containerType1--padd20">
      <div className="commentaires">
        <h2 className="commentaireTitle linedTitle">
          <span className="linedTitle__text">Comments</span>
        </h2>
        <ul className="commentaireBox">
          <li>
            <h3 className="reviewerName">Gwen</h3>
            Great Pina Colada recipe. Moscow Mule I discovered on this website,
            is perfect for vodka lovers. Very nice website, I recommend.
          </li>
          <li>
            <h3 className="reviewerName">Mickaël</h3>
            I'm a great cocktail lover. I tested a dozen recipes on the Supremes
            Barmaids website and nothing to say, it’s perfect!.
          </li>
        </ul>
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

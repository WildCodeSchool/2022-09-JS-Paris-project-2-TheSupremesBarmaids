import fetchResetApi from "../../utils/fetchResetApi";

function ResetButton({ renderApi }) {
  return (
    <button
      type="button"
      className="buttonType reset-filter"
      onClick={() => fetchResetApi().then((resPost) => renderApi(resPost))}
    >
      <span className="buttonType__text">RESET FILTER</span>
      <span className="buttonType__icon" />
    </button>
  );
}

export default ResetButton;

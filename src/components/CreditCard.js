import "./CreditCard.scss";
import cover from "../images/cover.jpeg";
import chip from "../images/chip.png";
import visa from "../images/visa.png";

function CreditCard() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-side card-side-front">
          <img src={cover} alt="cover" className="cover" />
          <div className="row">
            <img src={chip} alt="chip" />
            <img src={visa} alt="visa" />
          </div>
          <div className="row card-no">
            <p>####</p>
            <p>####</p>
            <p>####</p>
            <p>####</p>
          </div>
          <br />
          <div className="row card-holder">
            <ul class="nobull">
              <p>Card Holder</p>
              <p>JAY RATHOD</p>
            </ul>
          </div>
          <div className="row expiry">
            <ul class="nobull">
              <p>Expires</p>
              <p>MM / YY</p>
            </ul>
          </div>
        </div>
        <div className="card-side card-side-back">
          <img src={cover} alt="cover" className="cover" />
          <div className="bar"></div>
          <div className="row card-cvv">
            <div className="cvv-text">
              <p>CVV</p>
            </div>
          </div>
          <div className="cvv-area"> </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;

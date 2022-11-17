import { Link, useParams } from "react-router-dom";
import "./Page.css";
import "./PlanetCard.css";

function PlanetCardRight() {
  const { planet } = useParams();
  return (
    <div className="planet-card-right">
      <img
        src={new URL(`../style/assets/${planet}.png`, import.meta.url).href}
        alt="planet"
      />
      <div id="container-text-right">
        <p className="text-right">
          Lorem ipsum dolor sit amet. Ab modi perspiciatis qui nihil nihil quo
          suscipit quasi est pariatur nulla. At culpa nihil qui voluptatibus
          recusandae non tempora praesentium ut accusamus voluptatem. In maxime
          voluptatem nam voluptatibus expedita sed deleniti provident eum
          architecto omnis sit galisum omnis aut odio maiores in tempore
          impedit. Aut similique magnam est quia repudiandae quia Lorem ipsum
          dolor sit amet. Ab modi perspiciatis qui nihil nihil quo suscipit
          quasi est pariatur nulla. At culpa nihil qui voluptatibus recusandae
          non tempora praesentium ut accusamus voluptatem. In maxime voluptatem
          nam voluptatibus expedita sed deleniti provident eum architecto omnis
          sit galisum omnis aut odio maiores in tempore impedit. Aut similique
          magnam est quia repudiandae qui Lorem ipsum dolor sit amet. Ab modi
          perspiciatis qui nihil nihil quo suscipit quasi est pariatur nulla. At
          culpa nihil qui voluptatibus recusandae non tempora praesentium ut
          accusamus voluptatem. In maxime voluptatem nam voluptatibus expedita
          sed deleniti provident eum architecto omnis sit galisum omnis aut odio
          maiores in tempore impedit. Aut similique magnam est quia repudiandae
          qui
        </p>
      </div>
      <Link to={`/planets/${planet}/info`}>
        <button className="right-button" type="button">
          Would like to know more ?
        </button>
      </Link>
    </div>
  );
}

export default PlanetCardRight;

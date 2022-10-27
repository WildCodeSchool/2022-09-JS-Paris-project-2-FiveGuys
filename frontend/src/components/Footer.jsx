import React from "react";
import Logo from "../style/Logo.png";
import "../style/Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <img src={Logo} alt="Logo" className="logo" />
      </footer>
    </div>
  );
}
export default Footer;

// export function Footer()
//   return <>
//     <footer>
//       <img src="../components/Logo.png" alt="Logo" />
//     </footer>
//     </>

//   ;
// }

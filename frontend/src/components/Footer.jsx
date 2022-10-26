import React from "react";
import Logo from "../style/Logo.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
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

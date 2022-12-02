import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FormattedMessage } from "react-intl";

function NavBar() {
 return (
   <>
     <Navbar bg="light" variant="light">
       <Container>
         <Navbar.Brand href="/bandas">
         <img src="https://cdn-icons-png.flaticon.com/512/727/727204.png" height="100" width="100" >
         </img>
         </Navbar.Brand>
       </Container>
       <Container>
       </Container>
       <Container>
        <h2 className="mt-2"><FormattedMessage id="ListadoDeBandas"/></h2>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;
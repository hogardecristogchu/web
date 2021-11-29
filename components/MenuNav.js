import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const MenuNav = () => {
  return (
    <>
      <Navbar
        id="top"
        className="fixed-top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <div className="container">
          <Navbar.Brand className="col-md-8 col-lg-4" href="#">
            <img
              src="/LOGO-HDC-blanco.png"
              className=""
              alt="logo"
              style={{ width: "8rem" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav flex-fill justify-content-between align-items-center">
              <Nav.Item>
                <Nav.Link href="#">INICIO</Nav.Link>
              </Nav.Item>
              <NavDropdown href="#" title="¿QUIÉNES SOMOS?" id="nav-dropdown">
                <NavDropdown.Item href="#">NOSOTROS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">EQUIPO</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">FAMILIA GRANDE</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown href="#" title="DISPOSITIVOS" id="nav-dropdown">
                {["end"].map((direction) => (
                  <DropdownButton
                    drop={direction}
                    key={direction}
                    variant="secundario"
                    title={` CENTROS BARRIALES `}
                  >
                    <Dropdown.Item href="#">NAZARETH</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">CORAZÓN DE MARÍA</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">ASUNCIÓN DE MARÍA</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">CASA MUNILLA</Dropdown.Item>
                  </DropdownButton>
                ))}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">EPI</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">REFUGIO</NavDropdown.Item>
                <NavDropdown.Divider />
                {["end"].map((direction) => (
                  <DropdownButton
                    drop={direction}
                    key={direction}
                    variant="secundario"
                    title={`   BROTA    `}
                  >
                    <Dropdown.Item href="#">PRODUCTOS</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">SERVICIOS</Dropdown.Item>
                  </DropdownButton>
                ))}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">CASITA LIBERTAD</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown href="#" title="CÓMO COLABORAR" id="nav-dropdown">
                <NavDropdown.Item href="#">DONACIÓN MONETARIA</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">SER VOLUNTARIO</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  CONTRATAR SERVICIOS BROTA
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  COMPRAR PRODUCTOS BROTA
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="/blog">BLOG</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">CONTACTO</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default MenuNav;

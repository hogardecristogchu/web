import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useRouter } from "next/router";

const MenuNav = () => {
  const router = useRouter();


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
          <Navbar.Brand className="col-md-8 col-lg-4" href="/">
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
                <Nav.Link onClick={() => router.push("/")}>INICIO</Nav.Link>
              </Nav.Item>
              <NavDropdown title="¿QUIÉNES SOMOS?" id="nav-dropdown">
                <NavDropdown.Item onClick={() => router.push("/quienes#nosotros")} >
                  NOSOTROS
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/quienes#equipo")}>
                  EQUIPO
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => router.push("/quienes#familiagrande")}>
                  FAMILIA GRANDE
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown href="#" title="DISPOSITIVOS" id="nav-dropdown">
                {["end"].map((direction) => (
                  <DropdownButton
                    drop={direction}
                    key={direction}
                    variant="secundario"
                    title={` CENTROS BARRIALES `}
                  >
                    <Dropdown.Item href="/centros#nazareth">NAZARETH</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/centros#corazondemaria">CORAZÓN DE MARÍA</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/centros#asunciondemaria">ASUNCIÓN DE MARÍA</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/centros#casamunilla">CASA MUNILLA</Dropdown.Item>
                  </DropdownButton>
                ))}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/depi">EPI</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/drefugio">REFUGIO</NavDropdown.Item>
                <NavDropdown.Divider />
                {["end"].map((direction) => (
                  <DropdownButton
                    drop={direction}
                    key={direction}
                    variant="secundario"
                    title={`   BROTA    `}
                  >
                    <Dropdown.Item href="/dbrotaproductos">
                      PRODUCTOS
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/dbrotaservicios">
                      SERVICIOS
                    </Dropdown.Item>
                  </DropdownButton>
                ))}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/dcasita">
                  CASITA LIBERTAD
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown href="#" title="CÓMO COLABORAR" id="nav-dropdown">
                <NavDropdown.Item
                  href="https://donaronline.org/hogar-de-cristo-gualeguaychu/ampliando-el-hogar-de-cristo-agrandando-el-abrazo?preview=true"
                  target="_blank"
                >
                  DONACIÓN MONETARIA
                </NavDropdown.Item>
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
                <Nav.Link href="/novedades">NOVEDADES</Nav.Link>
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


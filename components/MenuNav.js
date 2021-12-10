import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const MenuNav= () => {

    return (
        <>
        <Navbar id="top" className="fixed-top" expand="lg"  bg="dark" variant="dark">
            <div className="container">
            <Navbar.Brand className="col-md-8 col-lg-4" href="/">
                <img src="/LOGO-HDC-blanco.png" className="" alt="logo" style={{ width: '8rem' }}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-nav flex-fill justify-content-between align-items-center"> 
                    <Nav.Item>
                        <Nav.Link href="/">INICIO</Nav.Link>
                    </Nav.Item>
                    <NavDropdown href="/quienes" title="¿QUIÉNES SOMOS?" id="nav-dropdown">
                        <NavDropdown.Item href="/quienes_somos">NOSOTROS</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/quienes_somos">EQUIPO</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/quienes_somos">FAMILIA GRANDE</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown href="#" title="DISPOSITIVOS" id="nav-dropdown">
                        {['end'].map((direction) => (
                            <DropdownButton
                                drop={direction}
                                key={direction}
                                variant="secundario"
                                href="/centros_barriales"
                                title={` CENTROS BARRIALES `}
                            >
                            <Dropdown.Item href="/dispositivo_nazareth">NAZARETH</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/dispositivo_corazon_maria">CORAZÓN DE MARÍA</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/dispositivo_asuncion_maria">ASUNCIÓN DE MARÍA</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/dispositivo_casa_munilla">CASA MUNILLA</Dropdown.Item>
                            </DropdownButton>
                        ))}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/dispositivo_epi">EPI</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/dispositivo_refugio">REFUGIO</NavDropdown.Item>
                        <NavDropdown.Divider />
                            {['end'].map((direction) => (
                                <DropdownButton
                                    drop={direction}
                                    key={direction}
                                    variant="secundario"
                                    title={`   BROTA    `}
                                >
                                <Dropdown.Item href="/dispositivo_brotaproductos">PRODUCTOS</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="/dispositivo_brotaservicios">SERVICIOS</Dropdown.Item>
                                </DropdownButton>
                            ))}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/dispositivo_casita">CASITA LIBERTAD</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown href="#" title="CÓMO COLABORAR" id="nav-dropdown">
                        <NavDropdown.Item href="https://donaronline.org/hogar-de-cristo-gualeguaychu/ampliando-el-hogar-de-cristo-agrandando-el-abrazo?preview=true" target="_blank">DONACIÓN MONETARIA</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/voluntariado">SER VOLUNTARIO</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/dispositivo_brotaproductos">CONTRATAR SERVICIOS BROTA</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/dispositivo_brotaservicios">COMPRAR PRODUCTOS BROTA</NavDropdown.Item>
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
    )
}

export default MenuNav;

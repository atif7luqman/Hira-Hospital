import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from '@ant-design/icons';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="header" style={{backgroundColor:'#699BF7'}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center align-items-center">
            <Nav.Link href="#features" className='text-white'>
              <FacebookFilled style={{ fontSize: '20px', marginRight: '5px' }} />
            </Nav.Link>
            <Nav.Link href="#pricing" className='text-white' style={{ margin: '0 5px' }}>|</Nav.Link>
            <Nav.Link href="#features" className='text-white'>
              <YoutubeFilled style={{ fontSize: '20px', marginRight: '5px' }} />
            </Nav.Link>
            <Nav.Link href="#pricing" className='text-white' style={{ margin: '0 5px' }}>|</Nav.Link>
            <Nav.Link href="#features" className='text-white'>
              <InstagramFilled style={{ fontSize: '20px', marginRight: '5px' }} />
            </Nav.Link>
            <Nav.Link href="#pricing" className='text-white' style={{ margin: '0 5px' }}>|</Nav.Link>
            <Nav.Link href="#features" className='text-white'>
              <LinkedinFilled style={{ fontSize: '20px', marginRight: '5px' }} />
            </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#features" className='text-white'>
              Privacy Policy
            </Nav.Link>
            <Nav.Link href="#pricing" className='text-white' style={{ margin: '0 5px' }}>|</Nav.Link>
            <Nav.Link href="#features" className='text-white'>
              Disclaimer
            </Nav.Link>
            <Nav.Link href="#pricing" className='text-white' style={{ margin: '0 5px' }}>|</Nav.Link>
            <Nav.Link href="#features" className='text-white'>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

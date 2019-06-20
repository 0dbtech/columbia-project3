import React from 'react';
// import {}  from 'react-bootstrap';

function NavbarComponent() {
    return(
        <div>
        {/* <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Paw</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link  href="#signin">Sign In</Nav.Link>
          <Nav.Link  href="#signup">Sign Up</Nav.Link>
          <Button variant="outline-light">Search</Button>
        </Nav>
      </Navbar> */}
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal">Paw</h5>
  <nav class="my-2 my-md-0 mr-md-3">
    <a class="p-2 text-dark" href="#">Sign in</a>
    <a class="p-2 text-dark" href="#">Sign up</a>
  </nav>
</div>
      </div>
    );
}
const navLinkStyle = {
right:'0',
position:'absolute'
}

export default NavbarComponent;
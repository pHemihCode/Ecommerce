import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";

function MobileNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-2 lg:hidden">
      <GiHamburgerMenu className="text-4xl" onClick={handleShow} />
      <Offcanvas
        show={show}
        className="custom-offcanvas"
        onHide={handleClose}
        backdrop="static"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="!text-3xl !font-bold">
            MAFIA
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex flex-col gap-3 mobileNav px-3">
          <Link
            to="/"
            onClick={handleClose}
            className="flex items-center text-xl sm:text-lg"
          >
            <AiOutlineHome /> &nbsp; Home
          </Link>
          <Link
            to="products"
            onClick={handleClose}
            className="flex items-center text-xl sm:text-lg"
          >
            <RiProductHuntLine className="" /> &nbsp; Products
          </Link>
          <Link
            to="contact"
            onClick={handleClose}
            className="flex items-center text-xl sm:text-lg"
          >
            <GrContact className="" /> &nbsp; Contact
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MobileNav;

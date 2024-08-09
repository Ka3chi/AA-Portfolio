import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavItem({ label }) {
  return (
    <a href="#">
      <Typography as="li" color="blue-gray" className="p-1 font-bold">
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="Home" />
      <NavItem label="About Me" />
      <NavItem label="Projects" />
    </ul>
  );
}

export function Header({ darkMode, setdarkMode }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar className=" shadow-none custom-navbar sticky top-0 right-0 z-10" fullWidth>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"  
          color="blue-gray"
          className="mr-4 cursor-pointer text-lg font-bold flex flex-row"
        >
          <img src="" alt="Logo" />
          Aldrin John Almoradie
        </Typography>
        <div className="hidden lg:block me-1">
          <NavList />
        </div>
        <Button onClick={() => setdarkMode(!darkMode)}  color="gray" className="ms-9">
          Click Me
        </Button>
        <Button color="gray" className="hidden lg:inline-block">
          Contact Me
        </Button>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList />
          <Button className="mb-2" fullWidth>
            Contact Me
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Header;

import { Typography } from "@material-tailwind/react";
const links = ["Home", "About Me", "Project", "Contact Me"];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                >
                  {link}
                </Typography>
              </li>
            </ul>
          ))}
        </div>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Aldrin John Almoradie
        </Typography>
      </div>
    </footer>
  );
}
export default Footer;
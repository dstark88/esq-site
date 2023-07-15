import { useState, useEffect, createElement } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import QuestionMark from "../Icons/QuestionMark";
import Map from "../Icons/Map";
 
 
// nav list menu Attorneys
const navListMenuAttorneysItems = [
  {
    title: "G. Michael Denny",
    link: "/esq-site/attorneys/denny"
  },
  {
    title: "Stephen D. Boulton",
    link: "/esq-site/attorneys/boulton"
  }
];
 
function NavListMenuAttorneys() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = navListMenuAttorneysItems.map(({ title, link }) => (
    <a href={link} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="/esq-site/attorneys" className="focus:outline-none font-normal">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-5 w-5"/> Attorneys{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen && "rotate-180"}`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-7 gap-3 lg:grid"
        >
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="focus:outline-none col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <p className="text-[24px]">IRS Tax Attorneys</p>
          </Card>
          <ul className="focus:outline-none col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Attorneys{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </>
  );
}
// nav list menu Practice Areas
const navListMenuPracticeAreasItems = [
  {
    title: "Tax Controversy and Tax Litigation",
    link: "/esq-site/practice-areas/taxation"
  },
  {
    title: "Bankruptcy",
    link: "/esq-site/practice-areas/bankruptcy"
  },
  {
    title: "Business Law",
    link: "/esq-site/practice-areas/businessLaw"
  },
  {
    title: "Real Estate Law",
    link: "/esq-site/practice-areas/real-estate-law"
  }
];
 
function NavListMenuPracticeAreas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = navListMenuPracticeAreasItems.map(({ title, link }) => (
    <a href={link} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="/esq-site/practice-areas" variant="small" className="focus:outline-none whitespace-nowrap font-normal">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <CodeBracketSquareIcon className="h-5 w-5" /> Practice Areas{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="focus:outline-none col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <p className="text-[24px]">Practice Areas</p>
          </Card>
          <ul className="focus:outline-none col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <CodeBracketSquareIcon className="h-5 w-5" /> Practice Areas{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "About Us",
    icon: CubeTransparentIcon,
    link: "/esq-site/about-us"
  },
  {
    label: "FAQs",
    icon: QuestionMark,
    link: "/esq-site/faq"
  },
  {
    label: "Contact Us",
    icon: Map,
    link: "/esq-site/contact"
  },
];
 
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenuAttorneys />
      <NavListMenuPracticeAreas />
      {navListItems.map(({ label, icon, link }, key) => (
        <Typography
          key={label}
          as="a"
          href={link}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="whitespace-nowrap flex items-center gap-2 lg:rounded-full">
            {createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
 
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 rounded-none">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href="/esq-site/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Denny & Boulton
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-1/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
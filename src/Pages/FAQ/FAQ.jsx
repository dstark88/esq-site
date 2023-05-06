import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Chevron from "../../Components/Icons/Chevron";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion
        open={open === 1}
        icon={<Chevron id={1} open={open} />}
        className="border border-blue-gray-100 px-4 rounded-lg mb-2"
        animate={customAnimation}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          FAQ #1
        </AccordionHeader>
        <AccordionBody className="text-base font-normal pt-0">
          Answer #1
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Chevron id={2} open={open} />}
        animate={customAnimation}
        className="border border-blue-gray-100 px-4 rounded-lg mb-2"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          FAQ #2
        </AccordionHeader>
        <AccordionBody className="text-base font-normal pt-0">
          Answer #2
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Chevron id={3} open={open} />}
        animate={customAnimation}
        className="border border-blue-gray-100 px-4 rounded-lg"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          FAQ #3
        </AccordionHeader>
        <AccordionBody className="text-base font-normal pt-0">
          Answer #3
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

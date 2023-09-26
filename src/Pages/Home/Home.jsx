import { Typography, Button } from "@material-tailwind/react";

import CarouselComponent from "../../Components/Carousel/Carousel";
import ThreeSectionText from "../../Components/SectionText/ThreeSectionText/ThreeSectionText";
import TwoSectionText from "../../Components/SectionText/TwoSectionText/TwoSectionText";
import ButtonComponent from '../../Components/Button/Button';

export default function Home() {
  const className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded';

  const sections = [
    {
      title: 'TAX CONTROVERSY',
      text: 'Dealing with IRS is overwhelming. You don’t know where to start. You don’t know what your rights are. Let us be your advocate and stand up and fight for you and get you the fresh start you deserve.',
      button: <ButtonComponent className={className} label='LEARN MORE' />
    },
    {
      title: 'BANKRUPTCY',
      text: 'If you need immediate relief from debt collectors, we go above and beyond to ensure you are taken care of. Put your trust that we will deliver.',
      button: <ButtonComponent className={className} label='LEARN MORE' />
    },
    {
      title: 'REAL ESTATE',
      text: 'No matter what the case may be, if you need us, we want to be there for you. Watch as we lend a helping hand',
      button: <ButtonComponent className={className} label='LEARN MORE' />
    }
  ];
  const sections2 = [
    {
      title: 'THE TAX ADVANTAGES OF OWNING A HOME',
      text: 'One of the main reasons people purchase a home is the psychological satisfaction in owning a home. Not only can owning a home be rewarding in…',
      button: <ButtonComponent className={className} label='Continue Reading' />
    },
    {
      title: 'FIVE IMPORTANT TIPS ON GAMBLING INCOME AND LOSSES',
      text: 'Whether you roll the dice, bet on the ponies, play cards or enjoy slot machines, you should know that as a casual gambler, your gambling winnings…',
      button: <ButtonComponent className={className} label='Continue Reading' />
    }
  ];
  const sections3 = [
    {
      title: 'NINE FACTS ABOUT CAPITAL GAINS AND LOSSES',
      text: 'The term “capital asset” for tax purposes applies to almost everything you own and use for personal or investment purposes. A capital gain or loss occurs…',
      button: <ButtonComponent className={className} label='Continue Reading' />
    },
    {
      title: 'AN ANNUAL FINANCIAL TO-DO LIST',
      text: 'As the year is winding down, it’s time to get a move on the financial housekeeping you’ve been putting off. You’ll want to update important paperwork…',
      button: <ButtonComponent className={className} label='Continue Reading' />
    }
  ];

  return (
    <>
      <div className="">
        <CarouselComponent />
      </div>
      <div className="mt-5">
        <div className="py-16">
          <div className="text-[36px] font-bold pb-5">
            You Deserve a Fresh Start
          </div>
          <div className="text-[16px] font-bold pb-10">
            Let us help you navigate your legal options.
          </div>
          <ThreeSectionText sections={sections} />
        </div>
        <div className="relative h-[400px] -m-5 md:-mx-20">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-full pl-12 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                We protect our clients
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Let us navigate the complexities of Tax Law to achieve your desired outcome and protect you and your family.
              </Typography>
            </div>
          </div>
        </div>
        <div className="py-16 bg-green-50">
          <div className="text-[36px] font-bold pb-5">
            Knowledge.
          </div>
          <div className="text-[16px] font-bold pb-10">
            Stay on top of important tax related concepts.
          </div>
          <TwoSectionText sections={sections2} />
          <div className="my-10" />
          <TwoSectionText sections={sections3} />
        </div>
      </div>
    </>
  );
}

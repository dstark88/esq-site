import { Link } from "react-router-dom";

export default function PracticeAreas() {
  return (
    <>
      <h1>Practice Areas</h1>
      <br />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <h2>Taxation</h2>
          <p>
            We’ve helped hundreds of taxpayers from across the country resolve
            their IRS and local taxing authority issues. Our expertise includes
            preparation of unfiled tax returns (our record is 25 years), federal
            income tax audits, sales tax audits, property tax issues, Offers in
            Compromise, installment agreements, tax penalty abatements, foreign
            bank account reports (FBARs), innocent spouse relief, tax-motivated
            bankruptcy, and many related difficulties. Please take a moment to
            explore our website and learn more about our services.
          </p>
          <Link to="/esq-site/practice-areas/taxation" className="text-blue-500">
            Read More >>
          </Link>
        </div>
        <div className="col-span-1">
          <h2>Business Law</h2>
          <p>
            Choosing the right type of business entity can save business owners
            money by lowering their taxes and reducing the complexity and cost
            of running the business. Generally, business owners must choose
            between a sole proprietorship, limited liability company,
            partnership, or corporation. Moreover, the business owner must
            choose how they want their business entity to be taxed: as a
            disregarded entity, partnership, S corporation, or C corporation.
            The right type of entity can have significant income tax and asset
            protection consequences. We can help business owners discuss the
            pros and cons of each entity type in terms of ease and cost of
            formation, control and management, liability protection, and federal
            income taxation issues. Please take a moment to explore our website
            and learn more about our services.
          </p>
          <Link to="/esq-site/practice-areas/businessLaw" className="text-blue-500">
            Read More >>
          </Link>
        </div>
      </div>
      <br />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <h2>Bankruptcy</h2>
          <p>
            We have helped hundreds of Arizonans just like you get a fresh start. Perhaps divorce, the loss of a job or business, illness, or other circumstances beyond your control have left you in financial ruin. A bankruptcy may enable you to eliminate or drastically reduce your debt while keeping your home, car, retirement accounts, and personal possessions. We can give you the immediate debt protection you need plus help you find the best path to a financially stable future. Please take a moment to explore our website and learn more about our services.
          </p>
          <Link to="/esq-site/practice-areas/bankruptcy" className="text-blue-500">
            Read More >>
          </Link>
        </div>
        <div className="col-span-1">
          <h2>Real Estate Law</h2>
          <p>
            Purchasing property at a tax sale is a great way of acquiring a house at an inexpensive price. The laws are very specific and any mistake in the procedures will result in a loss of the property. Our firm can guide you through this process. Please take a moment to explore our website and learn more about our services..
          </p>
          <Link to="/esq-site/practice-areas/real-estate-law" className="text-blue-500">
            Read More >>
          </Link>
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";

export default function Attorneys() {
  return (
    <>
      <h1>Attorneys</h1>
      <br />
      <h2>G. Michael Denny | Attorney</h2>
      <br />
      <p>
        Mr. Denny’s expertise includes individual and business bankruptcies and
        tax resolutions regarding federal and state issues, including income
        tax, sales tax, property tax liens, penalty abatements, levies and
        seizures, and negotiating withdrawals and releases, installment
        agreements, and offers in compromise.
      </p>
      <Link to="/esq-site/attorneys/denny" className="text-blue-500">
        Read More >>
      </Link>
      <br />
      <br />
      <br />
      <h2>Stephen D. Boulton | Attorney</h2>
      <br />
      <p>
        In 2014, Mr. Boulton accepted a position with the Denny Law Group, PLLC.
        Mr. Boulton brought his extensive knowledge of tax related legal issues
        to compliment Mr. Denny’s knowledge and passion of bankruptcy. Together,
        Denny & Boulton, P.C. is able to offer taxpayers a complete and thorough
        analysis of their tax situation and provide all available resolutions.
      </p>
      <Link to="/esq-site/attorneys/boulton" className="text-blue-500">
        Read More >>
      </Link>
    </>
  );
}

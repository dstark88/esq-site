import LawBooks from "../../Components/Images/lawBooks.jpg";

export default function Home() {
  return (
    <>
      <div className="max-h-[700px] w-full">
        <img className="" src={LawBooks} alt="">
        </img>
        <div className="-mt-40 mb-10 text-white pl-10">
          <h1 className="">IRS Tax Attorneys</h1>
          <h4 className="">Experienced. Caring. Effective.</h4>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            CALL FOR A CONSOLATION
          </button>
        </div>
      </div>

    </>
  );
}

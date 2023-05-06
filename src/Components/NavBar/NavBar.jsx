import { useState } from "react";

import Open from "../Icons/Open";
import Close from "../Icons/Close";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/esq-site">
                            <h2 className="text-2xl font-bold">Denny & Boulton</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <Open />
                                ) : (
                                    <Close />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/esq-site/attorneys">Attorneys</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/esq-site/practice-areas">Practice Areas</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/esq-site/about-us">About Us</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/esq-site/faq">FAQs</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/esq-site/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import SocialIcons from './SocialIcons';
import { Icons, RESOURCES, COMPANY,SUPPORT, PRODUCTS } from "./footersMenu";
import Items from "./footeritems";



export default function Footer() {
  return (
    <div className="bg-white dark:bg-gray-900 py-9 sm:py-32 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-2xl font-semibold leading-8 text-indigo-600">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 mb-3">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
          <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none text-white">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-4 md:gap-x-12 md:gap-y-16">
          
            <Items links={RESOURCES} title="RESOURCE"/>
            <Items links={COMPANY} title="COMPANY"/>
            <Items links={PRODUCTS} title="PRODUCTS"/>
            <Items links={SUPPORT} title="SUPPORT"/>

          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </div>
  );
}

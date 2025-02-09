

// import React, { useState } from 'react';
// import { FaPhoneAlt } from "react-icons/fa";
// import { BiShoppingBag } from "react-icons/bi";
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { 
//       title: 'WHIRLPOOL', 
//       hasDropdown: true,
//       path: '/whirlpool',
//       dropdownItems: [
//         { title: 'Indoor Whirlpools', path: '/whirlpool/indoor' },
//         { title: 'Outdoor Whirlpools', path: '/whirlpool/outdoor' },
//         { title: 'Accessories', path: '/whirlpool/accessories' }
//       ]
//     },
//     { 
//       title: 'SWIMSPA', 
//       hasDropdown: false,
//       path: '/swimspa'
//     },
//     { 
//       title: 'SALE%', 
//       hasDropdown: false,
//       path: '/sale'
//     },
//     { 
//       title: 'SHOP', 
//       hasDropdown: true,
//       path: '/shop',
//       dropdownItems: [
//         { title: 'New Arrivals', path: '/shop/new' },
//         { title: 'Best Sellers', path: '/shop/best-sellers' },
//         { title: 'Special Offers', path: '/shop/offers' }
//       ]
//     },
//     { 
//       title: 'SPA FRAME', 
//       hasDropdown: false,
//       path: '/spaframe'
//     },
//     { 
//       title: 'CUBE POOLS', 
//       hasDropdown: false,
//       path: '/cubepools'
//     },
//     { 
//       title: 'SHOWROOMS/CONTACT', 
//       hasDropdown: true,
//       path: '/contact',
//       dropdownItems: [
//         { title: 'Find Showroom', path: '/contact/showrooms' },
//         { title: 'Contact Us', path: '/contact/us' },
//         { title: 'Book Appointment', path: '/contact/appointment' }
//       ]
//     },
//     { 
//       title: 'SERVICE', 
//       hasDropdown: false,
//       path: '/service'
//     },
//     { 
//       title: 'COUNSELOR', 
//       hasDropdown: false,
//       path: '/counselor'
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* Top Banner */}
//       <div className="w-full bg-sky-800">
//         <h6 className="text-center text-white font-bold py-2 text-sm md:text-base">
//           ARRANGE A CONSULTATION APPOINTMENT
//         </h6>
//       </div>

//       {/* Main Header */}
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center justify-between py-4">
//           {/* Logo */}
//           <div className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
//             <Link to="/">
//               <img 
//                 className="h-12 md:h-16" 
//                 src="https://www.whirlpool-handel.de/cdn/shop/files/Logo_Webseite_schwarz_290x@2x.png?v=1613701554" 
//                 alt="Logo" 
//               />
//             </Link>
//           </div>

//           {/* Contact and Cart */}
//           <div className="w-full lg:w-3/4 flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0">
//             {/* Contact Box */}
//             <div className="flex items-center border-2 border-blue-900 p-2 md:p-3 mx-2">
//               <img 
//                 src="https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-man-avatar-isolated-on-white-background-png-image_4891418.png" 
//                 className="w-12 h-12 md:w-16 md:h-16"
//                 alt="Avatar" 
//               />
//               <div className="flex items-center ml-2">
//                 <FaPhoneAlt className="text-2xl md:text-3xl mx-2" />
//                 <div className="text-sm md:text-base">
//                   <p>WE ARE HAPPY TO ADVERTISE YOU!</p>
//                   <p className="font-bold">07306 9 57 90 60</p>
//                 </div>
//               </div>
//             </div>

//             {/* Cart Icon */}
//             <Link to="/cart" className="ml-4">
//               <BiShoppingBag className="text-2xl md:text-3xl" />
//             </Link>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="bg-white py-4">
//           <div className="lg:hidden flex justify-end">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 focus:outline-none"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
//             <ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-2 lg:space-y-0 lg:space-x-6">
//               {navItems.map((item, index) => (
//                 <li key={index} className="relative group">
//                   {item.hasDropdown ? (
//                     <div>
//                       <Link 
//                         to={item.path}
//                         className="w-full text-left px-4 py-2 text-sm font-medium hover:text-blue-600 flex items-center text-dark justify-between"
//                       >
//                         {item.title}
//                         <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </Link>
//                       <ul className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
//                         {item.dropdownItems.map((dropdownItem, dropIndex) => (
//                           <li key={dropIndex}>
//                             <Link 
//                               to={dropdownItem.path}
//                               className="block px-4 py-2 text-sm hover:bg-gray-100"
//                             >
//                               {dropdownItem.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ) : (
//                     <Link 
//                       to={item.path}
//                       className="block px-4 py-2 text-sm text-dark font-medium hover:text-blue-600"
//                     >
//                       {item.title}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;





import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="w-full bg-sky-800">
        <h6 className="text-center text-white font-bold py-2 text-sm md:text-base">
        BERATUNGSTERMIN VEREINBAREN        </h6>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-4">
          {/* Logo */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0">
            <Link to="/">
              <img 
                className="h-12 md:h-16" 
                src="https://www.whirlpool-handel.de/cdn/shop/files/Logo_Webseite_schwarz_290x@2x.png?v=1613701554" 
                alt="Logo" 
              />
            </Link>
          </div>

          {/* Contact and Cart */}
          <div className="w-full lg:w-3/4 flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0">
            {/* Contact Box with Avatar */}
            <div className="flex items-center border-2 border-blue-900 px-3 py-2 md:p-3 mx-2 bg-white shadow-md rounded-md">
              <img 
                src="https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-man-avatar-isolated-on-white-background-png-image_4891418.png" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                alt="Avatar" 
              />
              <div className="flex items-center ml-3">
                <FaPhoneAlt className="fs-2 text-lg md:text-xl" />
                <div className="text-xs md:text-sm ml-2">
                  <p className="text-gray-700">Wir beraten Sie gerne!</p>
                  <p className="font-bold text-black" style={{float:'inline-end'}}>info@handle-whirlpool.de</p>
                </div>
              </div>
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="ml-4 text-gray-800 hover:text-blue-600">
              <BiShoppingBag className="text-2xl md:text-3xl" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white py-4 border-t">
          <div className="lg:hidden flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}> 
            <ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <li><Link to="/whirlpool" className="text-dark font-medium hover:text-blue-600">WHIRLPOOL</Link></li>
              <li><Link to="/swimspa" className="text-dark font-medium hover:text-blue-600">SWIMSPA</Link></li>
              <li><Link to="/sale" className="text-dark font-medium hover:text-blue-600">ABVERKAUF%</Link></li>
              <li><Link to="/shop" className="text-dark font-medium hover:text-blue-600">SHOP</Link></li>
              <li><Link to="/spaframe" className="text-dark font-medium hover:text-blue-600">SPA FRAME</Link></li>
              <li><Link to="/cubepools" className="text-dark font-medium hover:text-blue-600">CUBE POOLS</Link></li>
              <li><Link to="/contact" className="text-dark font-medium hover:text-blue-600">SHOWROOMS/CONTACT</Link></li>
              <li><Link to="/service" className="text-dark font-medium hover:text-blue-600">SERVICE</Link></li>
              <li><Link to="/counselor" className="text-dark font-medium hover:text-blue-600">
               RATGEBER</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

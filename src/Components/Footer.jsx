import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


function Footer() {
  return (
    <div>


<footer className="bg-white text-black py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-lg font-semibold tracking-wide uppercase">Erhalten Sie den Newsletter</h2>
          <div className="flex w-full max-w-lg border border-gray-300 rounded overflow-hidden">
            <input
              type="email"
              placeholder="your email"
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="bg-blue-900 text-white px-4 py-2">Registrierung</button>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-10">
          {/* Social Media */}
          <div>
            <h6 className="font-semibold uppercase">Folge uns</h6>
            <div className="flex justify-center space-x-4 mt-2">
             <a className='text-dark' href=""><FaFacebookSquare /></a>
             <a className='text-dark' href=""><FaInstagram /></a>
          <a className='text-dark' href=""><FaYoutube /></a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h6 className="font-semibold uppercase">Wichtige Links</h6>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>Impressum</li>
              <li>Datenschutzbestimmungen</li>
              <li>Widerrufsrecht</li>
              <li>Zahlung und Versand</li>
              <li>Nutzungsbedingung</li>
            </ul>
          </div>

          {/* Showroom Vöhringen */}
          <div>
            <h6 className="font-semibold uppercase">Showroom Vöhringen</h6>
            <p className="mt-2">+49 7306 9579060</p>
            <p className="text-gray-600">team@whirlpool-handel.de</p>
            <p className="text-gray-600">Untere Hauptstraße 21</p>
            <p className="text-gray-600">89269 Vöhringen, Germany</p>
          </div>

          {/* Showroom Roth */}
          <div>
            <h6 className="font-semibold uppercase">Showroom Roth</h6>
            <p className="mt-2">+49 9129 2957220</p>
            <p className="text-gray-600">team@whirlpool-handel.de</p>
            <p className="text-gray-600">Lösmühle 2g</p>
            <p className="text-gray-600">91154 Roth, Germany</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center space-x-2 mt-8">
          <img src="https://cdn-icons-png.freepik.com/256/5968/5968245.png" alt="Amex" className="h-8" />
          <img src="https://developer.apple.com/news/images/og/apple-pay-og.jpg" alt="Apple Pay" className="h-8" />
          <img src="https://1000logos.net/wp-content/uploads/2023/03/Google-Pay-logo.png" alt="Google Pay" className="h-8" />
          <img src="https://www.shutterstock.com/image-vector/paypal-logo-illustration-icon-isolated-260nw-2288114047.jpg" alt="PayPal" className="h-8" />
          <img src="https://i.pinimg.com/1200x/83/2d/a8/832da889919f91412309bb762e2831a3.jpg" alt="Visa" className="h-8" />
          <img src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg?quality=90&strip=all&crop=0,16.666666666667,100,66.666666666667" alt="MasterCard" className="h-8" />
          <img src="https://www.svgrepo.com/show/328124/unionpay.svg" alt="UnionPay" className="h-8" />
          <img src="https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo.png" alt="Shopify" className="h-8" />
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2025 WSG | Whirlpool Trade
        </p>
      </div>
    </footer>

    </div>
  )
}

export default Footer
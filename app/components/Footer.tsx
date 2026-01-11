import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-green-700 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Satya Social Welfare Trust</h3>
            <p className="text-stone-100">
              Committed to social well-being, rural development, and community growth.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-stone-100 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services/sahajayoga" className="text-stone-100 hover:text-white transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">📞 Contact</h4>
            <div className="space-y-2 text-stone-100">
              <div>
                <p className="font-semibold">K Subbi Reddy</p>
                <p>Managing Trustee</p>
                <p>Satya Social Welfare Trust</p>
                <p>Regd.no 29/IV/2017</p>
              </div>
              <div className="mt-3">
                <p> +91-9848118765 </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">📍Location</h4>
            <div className="space-y-2 text-stone-100">
              <p>D.No.3-165, Rajupalem</p>
              <p>Gollala Mamidada</p>
              <p>Pedapudi mandalam</p>
              <p>Kakinada Dist. A.P.</p>
              <p>Pin Code : 533344</p>
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-600 pt-8 text-center text-stone-100">
          <p>© 2026 Satya Social Welfare Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
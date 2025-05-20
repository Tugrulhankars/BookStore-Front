import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Şirket Bilgisi */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Şirket Adı</h3>
                    <p className="text-sm text-gray-400">
                        Bizi tercih ettiğiniz için teşekkürler. Kaliteli hizmet anlayışıyla her zaman yanınızdayız.
                    </p>
                </div>

                {/* Hızlı Linkler */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition">Hakkımızda</a></li>
                        <li><a href="#" className="hover:text-white transition">Hizmetler</a></li>
                        <li><a href="#" className="hover:text-white transition">İletişim</a></li>
                        <li><a href="#" className="hover:text-white transition">SSS</a></li>
                    </ul>
                </div>

                {/* Sosyal Medya */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-500 transition">Facebook</a>
                        <a href="#" className="hover:text-blue-400 transition">Twitter</a>
                        <a href="#" className="hover:text-pink-500 transition">Instagram</a>
                    </div>
                </div>
            </div>

            {/* Alt Çizgi */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-500">
                © 2025 Şirket Adı. Tüm hakları saklıdır.
            </div>
        </footer>

    )
}

export default Footer
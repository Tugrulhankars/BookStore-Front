/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HomePageSlice() {
  return (
    <div className="flex flex-col items-center">
      <div className="slider-container w-full" style={{ height: '500px' }}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <SwiperSlide>
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '10%',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                <h2>Yeni Kitaplar</h2>
                <p>En yeni ve popüler kitapları keşfedin</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '10%',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                <h2>Klasikler</h2>
                <p>Zamansız klasik eserler</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundImage: 'url("https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '10%',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                <h2>Çok Satanlar</h2>
                <p>En çok okunan kitaplar</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Arama Çubuğu */}
      <div className="w-full max-w-3xl px-4 mt-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Kitap, yazar veya kategori ara..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-colors"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Ara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageSlice;

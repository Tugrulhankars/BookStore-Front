import React from 'react'

function BookCard() {
    return (
        <div className='bg-zinc-100'>
            <div className='mx-auto max-w-xl px-4 py-2'>
                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10'>
                    <div className='group relative'>
                        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" className='aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80' />
                        <div className='mt-4 flex flex-col justify-between'>
                            <div className='flex flex-col gap-y-3'>
                                <p class="mt-1 text-sm text-gray-500">Açıklama</p>
                                <p class="text-sm font-medium text-gray-900">Fiyat</p>
                                <p className='text-sm font-medium text-gray-900'>Yayın İsmi</p>
                            </div>
                        </div>
                    </div>
                    <button class="mt-1 mb-2.5 bg-gray-900 text-white rounded-2xl h-10 px-4 transition duration-300 ease-in-out hover:bg-gray-700 cursor-pointer">
                        Sepete Ekle
                    </button>



                </div>
            </div>
        </div>
    )
}

export default BookCard
import React from 'react'
import { useState } from 'react';

function BookFilter() {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        // Sadece rakamları al (nokta ve harfleri çıkar)
        const rawValue = e.target.value.replace(/\D/g, '');

        // Sayıyı binlik ayraçla biçimlendir
        const formatted = new Intl.NumberFormat('tr-TR').format(rawValue);

        setValue(formatted);
    };
    return (
        <div>
            <form action="">
                <div>
                    <input type="text" placeholder='Kitap Ara' />
                </div>
                <div>
                    <input type="text" placeholder='Yayın Adı' />
                </div>
                <div>
                    <input type="text" placeholder='Yazar Adı' />
                </div>
                <div>
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder="Fiyat girin"
                        className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder="Fiyat girin"
                        className=" px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </form>
        </div>
    )
}

export default BookFilter
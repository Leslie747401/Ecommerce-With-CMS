'use client';

import { useEffect } from 'react';
import { Rubik } from 'next/font/google';
import Link from 'next/link';

const RubikFont = Rubik({ subsets: ['latin'] });

export default function NotFound() {
  useEffect(() => {
    const str = `Page Not Found • Page Not Found • Page Not Found • `;
    const text = document.getElementById('text');

    if (text) {
      const characters = str.split('');
      const rotationAngle = 360 / characters.length; // Distribute characters evenly

      characters.forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.display = 'inline-block';
        span.style.position = 'absolute';
        span.style.transform = `rotate(${i * rotationAngle}deg)`; // Adjusts position on the circle

        text.appendChild(span);
      });
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Empty div, characters will be appended dynamically */}
      <p id="text" className={`${RubikFont.className} text-xl mobile:w-[500px] mobile:h-[500px] max-mobile:w-[280px] max-mobile:h-[280px] relative`}></p>
      <Link href={'/'} className={`absolute bg-black text-white mobile:w-[350px] mobile:h-[350px] max-mobile:w-[180px] max-mobile:h-[180px] flex justify-center items-center rounded-full mobile:text-3xl max-mobile:text-xl hover:bg-[#2b2b2b] transition-all duration-300`}>Go Home</Link>
    </div>
  );
}

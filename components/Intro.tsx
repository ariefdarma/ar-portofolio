import React from 'react';
import Image from 'next/image';
import Picture from '@/public/192dfd64e8dca58f580756cc934a155e--miao-grey-man.webp';

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src={Picture}
            alt={'Arief Darma'}
            width="192"
            height="192"
            quality="95"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}

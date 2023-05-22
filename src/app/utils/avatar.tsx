import Image from 'next/image';
import React from 'react';

export default function Avatar({ url }: { url: string }) {
  const altText = 'Avatar from github user';
  return <Image alt={altText} src={url} width='200' height='200' className='rounded-full' />
}

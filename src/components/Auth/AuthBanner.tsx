import Image from 'next/legacy/image';

export default function AuthBanner({ src }: { src: string }) {
  return (
    <div className="flex-1  justify-center items-center md:flex hidden">
      <Image
        placeholder="blur"
        blurDataURL={src}
        property="true"
        priority
        src={src}
        alt="BannerImage"
      />
    </div>
  );
}

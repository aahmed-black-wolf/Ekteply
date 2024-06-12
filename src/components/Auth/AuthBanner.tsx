import Image from 'next/legacy/image';

export default function AuthBanner({ src }: { src: string }) {
  return (
    <div className="lg:flex-1 lg:max-w-full hidden  md:flex md:max-w-[300px] justify-center items-center h-full">
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

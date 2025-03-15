import Image from 'next/image';
import HeroImg from 'public/alone-neon-neon-typography-dark-3207x2551-1077.jpg'

const Hero = () => {
    return (
        <div className='relative h-screen'>
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={HeroImg}
                    fill
                    alt='Image'
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className='flex items-center justify-center pt-64'>
                <h1 className='font-bold text-6xl text-white'>Couple Be</h1>
            </div>
        </div>
    );
};

export default Hero;
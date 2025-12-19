import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  // const screenHeight = window.innerHeight;
  // console.log(screenHeight);
  // console.log((screenHeight / 3))

  useEffect(() => {
    const headerEl = document.querySelector('header');
    if (!headerEl) return;

    const updateHeader = () => {
      const screenHeight = window?.innerHeight;
      console.log(screenHeight)
      const onHero = window?.scrollY > (screenHeight / 3);

      if (onHero) {
        headerEl.classList.add('bg-custom-white', 'py-1.5', 'opacity-90');
        headerEl.classList.remove('bg-transparent', 'py-3');
      } else {
        headerEl.classList.remove('bg-custom-white', 'py-1.5', 'opacity-90');
        headerEl.classList.add('bg-transparent', 'py-3');
      }
    };

    updateHeader();

    window.addEventListener('scroll', updateHeader);
    window.addEventListener('resize', updateHeader);

    // cleanup on unmount
    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('resize', updateHeader);
    };
  }, []);

  return (
    <>
      <header className='fixed top-0 left-0 right-0 py-3 transition-all duration-700 ease-in-out px-3 md:px-6 border-b border-b-custom-brown z-40'>
        <div className='relative flex items-start md:items-center justify-between'>
          <h1 className='order-2 flex-1 text-xl text-center text-nowrap font-bold uppercase z-50'>Urban Heritage</h1>
          <nav className='order-1 flex-1 max-md:absolute max-md:top-12 max-md:left-0 z-50'>
            <ul 
              className={`
                flex md:flex-row gap-2 md:gap-3.5 text-start
                transition-all duration-700 ease-in-out max-md:bg-custom-brown 
                max-md:flex-col max-md:py-4 max-md:px-3 max-md:text-lg md:font-semibold max-md:rounded-xl z-50
                ${navOpen
                  ? 'max-md:opacity-100 max-md:translate-y-0 max-md:pointer-events-auto'
                  : 'max-md:opacity-0 max-md:-translate-y-4 max-md:pointer-events-none'}
                `}>
                  <li className="before:content-['['] after:content-[']']"><a href="#">Home</a></li>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Sale</a></li>
                  <li><a href="#">Lookbook</a></li>
            </ul>
          </nav>
          <section className='relative order-3 flex-1 flex items-center justify-end gap-2 z-50'>
            <a href="#">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </a>
            <div 
              className={`
                flex md:flex-row gap-2
                transition-all duration-700 ease-in-out max-md:bg-custom-brown 
                max-md:flex-col max-md:py-4 max-md:px-3 max-md:absolute max-md:top-12 max-md:items-end max-md:rounded-xl
                ${userMenuOpen
                  ? 'max-md:opacity-100 max-md:translate-y-0 max-md:pointer-events-auto'
                  : 'max-md:opacity-0 max-md:-translate-y-4 max-md:pointer-events-none'}
                `}>
                  <a href="" className='flex items-center max-md:gap-2'>
                    <span className='block md:hidden'>Favorites</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                  </a>
                  <a href="" className='flex items-center max-md:gap-2'>
                    <span className='block md:hidden'>Cart</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/></svg>
                  </a>
            </div>
            <span onClick={() => setUserMenuOpen(!userMenuOpen)}>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            </span>
          </section>
          <div className='order-1 flex-1 md:hidden'>
            <svg
              id='menu-open'
              className={`${navOpen ? 'hidden' : 'block'} size-8 cursor-pointer`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              onClick={() => {
                setNavOpen(true);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-8'
              >
                <path
                  fillRule='evenodd'
                  d='M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                  clipRule='evenodd'></path>
              </svg>
            </svg>

            <svg
              id='menu-close'
              className={`${navOpen ? 'block' : 'hidden'} size-8 cursor-pointer`}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor' 
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-8'
              >
                <path
                  fillRule='evenodd'
                  d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
                  clipRule='evenodd'></path>
              </svg>
            </svg>
          </div>
        </div>
      </header>

      <section className='hero px-3 md:px-6 flex flex-col items-center justify-between min-h-screen'>
        <h2 className='pt-28 lg:pt-24 flex flex-col gap-y-2 items-center text-3xl md:text-5xl uppercase'>
          <span className='flex items-center gap-2'>
            <span className="">The</span><span className='border-b border-b-custom-gray typewriter'> Urban Heritage</span>
          </span>
          <span className="self-center">Collection</span>
        </h2>
        <div className='flex items-center gap-2 pt-4'>
          <a href="" className='px-2.5 py-1.5 border border-custom-black hover:bg-custom-gray hover:opacity-50 focus:bg-custom-gray focus:opacity:50 active:bg-custom-gray active:opacity-50 transition-all duration-700 ease-in-out rounded-3xl'>Mordern Icons</a>
          <a href="" className='px-2.5 py-1.5 border border-custom-black hover:bg-custom-gray hover:opacity-50 focus:bg-custom-gray focus:opacity:50 active:bg-custom-gray active:opacity-50 transition-all duration-700 ease-in-out rounded-3xl'>New Silhouettes</a>
        </div>
        <section className='flex-1 w-full relative mt-7'>
          <div className='absolute top-5.5 left-5.5 me-5.5 flex flex-col items-start gap-4 bg-custom-black text-custom-white p-4 max-w-lg rounded-3xl'>
            <p>At Urban Heritage, we design with intention — blending classic European tailoring with bold architectural lines. Each piece tells a story of refinement, versatility, and individuality, crafted for those who move effortlessly between tradition and innovation.</p>
            <a href="" className='flex items-end gap-2 border-b border-b-custom-white'>
              <span>Explore the Collection</span>
              <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
            </a>
          </div>
          <div className='flex-1 h-[70vh] 2xl:h-[55vh] w-full'>
            <img src="/images/hero1.png" alt="" className='h-full w-full object-cover rounded-3xl' />
          </div>
        </section>
      </section>

      <main className=''>
        <section className='pt-10'>
          <div className="flex items-center justify-between px-3 md:px-6">
            <h2 className="before:content-['['] after:content-[']']">Categories</h2>
            <a href="" className='flex items-end gap-2 border-b border-b-custom-black text-sm'>
              <span>View all products</span>
              <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
            </a>
          </div>

          <section className='pt-7 ps-3 md:ps-6 flex flex-col md:flex-row gap-3 justify-between md:items-center'>
            <div className='flex-1 flex flex-row flex-wrap md:flex-col gap-x-9'>
              <h3>
                <span className="uppercase text-custom-gray hover:text-custom-black focus:text-custom-black active:text-custom-black transition-all duration-450 ease-in-out relative">
                  <span className='text-4xl me-2'>New in</span>
                  <sup className='absolute top-0'>47</sup>
                </span>
              </h3>
              <h3>
                <span className="uppercase text-custom-gray hover:text-custom-black focus:text-custom-black active:text-custom-black transition-all duration-450 ease-in-out relative">
                  <span className='text-4xl me-2'>Men</span>
                  <sup className='absolute top-0'>40</sup>
                </span>
              </h3>
              <h3>
                <span className="uppercase text-custom-gray hover:text-custom-black focus:text-custom-black active:text-custom-black transition-all duration-450 ease-in-out relative">
                  <span className='text-4xl me-2'>Women</span>
                  <sup className='absolute top-0'>147</sup>
                </span>
              </h3>
              <h3>
                <span className="uppercase text-custom-gray hover:text-custom-black focus:text-custom-black active:text-custom-black transition-all duration-450 ease-in-out relative">
                  <span className='text-4xl me-2'>LookBook</span>
                  <sup className='absolute top-0'>417</sup>
                </span>
              </h3>
              <h3>
                <span className="uppercase text-custom-gray hover:text-custom-black focus:text-custom-black active:text-custom-black transition-all duration-450 ease-in-out relative">
                  <span className='text-4xl me-2'>Accessories</span>
                  <sup className='absolute top-0'>427</sup>
                </span>
              </h3>
              <h3>
                <span className="uppercase text-custom-gray hover:text-custom-black focus:text-custom-black active:text-custom-black transition-all duration-450 ease-in-out relative">
                  <span className='text-4xl me-2'>Footwear</span>
                  <sup className='absolute top-0'>427</sup>
                </span>
              </h3>
            </div>
            <section className='flex-1 flex items-start gap-5 py-7 px-5 overflow-x-auto snap-x snap-mandatory'>
              <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
                <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
                <p className='order-3 text-xs'>One size</p>
                <p className='order-4 text-sm text-custom-gray'>12.30</p>
                <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
              </article>
              <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
                <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Crop-top</h4>
                <p className='order-3 text-xs'>S / M / L / XL</p>
                <p className='order-4 text-sm text-custom-gray'>12.30</p>
                <img src="/images/wear2.avif" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
              </article>
              <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
                <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize t-Shirt</h4>
                <p className='order-3 text-xs'>S / M / L / XL</p>
                <p className='order-4 text-sm text-custom-gray'>12.30</p>
                <img src="/images/wear3.jpg" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
              </article>
              <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
                <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
                <p className='order-3 text-xs'>S / M / L / XL</p>
                <p className='order-4 text-sm text-custom-gray'>12.30</p>
                <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
              </article>
              <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
                <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
                <p className='order-3 text-xs'>S / M / L / XL</p>
                <p className='order-4 text-sm text-custom-gray'>12.30</p>
                <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
              </article>
              <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
                <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
                <p className='order-3 text-xs'>S / M / L / XL</p>
                <p className='order-4 text-sm text-custom-gray'>12.30</p>
                <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
              </article>
              <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
                <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
                <p className='order-3 text-xs'>S / M / L / XL</p>
                <p className='order-4 text-sm text-custom-gray'>12.30</p>
                <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
              </article>
              <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
                <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
                <p className='order-3 text-xs'>S / M / L / XL</p>
                <p className='order-4 text-sm text-custom-gray'>12.30</p>
                <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
              </article>
            </section>
          </section>
        </section>

        <section className='pt-10 px-3 md:px-6'>
          <h2 className="before:content-['['] after:content-[']']">Philosophy</h2>
          <div className='w-full pt-7'>
            <img
              src="/images/wear2.avif"
              alt=""
              className="float-right clear-both ml-4 md:ml-20 xl:ml-40 mb-4 md:mb-10 h-50 w-50 object-cover rounded-3xl"
            />
            <section className="md:w-[90%]">
              <div className="md:w-md pt-5">
                <h3 className="text-custom-gray">Timeless Style, Modern Spirit</h3>
                <p>At Urban Heritage, every collection blends refined silhouettes with contemporary accents, offering clothing that feels elevated, versatile, and effortlessly stylish.</p>
              </div>
              <div className="mt-2 md:w-full flex justify-end pt-5 text-end">
                <div className="self-end md:w-md">
                  <h3 className="text-custom-gray">Responsibly Crafted Pieces</h3>
                  <p>We place sustainability at the heart of our production, from eco-consciuos fabrics to ethical manufacturing partners, each garment is created with care for both people and the planet.</p>
                </div>
              </div>
              <div className="md:w-md pt-5">
                <h3 className="text-custom-gray">Inspired by Global Aesthetics</h3>
                <p>Our design team draw from art, culture, and modern design movements, shaping collections that feel fresh while remaining rooted in timeless elegance.</p>
              </div>
              <div className="md:w-full flex justify-end pt-5 text-end">
                <div className="self-end md:w-md">
                  <h3 className="text-custom-gray">Quality You Can Feel</h3>
                  <p>Urban Heritage garments are made to last. We use premium materials, detailed tailoring, and thoughtful finishing touches to ensure every piece stands the test of time.</p>
                </div>
              </div>
              <div className="md:w-md pt-5">
                <h3 className="text-custom-gray">Fashion for Real Life</h3>
                <p>We design with real lifestyles in mind-comfortable cuts, durable fabrics, and expressive styles that support confidence in everyday moments and special occasions.</p>
              </div>
            </section>
          </div>
        </section>

        <section className='pt-30 ps-3 md:ps-6'>
          <h2 className="before:content-['['] after:content-[']']">Winter Collection 2025</h2>
          <section className='flex-1 flex items-start gap-5 py-7 px-5 overflow-x-auto snap-x snap-mandatory'>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>One size</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Crop-top</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear2.avif" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear3.jpg" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
            <article className='flex-1 flex flex-col min-w-35 hover:scale-120 focus:scale-120 active:scale-120 transition-all duration-300 ease-in-out snap-center snap-always'>
              <h4 className='order-2 text-xs font-bold break-keep line-clamp-2'>Oversize green t-Shirt</h4>
              <p className='order-3 text-xs'>S / M / L / XL</p>
              <p className='order-4 text-sm text-custom-gray'>12.30</p>
              <img src="/images/wear1.webp" alt="" className='order-1 h-50 w-full rounded-3xl mb-2 object-cover' />
            </article>
          </section>
        </section>
      </main>

      <footer className="w-full border-t border-t-custom-gray text-center mt-5 px-3 md:px-6">
        <p className="text-sm text-center py-5">&copy; 2025. <span className="font-semibold">Urban Heritage.</span></p>
      </footer>
    </>
  )
}

export default App

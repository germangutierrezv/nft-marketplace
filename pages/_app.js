import '../styles/globals.css'
import { useEffect } from 'react'
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      })
    }
  }, [])

  return (
    <div>
      <nav className='border-b p-6'>
        <p className='text-4x1 font-bold'>Mataverse Marketplace</p>
        <div className='flex mt-4'>
          <Link href="/">
            <a className='mr-4 text-pink-500'>
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className='mr-6 text-pink-500'>
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className='mr-6 text-pink-500'>
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className='mr-6 text-pink-500'>
              My Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
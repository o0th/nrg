export default function nav({ navHeight }) {
  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-80">
      <div className={`grid grid-cols-3 content-center justify-center h-${navHeight}`}>
        <div></div>
        <div className='text-center justify-center content-center'>
          <p className='font-serif font-medium uppercase text-3xl'>rigel</p> 
        </div>
        <div></div>
      </div>
    </nav>
  )
}

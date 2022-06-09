import Zoom from '../components/zoom'

export default function about() {
  return (
    <div className="w-screen flex content-center justify-center">
      <div className="grid grid-cols-1 content-center justify-center lg:w-4/6 lg:grid-cols-2">
        <Zoom image="/FacestattSky.jpg" alt="plane" />
        <div className="grid grid-cols-1 content-center p-5 lg:px-20">
          <p className="font-sans uppercase pb-5 text-xl">about us</p>
          <p className="font-sans font-light pb-2.5 text-slate-800">
            We are full service licensed General Aviation specialists available
            24/7 to handle all your needs.
          </p>
          <p className="font-sans font-light pb-2.5 text-slate-800">
            From the moment you land until you depart our team is here for you to
            ensure your safety and comfort.
          </p>
          <p className="font-sans font-light text-slate-800">
            Mykonos Island Airport (JMK/LGMK) is our base but we can take care of
            your flights all over Greece.
          </p>
        </div>
      </div>
    </div>
  )
}

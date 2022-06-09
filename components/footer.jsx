import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function footer() {
  return (
    <div className="w-screen grid content-center justify-center p-20">
      <div>
        <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-indigo-500 transition-colors hover:duration-500 px-5" />
        <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:text-indigo-500 transition-colors hover:duration-500" />
      </div>
    </div>
  )
}

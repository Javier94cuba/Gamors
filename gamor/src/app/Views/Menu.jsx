
import Link from "next/link"

const navigation = [
  { name: 'Streams', href: '#' },
  { name: 'Party', href: '#' },
  { name: 'Premiun', href: '#' },
]

export default function Menu() {

  return (
    <header className="bg-gray-900">
      <nav className="mx-auto max-w-7xl justify-between p-10 lg:px-28" aria-label="Global">
        <div className=" lg:flex lg:gap-x-12">
        <a href="#" className="text-sm font-semibold text-orange-500 border-x-orange-400 border-t-transparent border-orange-400  border rounded-full px-3 py-3 -mt-2">
            Home
        </a>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-400">
              {item.name}
            </a>
          ))}
          <div className="lg:flex lg:flex-1 lg:justify-center">
          <a href="#" className="text-4xl font-bold leading-6 text-gray-100">
           <span className="backdrop-blur-sm text-transparent absolute -ml-3 -mt-1">g</span>Gamor
          </a>
        </div>
          <div className=" lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-base font-semibold leading-6 text-gray-100 ">
            Sign in
          </a>
          <Link href="http://localhost:3000/Login" className="text-sm font-semibold text-gray-100 ml-10 border-gray-600 border  rounded-full py-3 px-10 bg-gray-950 -mt-2">
            Create acount
          </Link>
        </div>
        </div>    
      </nav>
    </header>
  )
}

import BullishBrand from '../../assets/BullishBrand.png'

export const NavBar = () => {
    return (
         <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-lg font-bold">
            <img className='w-24' src={BullishBrand} alt=""  />
        </a>
        <ul className="flex text-lg space-x-12">
          <li>
            <a href="/" className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105">About</a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105">Contact</a>
          </li>
        </ul>
        <div className="space-x-4">

        <button className="main_button" role="button">Join Now</button>
            

        </div>
      </div>
    </nav>
      );
}

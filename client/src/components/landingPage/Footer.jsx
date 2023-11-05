import BullishBrand from '../../assets/BullishBrand.png'

export const Footer = () => {
  return (
<footer className="bg-secondary_bg w-full text-white py-6">
  <div className="container mx-auto flex flex-col items-center gap-3">

    <img src={BullishBrand} alt="Logo" className="w-32 h-16 mb-4" />


    <div className="mb-4">
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Services</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </div>

    <p className='text-gray-500'>&copy; 2023 Your Company. All rights reserved.</p>
  </div>
</footer>
  )
}

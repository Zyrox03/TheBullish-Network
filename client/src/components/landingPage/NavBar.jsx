import BullishBrand from '../../assets/BullishBrand.png'

export const NavBar = () => {
    return (
         <nav className="bg-main_bg p-4 w-full">
      <div className=" flex items-center justify-between  w-full">
        <a href="/" className="text-white text-lg font-bold">
            <img className='w-24' src={BullishBrand} alt=""  />
        </a>
        <ul className="flex text-lg space-x-12">
        
         
          <li>
            <a href="/contact" className="select-none text-white px-8 py-1 items-center flex bg-secondary_bg border rounded-full transition duration-300 ease-in-out transform active:bg-white active:text-black hover:bg-main_bg">Contact</a>
          </li>

          <li>
            <a href="/community" className="select-none text-white px-8 py-1 items-center flex bg-secondary_bg border rounded-full transition duration-300 ease-in-out transform active:bg-white active:text-black hover:bg-main_bg">Commnuity</a>
          </li>

          <li>
            <a href="/socials" className="select-none text-white px-8 py-1 items-center flex bg-secondary_bg border rounded-full transition duration-300 ease-in-out transform active:bg-white active:text-black hover:bg-main_bg">Socials</a>
          </li>
        </ul>
        <div className="space-x-4">

        <button className="main_button" role="button">Login</button>
            

        </div>
      </div>
    </nav>
      );
}

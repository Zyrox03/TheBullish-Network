
export const SocialMedia = () => {
  return (
    <div className="bg-main_bg p-4 rounded-md shadow-md text-center">
    <h3 className="text-lg font-semibold mb-3">
      Connect with us on social media
    </h3>
    <div className="flex items-center justify-around space-x-4">
  
      <a
        href="https://x.com/bullishnetwork_?t=uSP_vOWO2SKB2hjYZ0QrBQ&s=09"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands text-3xl text-white hover:text-gray-500 transition fa-twitter"></i>
      </a>
      <a
        href="https://discord.gg/t9WKYAPrPU"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands text-3xl text-white hover:text-gray-500 transition fa-discord"></i>
      </a>
      <a
        href="https://www.tiktok.com/@bullishnetwork_hq?_t=8hK80WX8iEz&_r=1"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands text-3xl text-white hover:text-gray-500 transition fa-tiktok"></i>
      </a>
    </div>
  </div>  )
}

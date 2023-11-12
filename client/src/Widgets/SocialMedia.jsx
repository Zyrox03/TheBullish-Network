
export const SocialMedia = () => {
  return (
    <div className="bg-main_bg p-4 rounded-md shadow-md">
    <h3 className="text-lg font-semibold mb-3">
      Connect with us on social media
    </h3>
    <div className="flex items-center justify-around space-x-4">
      <a
        href="#"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands text-3xl text-white hover:text-gray-500 transition fa-instagram"></i>
      </a>
      <a
        href="#"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands text-3xl text-white hover:text-gray-500 transition fa-twitter"></i>
      </a>
      <a
        href="#"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands text-3xl text-white hover:text-gray-500 transition fa-discord"></i>
      </a>
      <a
        href="#"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands text-3xl text-white hover:text-gray-500 transition fa-tiktok"></i>
      </a>
    </div>
  </div>  )
}

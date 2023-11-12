import testPicture from "../../assets/community.jpg";

export const Events = () => {
  return (
    <div className="w-full flex flex-col items-center text-center gap-12">
      <div className="content_container py-8 px-4 lg:p-12">
        <h2 className="text-3xl font-bold uppercase">Upcoming Events</h2>

        <div className="w-full">
          <div className="grid sm:grid-cols-2 gap-4 ">
            <div className="col-span-1">
              <img
                src={testPicture}
                alt=""
                className=" rounded-lg h-full object-cover object-left "
              />
            </div>
            <div className="col-span-1">
              <img
                src={testPicture}
                alt=""
                className=" rounded-lg h-full object-cover object-left "
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-md text-white mx-auto text-center mt-3 w-[70%] ">
        Our platforms offer more than just networking. Engage with a diverse
        community that possesses a wealth of knowledge and experience. Dive deep
        into conversations, learn from experts, and discover the secrets of
        wealth creation. Join a supportive community that will keep you
        inspired, motivated, and always focused on your goals.
      </p>

   
    </div>
  );
};

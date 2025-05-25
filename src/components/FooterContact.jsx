const FooterContact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row py-8 px-4 lg:px-16 sm:px-6 gap-8">
        {/* left content */}
        <div className="flex-1 space-y-4">
          <button className="bg-primary text-black px-1.5 rounded-md text-xl font-medium ">
            Contact us:
          </button>
          <div className="text-white space-y-2">
            <p>
              <strong>Email:</strong> info@positivus.com
            </p>
            <p>
              <strong>Phone:</strong> 555-567-8901
            </p>
            <p className="w-1/2">
              <strong>Address:</strong> 1234 Main St Moonstone City, Stardust
              State 12345
            </p>
          </div>
        </div>
        {/* right content */}
        <div className="flex-1 bg-[#292A32] justify-center items-center p-8 rounded-lg">
          <form className="flex flex-col justify-center items-center h-20 md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 border bg-[#292A32] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-black px-8 py-2.5 rounded-md ">
              Subscribe to news
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FooterContact;

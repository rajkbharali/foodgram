const Contact = () => {
  return (
    <div className="flex m-2 p-2 items-center text-center">
      <div className="m-auto">
        <h1 className="m-5 font-bold text-xl">Contact Us</h1>
        <h3 className="m-4 text-lg bg-gray-300 rounded-md">Enter Details</h3>
        <form className="m-4 flex flex-col border-2 border-solid rounded-md">
          <input
            className="m-2 p-2 border border-black rounded-md"
            type="text"
            placeholder="Name"
          />
          <input
            className="m-2 p-2 border border-black rounded-md"
            type="text"
            placeholder="Message"
          />
          <button className="m-2 p-2 bg-black text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import { CONTACT_IMG } from "../utils/constants";

const Contact = () => {
  return (
    <div className="flex justify-center my-16 items-center text-center">
      <div className="w-1/3">
        <img src={CONTACT_IMG} />
      </div>
      <div className="w-1/3 py-28">
        <form className="m-4 flex flex-col">
          <input
            className="m-2 p-2 border rounded-md border-slate-300"
            type="text"
            placeholder="Name"
          />
          <input
            className="m-2 p-2 border border-slate-300 rounded-md"
            type="text"
            placeholder="Message"
          />
          <button className="flex m-auto px-5 py-2 max-w-fit bg-black text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

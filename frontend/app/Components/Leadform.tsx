export default function Page() {
  return (
    <form
      action="/api/leads"
      method="POST"
      className="flex flex-col bg-[#e7e7e7] justify-between items-center border rounded-2xl p-4 gap-2 w-[400px] h-[500px] shadow-lg shadow-gray-400"
    >
      {" "}
      <h1 className="font-bold text-2xl">Lead Form</h1>{" "}
      <label htmlFor="name">Name:</label>{" "}
      <input
        className="border border-black w-[300px] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="name"
        name="name"
        placeholder="Enter your name..."
        type="text"
        required
      />{" "}
      <label htmlFor="email">Email:</label>{" "}
      <input
        className="border border-black w-[300px] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="email"
        name="email"
        placeholder="Enter your email..."
        type="email"
      />{" "}
      <label htmlFor="phone">Phone No:</label>{" "}
      <input
        className="border border-black w-[300px] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="phone"
        name="phone"
        placeholder="Enter your phone number..."
        type="text"
      />{" "}
      <label htmlFor="message">Message:</label>{" "}
      <textarea
        className="border border-black w-[300px] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="message"
        name="message"
        placeholder="Enter your message..."
        required
      />{" "}
      <button
        className="border border-black cursor-pointer mt-4 p-2 rounded-xl"
        type="submit"
      >
        {" "}
        Submit{" "}
      </button>{" "}
    </form>
  );
}

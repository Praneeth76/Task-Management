export default function HelpCenterCard() {
  return (
    <div className="relative bg-[#0c0c1d] text-white p-4 rounded-xl text-center shadow-md">

      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 
                      flex items-center justify-center 
                      w-12 h-12 rounded-full bg-white shadow-md
                      border-4 border-[#0c0c1d]">
        <span className="text-black text-lg font-bold">?</span>
      </div>

      <h2 className="mt-6 font-semibold text-base">Help Center</h2>
      <p className="text-gray-300 text-xs mt-2 leading-relaxed">
        Having Trouble in Learning. <br />
        Please contact us for more questions.
      </p>

      <button className="mt-3 px-4 py-1.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-100 transition">
        Go To Help Center
      </button>
    </div>
  );
}

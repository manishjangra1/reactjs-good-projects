const Home = () => {
  return (
    <div className="flex gap-10 items-center w-full h-[1080px]">
      <img
        src="/src/assets/images/person_pic.jpg"
        alt=""
        className="w-auto h-full border"
      />
      <div className="flex flex-col justify-center">
        <div className="flex justify-end">
          <h1 className="font-mono text-white">
            <span className="text-red-950 text-[80px] font-bold">Hello</span>
            <span className="font-bold text-[60px]">
              ,<br /> I am Manish Jangra
            </span>
            <span className="font-bold text-[100px]">
              <br />
              Software Developer
            </span>
          </h1>
        </div>
        <div>
          <button className="bg-black text-white border 1px rounded-lg px-7 py-2 text-[30px] font-bold">
            Download DV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

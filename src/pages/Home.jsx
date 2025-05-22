import HangarImg from "../assets/img/hangar.png";

function HomePage() {
  return (
    <>
      <main className="w-11/12 m-auto pt-6">
      <div className="rounded-xl p-5 shadow-2xl border border-gray-100 flex flex-col">
        <h1 className="text-4xl">Welkom</h1>
        <p className="text-2xl">Love U Festival!</p>
        <img src={HangarImg} alt="hangar" className="rounded-xl"/>
      </div>
      </main>
    </>
  );
}

export default HomePage;
import useClock from "../assets/hooks/Clock";
import HangarImg from "../assets/img/hangar.png";

function HomePage() {
  const { date, time } = useClock();

  return (
    <>
        <div className="rounded-xl p-5 shadow-2xl border border-gray-100 flex flex-col">
          <h1 className="text-4xl">Welkom</h1>
          <p className="text-2xl">Love U Festival!</p>
          <p className="text-xl pb-3">{date} {time}</p>
          <img src={HangarImg} alt="hangar" className="rounded-xl" />
        </div>
    </>
  );
}

export default HomePage;
import heroImg from "../../assets/images/heroImg.png";

const Landing = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-100 lg:min-h-50 bg-background border-b border-b-border relative isolate overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -right-32 -top-32 h-125 w-125 rounded-full bg-border blur-2xl opacity-70 -z-10" />

        {/* Smaller decorative blob */}
        <div className="absolute right-[20%] -bottom-25 h-75 w-75 rounded-full bg-accent blur-3xl opacity-40 -z-10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div id="hero-content" className="max-w-xl">
            <p className="mb-4 font-medium text-accent">
              {"healthy pets, happy lives".toUpperCase()}
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-text-h">
              The Best Care for Your Furry Friends
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-color">
              Premium pet foot, supplies and accessories for dogs, cats, birds
              and more. Because they deserve the best.
            </p>
            <button className="mt-8 rounded-full bg-accent px-7 py-3 font-semibold text-background transition duration-200 hover:-translate-y-0.5 hover:bg-[#4A2918] hover:shadow-lg">
              Shop Now ⇨
            </button>
          </div>
          <div id="hero-img" className="relative flex justify-center">
            <img
              src={heroImg}
              alt="Hero section image"
              className="relative w-full max-w-xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

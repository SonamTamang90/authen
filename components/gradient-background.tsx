import clsx from "clsx";
const GradientBackgroud = () => {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          "absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0",
          "bg-gradient-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff]",
          "rotate-[-10deg] rounded-full blur-3xl",
        )}
      />
    </div>
  );
};

export default GradientBackgroud;

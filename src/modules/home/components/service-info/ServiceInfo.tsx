import { ServiceInfoProps } from "./types";

const ServiceInfo = (props: ServiceInfoProps) => {
  const { homeTitle, textHoovered } = props;
  return (
    <div className="py-5 w-full h-[20%] bg-gradient-to-b flex flex-col justify-center items-center from-transparent via-black to-black">
        <h1 className="text-white text-center text-xl font-[Space_Mono] font-bold z-2
                       md:text-2xl">{homeTitle}</h1>
        <p className="w-[100%] text-base text-white text-center font-[Exan]">
            <span className="text-[var(--cyan)]">{textHoovered.split(']')[0]}{']'}</span>
            {textHoovered.split(']')[1]}
        </p>
    </div>
  )
}

export default ServiceInfo
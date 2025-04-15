interface BigHeroProps {
  title: string;
  smallTitle: string[];
  subtitle?: string[];
  className?: string;
  imgUrl?: string;
  imgTitle?: string;
  bgcolor?: string;
}

export function BigHero({
  title,
  smallTitle,
  subtitle,
  className = "",
  imgUrl,
  imgTitle,
}: BigHeroProps) {
  return (
    <div
      className={`bg-[#F7F4F1] lg:px-20 py-10 lg:py-20 grid lg:grid-cols-2 gap-4 rounded-md bg- ${className}`}
    >
      <div className="order-2 lg:order-1 space-y-8">
        <h1 className="hidden lg:block text-5xl font-black">{title}</h1>
        <h1 className="text-center lg:text-left block lg:hidden text-5xl font-black whitespace-pre-line">
          {smallTitle.map((line, index) => (
            <p key={index} className="text-5xl">
              {line}
            </p>
          ))}
        </h1>
        {subtitle && (
          <>
            <p className="hidden lg:block text-xl font-extralight text-foreground whitespace-pre-line">
              {subtitle.map((line, index) => (
                <p key={index} className="text-xl">
                  {line}
                </p>
              ))}
            </p>
            <p className="text-center block lg:hidden font-extralight text-foreground whitespace-break-spaces">
              {subtitle.map((line, index) => (
                <p key={index} className="text-xl">
                  {line}
                </p>
              ))}
            </p>
          </>
        )}
      </div>
      {imgUrl && (
        <div className="order-1 lg:order-2">
          <img src={imgUrl} alt={imgTitle} />
        </div>
      )}
    </div>
  );
}

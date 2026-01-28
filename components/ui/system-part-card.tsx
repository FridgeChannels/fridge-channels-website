import Image from "next/image";

interface SystemPartCardProps {
    partNumber: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export function SystemPartCard({
    partNumber,
    title,
    description,
    imageSrc,
    imageAlt,
}: SystemPartCardProps) {
    return (
        <div className="flex flex-col items-center text-center rounded-2xl border border-ds-border bg-white pt-6 md:pt-8 lg:pt-10 px-6 md:px-8 lg:px-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex-1">
            <span className="text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase text-ds-text-secondary mb-3">
                {partNumber}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-ds-text mb-4">
                {title}
            </h3>
            <p className="text-sm md:text-base text-ds-body leading-[1.6] max-w-md mb-8">
                {description}
            </p>
            {/* Fixed-height image frame - both images render at same size */}
            <div className="w-full mt-auto h-[280px] md:h-[320px] lg:h-[360px] relative flex items-end justify-center">
                <div className="w-full h-full relative">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
    );
}

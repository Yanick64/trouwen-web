import Link from "next/link";

interface DetailCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

export default function DetailCard({
  icon,
  title,
  description,
  linkText = "Lees meer",
  linkHref = "#",
}: DetailCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 text-olive">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-medium mb-4 text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 leading-relaxed">{description}</p>

      {/* Link */}
      <Link
        href={linkHref}
        className="mt-auto font-bold underline hover:text-olive transition-colors"
      >
        {linkText}
      </Link>
    </div>
  );
}

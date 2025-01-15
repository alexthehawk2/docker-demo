// components/Heading.tsx
interface HeadingProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  variant = "h1",
  children,
  className = "",
}: HeadingProps) {
  const sizes = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
  };

  const Tag = variant;

  return <Tag className={`${sizes[variant]} ${className}`}>{children}</Tag>;
}

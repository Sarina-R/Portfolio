import { Badge } from "@/components/ui/badge";

export function SectionEyebrow({
  label,
  color = "ink",
  rotate = -2,
}: {
  label: string;
  color?: "teal" | "gold" | "pink" | "purple" | "ink";
  rotate?: -6 | -3 | -2 | 0 | 2 | 3 | 6;
}) {
  return (
    <Badge color={color} rotate={rotate}>
      {label}
    </Badge>
  );
}

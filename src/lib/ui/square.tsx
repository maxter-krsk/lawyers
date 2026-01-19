type SquareProps = {
  className?: string;
};

export function Square({ className = "" }: SquareProps) {
  return <div className={`bg-orange h-20 w-20 ${className}`} />;
}

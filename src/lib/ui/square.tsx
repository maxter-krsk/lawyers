type SquareProps = {
  className?: string;
};

export function Square({ className = "" }: SquareProps) {
  return <div className={`bg-orange h-16 w-16 lg:h-20 lg:w-20 ${className}`} />;
}

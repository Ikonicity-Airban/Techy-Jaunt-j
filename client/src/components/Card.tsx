type Props = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className }: Props) {
  return (
    <div className={className}>
      <div className="p-2">{children}</div>
    </div>
  );
}

export default Card;

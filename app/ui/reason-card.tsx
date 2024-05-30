
interface ReasonCardProps {
  title: string;
  description: string[];
  icon: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-start min-w-72 max-w-80 text-center">
      <img className="h-14" src={icon} alt="" />
      <h3 className="text-xl w-40 leading-6">{title}</h3>
      {description.map((descrip, i) => (
        <p key={i} className="text-gray-600">{descrip}</p>
      ))}
    </div>
  );
};

export default ReasonCard;
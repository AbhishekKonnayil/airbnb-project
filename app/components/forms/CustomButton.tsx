interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className:string
}

const CustomButton: React.FC<CustomButtonProps> = ({ label,onClick,className }) => {
  return (
    <div onClick={onClick}

       className={` bg-airbnb py-4 rounded-xl text-white hover:bg-airbnb-dark transition-colors cursor-pointer text-center ${className}`}>
        {label}
    </div>
  );
};

export default CustomButton;

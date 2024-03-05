type CustomButtonProps = {
  text: string;
  containerStyles: string;
  btnType: "button" | "submit" | "reset";
};

export const CustomButton = ({
  text,
  containerStyles,
  btnType,
}: CustomButtonProps) => {
  return (
    <button type={btnType} className={containerStyles}>
      <h2 className="text-sm font-600 text-white text-center">{text}</h2>
    </button>
  );
};

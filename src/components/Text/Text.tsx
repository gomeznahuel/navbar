import { Text } from "../Text/Text.elements";

interface TextProps {
  className?: string;
  text: string;
}

const TextTest = ({ className, text }: TextProps) => {
  return (
    <>
      <Text className={className}>{text}</Text>
    </>
  );
};

export default TextTest;

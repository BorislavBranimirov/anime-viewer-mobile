import { Text, TextProps } from 'react-native';

const InterText = (props: TextProps) => {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'Inter_400Regular' }]}
    />
  );
};

export default InterText;

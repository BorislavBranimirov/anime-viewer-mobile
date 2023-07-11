import { Text, TextProps } from 'react-native';

export const InterText = (props: TextProps) => {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'Inter_400Regular' }]}
    />
  );
};

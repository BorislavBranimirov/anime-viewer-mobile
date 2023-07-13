import { Text, TextProps } from 'react-native';
import Colors from '../constants/Colors';

const InterText = (props: TextProps) => {
  return (
    <Text
      {...props}
      style={[
        { color: Colors.text, fontSize: 16, lineHeight: 24 },
        props.style,
        { fontFamily: 'Inter_400Regular' },
      ]}
    />
  );
};

export default InterText;

import { StyleSheet, Text, TextProps } from 'react-native';
import Colors from '../constants/Colors';

const InterText = (props: TextProps) => {
  // Properly switch between Inter regular and Inter bold, since React Native
  // does not do that automatically (no font-face rule)
  const fontWeight = StyleSheet.flatten(props.style).fontWeight;
  const isBold = fontWeight === 'bold' || fontWeight === '700';

  return (
    <Text
      {...props}
      style={[
        { color: Colors.text, fontSize: 16, lineHeight: 24 },
        props.style,
        {
          fontFamily: isBold ? 'Inter_700Bold' : 'Inter_400Regular',
          fontWeight: '400',
        },
      ]}
    />
  );
};

export default InterText;

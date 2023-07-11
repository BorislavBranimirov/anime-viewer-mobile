import { Pressable, StyleSheet, PressableProps } from 'react-native';
import { InterText } from './StyledText';
import Colors from '../constants/Colors';

export const Button = (props: PressableProps & { label: string }) => {
  const { label, ...restProps } = props;
  return (
    <Pressable
      {...restProps}
      style={({ pressed }) => [
        typeof restProps.style === 'function'
          ? restProps.style({ pressed })
          : restProps.style,
        styles.button,
        restProps.disabled && styles.buttonDisabled,
      ]}
    >
      <InterText style={styles.buttonLabel}>{label}</InterText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.accent,
  },
  buttonDisabled: {
    backgroundColor: Colors.accentDisabled,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
  },
});

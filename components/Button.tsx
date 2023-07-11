import { Pressable, StyleSheet, PressableProps } from 'react-native';
import { InterText } from './StyledText';
import Colors from '../constants/Colors';

type ButtonProps = PressableProps & { label: string };

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        typeof props.style === 'function'
          ? props.style({ pressed })
          : props.style,
        styles.button,
        props.disabled && styles.buttonDisabled,
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

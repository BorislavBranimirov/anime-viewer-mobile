import { Animated, Easing, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { useEffect, useRef } from 'react';

const AnimatedViewIcon = Animated.createAnimatedComponent(FontAwesome);

const Spinner = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  // Looping stops after one interation with useNativeDriver set
  // Wrapping .timing in .parallel fixes it
  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => {
      spinValue.stopAnimation();
    };
  }, [spinValue]);

  return (
    <View style={styles.spinnerWrapper}>
      <AnimatedViewIcon
        name="spinner"
        size={48}
        color={Colors.accent}
        style={{
          transform: [
            {
              rotate: spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;

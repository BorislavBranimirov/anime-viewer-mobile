import { FontAwesome } from '@expo/vector-icons';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { ErrorBoundaryProps, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ErrorBoundaryComponent from '../components/ErrorBoundary';
import Colors from '../constants/Colors';

// Catch global errors
export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.background }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <ErrorBoundaryComponent {...props} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  return (
    <>
      <SafeAreaProvider style={{ backgroundColor: Colors.background }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="anime/[id]"
            options={{
              title: 'Anime Page',
              headerStyle: {
                backgroundColor: Colors.background,
              },
              headerTintColor: Colors.text,
              headerShadowVisible: false,
              headerTitleStyle: {
                fontFamily: 'Inter_400Regular',
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.text,
              },
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </>
  );
}

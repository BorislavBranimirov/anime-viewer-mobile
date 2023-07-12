import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InterText from '../../components/StyledText';
import Spinner from '../../components/Spinner';
import { Stack, useLocalSearchParams } from 'expo-router';
import Colors from '../../constants/Colors';
import { useFetchAnime } from '../../utils/hooks';

const AnimePage = () => {
  const { id = '1' } = useLocalSearchParams<{ id?: string }>();
  const { data, loading } = useFetchAnime(id);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
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
      <View style={styles.wrapper}>
        {!data || loading ? (
          <Spinner />
        ) : (
          <View>
            <InterText style={styles.title}>{data.title}</InterText>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wrapper: {
    flex: 1,
    width: '80%',
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginVertical: 24,
  },
});

export default AnimePage;

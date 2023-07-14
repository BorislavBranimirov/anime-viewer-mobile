import { StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { useFetchTopAnime } from '../../utils/hooks';
import Viewer from '../../components/Viewer';
import Spinner from '../../components/Spinner';
import { useLocalSearchParams } from 'expo-router';
import PageTitle from '../../components/PageTitle';

export default function TabOneScreen() {
  const { page } = useLocalSearchParams<{ page?: string }>();
  const { data, loading } = useFetchTopAnime(page);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <PageTitle label="Top Anime" />
        {!data || loading ? <Spinner /> : <Viewer data={data} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    overflow: 'scroll',
  },
  wrapper: {
    width: '80%',
    minHeight: '100%',
    marginHorizontal: 'auto',
  },
});

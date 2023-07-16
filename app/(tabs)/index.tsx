import { StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
      <PageTitle label="Top Anime" />
      {!data || loading ? <Spinner /> : <Viewer data={data} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

import { FlatList, StyleSheet, View } from 'react-native';
import { IApiResponse } from '../utils/types';
import Button from './Button';
import { useRouter } from 'expo-router';
import InterText from './StyledText';
import AnimeItem from './AnimeItem';

const Viewer = ({ data }: { data: IApiResponse }) => {
  const router = useRouter();
  const { data: animeList, pagination } = data;
  const { current_page, has_next_page } = pagination;

  return (
    <>
      <FlatList
        style={styles.wrapper}
        data={animeList}
        renderItem={({ item }) => <AnimeItem anime={item} />}
        keyExtractor={(item) => item.mal_id.toString()}
        ListEmptyComponent={() => (
          <InterText style={styles.notFoundText}>
            No entries found&#8230;
          </InterText>
        )}
        ListFooterComponent={() => (
          <View style={styles.navigationWrapper}>
            <Button
              label="Previous"
              disabled={!(current_page > 1)}
              onPress={() => {
                if (current_page > 1) {
                  router.setParams({ page: (current_page - 1).toString() });
                }
              }}
            />
            <Button
              label="Next"
              disabled={!has_next_page}
              onPress={() => {
                if (has_next_page) {
                  router.setParams({ page: (current_page + 1).toString() });
                }
              }}
            />
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: '10%',
  },
  notFoundText: {
    marginBottom: 20,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navigationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default Viewer;

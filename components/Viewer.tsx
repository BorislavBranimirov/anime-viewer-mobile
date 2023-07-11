import { StyleSheet, View } from 'react-native';
import { IApiResponse } from '../utils/types';
import Button from './Button';
import { useRouter } from 'expo-router';

const Viewer = ({ data }: { data: IApiResponse }) => {
  const router = useRouter();
  const { data: animeList, pagination } = data;
  const { current_page, has_next_page } = pagination;

  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  navigationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});

export default Viewer;

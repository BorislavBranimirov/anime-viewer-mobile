import { StyleSheet, View } from 'react-native';
import { IApiResponse } from '../utils/types';
import Button from './Button';

const Viewer = ({ data }: { data: IApiResponse }) => {
  const { data: animeList, pagination } = data;
  const { current_page, has_next_page } = pagination;

  return (
    <>
      <View style={styles.navigationWrapper}>
        <Button label="Previous" />
        <Button label="Next" />
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

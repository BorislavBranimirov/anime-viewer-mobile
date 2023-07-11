import { StyleSheet, TextInput, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Button } from '../../components/Button';
import Colors from '../../constants/Colors';

export default function SearchAnime() {
  const [text, setText] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search&#8230;"
            onChangeText={(newText) => {
              setText(newText);
            }}
            value={text}
          />
          <Button
            label="Search"
            onPress={() => {
              alert('searching');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wrapper: {
    width: '80%',
    marginHorizontal: 'auto',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
    width: '100%',
    gap: 12,
  },
  searchInput: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexGrow: 1,
    borderRadius: 8,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import { TabErrorBoundary } from '../../src/components/TabErrorBoundary';
import { colors, fontSize, spacing } from '../../src/theme/tokens';

function SearchBody(): React.JSX.Element {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>搜索</Text>
      <Text style={styles.desc}>P1 搜播在此</Text>
    </View>
  );
}

export default function SearchPage(): React.JSX.Element {
  return (
    <TabErrorBoundary tabName="搜索">
      <SearchBody />
    </TabErrorBoundary>
  );
}

const styles = StyleSheet.create({
  desc: { color: colors.textMuted, fontSize: 14, marginTop: spacing.small },
  page: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  title: { color: colors.text, fontSize: fontSize.title, fontWeight: '700' },
});

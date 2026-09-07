import { StyleSheet, Text, View } from 'react-native';
import { TabErrorBoundary } from '../../src/components/TabErrorBoundary';
import { colors, fontSize, spacing } from '../../src/theme/tokens';

function PlayerBody(): React.JSX.Element {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>播放</Text>
      <Text style={styles.desc}>P1 播放器在此</Text>
    </View>
  );
}

export default function PlayerPage(): React.JSX.Element {
  return (
    <TabErrorBoundary tabName="播放">
      <PlayerBody />
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

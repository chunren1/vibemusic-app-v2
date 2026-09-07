import { StyleSheet, Text, View } from 'react-native';
import { TabErrorBoundary } from '../../src/components/TabErrorBoundary';
import { colors, fontSize, spacing } from '../../src/theme/tokens';

function MeBody(): React.JSX.Element {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>我的</Text>
      <Text style={styles.desc}>P2 登录收藏在此</Text>
    </View>
  );
}

export default function MePage(): React.JSX.Element {
  return (
    <TabErrorBoundary tabName="我的">
      <MeBody />
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/tokens';

type Props = {
  tabName: string;
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  message: string;
};

export class TabErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error): void {
    console.warn(`[${this.props.tabName}] 页面出错:`, error.message);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <View style={styles.card}>
          <Text style={styles.title}>{this.props.tabName}暂时打不开了</Text>
          <Text style={styles.desc}>只影响本页，其他页面不受影响</Text>
          <Text style={styles.detail}>{this.state.message}</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: spacing.large,
  },
  desc: {
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 8,
  },
  detail: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 8,
  },
  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '600',
  },
});

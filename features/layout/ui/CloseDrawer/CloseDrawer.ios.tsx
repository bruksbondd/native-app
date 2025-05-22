import { View, Pressable, StyleSheet } from 'react-native';
import CloseIcon from '../../../../assets/icons/close';
import type { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

interface CloseDrawerProps {
	navigation: DrawerNavigationHelpers;
}

export function CloseDrawer({ navigation }: CloseDrawerProps) {
	return (
		<Pressable onPress={() => navigation.closeDrawer()}>
			<View style={styles.button}>
				<CloseIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 20,
		right: 20,
	},
});

import { View, Pressable, StyleSheet } from 'react-native';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import CloseIcon from '../../../../assets/icons/close';

type CloseDrawerProps = {
	navigation: DrawerContentComponentProps['navigation'];
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

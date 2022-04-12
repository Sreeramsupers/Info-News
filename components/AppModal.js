import React from 'react';
import { View, TouchableOpacity, Text, Modal, ScrollView, StyleSheet } from 'react-native';
import Icon from './Icon';
import PropTypes from 'prop-types';

const AppModal = ({
	modalVisible,
	modalFooter,
	modalBody,
	title,
	setModalVisible,
	closeOnTouchOutside,
}) => {
	return (
		<Modal visible={modalVisible} transparent>
			<TouchableOpacity
				onPress={() => {
					if (closeOnTouchOutside) {
						setModalVisible(false);
					}
				}}
				style={styles.wrapper}>
				<View style={styles.modalView}>
					<ScrollView>
						<View style={styles.header}>
							<TouchableOpacity
								onPress={() => {
									setModalVisible(false);
								}}>
								<Icon size={27} type='evil' name='close' />
							</TouchableOpacity>
							<Text style={styles.title}>{title || 'News'}</Text>

							<View />
							<View />
							<View />
							<View />
							<View />
						</View>
						<View style={styles.footerSeparator} />

						<View style={styles.body}>{modalBody}</View>
						{modalFooter}

						{!modalFooter && (
							<View>
								<>
									<View style={styles.footerSeparator} />
									<View style={styles.footerItems}>
										<View style={styles.footer}>
											<Text style={styles.footerText}>Privacy Policy</Text>
											<View style={styles.termsView} />
											<Text style={styles.footerText}>Terms of Service</Text>
										</View>
									</View>
								</>
							</View>
						)}
					</ScrollView>
				</View>
			</TouchableOpacity>
		</Modal>
	);
};

AppModal.propTypes = {
	closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
	closeOnTouchOutside: true,
};

export default AppModal;

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'rgba(0,0,0,0.6)',
		flex: 1,
		justifyContent: 'center',
	},

	modalView: {
		backgroundColor: 'white',
		marginHorizontal: 20,
		borderRadius: 4,
		minHeight: 300,
	},

	header: {
		flexDirection: 'row',
		padding: 15,
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
	},

	title: {
		fontSize: 21,
	},

	body: {
		minHeight: 300,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},

	footer: {
		justifyContent: 'space-evenly',
		paddingVertical: 7,
		alignItems: 'center',
		flexDirection: 'row',
	},

	termsView: {
		width: 5,
		height: 5,
		borderRadius: 100,
		backgroundColor: 'grey',
	},

	footerSeparator: {
		height: 0.5,
		backgroundColor: 'grey',
	},

	footerItems: {
		width: '100%',
		padding: 10,
	},

	footerText: {
		fontSize: 12,
	},
});

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { RectButton } from "react-native-gesture-handler";

const Detail = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView style={{flex: 1, paddingVertical: 32}}>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Icon name="arrow-left" size={20} color="#34cb79" />
				</TouchableOpacity>

				<Image
					style={styles.pointImage}
					source={{
						uri:
							"https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
					}}
				/>

				<Text style={styles.pointName}>Mercadão do João</Text>
				<Text style={styles.pointItems}>
					Lâmapadas, Óleo de Cozinha
				</Text>

				<View style={styles.address}>
					<Text style={styles.addressTitle}>Endereço</Text>
					<Text style={styles.addressContent}>Caruaru, PE</Text>
				</View>
			</View>
			<View style={styles.footer}>
				<RectButton style={styles.button} onPress={() => {}}>
					<FontAwesome name="whatsapp" size={20} color="#FFF" />
					<Text style={styles.buttonText}>WhatsApp</Text>
				</RectButton>
				<RectButton style={styles.button} onPress={() => {}}>
					<Icon name="mail" size={20} color="#FFF" />
					<Text style={styles.buttonText}>E-mail</Text>
				</RectButton>
			</View>
		</SafeAreaView>
	);
};

export default Detail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
		paddingTop: 20,
	},

	pointImage: {
		width: "100%",
		height: 120,
		resizeMode: "cover",
		borderRadius: 10,
		marginTop: 32,
	},

	pointName: {
		color: "#322153",
		fontSize: 28,
		fontFamily: "Ubuntu_700Bold",
		marginTop: 24,
	},

	pointItems: {
		fontFamily: "Roboto_400Regular",
		fontSize: 16,
		lineHeight: 24,
		marginTop: 8,
		color: "#6C6C80",
	},

	address: {
		marginTop: 32,
	},

	addressTitle: {
		color: "#322153",
		fontFamily: "Roboto_500Medium",
		fontSize: 16,
	},

	addressContent: {
		fontFamily: "Roboto_400Regular",
		lineHeight: 24,
		marginTop: 8,
		color: "#6C6C80",
	},

	footer: {
		borderTopWidth: StyleSheet.hairlineWidth,
		borderColor: "#999",
		paddingVertical: 20,
		paddingHorizontal: 32,
        paddingBottom: 0,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	button: {
		width: "48%",
		backgroundColor: "#34CB79",
		borderRadius: 10,
		height: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	buttonText: {
		marginLeft: 8,
		color: "#FFF",
		fontSize: 16,
		fontFamily: "Roboto_500Medium",
	},
});

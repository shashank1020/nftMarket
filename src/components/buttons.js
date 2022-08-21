import {View, StyleSheet, TouchableOpacity, Image} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../constants";

export function CircleButton({imgUrl, handlerPress, ...props}) {
    return(
        <TouchableOpacity style={[styles.circleContainer, {...props}]} onPress={handlerPress}>
            <Image source={imgUrl} style={styles.circleImage} resizeMode='contain' />
        </TouchableOpacity>
    )
}

export function RectButton(props) {
    return(
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    circleContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
    },
    circleImage: {
        width: 24,
        height: 24,
    }
})

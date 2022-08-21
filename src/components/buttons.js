import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {COLORS, FONTS, SHADOWS, SIZES} from "../constants";

export function CircleButton({imgUrl, handlerPress, ...props}) {
    return (
        <TouchableOpacity style={[styles.circleContainer, {...props}]} onPress={handlerPress}>
            <Image source={imgUrl} style={styles.circleImage} resizeMode='contain'/>
        </TouchableOpacity>
    )
}

export function RectButton({minWidth, fontSize, handlePress, ...props}) {
    return (
        <TouchableOpacity style={[styles.rectContainer, {minWidth: minWidth, ...props}]}>
            <Text style={[styles.rectText, {fontSize: fontSize}]}>Place a bid</Text>
        </TouchableOpacity>
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
    },
    rectContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
        ...SHADOWS.light
    },
    rectText: {
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        textAlign: "center"
    },
})

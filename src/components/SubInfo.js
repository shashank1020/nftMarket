import {Image, StyleSheet, Text, View} from "react-native";
import {assets, COLORS, FONTS, SHADOWS, SIZES} from "../constants";

export function NTFTitle() {
    return (
        <View>
            <Text>NTFTitle</Text>
        </View>
    )
}

export function ETHPrice() {
    return (
        <View>
            <Text>ETHPrice</Text>
        </View>
    )
}

export function ImageCmp({imgUrl, index}) {
    return (
        <Image
            source={imgUrl}
            resizeMode='contain'
            style={[styles.image, {marginLeft: index === 0 ? 0 : -SIZES.font}]}
        />
    )
}

export function People() {
    return (
        <View style={styles.people}>
            {[assets.person02, assets.person03, assets.person04]
                .map((imgUrl, index) => <ImageCmp imgUrl={imgUrl} index={index} key={`people-${index}`}/>)}
        </View>
    )
}

export function EndDate() {
    return (
        <View style={styles.endDate}>
            <Text style={styles.endDateText1}>EndDate</Text>
            <Text style={styles.endDateText2}>12h 30m</Text>
        </View>
    )
}

export function SubInfo() {
    return (
        <View style={styles.subInfo}>
            <People/>
            <EndDate/>
        </View>
    )
}


const styles = StyleSheet.create({
    subInfo: {
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between"
    }, people: {
        flexDirection: 'row'
    }, image: {
        width: 48, height: 48
    },
    endDate: {
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
    },
    endDateText1: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    endDateText2: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    }
})

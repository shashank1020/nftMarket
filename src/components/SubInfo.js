import {Image, StyleSheet, Text, View} from "react-native";
import {assets, COLORS, FONTS, SHADOWS, SIZES} from "../constants";

export function NFTTitle({title='NTF title', subtitle='NTF subtitle', titleSize, subtitleSize}) {
    return (
        <View>
            <Text style={[styles.NFTTitle, {fontSize: titleSize}]}>{title}</Text>
            <Text style={[styles.NFTSubtitle, {fontSize: subtitleSize}]}>{subtitle}</Text>
        </View>
    )
}

export function ETHPrice({price}) {
    return (
        <View style={styles.ETHPrice}>
            <Image source={assets.eth} resizeMode='contain' style={styles.ETHImage}/>
            <Text style={styles.ETHText}>{price}</Text>
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
            {/* fake data */}
            {[assets.person02, assets.person03, assets.person04]
                .map((imgUrl, index) => <ImageCmp imgUrl={imgUrl} index={index} key={`people-${index}`}/>)}
        </View>
    )
}

export function EndDate() {
    return (
        <View style={styles.endDate}>
            <Text style={styles.endDateCaption}>EndDate</Text>
            <Text style={styles.endDateText}>1h 30m</Text>
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
    },
    people: {
        flexDirection: 'row'
    },
    image: {
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
    endDateCaption: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    endDateText: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    },
    NFTTitle: {
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    },
    NFTSubtitle: {
        fontFamily: FONTS.regular,
        color: COLORS.primary
    },
    ETHPrice: {
        flexDirection: "row",
        alignItems: "center"
    },
    ETHText: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary,
    },
    ETHImage: {
        width: 20,
        height: 20,
        marginRight: 2
    }
})

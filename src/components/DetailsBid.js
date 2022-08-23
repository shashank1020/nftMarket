import {Image, StyleSheet, Text, View} from "react-native";
import {COLORS, FONTS, SIZES} from "../constants";
import {ETHPrice} from "./SubInfo";

function DetailsBid({bid}) {
    return (
        <View style={styles.container}>
            <Image source={bid.image} resizeMode='contain' style={styles.bidderImg}/>
            <View>
                <Text style={styles.bidderName}>Bid placed by {bid.name}</Text>
                <Text style={styles.biddingDate}>{bid.date}</Text>
            </View>
            <ETHPrice price={bid.price}/>
        </View>
    )
}

export default DetailsBid;


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
    },
    bidderImg: {width: 48, height: 48},
    bidderName: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    biddingDate: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small - 2,
        color: COLORS.secondary,
        marginTop: 3
    }
})

import {Text, View, StyleSheet, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {assets, COLORS, SHADOWS, SIZES} from "../constants";
import {CircleButton} from "./buttons";
import {SubInfo} from "./SubInfo";

function NFTCard({data}) {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={data.image} style={styles.image}/>
            </View>
            <CircleButton imgUrl={assets.heart} right={10} top={10} />
            <SubInfo />
            <View style={styles.nftTitle}></View>
        </View>
    )
}

export default NFTCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,

    },
    imageContainer: {
        height: 250,
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font
    },
    nftTitle: {
        width: '100%',
        padding: SIZES.font
    },
})

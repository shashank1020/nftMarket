import {Image, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {assets, COLORS, SHADOWS, SIZES} from "../constants";
import {CircleButton, RectButton} from "./buttons";
import {ETHPrice, NFTTitle, SubInfo} from "./SubInfo";

function NFTCard({data}) {
    const {navigate} = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={data.image} style={styles.image}/>
            </View>
            <CircleButton imgUrl={assets.heart} right={10} top={10}/>
            <SubInfo/>
            <View style={styles.nftTitle}>
                <NFTTitle
                    title={data.name}
                    subtitle={data.creator}
                    titleSize={SIZES.large}
                    subtitleSize={SIZES.small}
                />
                <View style={styles.bottomContainer}>
                    <ETHPrice price={data.price}/>
                    <RectButton minWidth={120} fontSize={SIZES.font} handlePress={() => navigate('Details', {data})}/>
                </View>
            </View>
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
    bottomContainer: {
        marginTop: SIZES.font,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    }

})

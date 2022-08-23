import {Text, View, StyleSheet} from "react-native";
import {ETHPrice, NFTTitle} from "./SubInfo";
import {COLORS, FONTS, SIZES} from "../constants";
import {useState} from "react";


function DetailsDesc({ data }) {
    const [text, setText] = useState(data.description.slice(0, 100))
    const [readMore, setReadMore] = useState(false)
    const handleRead = () => {
      if (!readMore) {
          setText(data.description)
          setReadMore(true)
      } else {
          setText(data.description.slice(0, 100))
          setReadMore(false)
      }
    }
    return(
        <>
            <View style={styles.top}>
                <NFTTitle
                    title={data.name}
                    subtitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subtitleSize={SIZES.font}
                />
                <ETHPrice price={data.price} />
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionHead}>Description</Text>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionText}>
                        {text}
                        {!readMore && '...'}
                        <Text style={styles.readMore} onPress={handleRead}>
                            {readMore ? ' Show Less': ' Read More'}
                        </Text>

                    </Text>
                </View>
            </View>
        </>
    )
}

export default DetailsDesc;


const styles = StyleSheet.create({
    top: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    description: {
        marginVertical: SIZES.extraLarge * 1.5
    },
    descriptionHead: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    },
    descriptionTextWrapper: {
        marginTop: SIZES.base
    },
    descriptionText: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large
    },
    readMore: {
        fontSize: SIZES.small,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    }
})

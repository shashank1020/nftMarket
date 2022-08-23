import {Image, StyleSheet, Text, TextInput, View} from "react-native";
import {assets, COLORS, FONTS, SIZES} from "../constants";
import _ from "lodash";

function HomeHeader({handleSearch}) {
    const debonunce = _.debounce(handleSearch, 200)
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Image source={assets.logo} resizeMode='contain' style={styles.logo}/>
                <View style={styles.avatarContainer}>
                    <Image source={assets.person01} resizeMode='contain' style={styles.avatar}/>
                    <Image source={assets.badge} resizeMode='contain' style={styles.badge}/>
                </View>
            </View>
            <View style={styles.welcomeUser}>
                <Text style={styles.caption}>Hello, Shashank 👋🏻</Text>
                <Text style={styles.description}>Let's find a masterpiece</Text>
            </View>
            <View style={styles.searchBar}>
                <View style={styles.searchWrapper}>
                    <Image source={assets.search} resizeMode='contain' style={styles.searchIcon} />
                    <TextInput
                        placeholder='Search NFTs'
                        onChangeText={debonunce}
                        style={styles.searchInput}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeHeader;


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: SIZES.font
    },
    appBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {width: 90, height: 25},
    avatarContainer: {width: 45, height: 45},
    avatar: {width: '100%', height: '100%'},
    badge: {
        position: "absolute",
        width: 15,
        height: 15,
        right: 0,
        bottom: 0
    },
    welcomeUser: {marginVertical: SIZES.font},
    caption: {fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white},
    description: {fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2},
    searchBar: { marginTop: SIZES.font },
    searchWrapper: {
        width: "100%",
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES. small - 2
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: SIZES.base,
    },
    searchInput: { flex: 1 }
})

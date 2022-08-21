import {StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import {FocusedStatusBar, HomeHeader, NFTCard} from "../components";
import {COLORS, NFTData} from "../constants";


function Home() {
    return(
        <SafeAreaView style={styles.container}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={styles.container}>
                <View style={styles.listPosition}>
                    <FlatList
                        data={NFTData}
                        renderItem={({item}) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
                <View style={styles.listBackground} >
                    <View style={styles.top}/>
                    <View style={styles.bottom}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listPosition: {
        zIndex: 0
    },
    listBackground: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: -1
    },
    top: {
      height: 300,
      backgroundColor: COLORS.primary
    },
    bottom: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    }
});

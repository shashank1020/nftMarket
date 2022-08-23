import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, FlatList, Image, StatusBar} from "react-native";
import {CircleButton, DetailsBid, DetailsDesc, FocusedStatusBar, RectButton, SubInfo} from "../components";
import {assets, FONTS, SHADOWS, SIZES} from "../constants";

function DetailsHeader({data, navigation}) {
    return(
        <View style={{width: '100%', height: 373}}>
            <Image source={data.image} resizeMode='cover' style={{ width: '100%', height: '100%'}} />

            {/* back button */}
            <CircleButton
                imgUrl={assets.left}
                handlerPress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            {/* heart button */}
            <CircleButton
                imgUrl={assets.heart}
                right={15}
                top={StatusBar.currentHeight + 10}
            />
        </View>
    )
}

function Details({route, navigation}) {
    const {data} = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <FocusedStatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <View style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.5)",
                zIndex: 1,
            }}>
                <RectButton minWidth={120} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>
            <FlatList
                data={data.bids}
                renderItem={({item}) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                ListHeaderComponent={() => <React.Fragment>
                    <DetailsHeader data={data} navigation={navigation} />
                    <SubInfo />
                    <View style={{padding: SIZES.font}}>
                        <DetailsDesc data={data} />
                    </View>
                </React.Fragment>}
            />
        </SafeAreaView>
    )
}

export default Details;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        paddingBottom: SIZES.extraLarge * 3
    }
})

import React, { Component } from 'react';


import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';





export default class HomeScreen extends Component {
    render() {
        return (

            <View style={{ flex: 1 }}>

                <ScrollView
                    contentContainerStyle={{ paddingTop: 86 }}
                    style={{ flex: 1 }}>
                    <ScrollView horizontal>
                        <View style={styles.postsContainer}>
                            <View style={styles.circlecontainers}>
                                <Image style={styles.circleimages} source={require("../assets/home.jpg")}></Image>
                                <Text>Data night</Text>
                            </View>

                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/herocontact.jpg")}></Image>
                                <Text>travel</Text>
                            </View>

                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/camera1.jpg")}></Image>
                                <Text>camera</Text>
                            </View>

                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/girl1.jpg")}></Image>
                                <Text>girl</Text>
                            </View>
                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/oldman.jpg")}></Image>
                                <Text>oldman</Text>
                            </View>

                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/random2.jpg")}></Image>
                                <Text>wedding</Text>
                            </View>
                            <View style={styles.circlecontainers}>

                                <Image style={styles.circleimages} source={require("../assets/camera2.jpg")}></Image>
                                <Text>girl</Text>
                            </View>
                        </View>

                    </ScrollView>


                    <View style={styles.detailscontainer}>
                        <Image style={styles.images} source={require("../assets/bbc.png")}></Image>
                        <View style={styles.textcontainer}>
                            <Text style={styles.username}>BBC </Text>
                            <Text style={styles.date}>Yesterday at 12:30 </Text>
                        </View>
                    </View>


                    <View>
                        <Image style={styles.postsimages} source={require("../assets/bbc1.jpg")}></Image>
                        <Text style={styles.captiontext}>#breaking This city is on fire.. </Text>
                    </View>

                    <View style={styles.detailscontainer}>
                        <Image style={styles.images} source={require("../assets/barca.png")}></Image>
                        <View style={styles.textcontainer}>
                            <Text style={styles.username}>FCBARCELONA </Text>
                            <Text style={styles.date}>Today at 12:44  </Text>
                        </View>
                    </View>


                    <View>
                        <Image style={styles.postsimages} source={require("../assets/barca1.jpg")}></Image>
                        <Text style={styles.captiontext}>Barca situation after defeat to liverpool. </Text>
                    </View>

                    <View style={styles.detailscontainer}>
                        <Image style={styles.images} source={require("../assets/bmw.png")}></Image>
                        <View style={styles.textcontainer}>
                            <Text style={styles.username}>BMW </Text>
                            <Text style={styles.date}>Yesterday at 12:30 </Text>
                        </View>
                    </View>


                    <View>
                        <Image style={styles.postsimages} source={require("../assets/bmw1.jpg")}></Image>
                        <Text style={styles.captiontext}>BMW new i3 audition Toronto</Text>
                    </View>



                </ScrollView>

                <View style={styles.topheader}>
                    <Text style={styles.titletext}>Home</Text>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    postsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'gray',

        alignItems: 'center',
        textAlign: "center"



    },

    topheader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: 85,
        backgroundColor: 'maroon',
        alignItems: 'center',
        justifyContent: 'center'


    },

    detailscontainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        marginTop: 10


    },

    textcontainer: {
        justifyContent: 'center'

    },

    titletext: {
        top: 20,
        fontWeight: '800',
        fontSize: 16,
        color: 'white'
    },
    images: {
        height: 45,
        width: 45,
        borderRadius: 23,
        marginRight: 10
    },

    username: {
        fontSize: 16,
        fontWeight: '500'
    },

    date: {
        fontSize: 14,


    },

    postsimages: {
        height: 200,
        width: null,

    },

    captiontext: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        fontSize: 14
    },

    circleimages: {
        height: 65,
        width: 65,
        borderRadius: 33

    },

    circlecontainers: {
        marginRight: 15,

        alignItems: 'center'

    }

});
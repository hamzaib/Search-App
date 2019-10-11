import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, ScrollView, Image, StatusBar, Button } from 'react-native';
// to set initial values for animations
export default class extends Component {
  state = {
    enter: new Animated.Value(0),
    ValueA: new Animated.Value(0),
    ValueB: new Animated.Value(0),
    ValueC: new Animated.Value(0),
    ValueD: new Animated.Value(0),
    ValueE: new Animated.Value(0),
    entry: new Animated.Value(0),

  }


  //starting header animation
componentDidMount = () => {
  Animated.timing(this.state.entry, { toValue: 1, duration: 2000 }).start()
}

//animation ranges 
  render() {
    let ValueA = this.state;

    let opacity = this.state.ValueA.interpolate({
      inputRange: [0, 1],
      outputRange: [0.1, 1]
    })

    let start = this.state.entry.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 90, 0],
      bounciness: 20
    })

    let scale = this.state.enter.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],

    })

    let rotate = this.state.ValueB.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],

    })
    let change1 = this.state.ValueD.interpolate({
      inputRange: [0, 1],
      outputRange: [13, 20],

    })

    let sametime1 = this.state.ValueC.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],

    })

    let sametime2 = this.state.ValueE.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 90, 0],

    })




    return (


      <View style={{ flex: 1 }}>
        <Animated.ScrollView style={{ marginTop: 150 }}>

          <View style={styles.circlecontainers}>
            <Text style={styles.title}>Size example</Text>
            <Animated.Image style={{
              flex: 1,
              height: 200,
              width: '80%',
              marginTop: 15,
              transform: [{ scale }]

            }}
              source={require("./assets/g4.jpg")}></Animated.Image>
            <Button style={styles.btnstyle} title="Click me fullsize" onPress={this._Press1} />

          </View>

          <View style={styles.circlecontainers}>
            <Text style={styles.title}>Opacity example</Text>
            <Animated.Image style={{
              flex: 1,
              height: 200,
              opacity: opacity,
              width: '80%',
              marginTop: 15,



            }} source={require("./assets/b2.jpg")}></Animated.Image>

            <Button title="Full opacity" onPress={this._Press2} />

          </View>

          <View style={styles.circlecontainers}>
            <Text style={styles.title}>Rotation Example</Text>
            <Animated.Image style={{
              flex: 1,
              height: 200,
              width: '80%',
              marginTop: 15,
              transform: [{ rotate }]
            }} source={require("./assets/john5.jpg")}></Animated.Image>
            <Button title="Rotate" onPress={this._Press3} />
          </View>

          <View style={styles.circlecontainers}>
            <Animated.Text style={{
              fontSize: change1
            }}
            >Change to font</Animated.Text>
            <Animated.Image style={{
              flex: 1,
              height: 200,
              width: '80%',
              marginTop: 15,
            }}source={require("./assets/john.jpg")}></Animated.Image>
            <Button title="Font bigger" onPress={this._Press4} />
          </View>

          
          <View style={styles.circlecontainers}>
            <Text style={styles.title}>2 Animations</Text>
            <Animated.Image style={{
              flex: 1,
              opacity: sametime1,
              height: 200,
              width: '80%',
              marginTop: 15,
             left: sametime2
        
            }}source={require("./assets/g.jpg")}></Animated.Image>
            <Button title="same time" onPress={this._Press5} />
          </View>



        </Animated.ScrollView>

        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 150,
          top: start,
          backgroundColor: 'black',


        }}>
          <StatusBar barStyle="light-content" />
          <Text style={{
            fontSize: 30,
            fontWeight: "300",
            color: 'white',
            paddingTop: 70,
            alignSelf: 'center',
          }}>Animation Examples</Text>

        </Animated.View>


      </View>
    );
  }


  //buttons called to activated animations
  _Press1 = () => {
    Animated.timing(this.state.enter, { toValue: 1, duration: 1000 }).start()

  }

  _Press2 = () => {
    Animated.timing(this.state.ValueA, { toValue: 1, duration: 1000 }).start()
  }

  _Press3 = () => {
    Animated.timing(this.state.ValueB, { toValue: 1, duration: 1000 }).start()
  }

  _Press4 = () => {
    Animated.timing(this.state.ValueD, { toValue: 1, duration: 1000 }).start()
  }

  _Press5 = () => {
    Animated.timing(this.state.ValueC, { toValue: 1, duration: 1000 }).start()
    Animated.timing(this.state.ValueE, { toValue: 1, duration: 2000 }).start()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
  circlecontainers: {
    paddingVertical: 20,
    paddingTop: 20,
    marginTop: 30,
    marginLeft: "10%",
    marginRight: "10%",
    alignItems: 'center',
    textAlign: "center",
    borderWidth: 0.1,
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    shadowOffset: { width: 1, height: 1, },
    shadowColor: 'black',
    shadowOpacity: 0.3

  },
  images: {
    flex: 1,
    height: 200,
    width: '80%',
    marginTop: 15
  },
  title: {
    fontSize: 19,
    fontWeight: "200"
  }
});

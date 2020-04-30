import React from 'react';
import {Text, View, FlatList, TouchableHighlight, Animated} from 'react-native';
import { createFilter,} from 'react-native-search-filter';
import { ListItem } from 'react-native-elements'
import { Swipeable } from 'react-native-gesture-handler'
import { SearchBar } from 'react-native-elements';


const data = [
  {
    name: 'Swift',
    info: 'Is an IOS language'
  },
  {
    name: 'Kotlin',
    info: 'Java Virtual Machine'
  },
  {
    name: 'ObjectiveC',
    info: 'Language used in Swift'
  },
  {
    name: 'Variable',
    info: 'Similar to a const'
  },

  {
    name: 'Java',
    info: 'Back-end Lanuage'
  },
  {
    name: ' Mobile',
    info: 'Phone Interface'

  }]

export default class App extends React.Component {
  state = { searchTerm: '', count: 0 }


   _pressed = (term) => {
    this.setState({ count: this.state.count + 1 })

  }

  SearchFilterFunction(term) {
    this.setState({ searchTerm: term })
  }

  render() {

    const filtered = data.filter(createFilter(this.state.searchTerm, 'info'))
    return (
      <View style={{ flex: 1, marginTop: 90, }}>

        <SearchBar
          style={{ zIndex: 2 }}
          placeholder="Search.."
          onChangeText={term => this.SearchFilterFunction(term)}
          value={this.state.searchTerm}
        />
        {/* 
        {

          filtered.map((word, p) => {
            return (
              <View key={p}>
                <Text>{word.name}</Text>
              </View>
            )
          })

        } */}

  

        <FlatList
          data={filtered}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              key={item.info}
              onPress={() => { this._pressed() }}
              onShowUnderlay={separators.highlight}
            >
              <Swipeable renderLeftActions={leftActions = (progress, dragX) => {
                const scale = dragX.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, 1],
                  extrapolate: 'clamp'
                })

                return (
             
                  <View style={{width:'40%', justifyContent: 'center', backgroundColor: 'green',}}>
                    <Animated.Text style={[{padding: 10, fontSize: 16, color: 'white'}, {transform: [{ scale }]} ]}>{item.name}</Animated.Text>
                  </View> 
                )
              }}>


                <ListItem title={item.info}
                  onSwipeLeft={() => alert()}
                  onSwiperight={() => alert()}
                />
              </Swipeable>

            </TouchableHighlight>
          )}
          ItemSeparatorComponent={Seperator = () => {
            return (<View style={{flex:1, height:1, backgroundColor: '#D7D7D7', marginLeft: 10}}/>)
           }}
          keyExtractor={item => item.name}
        />

      <Text style={{flex:1, margin: 10, }}>User Found {this.state.count} words</Text>
      </View>
    );
  }
}



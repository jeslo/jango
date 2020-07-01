import React from 'react'
import {View, Text, SafeAreaView, FlatList, Alert} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {styles} from './styles'

//import TextButton from '../../Components/Button/index'

// constructor(props){
//     super(props){
//         this.state = {
//             seed: 1,
//             refreshing: false
//         }
//     }
// }
const DATA = [
  {
    id: '01',
    title: 'First Package',
  },
  {
    id: '02',
    title: 'Second Package',
  },
  {
    id: '03',
    title: 'Third Package',
  },
  {
    id: '04',
    title: 'Fourth Package',
  },
  {
    id: '05',
    title: 'Fifth Package',
  },
  {
    id: '06',
    title: 'Sixth Package',
  },
  {
    id: '07',
    title: 'Seventh Package',
  },
  {
    id: '08',
    title: 'Eighth Package',
  },
  {
    id: '09',
    title: 'Nineth Package',
  },
  {
    id: '10',
    title: 'Tenth Package',
  },
  {
    id: '11',
    title: 'Eleventh Package',
  }
]

function Item ({items, id}) {
  return (
    <TouchableOpacity onPress={() => console.tron.log('>>>>>>>>')}>
      <View style={styles.cellItem}>
        <Text style={styles.title}>{items}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default class CheckinScreen extends React.Component {
  renderHeader = () => {
    return (
      <View style={styles.header_footer}>
        <Text style={styles.textStyle}>Welcome-DisplayName</Text>
      </View>
    )
  }
  renderFooter = () => {
    return (
      <View style={styles.header_footer}>
        <Text style={styles.textStyle}> Thank You </Text>
      </View>
    )
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#606070'}} />
    )
  }
  handleRefresh = () => {
    this.setState({
      refreshing: true,
      seed: this.state.seed + 1
    })
  }
  render () {
    return (
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item items={item.title} />}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          stickyHeaderIndices={[0]}
        />
      </SafeAreaView>
    )
  }
}

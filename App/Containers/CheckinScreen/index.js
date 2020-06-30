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
    title: 'First Item',
  },
  {
    id: '02',
    title: 'Second Item',
  },
  {
    id: '03',
    title: 'Third Item',
  },
  {
    id: '04',
    title: 'First Item',
  },
  {
    id: '05',
    title: 'First Item',
  },
  {
    id: '06',
    title: 'First Item',
  },
  {
    id: '07',
    title: 'First Item',
  },
  {
    id: '08',
    title: 'First Item',
  },
  {
    id: '09',
    title: 'First Item',
  },
  {
    id: '10',
    title: 'First Item',
  },
  {
    id: '11',
    title: 'First Item',
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
        <Text style={styles.textStyle}>Welcome</Text>
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

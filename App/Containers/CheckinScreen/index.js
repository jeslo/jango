import React from 'react'
import {View, Text, SafeAreaView, FlatList} from 'react-native'
import _ from 'lodash'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {styles} from './styles'
import {connect} from 'react-redux'
import Actions from '../../Redux/LoginRedux'

class CheckinScreen extends React.Component {
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={this.props.checkInUser({
          packageName: _.get(item, 'productName', ''),
          dueAmount: _.get(item, 'DueAmount', '')
        })}>
        <View style={styles.cellItem}>
          <Text style={styles.title}> { _.get(item, 'productName', '')}</Text>
          <Text style={styles.title}> { _.get(item, 'DueAmount', '') }</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderHeader = () => {
    return (
      <View style={styles.header_footer}>
        <Text style={styles.textStyle}>Welcome {this.props.displayName} </Text>
      </View>
    )
  }
  renderFooter = () => {
    return (
      <View style={styles.header_footer}>
        <Text style={styles.textStyle}> Thank you </Text>
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
      seed: this.state.seed + 1,
    })
  }
  render () {
    console.tron.log('>>CheckinScreen>>', this.props)
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.packageList}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          stickyHeaderIndices={[0]}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  packageList: _.get(state, 'login.packagedetails.Packagedata.packageItems', []),
  displayName: _.get(state, 'login.packagedetails.Packagedata.userName')
})
const mapDispatchToProps = dispatch => ({
  checkInUser: params => () => dispatch(Actions.getCheckInRequest(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckinScreen)

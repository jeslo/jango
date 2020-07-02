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
          <Text style={styles.title}> {_.get(item, 'productName', '')}</Text>
          <Text style={styles.title}> {_.get(item, 'DueAmount', '')}</Text>
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
      seed: this.state.seed + 1
    })
  }
  renderFailureCard = () => {
    if (!this.props.packageEmpty) return null
    return (
      <View style={{backgroundColor: 'orange', borderRadius: 10, alignSelf: 'center', paddingVertical: 30, paddingHorizontal: 20, margin: 20}}>
        <Text style={styles.contactRbcText}>
          Hi please contact RBC team to subscribe your packages
        </Text>
      </View>
    )
  }

  renderPackaageList = () => {
    if (this.props.packageEmpty) return null
    return <FlatList
      data={this.props.packageList}
      renderItem={this.renderItem}
  />
  }
  render () {
    return (
      <SafeAreaView>

        <this.renderFailureCard />
        <this.renderPackaageList />
      </SafeAreaView>
    )
  }
}
const mapStateToProps = state => ({
  packageEmpty: state.login.packageEmpty,
  packageList: _.get(
    state,
    'login.packagedetails.Packagedata.packageItems',
    []
  ),
  displayName: _.get(state, 'login.packagedetails.Packagedata.userName')
})
const mapDispatchToProps = dispatch => ({
  checkInUser: params => () => dispatch(Actions.getCheckInRequest(params))
  //checkValidCustormer: value => () => dispatch(Actions.setValidUserFlag(value))
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckinScreen)

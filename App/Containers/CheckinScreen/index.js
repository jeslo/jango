import React from 'react'
import {View, Text, SafeAreaView, FlatList} from 'react-native'
import _ from 'lodash'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {styles} from './styles'
import {connect} from 'react-redux'
import Actions from '../../Redux/LoginRedux'
import TextButton from '../../Components/Button'
import Popup from '../../Components/Popup'

class CheckinScreen extends React.Component {
  state = {
    show: false,
    item: {},
  }

  logOut = () => {
    this.props.navigation.goBack()
    this.props.logOut()
  }
  poupUp = () => {
    this.props.Popup()
  }

  renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          // onPress={() => {
          //   {
          //     this.poupUp
          //   }
          //   this.setState({show: true})
          // }}
          onPress={() =>
            this.setState({
              show: true,
              item,
            })
          }>
          <View style={styles.cellItem}>
            <Text style={styles.title}> {_.get(item, 'productName', '')}</Text>
            <Text style={styles.title}>
              {' '}
              {_.get(item, 'DueAmount', 'No Due')}
            </Text>
          </View>
          <View style={{backgroundColor: 'red', flex: 1}} />
        </TouchableOpacity>
      </View>
    )
  }
  // handleRefresh = () => {
  //   this.setState({
  //     refreshing: true,
  //     seed: this.state.seed + 1,
  //   })
  // }
  renderFailureCard = () => {
    if (!this.props.packageEmpty) return null
    return (
      <View
        style={{
          backgroundColor: 'orange',
          borderRadius: 10,
          alignSelf: 'center',
          paddingVertical: 30,
          paddingHorizontal: 20,
          margin: 20,
        }}>
        <Text style={styles.contactRbcText}>
          Hi please contact RBC team to subscribe your packages
        </Text>
      </View>
    )
  }
  renderPopup = ({item}) => {
    return (
      <Popup
        isVisible={this.state.show}
        onBack={() => this.setState({show: false})}>
        <View>
          <TouchableOpacity onPress={() => this.setState({show: false})}>
            <Text
              style={{
                paddingTop: 5,
                paddingBottom: 20,
                paddingLeft: 20,
                color: 'red',
                fontSize: 25,
               
              }}
              onPress={() => this.setState({show: false})}>
              X
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 250, width: 200, borderColor: 'yellow'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.title}>
              {' '}
              {_.get(this.state.item, 'productName', '')}
            </Text>
            <Text style={styles.title}>
              {' '}
              {_.get(this.state.item, 'DueAmount', 'No due')}
            </Text>
          </View>

          <TextButton
            buttonName='CheckIn'
            onPress={this.props.checkInUser({
              UserId: this.props.gudid,
              UserName: this.props.UserName,
              ProductId: _.get(this.state.item, 'productId', ''),
              packageName: _.get(this.state.item, 'productName', ''),
              dueAmount: _.get(this.state.item, 'DueAmount', ''),
              Phone: this.props.Phone,
            })}
            style={styles.button}
          />
        </View>
      </Popup>
    )
  }

  renderPackaageList = () => {
    if (this.props.packageEmpty) return null
    return (
      <FlatList data={this.props.packageList} renderItem={this.renderItem} />
    )
  }
  render () {
    return (
      <SafeAreaView>
        <View style={{width: 100, paddingLeft: 10}}>
          <TextButton buttonName='Logout' onPress={this.logOut} />
        </View>
        <this.renderFailureCard />
        <this.renderPackaageList />
        <this.renderPopup />
      </SafeAreaView>
    )
  }
}
const mapStateToProps = state => ({
  packageEmpty: state.login.packageEmpty,

  packageList: _.get(
    state,
    'login.packagedetails.Packagedata.packageItems',
    [],
  ),
  gudid: _.get(state, 'login.packagedetails.Packagedata.guId', ''),
  UserName: _.get(state, 'login.packagedetails.Packagedata.userName', ''),
  Phone: _.get(state, 'login.packagedetails.Packagedata.phone', ''),
})
const mapDispatchToProps = dispatch => ({
  checkInUser: params => () => dispatch(Actions.getCheckInRequest(params)),
  logOut: () => dispatch(Actions.logoutUser()),
  popup: () => dispatch(Actions.popupCard()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckinScreen)

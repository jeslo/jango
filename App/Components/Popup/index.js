
import React, { PureComponent } from 'react'
import { View, ScrollView } from 'react-native'

import Modal from 'react-native-modal'

export default class Popup extends PureComponent {
  render () {
    return (
      <Modal
        isVisible={this.props.isVisible}
        onBackButtonPress={this.props.onBack}
        onBackdropPress={this.props.onBack}
        // style={ApplicationStyles.bottomModal}
      >
        <View style={{ backgroundColor: '#fff' }}>
          <ScrollView>{this.props.children}</ScrollView>
        </View>
      </Modal>
    )
  }
}
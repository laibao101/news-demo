import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';


import Home from './XMGHome';
import Find from './XMGFind';
import Message from './XMGMessage';
import Mine from './XMGMine';

export default class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			selectedTab:'home'
		}
	}

	render(){
		return (
			<TabBarIOS>
				{/* 首页 */}
				<TabBarIOS.Item
					icon={require('../ios/newsDemo/Images.xcassets/TabBar/tabbar_home.imageset/tabbar_home.png')}
					title='首页'
					selected={this.state.selectedTab === 'home' }
                    onPress={()=> {
                        this.setState({
                            selectedTab:'home'
                        })
                    }}
				>
                    <Home></Home>
				</TabBarIOS.Item>
				{/* 发现 */}
				<TabBarIOS.Item
					icon={require('../ios/newsDemo/Images.xcassets/TabBar/tabbar_discover.imageset/tabbar_discover.png')}
					title='发现'
					selected={this.state.selectedTab === 'find' }
                    onPress={()=> {
                        this.setState({
                            selectedTab:'find'
                        })
                    }}
				>
                    <Find></Find>
				</TabBarIOS.Item>
				{/* 消息 */}
				<TabBarIOS.Item
					icon={require('../ios/newsDemo/Images.xcassets/TabBar/tabbar_message_center.imageset/tabbar_message_center.png')}
					title='消息'
					selected={this.state.selectedTab === 'message' }
                    onPress={()=> {
                        this.setState({
                            selectedTab:'message'
                        })
                    }}
				>
                    <Message></Message>
				</TabBarIOS.Item>
				{/* 我的 */}
				<TabBarIOS.Item
					icon={require('../ios/newsDemo/Images.xcassets/TabBar/tabbar_profile.imageset/tabbar_profile.png')}
					title='我的'
					selected={this.state.selectedTab === 'mine' }
                    onPress={()=> {
                        this.setState({
                            selectedTab:'mine'
                        })
                    }}
				>
                    <Mine></Mine>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}


const styles = StyleSheet.create({

});

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';


export default class Main extends Component{
	render(){
		return (
			<TabBarIOS>
				{/* 首页 */}
				<TabBarIOS.Item
					icon={require('../ios/newsDemo/Images.xcassets/TabBar/tabbar_home.imageset/tabbar_home.png')}
					title='首页'
				>

				</TabBarIOS.Item>
				{/* 发现 */}
				<TabBarIOS.Item
					icon={require('../ios/newsDemo/Images.xcassets/TabBar/tabbar_discover.imageset/tabbar_discover.png')}
					title='发现'
				>
				</TabBarIOS.Item>
				{/* 消息 */}
				<TabBarIOS.Item
					icon={require('../ios/newsDemo/Images.xcassets/TabBar/tabbar_message_center.imageset/tabbar_message_center.png')}
					title='消息'
				>

				</TabBarIOS.Item>
				{/* 我的 */}
				<TabBarIOS.Item
					icon={require('../ios/newsDemo/Images.xcassets/TabBar/tabbar_profile.imageset/tabbar_profile.png')}
					title='我的'
				>

				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}


const styles = StyleSheet.create({

});

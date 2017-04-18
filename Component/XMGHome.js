import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS,
    NavigatorIOS,
    WebView
} from 'react-native';

import Find from './XMGFind';

export default class Home extends Component {



    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                navigationBarHidden={false}
                initialRoute={{
                    component: HomeRender,
                    title: '首页'
                }}
            />
        );
    }

}

class HomeRender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} ></ListView>
            </View>
        );
    }

    renderRow(item) {
        return (
            <TouchableOpacity onPress={() => this._onPressButton(item)}>
                <View style={styles.itemContainer}>
                    <Image source={{
                        uri: item.imgurl
                    }} style={{
                        width: 100,
                        height: 100
                    }}></Image>
                    <View style={styles.itemText}>
                        <Text style={styles.itemTitle} numberOfLines={10}>{item.title}</Text>
                        <Text style={styles.itemTime}>{item.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    _onPressButton(item) {
        console.log(this.props);
        this.props.navigator.push({
            component:TWebView,
            title:'新闻详情',
            passProps:{
                url:item.docurl
            }
        });
    }

    componentDidMount() {

        // const url = 'http://3g.163.com/touch / reconstruct / article / list / BBM54PGAwangning / 0 - 10. html ';
        const url = 'http://wangyi.butterfly.mopaasapp.com/news/api?type=war&page=1&limit=10';

        const that = this;
        fetch(url, {method: 'GET'}).then(response => response.json()).then(data => {
            const list = data.list;
            that.setState({dataSource: that.state.dataSource.cloneWithRows(list)});
        }).catch(e => {
            console.log(e);
        })
    }
}

class TWebView extends Component{
    render(){
        return (
            <WebView source={{uri:this.props.url}} style={styles.container}></WebView>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    container: {
        flex:1
    },
    itemText: {
        //   alignItems:'center'
        marginLeft: 10,
        flexWrap: 'wrap'
    },
    itemTitle: {
        marginTop: 5,
        flexWrap: 'wrap',
        width: 250,
        height: 70
    },
    itemTime: {}
});

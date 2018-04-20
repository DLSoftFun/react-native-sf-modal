/**
 * Created by SF on 2018/4/17.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    TextInput,
    Image,
} from 'react-native';
import Proptypes from 'prop-types';
import Result from 'antd-mobile/lib/result';
import Button from 'antd-mobile/lib/button';
import Icon from 'antd-mobile/lib/icon';
import WhiteSpace from 'antd-mobile/lib/white-space';
const {width, height} = Dimensions.get('window');

export default class SFModal extends Component {

    /**
     * @param type 3种默认主题 TODO: 'normal', 'result', 'txt'
     * @param info 内容
     * @param title 标题
     * @param cancelText 取消按钮文字
     * @param okText 确认按钮文字
     * @param cancelCallback 取消回调
     * @param okCallback 确认回调
     * @param bottom 自定义底部按钮
     **/

    static propTypes = {
        //common
        title: Proptypes.string,
        info: Proptypes.string,
        //type
        type: Proptypes.string,
        cancelText: Proptypes.string,
        okText: Proptypes.string,
        cancelCallback: Proptypes.func,
        okCallback: Proptypes.func,
        //define
        bottom: Proptypes.any,
        icon: Proptypes.number,
        iconWidth: Proptypes.number,
        iconHeight: Proptypes.number,
    }

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    render() {
        const {title, info, cancelText, okText, cancelCallback, okCallback} = this.props;
        const z_width = 280;
        const z_height = 200;
        if (this.props.type == 'normal' && this.state.visible) {
            return (
                <View style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    zIndex: 99,
                    backgroundColor: 'transparent'
                }}>
                    <View style={{
                        marginLeft: (width - z_width) / 2,
                        marginTop: (height - z_height) / 2,
                        width: z_width,
                        height: z_height,
                        backgroundColor: 'white',
                        borderRadius: 6,
                    }} overflow={true}>
                        <View style={{
                            width: z_width,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: 'rgba(69,69,69,1)'
                                }}>{title}</Text>
                        </View>
                        <View style={{
                            width: z_width,
                            height: 1,
                            backgroundColor: 'rgba(233,233,233,1)'
                        }}/>
                        <View style={{
                            width: z_width - 30,
                            height: z_height - 40 - 50 - 30,
                            marginLeft: 15,
                            marginTop: 15
                        }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: 'rgba(123,123,123,1)',
                                    lineHeight: 20,
                                }}
                                numberOfLines={3}>{info}</Text>
                        </View>
                        <View style={{
                            width: z_width,
                            height: 1,
                            backgroundColor: 'rgba(233,233,233,1)',
                            marginTop: 20,
                        }}/>
                        <View style={{
                            width: z_width,
                            height: 50,
                            backgroundColor: 'rgba(245,248,250,1)',
                            flexDirection: 'row'
                        }}>
                            <Button
                                onClick={cancelCallback}
                                style={{
                                    marginTop: 5,
                                    marginLeft: z_width - 160,
                                    width: 70,
                                    height: 30,
                                    backgroundColor: 'rgba(250,251,252,1)'
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: 'rgba(145,156,165,1)',
                                    }}>{cancelText}</Text>
                            </Button>
                            <Button
                                onClick={okCallback}
                                style={{
                                    marginTop: 5,
                                    marginLeft: 10,
                                    width: 70,
                                    height: 30,
                                    backgroundColor: 'rgba(210,24,83,1)'
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: 'white',
                                    }}>{okText}</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            )
        }
        else if (this.props.type == 'result' && this.state.visible) {
            return (
                <View style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    zIndex: 99,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: z_width,
                        backgroundColor: 'white',
                        borderRadius: 6,
                    }} overflow={true}>
                        <Result
                            img={<Icon
                                type={'\ue631'}
                                size={55}
                                color={'rgba(161,222,134,1)'}/>}
                            title={
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        color: 'rgba(69,69,69,1)'
                                    }}>
                                    {title}
                                </Text>
                            }
                            message={
                                <Text
                                    style={{
                                        fontSize: 13,
                                        color: 'rgba(123,123,123,1)'
                                    }}>
                                    {info}
                                </Text>
                            }
                        />
                        <Button
                            onClick={cancelCallback}
                            style={{
                                width: 70,
                                height: 28,
                                marginLeft: z_width - 80,
                                backgroundColor: 'rgba(120,207,249,1)'
                            }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: 'white'
                                }}>{'close'}</Text>
                        </Button>
                        <WhiteSpace
                            size='md'/>
                    </View>
                </View>
            )
        }
        else if (this.props.type == 'txt' && this.state.visible) {
            return (
                <View style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    zIndex: 99,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: z_width,
                        backgroundColor: 'white',
                        borderRadius: 6,
                    }} overflow={true}>

                        <WhiteSpace
                            size={'lg'}/>
                        <View style={{
                            width: z_width,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'rgba(69,69,69,1)'
                                }}>{title}</Text>
                        </View>
                        <WhiteSpace
                            size={'lg'}/>
                        <View style={{
                            marginLeft: 15,
                            width: z_width - 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: 'rgba(123,123,123,1)',
                                    textAlign: 'center',
                                    lineHeight: 20
                                }}>{info}</Text>
                        </View>
                        <WhiteSpace
                            size={'lg'}/>

                        <View style={{
                            width: z_width,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <TextInput
                                placeholder={'  please input .'}
                                style={{
                                    width: z_width - 30,
                                    height: 30,
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    borderColor: 'rgba(233,233,233,1)'
                                }}
                                numberOfLines={1}
                                maxLength={20}/>
                        </View>
                        <WhiteSpace
                            size={'lg'}/>

                        <View style={{
                            width: z_width,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Button
                                onClick={cancelCallback}
                                style={{
                                    width: z_width - 30,
                                    height: 30,
                                    backgroundColor: 'rgba(162,222,132,1)'
                                }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: 'white'
                                    }}>{'close'}</Text>
                            </Button>
                        </View>

                        <WhiteSpace
                            size='md'/>
                    </View>
                </View>
            )
        }
        else if (!this.props.type && this.state.visible) {
            return (
                <View style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    zIndex: 99,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View
                        style={this.props.style}>
                        <WhiteSpace
                            size={'lg'}/>
                        {this.setIcon()}
                        <WhiteSpace
                            size={'lg'}/>
                        <View style={{
                            width: z_width,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'rgba(69,69,69,1)'
                                }}>{title}</Text>
                        </View>
                        <WhiteSpace
                            size={'lg'}/>
                        <View style={{
                            marginLeft: 15,
                            width: z_width - 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: 'rgba(123,123,123,1)',
                                    textAlign: 'center',
                                    lineHeight: 20
                                }}>{info}</Text>
                        </View>
                        <WhiteSpace
                            size={'lg'}/>
                        {this.setBottom()}
                    </View>
                </View>
            )
        }
        return null;
    }

    setBottom = () => {
        return this.props.bottom;
    }

    setIcon = () => {
        if (this.props.icon) {
            return (
                <View style={{
                    width: 280,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        style={{
                            width: this.props.iconWidth,
                            height: this.props.iconHeight
                        }}
                        resizeMode={'cover'}
                        source={this.props.icon}/>
                </View>
            )
        }
        return null;
    }

    setVisible = (statu) => {
        this.setState({
            visible: statu,
        })
    }
}



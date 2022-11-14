import React, {Component} from 'react';
import {View, TouchableOpacity, DeviceEventEmitter, Image} from 'react-native';
import ModalByViewBase from './ModalByViewBase';
import colors from '../res/colors';
import sizes from '../res/sizes';
import strings from '../res/strings';
import images from '../res/images';
import TextBase from './TextBase';
import fonts from '../res/fonts';

type ModalType = 'PRIMARY' | 'ERROR';

export interface DataPopup {
  type?: ModalType;
  isVisible?: boolean;
  title: string;
  message: string;
  titlePrimary?: string;
  titleSecondary?: string;
  disableClose?: boolean;
  viewChildren?: any;
}

interface Props {}

type State = {
  type?: ModalType;
  title: string;
  message: string;
  titlePrimary?: string;
  titleSecondary?: string;
  disableClose?: boolean;
  viewChildren?: any;
};

type Handler<E> = (event: E) => void;

interface OnCloseEvent {}
interface OnPressPrimaryEvent {}
interface OnPressSecondaryEvent {}

class EventDispatcher<E> {
  private handlers: Handler<E>[] = [];
  fire(event: E) {
    for (let h of this.handlers) h(event);
  }
  register(handler: Handler<E>) {
    this.handlers.push(handler);
  }
  clear() {
    this.handlers = [];
  }
}

class PopupAlertBase extends Component<Props, State> {
  // event primary
  private onPressPrimaryDispatcher = new EventDispatcher<OnPressPrimaryEvent>();
  public onPressPrimaryEvent(handler: Handler<OnPressPrimaryEvent>) {
    this.onPressPrimaryDispatcher.register(handler);
  }
  private setPressPrimaryEvent(event: OnPressPrimaryEvent) {
    this.onPressPrimaryDispatcher.fire(event);
  }

  // event secondary
  private onPressSecondaryDispatcher = new EventDispatcher<
    OnPressSecondaryEvent
  >();
  public onPressSecondaryEvent(handler: Handler<OnPressPrimaryEvent>) {
    this.onPressSecondaryDispatcher.register(handler);
  }
  private setPressSecondaryEvent(event: OnPressPrimaryEvent) {
    this.onPressSecondaryDispatcher.fire(event);
  }

  // event close
  private onCloseDispatcher = new EventDispatcher<OnCloseEvent>();
  public onCloseEvent(handler: Handler<OnCloseEvent>) {
    this.onCloseDispatcher.register(handler);
  }
  private setCloseEvent(event: OnCloseEvent) {
    this.onCloseDispatcher.fire(event);
  }

  public open(data: DataPopup, callback?: () => void): void {
    this.onCloseDispatcher.clear();
    this.onPressPrimaryDispatcher.clear();
    this.onPressSecondaryDispatcher.clear();

    const {
      type,
      title,
      message,
      titlePrimary,
      titleSecondary,
      disableClose,
      viewChildren,
    } = data;
    this.setState(
      {
        type,
        title,
        message,
        titlePrimary,
        titleSecondary,
        disableClose,
        viewChildren,
      },
      () => {
        this._popup &&
          this._popup._show(() => {
            this.isVisible = true;
            if (callback) callback();
          });
      },
    );
  }

  isVisible: boolean = false;

  public setMessage(message: string): void {
    this.setState({
      message,
    });
  }

  public close(callback?: () => void): void {
    console.log('on close');

    this.setCloseEvent({});

    this._popup &&
      this._popup._dismiss(() => {
        this.setState(
          {
            type: 'PRIMARY',
            title: '',
            message: '',
            titlePrimary: '',
            titleSecondary: '',
          },
          () => {
            this.isVisible = false;
            if (callback) {
              callback();
            }
          },
        );
      });
  }

  state: State = {
    title: '',
    message: '',
  };

  _popup?: ModalByViewBase;

  private onPressSecondary = () => {
    this.setPressSecondaryEvent({});
  };

  private onPressPrimary = () => {
    console.log('onPressPrimary');
    this.setPressPrimaryEvent({});
  };

  private _renderButton() {
    let btns: Array<any> = [];
    if (this.state.titlePrimary) {
      btns.push(
        <TouchableOpacity
          style={
            {
              // paddingLeft: sizes._30sdp,
            }
          }
          key={1}
          disabled={false}
          onPress={this.onPressPrimary}>
          <TextBase
            title={this.state.titlePrimary || ''}
            style={{
              fontSize: sizes._18sdp,
              fontFamily: fonts.SarabunMedium,
              // color: colors._color_EF0B0B,
              color: '#808183',
              lineHeight: sizes._18sdp * 1.5,
            }}
          />
        </TouchableOpacity>,
      );
    }
    if (this.state.titleSecondary) {
      btns.push(
        <TouchableOpacity
          key={2}
          style={{
            paddingHorizontal: sizes._30sdp,
          }}
          disabled={false}
          onPress={this.onPressSecondary}>
          <TextBase
            title={this.state.titleSecondary || ''}
            style={{
              fontSize: sizes._18sdp,
              fontFamily: fonts.SarabunSemiBold,
              // color: colors._color_button_login,
              color: '#263238',
              lineHeight: sizes._18sdp * 1.5,
            }}
          />
        </TouchableOpacity>,
      );
    }
    return btns;
  }


  render() {
    let titleColor = colors._color_text_ok;
    titleColor =
      this.state.type === 'ERROR'
        ? colors._color_text_warning
        : colors._color_text_ok;
    return (
      //@ts-ignore
      <ModalByViewBase
        animationInTiming={10}
        animationOutTiming={10}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        ref={(ref: any) => {
          if (ref) {
            this._popup = ref;
          }
        }}
        isTouchOutsideToDismiss={false}>
        <View
          style={{
            width: sizes._screen_width,
            height: sizes._screen_height,
            justifyContent: 'center',
            alignContent: 'center',
            padding: sizes._30sdp,
          }}>
          <View
            style={{
              backgroundColor: colors._color_white,
              borderRadius:
                this.state.message == strings.vtb_mes_send_contribute_success ||
                this.state.message == strings.vtb_mes_send_contribute_fail
                  ? sizes._14sdp
                  : sizes._5sdp,
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                paddingHorizontal: sizes._18sdp,
                paddingTop: sizes._18sdp,
                // borderBottomColor: colors._color_backgound,
                // borderBottomWidth: sizes._1sdp,
              }}>
              <TextBase
                style={{
                  // marginRight: sizes._35sdp,
                  fontSize: sizes._24sdp,
                  //   fontFamily: fonts.FSPFBeauSansProBold,
                  lineHeight: sizes._34sdp,
                  // fontWeight: 'bold',
                  color: colors._color_4D4B4B,
                }}
                title={this.state.title || ''}
              />
              {!this.state.disableClose && (
                <TouchableOpacity
                  onPress={() => this.close()}
                  style={{
                    marginLeft: 'auto',
                  }}>
                  <Image
                    style={{
                      tintColor: titleColor,
                      width: sizes._20sdp,
                      height: sizes._20sdp,
                    }}
                    source={images.ic_back}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </ModalByViewBase>
    );
  }
}

export default PopupAlertBase;

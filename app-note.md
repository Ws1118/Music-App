# 小程序开发

- Winter bells

APPID： wxcfcf0e94ef634809

AppSecret:62b11ab6025c17349e0de9104174ab4d

环境ID：wangs-8god2agcd87d8668

## 小程序准备

- 填写小程序注册信息（保存小程序的AppID和AppSecret）
- 填写小程序信息（小程序的头像可以用蒲公英工具箱自己制作）
- 下载微信开发者工具（默认安装）
- 创建小程序
- 打开（设置-安全设置-服务端口），勾选（详情-本地设置-增强编译&不效验合法域名、web-view（业务域名）、TLS版本以及HTTPS证书）
- 创建云开发环境
- 点击获取openid（调用失败，重新登录）

## 教程

[教程](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%AE%80%E4%BB%8B)

环境ID：（云开发-设置）

console.log(显示提示信息)

云函数最后一个不用加逗号

[矢量图标](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2 )

## 规范

定义变量：var  let(局部变量)  const(确定的值)

```javascript
 const name='wang'
    const person={
      name,
      age:30,
    }
```

const name='wang' 后不加分号

简写 name 放上面

最后一个值 age:30 后面加逗号

[编码规范](https://github.com/airbnb/javascript)

## 组件

### swiper（滑块视图容器）

| 属性                   | 类型    | 默认值             | 说明                         |
| ---------------------- | ------- | ------------------ | ---------------------------- |
| indicator-dots         | boolean | false              | 是否显示面板指示点           |
| indicator-color        | color   | rgba(0, 0, 0, .3)  | 指示点颜色                   |
| indicator-active-color | color   | \#000000           | 当前选中的指示点颜色         |
| autoplay               | boolean | false              | 是否自动切换                 |
| current                | number  | 0                  | 当前所在滑块的 index         |
| interval               | number  | 5000（单位：毫秒） | 自动切换时间间隔             |
| duration               | number  | 500（单位：毫秒）  | 滑动动画时长                 |
| circular               | boolean | false              | 是否采用衔接滑动             |
| vertical               | boolean | false              | 滑动方向是否为纵向           |
| easing-function        | string  | "default"          | 指定 swiper 切换缓动动画类型 |

#### **easing-function 的合法值**

| 值             | 说明         |
| -------------- | ------------ |
| default        | 默认缓动函数 |
| linear         | 线性动画     |
| easeInCubic    | 缓入动画     |
| easeOutCubic   | 缓出动画     |
| easeInOutCubic | 缓入缓出动画 |

注意：

- 一次显示多个文件：设置-编辑器设置-总是在新标签页打开文件
- 小程序中调大小不用px，用rpx
- 右击-（检查）-复制图片地址。[图片转换为Base64编码](http://www.bejson.com/ui/image2base64/)
- [node.js安装](https://blog.csdn.net/antma/article/details/86104068?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522161171361316780299099606%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fall.%252522%25257D&request_id=161171361316780299099606&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-1-86104068.first_rank_v2_pc_rank_v29&utm_term=node.js%25E7%258E%25AF%25E5%25A2%2583%25E6%2580%258E%25E4%25B9%2588%25E5%25AE%2589%25E8%25A3%2585)
- uTools快捷键：Alt+空格

## 云数据库

步骤：1.启动网易云音乐API
2.用uTools做内网穿透
3.建云函数
4.建云数据库
5.云函数环境（云函数-右击-在内建终端中打开；输入命令：npm install --save axios，安装网络请求库axios）
6.编写云函数入口文件（使用通过postman测试的接口地址）
注意：node.js项目的窗口不要关，保证它一直正常运行；检查内网穿透工具，网络环境变化会导致断开；云函数每次修改后一定要重新上传部署

## 歌单→歌曲→播放

### 歌单→歌曲：

1.调用API接口
2.在app.js添加新页面到pages
3.在components目录找到歌单组件，在playlist.wxml中绑定tap事件
4.在playlist.js中进行页面跳转，musiclist.js中在onLoad函数中接收这个参数:console.log（）（使用wx.navigateTo()进行页面跳转，目标页面会自带返回按钮）
5.添加并修改编译模式，可将musiclist页面作为启动页，查看效果较为方便
6.将歌单id在music云函数中用parseInt转一下
7.调用云函数，传递歌单id 和 路由参数
8.编写页面顶部歌单及歌曲列表信息
9.编写musiclist组件

### 歌曲→播放：

1.歌曲列表高亮，跳转播放页
2.绑定确认点击有反应
3.自定义属性musicid，区分点击显示效果
4.定义高亮样式，使点击歌曲高亮
5.定义索引属性index
6.准备目标页面，实现点击歌曲跳转播放歌曲页面

### 音乐播放页布局

1.注册阿里云账号，将播放页所需的图片上传到OSS
2.根据歌曲id获取歌曲播放的url。（只修改一个文件的代码，可将这个文件右击单独上传云函数，更新文件；展示在页面上放入data；当属性名和属性值一样的时候可以省略，只写一个，并将其放在第上面。）
3.编写全屏毛玻璃效果。
4.用iconfont找合适的矢量图标，加入购物车，在购物车中加入项目，获取css代码。
5.在小程序的根目录下，新建一个iconfont.wxss；放一个图标尝试，并调整大小颜色。
6.编写播放页player.wxml，并调整样式player.wxss

### 播放页动画交互效果及播放功能

1.在player.js中设一个变量isPlaying来记录歌曲的播放状态，默认歌曲没有被播放，为false。（在页面中设置受控制的按钮，应把它放在data中。）
2.获取歌曲的url，如果这个url为空，提示没有播放权限，则直接结束；如果url不为空，则直接播放。（右击文件-在侧边打开，可一次显示两个文件内容，方便编写页面和页面数据的调整。）
3.调整播放/停止按钮，让按钮可以点击切换。
4.让唱片转动，并设置转动内容、转动时间、转动方式、转动次数。
5.定义唱片的关键帧。（开始和结束位置）
6.调整player.wxml中的转和停，让唱片停在转动时的位置。
7.给唱针播放状态设置一个伪元素，让唱针随着唱片的转动或停止切换位置。（在唱针样式中，加入一个transition属性，让唱针切换位置时更平滑。）
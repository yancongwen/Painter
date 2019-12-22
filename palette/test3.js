export default class ImageExample {
    palette() {
        return {
            width: '610rpx',
            height: '656rpx',
            borderRadius: '22rpx',
            background: '#f5f5f6',
            views: [
                {
                    type: 'rect',
                    css: {
                        width: 540,
                        height: '380rpx',
                        top: '35rpx',
                        left: '35rpx',
                        borderRadius: '8rpx',
                        color: '#fff'
                    }
                },
                {
                    type: 'rect',
                    css: {
                        top: '435rpx',
                        left: '230rpx',
                        width: '150rpx',
                        height: '150rpx',
                        borderRadius: '75rpx',
                        color: '#fff'
                    }
                },
                {
                    type: 'text',
                    text: data.title,
                    css: {
                        fontSize: '32rpx',
                        fontWeight: 'bold',
                        color: '#333',
                        top: '65rpx',
                        left: '60rpx',
                        lineHeight: '50rpx',
                        width: '300rpx',
                        textAlign: 'left',
                        maxLines: 1
                    }
                },
                {
                    type: 'text',
                    id: 'name',
                    text: data.name,
                    css: {
                        fontSize: '28rpx',
                        color: '#6D6D73',
                        top: '65rpx',
                        right: '60rpx',
                        lineHeight: '50rpx',
                        width: '120rpx',
                        textAlign: 'right',
                        maxLines: 1
                    }
                },
                {
                    type: 'image',
                    name: '头像',
                    url: data.avatar,
                    css: {
                        width: '50rpx',
                        height: '50rpx',
                        top: '65rpx',
                        right: ['70rpx', 'name'],
                        mode: 'aspectFill',
                        borderRadius: '25rpx'
                    }
                },
                {
                    type: 'image',
                    name: '图片',
                    url: data.image4,
                    css: {
                        width: '540rpx',
                        height: '270rpx',
                        top: '145rpx',
                        left: '35rpx',
                        mode: 'aspectFill',
                        borderRadius: '0rpx'
                    }
                },
                {
                    type: 'rect',
                    css: {
                        width: '540rpx',
                        height: '70rpx',
                        top: '345rpx',
                        left: '35rpx',
                        borderRadius: '8rpx',
                        color: 'linear-gradient(0deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)'
                    }
                },
                {
                    type: 'text',
                    text: data.content,
                    css: {
                        fontSize: '24rpx',
                        color: '#fff',
                        top: '345rpx',
                        left: '60rpx',
                        lineHeight: '70rpx',
                        width: '490rpx',
                        maxLines: 1
                    }
                },
                {
                    type: 'image',
                    name: '二维码',
                    url: data.qrCode,
                    css: {
                        top: '442rpx',
                        left: '236rpx',
                        width: '136rpx',
                        height: '136rpx',
                        borderRadius: '68rpx'
                    }
                },
                {
                    type: 'text',
                    text: '长按扫码 查看详情',
                    css: {
                        fontSize: '24rpx',
                        color: '#999',
                        bottom: '20rpx',
                        lineHeight: '36rpx',
                        textAlign: 'center',
                        width: '610rpx'
                    }
                }
            ]
        }
    }
}


let data = { 
    avatar: "https://t3.focus-img.cn/mp/rz/884cbe97-09d0-4275-8e25-8d2e2fe4a5f8.JPEG",
    qrCode: "https://t1.focus-img.cn/wx/acode/f9d5-6a7a-7e02-79c7-f024-0500-a18a-39ea.jpg",
    name: "欧阳峰",
    title: "建业·世和府",
    content: '我叫龙旭，16年从业经验为您置业保驾护航。我叫龙旭，16年从业经验为您置业保驾护航。我叫龙旭，16年从业经验为您置业保驾护航。我叫龙旭，16年从业经验为您置业保驾护航。我叫龙旭，16年从业经验为您置业保驾护航。我叫龙旭，16年从业经验为您置业保驾护航。',
    description: "我叫龙旭，16年从业经验为您置业保驾护航，大家可以添加微信：12345678",
    image: 'https://t1.focus-img.cn/applet/2019-12-08/357549586bf04b1ebc98d8f24cfe0ca2.jpg',
    image2: 'https://t1.focus-img.cn/applet/2019-12-08/67255f4f90fb46168fc409ddccf85ebc.jpg',
    image3: 'https://t1.focus-img.cn/applet/2019-12-07/59c8844c2c214a97a210a7bead59fe00.jpg',
    image4: 'https://t1.focus-img.cn/applet/2019-12-05/624a6ee270224d41870f68db9dda4593.jpg'
}

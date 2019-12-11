export default class ImageExample {
    palette() {
        return {
            width: '610rpx',
            height: ['200rpx', 'main-image'],
            borderRadius: '22rpx',
            background: '#f5f5f6',
            views: [
                {
                    type: 'image',
                    id: 'main-image',
                    url: data.image2,
                    css: {
                        width: '540rpx',
                        left: '35rpx',
                        top: '35rpx',
                        borderRadius: '8rpx'
                    }
                },
                {
                    type: 'text',
                    name: '描述',
                    text: data.description,
                    css: {
                        fontSize: '24rpx',
                        color: '#000',
                        top: '0rpx',
                        left: '30rpx',
                        width: '520rpx',
                        maxLines: 1
                    }
                }
            ]
        }
    }
}

let data = { 
    avatar: "https://t3.focus-img.cn/mp/rz/884cbe97-09d0-4275-8e25-8d2e2fe4a5f8.JPEG",
    qrCode: "https://t1.focus-img.cn/wx/acode/f9d5-6a7a-7e02-79c7-f024-0500-a18a-39ea.jpg",
    name: "杨过",
    description: "我叫龙旭，16年从业经验为您置业保驾护航，大家可以添加微信：12345678",
    image: 'https://t1.focus-img.cn/applet/2019-12-08/357549586bf04b1ebc98d8f24cfe0ca2.jpg',
    image2: 'https://t1.focus-img.cn/applet/2019-12-08/67255f4f90fb46168fc409ddccf85ebc.jpg',
    image3: 'https://t1.focus-img.cn/applet/2019-12-07/59c8844c2c214a97a210a7bead59fe00.jpg',
    image4: 'https://t1.focus-img.cn/applet/2019-12-05/624a6ee270224d41870f68db9dda4593.jpg'
}

// let { avatar, name, description, qrCode } = data

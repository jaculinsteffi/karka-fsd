import logo from './logo.svg';
import './App.css';
// import Task from './component/Task'
import Cart from './component/Cart'
function App() {
  let Students=[
    {
      name:"sajin",
      age:47
    },
    {
      name:"jaculin",
      age:53
    },
    {
      name:"alen",
      age:82
    },
  {
    name:"sanjay",
    age:98
  },
  {
    name:"john jerish",
    age:92
  },
  {
    name:"magesh",
    age:84
  },
  {
    name:"jeba singh",
    age:102
  }
  ]
  let Products=[
    {
        name:"Smartphones",
        img:"https://cdn.mos.cms.futurecdn.net/vhvu7HGyknSTnuQWhjxarS-970-80.png.webp",
        price: "75000",
        description:"13MP+2MP Dual Rear Camera | 8MP Front Camera | Made in India,16.5 cm (6.5 inch) HD+ Display | multi-touch capacitive touch screen with 720*1600 pixel resolution"
    },
    {
      name:"Laptops",
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-silver-config-202306?wid=840&hei=508&fmt=jpeg&qlt=90&.v=1684340991334",
      price: 134500,
      description:"8GB unified memory,256GB SSD storage,1080p FaceTime HD camera,Apple M3 chip with 8-core CPU, 10-core GPU, 16‑core Neural Engine"
    },
    {
      name:"Smart TV",
      img:"https://m.media-amazon.com/images/I/51qaLdeoJrL.SY300_SX300_QL70_FMwebp.jpg",
      price: 64990,
      description:"Resolution : 4K Ultra HD (3840 x 2160) | Refresh Rate : 50 Hertz,Connectivity : 3 HDMI ports to connect set top box or gaming console | 1 USB ports to connect hard drives or other USB devices | Ethernet | Wi-fi | Bluetooth,Sound: 20W Output- 2CH | Powerful Speakers | OTS Lite | Adaptive Sound | Dual Audio Support (Bluetooth) | Buds Auto Switch"
    },
    {
      name:"Smart Watch",
      img:"https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r945-469954-sm-r945fzsains-537406821?$2052_1641_PNG$",
      price: 36999,
      description:"NFC,Bluetooth Version 5.3,Size (Main Display)-3.73cm,Processor-1.4GHz,Storage (GB)-16"   
}
]
  return (
   <>
   {/* <Task myStudent={Students}/> */}
   <Cart myProduct={Products}/>
   </>
  );
}

export default App;

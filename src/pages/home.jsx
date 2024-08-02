import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/body";
import Body from "../components/body";

export default function Home() {
  return (
    <div>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}













//db.json
/* 
        {
          "id": 76,
          "title": "Cool White Jacket",
          "price": 10000,
          "description": "Lorem ipsum",
          "images": [
            "https://contoh.co.id/gambar"
          ],
          "creationAt": "2024-08-01T04:12:34.000Z",
          "updatedAt": "2024-08-01T04:12:34.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 78,
          "title": "Pine apple",
          "price": 232,
          "description": "Pine apple is a fruit",
          "images": [
            "https://placeimg.com/640/480/any"
          ],
          "creationAt": "2024-08-01T04:20:15.000Z",
          "updatedAt": "2024-08-01T09:06:55.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 80,
          "title": "pakoda",
          "price": 500,
          "description": "mast masaledaar pakode ",
          "images": [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw3aigLA09YA_BWvu83t_JkG&ust=1722493796383000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjird3T0IcDFQAAAAAdAAAAABAE"
          ],
          "creationAt": "2024-08-01T04:26:42.000Z",
          "updatedAt": "2024-08-01T04:27:13.000Z",
          "category": {
            "id": 2,
            "name": "Electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-07-31T16:59:31.000Z"
          }
        },
        {
          "id": 81,
          "title": "deadpool",
          "price": 9,
          "description": "superhero of the worlds deadliest of them all.",
          "images": [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fdeadpool-pictures&psig=AOvVaw1vMtx3XEajdrrE37eB-zjS&ust=1722572868089000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDEpJP60ocDFQAAAAAdAAAAABAE"
          ],
          "creationAt": "2024-08-01T04:28:44.000Z",
          "updatedAt": "2024-08-01T04:28:44.000Z",
          "category": {
            "id": 5,
            "name": "adidas",
            "image": "https://i.imgur.com/BG8J0Fj.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T01:42:28.000Z"
          }
        },
        {
          "id": 83,
          "title": "old Product",
          "price": 1001,
          "description": "A description",
          "images": [
            "https://placeimg.com/640/480/any"
          ],
          "creationAt": "2024-08-01T04:56:12.000Z",
          "updatedAt": "2024-08-01T04:56:12.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 84,
          "title": "game",
          "price": 1000,
          "description": "eco friendly toy",
          "images": [
            "https://placeimg.com/640/480/any"
          ],
          "creationAt": "2024-08-01T04:56:16.000Z",
          "updatedAt": "2024-08-01T05:01:39.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 85,
          "title": "MY MOBILE",
          "price": 20000,
          "description": "REALME 10 PRO +5G",
          "images": [
            "https://placeimg.com/640/480/any"
          ],
          "creationAt": "2024-08-01T04:56:36.000Z",
          "updatedAt": "2024-08-01T04:56:36.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 86,
          "title": "my product",
          "price": 10000,
          "description": "REALME 10 PRO +5G",
          "images": [
            "https://placeimg.com/640/480/any"
          ],
          "creationAt": "2024-08-01T04:57:18.000Z",
          "updatedAt": "2024-08-01T05:02:24.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 87,
          "title": "Redmi Product",
          "price": 10000,
          "description": "xyz",
          "images": [
            "https://placeimg.com/640/480/any"
          ],
          "creationAt": "2024-08-01T04:57:30.000Z",
          "updatedAt": "2024-08-01T04:57:30.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 92,
          "title": "New Product",
          "price": 13,
          "description": "A description",
          "images": [
            "https://placeimg.com/640/480/any"
          ],
          "creationAt": "2024-08-01T05:27:18.000Z",
          "updatedAt": "2024-08-01T05:27:18.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        }
{
          "id": 94,
          "title": "New Product",
          "price": 10,
          "description": "2",
          "images": [
            "[\"https://placeimg.com/640/480/any\"]"
          ],
          "creationAt": "2024-08-01T06:00:28.000Z",
          "updatedAt": "2024-08-01T06:00:28.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 97,
          "title": "New Product",
          "price": 10,
          "description": "A description",
          "images": [
            "[\"https://placeimg.com/640/480/any\"]"
          ],
          "creationAt": "2024-08-01T06:56:11.000Z",
          "updatedAt": "2024-08-01T06:56:11.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 99,
          "title": "Hand wear",
          "price": 434,
          "description": "Men hand wear",
          "images": [
            "[\"https://i.imgur.com/OKn1KFI.jpeg\"]"
          ],
          "creationAt": "2024-08-01T07:27:14.000Z",
          "updatedAt": "2024-08-01T12:08:35.000Z",
          "category": {
            "id": 3,
            "name": "Furniture",
            "image": "https://i.imgur.com/Qphac99.jpeg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-07-31T16:59:31.000Z"
          }
        },
        {
          "id": 100,
          "title": "ertwet",
          "price": 456546,
          "description": "fgdhdfgh",
          "images": [
            "[\"https://pixabay.com/vectors/apparel-clothe-clothing-polo-golf-162192/\"]"
          ],
          "creationAt": "2024-08-01T07:28:29.000Z",
          "updatedAt": "2024-08-01T07:28:29.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 101,
          "title": "New Product",
          "price": 13,
          "description": "A description",
          "images": [
            "[\"https://placeimg.com/640/480/any\"]"
          ],
          "creationAt": "2024-08-01T07:49:46.000Z",
          "updatedAt": "2024-08-01T07:49:46.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 103,
          "title": "New Product",
          "price": 10,
          "description": "A description",
          "images": [
            "[\"https://placeimg.com/640/480/any\"]"
          ],
          "creationAt": "2024-08-01T09:25:04.000Z",
          "updatedAt": "2024-08-01T09:25:04.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 104,
          "title": "Mug",
          "price": 333,
          "description": "Tea Mug",
          "images": [
            "[\"https://i.imgur.com/OKn1KFI.jpeg\"]"
          ],
          "creationAt": "2024-08-01T09:32:14.000Z",
          "updatedAt": "2024-08-01T09:32:14.000Z",
          "category": {
            "id": 2,
            "name": "Electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-07-31T16:59:31.000Z"
          }
        },
        {
          "id": 105,
          "title": "New Product",
          "price": 10,
          "description": "A description",
          "images": [
            "[\"https://placeimg.com/640/480/any\"]"
          ],
          "creationAt": "2024-08-01T09:39:41.000Z",
          "updatedAt": "2024-08-01T09:39:41.000Z",
          "category": {
            "id": 1,
            "name": "Crane 12222",
            "image": "https://www.google.com/image.jpg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-08-01T05:23:28.000Z"
          }
        },
        {
          "id": 106,
          "title": "New Product",
          "price": 10,
          "description": "A description",
          "images": [
            "[\"https://placeimg.com/640/480/any\"]"
          ],
          "creationAt": "2024-08-01T09:39:58.000Z",
          "updatedAt": "2024-08-01T09:39:58.000Z",
          "category": {
            "id": 10,
            "name": "anymals",
            "image": "https://api.escuelajs.co/api/v1/categories",
            "creationAt": "2024-07-31T17:56:23.000Z",
            "updatedAt": "2024-07-31T17:56:23.000Z"
          }
        },
        {
          "id": 110,
          "title": "dede",
          "price": 440,
          "description": "eqdew",
          "images": [
            "[\"https://placeimg.com/640/480/any?r=0.591926261873231\"]"
          ],
          "creationAt": "2024-08-01T10:15:18.000Z",
          "updatedAt": "2024-08-01T10:15:18.000Z",
          "category": {
            "id": 2,
            "name": "Electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-07-31T16:59:31.000Z"
          }
        },
        {
          "id": 111,
          "title": "Apple  API Developer",
          "price": 350000,
          "description": "Full Stack Developer Hardware Software Engineer Developer Zip Hoodie",
          "images": [
            "[\"https://m.media-amazon.com/images/I/B1FGy+bPeZS._CLa%7C2140%2C2000%7C816HzQzfKDL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png\"]"
          ],
          "creationAt": "2024-08-01T10:54:53.000Z",
          "updatedAt": "2024-08-01T10:54:53.000Z",
          "category": {
            "id": 3,
            "name": "Furniture",
            "image": "https://i.imgur.com/Qphac99.jpeg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-07-31T16:59:31.000Z"
          }
        },
        {
          "id": 112,
          "title": " Microsoft Developer",
          "price": 98000,
          "description": "Full Stack Developer Hardware Software Engineer Developer",
          "images": [
            "[\"https://m.media-amazon.com/images/I/B1FGy+bPeZS._CLa%7C2140%2C2000%7C816HzQzfKDL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png\"]"
          ],
          "creationAt": "2024-08-01T10:55:08.000Z",
          "updatedAt": "2024-08-01T12:03:48.000Z",
          "category": {
            "id": 3,
            "name": "Furniture",
            "image": "https://i.imgur.com/Qphac99.jpeg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-07-31T16:59:31.000Z"
          }
        },
        {
          "id": 113,
          "title": "Sleek White & Orange Wireless Gaming Controller",
          "price": 3453,
          "description": "ds5",
          "images": [
            "[\"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y\"]"
          ],
          "creationAt": "2024-08-01T11:58:02.000Z",
          "updatedAt": "2024-08-01T11:58:02.000Z",
          "category": {
            "id": 36,
            "name": "New Category",
            "image": "https://placeimg.com/640/480/any",
            "creationAt": "2024-08-01T08:16:49.000Z",
            "updatedAt": "2024-08-01T08:16:49.000Z"
          }
        },
        {
          "id": 114,
          "title": "Sleek White & Orange Wireless Gaming Controller",
          "price": 4353,
          "description": "dfs",
          "images": [
            "[\"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y\"]"
          ],
          "creationAt": "2024-08-01T11:59:02.000Z",
          "updatedAt": "2024-08-01T11:59:02.000Z",
          "category": {
            "id": 37,
            "name": "Books",
            "image": "https://api.lorem.space/image/book?w=150&h=220",
            "creationAt": "2024-08-01T10:35:23.000Z",
            "updatedAt": "2024-08-01T10:35:23.000Z"
          }
        },
        {
          "id": 117,
          "title": "Bottle",
          "price": 240,
          "description": "Water Bottle",
          "images": [
            "[\"https://i.imgur.com/QkIa5tT.jpeg\"",
            "\"https://i.imgur.com/QkIa5tT.jpeg\"]"
          ],
          "creationAt": "2024-08-01T12:23:13.000Z",
          "updatedAt": "2024-08-01T12:23:13.000Z",
          "category": {
            "id": 2,
            "name": "Electronics",
            "image": "https://i.imgur.com/ZANVnHE.jpeg",
            "creationAt": "2024-07-31T16:59:31.000Z",
            "updatedAt": "2024-07-31T16:59:31.000Z"
          }
        }*/
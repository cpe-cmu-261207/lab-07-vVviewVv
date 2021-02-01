## Week7 NextJS Profile with API

**ให้นักศึกษานำเว็บเพจ portfolio และ GPA Calculator จาก lab ที่เคยทำ มารวมกันโดยใช้กับ NextJS template** โดยสามารถกดเปลี่ยนหน้ายังหน้าต่างๆได้ตามปกติ <br>

และสิ่งที่เพิ่มขึ้นมาคือ นักศึกษาจะต้องสร้างเพจใหม่ทำการดึงข้อมุล Post จาก fakeAPI จาก https://dummyapi.io/
<br> โดยนักศึกษาต้องเข้าไป register ในเว็บไซต์เพื่อทำการ generate app-id เพื่อนำมาดึง API (ถ้าไม่มี app-id จะไม่สามารถดึงได้)

<br>โดยการ generate app-id ให้ไปที่หน้า account แล้วคลิกที่ Generate App ID ดังภาพ
![](https://i.ibb.co/wyZCfX2/Screen-Shot-2564-01-12-at-13-57-22.png)
<br> จะได้ app-id มา ให้นำไปใช้ใน headers ทุกครั้งที่ทำการดึง API<br>
![](https://i.ibb.co/dBDD13N/Screen-Shot-2564-01-12-at-14-08-42.png)

โดยใน fakeAPI นี้ มีข้อมูล post ตาม API Document ดังนี้ <br>
![](https://i.ibb.co/BfjMkt9/Screen-Shot-2564-01-12-at-16-03-43.png)

<br />โดยให้ทำการแก้ไขไฟล์ดังต่อไปนี้
## `pages/post/index.js`
ในหน้านี้ จะต้องแสดงข้อมูลโพสต์ท้งหมด จาก `GET /post`
<br />โดยในไฟล์นี้ได้ทำการเตรียม state คือ
- posts ที่ค่าเริ่มต้นเป็น `empty list`
<br><br>
โดยให้แสดงข้อมูลบางส่วนของ post ดังนี้คือ <br />
- ชื่อโพสต์  
- รูปที่โพสต์ 
- จำนวน like  
ดังภาพตัวอย่าง
![](https://i.ibb.co/QYs97xw/Screen-Shot-2564-01-12-at-16-18-26.png)

## `pages/post/[postId].js`
เมื่อคลิกที่ Go to this post จะเปลี่ยนมาหน้านี้โดยในหน้านี้ จะแสดงข้อมูลของโพสต์แต่ละโพสต์  
<br />โดยในไฟล์นี้ได้ทำการทำ Dynamic route และเตรียม state ไว้ให้คือ 
- post ที่ค่าเริ่มต้นเป็น `null` 
- comments ที่ค่าเริ่มต้นเป็น `empty list`
<br><br> โดยต้องแสดงข้อมูลของโพสต์ดังต่อไปนี้คือ 
- tag ของโพสต์
- รูปภาพของโพสต์
- ชื่อของคนโพสต์ (ชื่อต้นและนามสกุล)
- จำนวน Like
- comment ทั้งหมดของโพสต์นี้ -> ประกอบไปด้วย ชื่อเต็มของคนคอมเมนต์และข้อความที่คอมเมนต์
![](https://i.ibb.co/Yf8hDsw/Screen-Shot-2564-01-12-at-16-18-41.png)
โดยในหน้านี้นักศึกษาต้องใช้ API สอง path คือ `GET /post/:id` และ `GET /post/:id/comment`



ตัวอย่างในการดึง API โดยเป็นตัวอย่างในการแสดง todos จาก jsonplaceholder web api  <br>
นักศึกษาสามารถดูตัวอย่างได้จาก https://github.com/cpe-cmu-261207/todos-nextjs-api-example

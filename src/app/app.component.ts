import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_demo';
  title_demo = function(){
    return 'Danh Sách User';
  }
  sub_title = 'hello';

  student = {
    name : 'hoang tan',
    age : 20,
    phone : '0123456',
    email : "hoangnhattan@gmail.com",
    avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
  };

  array_st = [
    {
      id :  1,
      name : 'hoang tan',
      age : 20,
      phone : '0123456',
      email : "hoangnhattan@gmail.com",
      avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
    },

    {
      id : 2 ,
      name : 'hoang tan 2',
      age : 20,
      phone : '0123456',
      email : "hoangnhattan@gmail.com",
      avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
    },

    {
      id : 3 ,
      name : 'hoang tan 3',
      age : 20,
      phone : '0123456',
      email : "hoangnhattan@gmail.com",
      avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
    },

    {
      id : 4 ,
      name : 'hoang tan 4',
      age : 20,
      phone : '0123456',
      email : "hoangnhattan@gmail.com",
      avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
    }

  ];


  // hàm xóa bản ghi dựa vào id 
  // tham số truyền vào hàm thì cần được set kiểu dẽ liệu  (:typedata)
  
  remove(id :number) {
    this.array_st =  this.array_st.filter(e => e.id !== id);
  };

  user =  [
      {
        id : 1,
        name : 'hoang tan 1',
        heigth : '1m70',
        weight :40,
        avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
      },
      {
        id : 2,
        name : 'hoang tan 2',
        heigth : '1m70',
        weight :15,
        avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
      },
      {
        id : 3,
        name : 'hoang tan 3',
        heigth : '1m70',
        weight :40,
        avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
      },
      {
        id : 4,
        name : 'hoang tan 4',
        heigth : '1m70',
        weight :20,
        avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
      },

     
  ]

  remove_user(id :number) {
    this.user =  this.user.filter(e => e.id !== id);
  };

  messgae(){
    alert('Sorry because weigth less 30 !!!!')
  }

  

}


//  đây là thành phần tổng 
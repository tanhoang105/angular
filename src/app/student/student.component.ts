import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'angular_demo';
  title_demo = function(){
    return 'Danh Sách User';
  }
  sub_title = 'hello';

  // student = {
  //   name : 'hoang tan',
  //   age : 20,
  //   phone : '0123456',
  //   email : "hoangnhattan@gmail.com",
  //   avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
  // };

  // array_st = [
  //   {
  //     id :  1,
  //     name : 'hoang tan',
  //     age : 20,
  //     phone : '0123456',
  //     email : "hoangnhattan@gmail.com",
  //     avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
  //   },

  //   {
  //     id : 2 ,
  //     name : 'hoang tan 2',
  //     age : 20,
  //     phone : '0123456',
  //     email : "hoangnhattan@gmail.com",
  //     avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
  //   },

  //   {
  //     id : 3 ,
  //     name : 'hoang tan 3',
  //     age : 20,
  //     phone : '0123456',
  //     email : "hoangnhattan@gmail.com",
  //     avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
  //   },

  //   {
  //     id : 4 ,
  //     name : 'hoang tan 4',
  //     age : 20,
  //     phone : '0123456',
  //     email : "hoangnhattan@gmail.com",
  //     avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
  //   }

  // ];


  // hàm xóa bản ghi dựa vào id 
  // tham số truyền vào hàm thì cần được set kiểu dẽ liệu  (:typedata)
  
  // remove(id :number) {
  //   this.array_st =  this.array_st.filter(e => e.id !== id);
  // };

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
        name : 'hoang tan 4 nh',
        heigth : '1m70',
        weight :20,
        avatar : 'https://i.pinimg.com/474x/2a/6d/01/2a6d01004b0b490bee01dbb400121fe6--style-fashion-fashion-beauty.jpg'
      },

     
  ]

  remove_user(id :number) {
    this.filterST =  this.filterST.filter(e => e.id !== id);
  };

  messgae(){
    alert('Sorry because weigth less 30 !!!!')
  }

  // hàm search 
  searchValue = '';
  // spread , lấy tất cả phần tử của mảng user gán vào mảng fiterST
  // gán lại fillters
  filterST = this.user;
  onSearch(event :any){
    // lấy giá trị từ ô nhập
    this.searchValue =  event.target.value;
    // search 
    // nếu gán cho chính this.user thì mảng gốc sẽ bị thay đổi và xóa filter thì sẽ ko hiện như ban đầu => sử dụng mảng mới tương đương mảng cũ để filter

    this.filterST = this.filterST.filter( e => {
        const userNameLowerCase = e.name.toLowerCase();
        const searchValueLowerCase = this.searchValue.toLowerCase().trim();

        return userNameLowerCase.indexOf(searchValueLowerCase) !== -1 ;
    });
  
  }


  // form input 
  newUser = {
    id : 0 ,
    name : '',
    heigth : '',
    weight : 0,
    avatar : ''

  }
  // lấy dữ liệu từ o nhập 
  onchangeInput(event :any , key :string){
     const inputValue = event.target.value;
     this.newUser = {
      //  sử dụng spead opertor
      //  ... giúp cho chúng ta có thể ghi đè
       ...this.newUser, 
       [key] : inputValue
     }
     console.log(this.newUser);

  }

  onSubmit(){
    // check dữ liệu trước khi được thêm vào 
    if(!this.onValidate(this.newUser)){
      return;
    }
    // kiểm tra xem là chỉnh sửa hay thêm mơis
    // nếu thêm mới thì ko có id  còn chỉnh sửa thì có id 
    if(this.newUser.id){
      console.log(this.newUser)
      // công việc của chỉnh sửa
      // tìm xem đâu là phần tử có id là id đang được chỉnh sửa
      for(let i = 0; i < this.user.length ; i++){
        if(this.user[i].id === this.newUser.id){
          this.user[i] = this.newUser;
          console.log(this.user[i]);
        }
      }
    }else{
      // công việc của thêm mới
      console.log(this.user);
      this.newUser = {
        ...this.newUser,
        id:this.user.length + 1, 
        weight:Number(this.newUser.weight)
      };
    // thêm newUser vào mảng this.user
    this.user.push(this.newUser);
    }


   
    

    // cập nhập dữ liệu mặc định cho newUser 
    this.newUser = {
      id : 0 ,
      name : '',
      heigth : '',
      weight : 0,
      avatar : ''
    }


   
  }


  onValidate(obj:any){
    if(!obj.name || !obj.heigth || !obj.weight || !obj.avatar){
      return false;
    }
    return true;
  }


  onEdit(user:any){
    // gán giá trị của user = newUser
    console.log(user);
    this.newUser = user
  }

 

}

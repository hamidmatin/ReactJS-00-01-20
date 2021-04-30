
let session_number = 4;

const teacher = {
  firstName: 'Hamid Rezad',
  lastName: 'Izadi Matin',
};

const myFucntion = () => {
  // console.log('My Function');
  console.log(`${teacher.firstName} ${teacher.lastName}`)
};

class Course {
  constructor() {
    this.name = 'ReactJS';
    this.duration = 40;
    this.teacher = teacher;
  }

  showInfo(){
    return `Course Name : ${this.name}, 
            Duration : ${this.duration}, 
            Teacher : ${this.teacher.firstName} ${this.teacher.lastName}`
  }
}

export default Course;
export {myFucntion, session_number}
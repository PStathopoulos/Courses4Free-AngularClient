import {Teacher} from './../teacher/teacher';
import {Course} from './../course/course';
import {Link} from './../link/link';

export interface Student{
  id: number;
  UUid: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  favouriteSubject: string;
  teachers: Teacher[];
  courses: Course[];
  links: Link[];
}

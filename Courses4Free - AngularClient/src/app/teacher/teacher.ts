import {Student} from './../student/student';
import {Course} from './../course/course';
import {Link} from './../link/link';

export interface Teacher{
  id: number;
  UUid: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  yearsExperience: number;
  students: Student[];
  courses: Course[];
  links: Link[];
}

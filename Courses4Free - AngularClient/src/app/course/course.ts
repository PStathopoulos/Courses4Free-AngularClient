import {Teacher} from './../teacher/teacher';
import {Student} from './../student/student';
import {Link} from './../link/link';

export interface Course{
  id: number;
  UUid: string;
  title: string;
  category: string;
  description: string;
  subject: string;
  dateCreated: string;
  photoUrl: string;
  teachers: Teacher[];
  students: Student[];
  links: Link[];
}

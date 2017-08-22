import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './../home/home.component';
import { CourseListComponent } from './../course/courselist.component';
import { CourseDetailsComponent  } from './../course/course-details.component';
import { AddCourseComponent } from './../course/add-course.component';

// Speciry the Routes
const ROUTES: Routes = [
    // full : makes sure the path is absolute path
    { path: '', component: HomeComponent },
    { path: 'courses', component: CourseListComponent },
    { path: 'course/:id', component: CourseDetailsComponent },
    { path: 'addcourse', component: AddCourseComponent },
    { path: '**', redirectTo:'', pathMatch:'full'}
];
export const CONST_ROUTING = RouterModule.forRoot(ROUTES);

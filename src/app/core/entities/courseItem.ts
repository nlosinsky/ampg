import { CourseItemInterface } from './courseItemInterface';
import { CourseAuthor } from './course-author';

export class CourseItem implements CourseItemInterface {
  constructor(
        public id: number,
        public shortDescription: string,
        public duration: number,
        public date: Date,
        public name: string,
        public type: string,
        public isTopRated: boolean,
        public authors?: CourseAuthor[]
    ) {}
}

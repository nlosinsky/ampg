import { CourseItemInterface } from './courseItemInterface';
import { CourseAuthor } from './course-author';

export class CourseItem implements CourseItemInterface {
  constructor(
        public shortDescription: string,
        public duration: number,
        public date: Date,
        public name: string,
        public authors: CourseAuthor[] = [],
        public longDescription:string = '',
        public isTopRated: boolean = false,
        public id?: number,
        public type?: string
    ) {}
}

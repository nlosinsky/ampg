import { CourseItemInterface } from './courseItemInterface';

export class CourseItem implements CourseItemInterface {
  constructor(
        public id: number,
        public shortDescription: string,
        public duration: number,
        public createdDate: Date,
        public name: string,
        public type: string,
        public topRated: boolean
    ) {}
}

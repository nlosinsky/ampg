import { CourseAuthor } from './course-author';

export  interface CourseItemInterface {
  id: number;
  shortDescription: string;
  duration: number;
  date: Date;
  name: string;
  type: string;
  isTopRated: boolean;
  authors?: CourseAuthor[];
}

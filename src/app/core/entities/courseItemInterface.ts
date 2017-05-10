import { CourseAuthor } from './course-author';

export  interface CourseItemInterface {
  shortDescription: string;
  duration: number;
  date: Date;
  name: string;
  id?: number;
  type?: string;
  isTopRated?: boolean;
  longDescription?: string;
  authors?: CourseAuthor[];
}

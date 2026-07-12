import type { Course } from "@/data/courses";
import CourseCard from "./CourseCard";
import CourseGridClient from "./CourseGridClient";

type CourseGridProps = {
  courses: Course[];
  showFilter?: boolean;
};

export default function CourseGrid({ courses, showFilter = false }: CourseGridProps) {
  if (showFilter) {
    return <CourseGridClient courses={courses} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

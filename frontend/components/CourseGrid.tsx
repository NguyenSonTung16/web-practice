type CourseGridProps = {
  onCourseClick: () => void;
};

const COURSES = [
  "Khoa hoc khac",
  "Khoa hoc khac",
  "Khoa hoc khac",
  "Khoa hoc khac",
  "Khoa hoc khac",
  "Khoa hoc khac",
];

export default function CourseGrid({ onCourseClick }: CourseGridProps) {
  return (
    <div className="courses section-container">
      {COURSES.map((course, idx) => (
        <button key={`${course}-${idx}`} className="course-button" onClick={onCourseClick}>
          {course}
        </button>
      ))}
    </div>
  );
}

package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entity.Courses;

@Service
public class CourseServiceImpl implements CourseService {
	@Autowired
	private CourseDao courseDao;
	// List<Courses> list;

	public CourseServiceImpl() {
		// list = new ArrayList<>();
		// list.add(new Courses(145, "Java Core", "This is Java Core"));
		// list.add(new Courses(1451, "SpringBoot", "RestApi using SpringBoot"));
	}

	@Override
	public List<Courses> getCourses() {
		return courseDao.findAll();
	}

	@Override
	public Courses getCourse(long courseId) {
		// Courses c = null;
		// for (Courses course : list) {
		// if (course.getId() == courseId) {
		// c = course;
		// break;
		// }
		// }
		// return c;
		return courseDao.findById(courseId).get();
	}

	@Override
	public Courses addCourse(Courses course) {
		// list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Courses updateCourse(Courses course) {
		// list.forEach(e -> {
		// if (e.getId() == course.getId()) {
		// e.setTitle(course.getTitle());
		// e.setDescription(course.getDescription());
		// }
		// });
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long courseId) {
		// list = this.list.stream().filter(e -> e.getId() !=
		// courseId).collect(Collectors.toList());
		Courses entity = courseDao.findById(courseId).get();
		courseDao.delete(entity);
	}
}

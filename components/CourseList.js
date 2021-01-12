import React, { useState } from "react";
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import Course from './Course';
import TermSelector from "./TermSelector";

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
  
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    
    return (
      <ScrollView>
        <TermSelector selectedTerm={selectedTerm} />
        { termCourses.map(course => <Course key={course.id} course={course} />) }
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
    courseList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export default CourseList;
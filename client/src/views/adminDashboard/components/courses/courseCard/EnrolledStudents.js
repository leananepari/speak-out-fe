import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import { enrolledStudentsColumns } from '../../../../../data';
import { getEnrolledStudents } from '../../../../../actions/adminDashboardActions/courses/courseAction';

function EnrolledStudents(props) {

  useEffect(() => {
    props.getEnrolledStudents(props.courseId)
  }, [])

  if (props.isLoading) {
    return <Spin style={{marginTop: '20px'}}size="large" />
  } else {
      return (
        <div style={{marginTop: '20px', width: '100%'}}>
        <Table
          className="rowHover"
          dataSource={props.enrolledStudents} 
          columns={enrolledStudentsColumns} 
          pagination={{ pageSize: 15 }} 
          rowKey='enrolled id'
          onRow={(record, rowIndex) => {
            // return {
              // onClick: event => {
              //   // rowKey={rowIndex}
              // }
              // rowKey={rowIndex}
            // };
          }}
        />
        </div>
      )
  } 
}

const mapStateToProps = state => {
  return {
    state: state,
    courseId: state.coursesReducer.courseById.id,
    isLoading: state.coursesReducer.isLoading,
    enrolledStudents: state.coursesReducer.enrolledStudents
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getEnrolledStudents }
  )(EnrolledStudents)
)
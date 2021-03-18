import request from '@/utils/request'

export default{

    getTeacherListPage(page,limit,teacherQuery){
        return request({
            url:`/eduservice/teacher/pageTeacherCondition/${page}/${limit}`,

            method:'post',
            data:teacherQuery
        })

    },
    deleteTeacherId(id){
      return request({
        url:`/eduservice/teacher/${id}`,
        method:'delete'
      })
    },
    //根据id查询讲师
    getTeacherInfo(id) {
      return request({
          url: `/eduservice/teacher/getTeacher/${id}`,
          method: 'get'
        })
  },
    addTeacher(teacher){
      return request({
        url:`/eduservice/teacher/addTeacher`,
        method:'post',
        data:teacher
      })
    },
    updateTeacherInfo(teacher) {
      return request({
          url: `/eduservice/teacher/updateTeacher`,
          method: 'post',
          data: teacher
        })
  }
}

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
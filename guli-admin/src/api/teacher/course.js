import request from '@/utils/request'
export default {
    
    addCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/addCourseInfo',
            method: 'post',
            data:courseInfo
          })
    },
    getListTeacher(){
        return request({
            url:'/eduservice/teacher/findAll',
            method: 'get'
            
        })
    },
    updateCourseInfo(courseInfo) {
        return request({
            url: '/eduservice/course/updateCourseInfo',
            method: 'post',
            data: courseInfo
          })
    },
    getCourseInfoId(id) {
        return request({
            url: '/eduservice/course/getCourseInfo/'+id,
            method: 'get'
          })
    },
getPublishCourseInfo(id) {
        return request({
            url: '/eduservice/course/getPublishCourseInfo/'+id,
            method: 'get'
            
          })
    },
publishCourse(id){
        return request({
            url: '/eduservice/course/publishCourse/'+id,
            method: 'post'
        
        })
    },

    //TODO课程列表
    //课程最终发布
getListCourse(){
        return request({
            url: '/eduservice/course/getCourseList',
            method: 'get'
        
        })
    },
    delete(id){
        return request({
            url:'/eduservice/course/delete/'+id,
            method:'delete'
          })
    }
}

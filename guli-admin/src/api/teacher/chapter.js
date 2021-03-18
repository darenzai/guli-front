import request from '@/utils/request'
export default {
    //
    getAllChapterVideo(courseId) {
        return request({
            url: '/eduservice/chapter/getChapterVideo/'+courseId,
            method: 'get',
           
          })
    },
    getChapter(chapterId) {
        return request({
            url: '/eduservice/chapter/getChapterInfo/'+chapterId,
            method: 'get'
          })
    },
    addChapter(chapter) {
        return request({
            url: '/eduservice/chapter/addChapter',
            method: 'post',
           data:chapter
          })
    },
    updateChapter(chapter) {
        return request({
            url: '/eduservice/chapter/updateChapter',
            method: 'post',
            data:chapter
          })
    },
    deleteChapter(chapterId) {
        return request({
            url: '/eduservice/chapter/'+chapterId,
            method: 'delete'
          })
    }
    

}

const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmd539t/",
            name: "ssmd539t",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmd539t/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "酒店预约及管理系统"
        } 
    }
}
export default base

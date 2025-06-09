
var projectName = '酒店预约及管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的订单',
	url: '../shop-order/list.html'
},

{
	name: '我的地址',
	url: '../shop-address/list.html'
},

]


var indexNav = [

{
	name: '客房信息',
	url: './pages/kefangxinxi/list.html'
}, 
{
	name: '预订房间订单',
	url: './pages/yudingfangjiandingdan/list.html'
}, 
{
	name: '入住信息',
	url: './pages/ruzhuxinxi/list.html'
}, 
{
	name: '退订信息',
	url: './pages/tuidingxinxi/list.html'
}, 
{
	name: '客房订餐',
	url: './pages/kefangdingcan/list.html'
}, 
{
	name: '客房续租',
	url: './pages/kefangxuzu/list.html'
}, 

{
	name: '酒店新闻',
	url: './pages/news/list.html'
},
{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/ssmd539t/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"酒店客服","menuJump":"列表","tableName":"jiudiankefu"}],"menu":"酒店客服管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"客房信息","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"房间分类","menuJump":"列表","tableName":"fangjianfenlei"}],"menu":"房间分类管理"},{"child":[{"buttons":["查看","删除","办理入住","审核"],"menu":"预订房间订单","menuJump":"列表","tableName":"yudingfangjiandingdan"}],"menu":"预订房间订单管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"退订信息","menuJump":"列表","tableName":"tuidingxinxi"}],"menu":"退订信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"客房订餐","menuJump":"列表","tableName":"kefangdingcan"}],"menu":"客房订餐管理"},{"child":[{"buttons":["查看","删除"],"menu":"客房续租","menuJump":"列表","tableName":"kefangxuzu"}],"menu":"客房续租管理"},{"child":[{"buttons":["查看","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","删除"],"menu":"酒店客服","tableName":"chat"},{"buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"酒店新闻","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预订"],"menu":"客房信息列表","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息模块"},{"child":[{"buttons":["查看"],"menu":"预订房间订单列表","menuJump":"列表","tableName":"yudingfangjiandingdan"}],"menu":"预订房间订单模块"},{"child":[{"buttons":["查看","退房","订餐","续租"],"menu":"入住信息列表","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息模块"},{"child":[{"buttons":["查看"],"menu":"退订信息列表","menuJump":"列表","tableName":"tuidingxinxi"}],"menu":"退订信息模块"},{"child":[{"buttons":["查看"],"menu":"客房订餐列表","menuJump":"列表","tableName":"kefangdingcan"}],"menu":"客房订餐模块"},{"child":[{"buttons":["查看"],"menu":"客房续租列表","menuJump":"列表","tableName":"kefangxuzu"}],"menu":"客房续租模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","预订"],"menu":"客房信息","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息管理"},{"child":[{"buttons":["查看"],"menu":"预订房间订单","menuJump":"列表","tableName":"yudingfangjiandingdan"}],"menu":"预订房间订单管理"},{"child":[{"buttons":["查看","退房","订餐","续租"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息管理"},{"child":[{"buttons":["查看"],"menu":"退订信息","menuJump":"列表","tableName":"tuidingxinxi"}],"menu":"退订信息管理"},{"child":[{"buttons":["查看"],"menu":"客房订餐","menuJump":"列表","tableName":"kefangdingcan"}],"menu":"客房订餐管理"},{"child":[{"buttons":["查看"],"menu":"客房续租","menuJump":"列表","tableName":"kefangxuzu"}],"menu":"客房续租管理"}],"frontMenu":[{"child":[{"buttons":["查看","预订"],"menu":"客房信息列表","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息模块"},{"child":[{"buttons":["查看"],"menu":"预订房间订单列表","menuJump":"列表","tableName":"yudingfangjiandingdan"}],"menu":"预订房间订单模块"},{"child":[{"buttons":["查看","退房","订餐","续租"],"menu":"入住信息列表","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息模块"},{"child":[{"buttons":["查看"],"menu":"退订信息列表","menuJump":"列表","tableName":"tuidingxinxi"}],"menu":"退订信息模块"},{"child":[{"buttons":["查看"],"menu":"客房订餐列表","menuJump":"列表","tableName":"kefangdingcan"}],"menu":"客房订餐模块"},{"child":[{"buttons":["查看"],"menu":"客房续租列表","menuJump":"列表","tableName":"kefangxuzu"}],"menu":"客房续租模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["查看","办理入住","删除","审核"],"menu":"预订房间订单","menuJump":"列表","tableName":"yudingfangjiandingdan"}],"menu":"预订房间订单管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"入住信息","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"退订信息","menuJump":"列表","tableName":"tuidingxinxi"}],"menu":"退订信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"客房订餐","menuJump":"列表","tableName":"kefangdingcan"}],"menu":"客房订餐管理"},{"child":[{"buttons":["查看","删除"],"menu":"客房续租","menuJump":"列表","tableName":"kefangxuzu"}],"menu":"客房续租管理"},{"child":[{"buttons":["查看","删除","修改","新增"],"menu":"酒店客服","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预订"],"menu":"客房信息列表","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息模块"},{"child":[{"buttons":["查看"],"menu":"预订房间订单列表","menuJump":"列表","tableName":"yudingfangjiandingdan"}],"menu":"预订房间订单模块"},{"child":[{"buttons":["查看","退房","订餐","续租"],"menu":"入住信息列表","menuJump":"列表","tableName":"ruzhuxinxi"}],"menu":"入住信息模块"},{"child":[{"buttons":["查看"],"menu":"退订信息列表","menuJump":"列表","tableName":"tuidingxinxi"}],"menu":"退订信息模块"},{"child":[{"buttons":["查看"],"menu":"客房订餐列表","menuJump":"列表","tableName":"kefangdingcan"}],"menu":"客房订餐模块"},{"child":[{"buttons":["查看"],"menu":"客房续租列表","menuJump":"列表","tableName":"kefangxuzu"}],"menu":"客房续租模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"酒店客服","tableName":"jiudiankefu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

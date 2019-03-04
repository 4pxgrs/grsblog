module.exports = {
  title: 'GRS Blog',
  description: '欢迎你来到4PX的GRS团队',
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.ico' }]],
  host: '0.0.0.0',
  port:8081,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
  	search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: '代码规范', link: '/codeGB/backEnd/code' },
      { text: '知识分享', link: '/share/' },
      { text: '部门空间', link: '/space/' },
      { text: '公司文化', link: '/culture/' },
    ],
    sidebar: {
      '/space/': loadSpace(),
      '/codeGB/': loadGB(),
      '/share/':loadShare()
    },
  }
}
/*加载编码标准菜单*/
function loadGB(){
	const f = '/codeGB/frontEnd/';
	const html = f+'htmlGB/';
	const css = f+'cssGB/'
	const js = f+'jsGB/';
	const img = f+'imgGB/';
	const bend = '/codeGB/backEnd/';
	return [
		{
			title: '后端规范',
	        collapsable: false,
	        children: [bend+'code']
		},
		{
			title: '前端规范',
	        collapsable: false,
	        children: [f,js+'code',js+'language',css+'note',css+'query',css+'webkit',css+'sass']
		},
		

	]
}
/*加载空间菜单*/
function loadSpace(){
	return [
		{
			title: '部门表情包',
	        collapsable: false,
	        children: ['/space/biaoqing']
		},
		{
			title: '部门活动',
	        collapsable: false,
	        children: ['/space/act/2019227.md']
		},
		

	]
}
/*加载分享*/
function loadShare(){
	return [
		{

		}
	]
}
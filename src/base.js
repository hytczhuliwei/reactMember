var ohtml=document.documentElement;
getSize();
window.onresize=function(){
	getSize();
};
// 根据屏幕尺寸设定html元素的fontSize值，然后通过rem实现屏幕适配
function getSize(){
	var screenWidth=ohtml.clientWidth;
	if(screenWidth<=320){
		ohtml.style.fontSize='20px';
	}else if(screenWidth>=640){
		ohtml.style.fontSize='40px';
	}else{
		ohtml.style.fontSize=screenWidth/(640/40)+'px';
	}
}
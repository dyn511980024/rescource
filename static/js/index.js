/**
 * Created by Eva on 17/3/1.
 */
$(function(){

    //$(document).ready(function(){
        /* input输入框的插件*/
        //$('input').iCheck({
        //    checkboxClass: 'icheckbox_flat-blue',
        //    radioClass: 'iradio_flat-blue'
        //});
    //});

    $(".value-list> option").click(function () {
        var _this = $(this);
        var _val = _this.val();
        $(".origin > .txt").text(_val);
    });

    /* 后台左边sidebar高度 */
    var _height = $(".admin-main .content").height();
    $(".sidebar").height(_height);


    var bannerswiper = new Swiper('.banner .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay : 3000,
        loop: true
    });
    var swiperstation = new Swiper('.expert .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

});


//删除职称
function deleteEvent(obj){
    $(obj).closest("p").remove();
};
//保留上传按钮，删除文件名和删除按钮本身
function deleteAptitude1(obj){
    $(obj).closest("p").find(".txt").remove();
    $(obj).remove();
};
//删除资质证明中的案例
function deleteAptitude(obj){
    $(obj).closest(".addAptitude-list-item").remove();
};
function deleteNew(obj){
    $(obj).closest(".addNew").remove();
}
//删除服务资质
function deleteObject(obj){
    $(obj).closest(".case-list-item").remove();
};

$(".value-file").change(function(){
    var textPath = $(this).val().replace("C:\\fakepath\\", "");
    $(this).closest('.uploadFile').find(".fileInputText").text(textPath);
    console.log(textPath);
});

function btnChange(values){
	if(values > "2"){
		document.getElementById("regist-org").className="form-group";
	}
	else{
		document.getElementById("regist-org").className="form-group hidden";
	}
}

$('[href="fruite"]').onClick(function(e){
	e.preventDefault()
	$(this).tab('show')
});
 
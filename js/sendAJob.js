$(document).ready(function () {
    $(".apply-yes").click(function () {
        let newJob = {
            position:"",
            description:"",
            tags:"",
            apply:"",
            expiry_date:"",
            category:"",
            type:"",
            country:"",
            city:"",
            release_date:"",
            is_paid:true,
            user_id:""
        };
        newJob.position = $('#position').val();
        newJob.description = $('#description').val();
        newJob.tags = $('#tags').val();
        newJob.apply = $('#apply').val();
        newJob.release_date = $('#release_date').val();
        newJob.expiry_date = $('#expiry_date').val();
        newJob.category = $('#newcategory').val();
        newJob.type = $('#newtype').val();
        newJob.country = $('#country').val();
        newJob.city = $('#city').val();
        $.ajax({
            type:'POST',
            url:`/user/newJob?email=${JSON.parse(sessionStorage.getItem('user')).email}`,
            data:newJob,
            success:function (data) {
                console.log(data);
            },
            // success:showIfo(),
            error:function () {
                layer.alert("信息插入错误！");
            }
        });
    })
});
//---------展示个人发布的所有职位----------
$(document).ready(function () {
    function showSelfJobs() {
        $.get(`/user/alljobs?email=${JSON.parse(sessionStorage.getItem('user')).email}`,function (data) {
            let str = '';
            for(let i = 0;i<data.length;i++){
                str += `<div class="my-apply-jobs" id="box${data[i].id}">
                                <p>
                                    <span class="apply-start-date">发布时间: <span>${data[i].release_date}</span></span>
                                    <span class="apply-end-date">~ &nbsp;&nbsp;截止时间: <span>${data[i].expiry_date}</span></span>
                                </p>
                                <p>
                                    <span class="apply-job-name">职位名称: <span>${data[i].position}</span></span>
                                    <span class="apply-job-company">公司: <span>${data[i].company}</span></span>
                                    <span class="apply-job-address">地址: <span>${data[i].address}</span></span>
                                </p>
                                <p class="apply-job-order">职位要求: ${data[i].description}</p>
                                <p class="apply-job-delete" ><a href="#" class="selfdelete" id=${data[i].id}>删除</a></p>
                                <p></p>
                            </div>`
            }
            $('#myselfJob').html('');
            $('#myselfJob').append(str);
        })
    }
    showSelfJobs();
});

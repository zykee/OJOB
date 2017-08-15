$(document).on('click','.selfdelete',function () {
    let listId = $(this).attr('id');
    deleteReleasedJobs(listId);
});
function deleteReleasedJobs(jobid) {//what to del : job id 1
   $(`#box${jobid}`).empty('');
   $.ajax({
        url: `/user/jobs/${jobid}`,
        type: 'DELETE',
        success: function(result) {
            console.log(result);
        }
    });
}

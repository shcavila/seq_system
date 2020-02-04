function addComment(data) 
{
    // console.log("test");
    
    let comment = `<div id="commentId"><div class="form-group"><strong class="float-left text-justify">${data.username}</strong>
    <p id="nonUserBody" class="text-justify">${data.body}</p></div><br clear="all"/></div>`
    
    if(user_id==data.user_id){
        comment = comment.replace("commentId" , "boxComment1")
        comment = comment.replace("float-left" , "float-right")
        $('.card-body').append(comment);
    }else{
        comment = comment.replace("commentId" , "boxComment2")
        $('.card-body').append(comment);
    }
}

var pusher = new Pusher('59a1d10e99c58e2524f0',
{
    cluster: 'ap1',
    encrypted: true
});

function sendNotification(data){
    let count = parseInt( $('#notifCount').text())
    count+=1
    $('#notifCount').text(count)
}

// function delete(id) 
// {
    
// }

var channel = pusher.subscribe('post'+post_id);
channel.bind('App\\Events\\CommentEvent',addComment)

var channel2 = pusher.subscribe('user'+user_id);
channel2.bind('App\\Events\\NotificationEvent',sendNotification)

var channel3 = pusher.subscribe('postComment'+comment_id);
// channel3.bind('App\\Events\\DeletePostCommentEvent',delete)  
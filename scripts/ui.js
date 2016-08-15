function projectDetails(projId) {
    if (!projId) {
        return false;
    }

    bindActions(projId);

    if (!$("#dialog").hasClass('in')) {
        $("#dialog").modal();
    }
}

function bindActions(projId) {
    var $project = $(".project[data-id='" + projId + "']");
    $("#dialog .modal-body").html($project.html());

    var hasPrevious = $project.prev('.project').length > 0;
    var hasNext = $project.next('.project').length > 0;

    if (hasPrevious) {
        $(".proj-action.prev").click(function () {
            bindActions(projId - 1);
        }).show();
    } else {
        $(".proj-action.prev").unbind('click').hide();
    }

    if (hasNext) {
        $(".proj-action.next").click(function () {
            bindActions(projId + 1);
        }).show();
    } else {
        $(".proj-action.next").unbind('click').hide();
    }

    $("#dialog .carousel").carousel({
        interval: '3000'
    }).carousel(0);
}

function init(){
    $("#scrollTop").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500, 'linear');
        return false;
    });

    $(document).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('#scrollTop').addClass('show');
        } else {
            $('#scrollTop').removeClass('show');
        }
    });

    $(".sidebar-icon").click(function () {
        $(this).parent(".sidebar-box").toggleClass("show");
    });

    $("#quickLinkForm form").validate();
}

function sendMessage(data) {
    if (!data && $("#quickLinkForm form").valid()) {
        data = {
            Name: $("#quickLinkForm #name").val(),
            Message: $("#quickLinkForm #message").val(),
            Address: $("#quickLinkForm #address").val(),
            Subject: $("#quickLinkForm #subject").val()
        };
    }

    //$.ajax({
    //    method: "post",
    //    url: "/sendemail",
    //    dataType: "json",
    //    data: data,
    //    success: function (content) {
    //        $("#msgSuccess").show();
    //        setTimeout(function() {
    //            $("#msgSuccess").hide();
    //        }, 10000);
    //    },
    //    error: function(er) {
    //        $("#msgSuccess").show();
    //        setTimeout(function() {
    //            $("#msgSuccess").hide();
    //        }, 10000);
    //    }
    //});
}

function download() {
    var url = "/images/[CV]ZoranGjuroski.pdf";
    window.open(url, '_blank');
}

function contact() {
    location.href = 'contact.html';
}
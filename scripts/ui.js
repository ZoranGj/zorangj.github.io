﻿function openProjectDetails(order) {
    if (!order) {
        return false;
    }

    bindActions(order);

    if (!$("#dialog").hasClass('in')) {
        $("#dialog").modal();
    }
}

function bindActions(order) {
    var $project = $(".project[data-order='" + order + "']");
    $("#dialog .modal-body").html($project.html());

    var hasPrevious = $project.prev('.project').length > 0;
    var hasNext = $project.next('.project').length > 0;

    if (hasPrevious) {
        $(".proj-action.prev").click(function () {
            bindActions(order - 1);
        }).show();
    } else {
        $(".proj-action.prev").unbind('click').hide();
    }

    if (hasNext) {
        $(".proj-action.next").click(function () {
            bindActions(order + 1);
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

        if ($(window).scrollTop() > 210) {
            $('#sideMenu').addClass('show');
        } else {
            $('#sideMenu').removeClass('show');
        }
    });

    $(".sidebar-icon").click(function () {
        $(this).parent(".sidebar-box").toggleClass("show");
    });
}

function download() {
    var url = "images/[CV]ZoranGjuroski.pdf";
    window.open(url, '_blank');
}

function contact() {
    location.href = 'contact.html';
}
function github(){
    var url = "https://github.com/ZoranGj";
    window.open(url, '_blank');
}
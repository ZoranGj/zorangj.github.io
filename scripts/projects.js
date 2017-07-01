/**
 * Created by Zoran Gj on 6/2/2017.
 */
function initializeView(){
    $(".portfolio-item")
        .on('click', function () {
            var id = $(this).data('projid');
            openProjectDetails(id);
        })
        .on('mouseover', function() {
            $(this).siblings().css({opacity: '0.5'});
        })
        .on('mouseout', function() {
            $(this).siblings().css({opacity: '1'});
        });

    var $grid = $('#itemsList').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $(".portfolio-category").click(function () {
        $(".portfolio-category.active").removeClass('active');
        $(this).addClass('active');

        var categoryId = $(this).data('group');
        if (categoryId == 'all') {
            $grid.isotope({ filter: '*' });
        } else {
            $grid.isotope({ filter: '.' + categoryId });
        }
    });
}

function renderProjects(){
    var projHtml = '',
        detailsHtml = '',
        $projContainer = $("#itemsList"),
        $detailsContainer = $("#itemDetailsList");

    for(var i in projects){
        var elem = projects[i];
        projHtml += '<div class="portfolio-item col-md-4 '+ elem.class +'" data-projid="'+ elem.id +'" data-groups='+ elem.groups +'> '+
            '<a role="button"> '+
            '<div class="portfolio-image-wrapper">';
        if (elem.images.length) {
            projHtml += '<img src="' + elem.images[0] + '" class="portfolio-item-image" alt="project image">';
        }
        else {
            projHtml += '<div class="portfolio-item-image"></div>';
        }
        projHtml += '</div><span class="fa fa-search details"></span> '+
            '<div class="portfolio-item-desc"> '+
            '<h6>' + elem.name + '</h6> '+
            '<p> ' + elem.desc + '</p> '+
            '</div></a></div>';

        $projContainer.append(projHtml);

        detailsHtml += '<div class="project" data-id="'+elem.id+'">';

        detailsHtml += '<div class="proj-wrap">'+
            '<h1 class="blue">' + elem.name +' <button type="button" class="close proj-action exit" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button></h1>'+
            '<div class="project-descr">'+
            '<p class="clearfix">' +elem.fulldesc;

        if(elem.tags && elem.tags.length > 0){
            detailsHtml += '<div class="tag-items">';
            for(var k in elem.tags){
                detailsHtml += '<span>' + elem.tags[k] + '</span>';
            }
            detailsHtml += '</div>';
        }

        detailsHtml += '</p>'+
            '</div>';
        detailsHtml += '<div class="images-wrap">'+
            '<img src="images/monitor.png" class="gallery-holder" />'+
            '<div class="carousel slide" data-ride="carousel">'+
            '<div class="carousel-inner">';

        var active = false;
        for (var j in elem.images){
            var activeClass = !active ? "active" : null;
            active = true;
            detailsHtml += '<div class="item '+ activeClass + '">'+
                '<img class="img-responsive" src="'+ elem.images[j] +'" alt="...">'+
                '</div>';
        }

        detailsHtml += '</div></div></div> ';
        detailsHtml += '<div class="clearfix"></div>'+
            '<p class="proj-navigation">'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">'+
            '<i class="fa fa-times"></i> Close'+
            '</button>';

        if (elem.url != null){
            detailsHtml += '<button type="button" class="btn btn-info" onclick="window.open(\''+ elem.url +'\', \'_blank\')"> '+
                '<i class="fa fa-external-link"></i> Visit website'+
                '</button>';
        }

        $detailsContainer.append(detailsHtml);

        projHtml = '';
        detailsHtml = '';
    }
    $projContainer.append('<div class="clearfix"></div>');
}

var projects = [
    {
        id: 1,
        groups: '["0", "3"]',
        name: 'KnigW',
        desc: ' Desktop application',
        class: 'all desktop',
        images: ['images/project.png'],
        fulldesc: 'Making updates and enhancements in the code and the database tables of an existing system.'+
        'Creating operations to communicate with FTP server and write/read/update files, and creating application module for generating XML reports for the companies which use the system (several company types).Visual Basic, XML.',
        tags: ['Visual Basic', 'XML'],
        url: null
    },
    {
        id: 2,
        groups: '["0", "1"]',
        name: 'Markoskik73',
        desc: ' Website',
        class: 'all web',
        images: [
            "images/2/0.png",
            "images/2/1.png",
            "images/2/2.png",
            "images/2/3.png"
        ],
        fulldesc: 'It represents a static website for the needs of the company MarkoskiK73 (civil engineering and constructions).'+
        'The website is (mobile-first) responsive.',
        tags: ['HTML', 'CSS', 'Bootstrap', 'PHP (contact)'],
        url: null
    },
    {
        id: 3,
        groups: '["0", "2"]',
        name: 'SRIS',
        desc: ' Web application',
        class: 'all webd',
        images: [
            "images/3/0.png",
            "images/3/2.png",
            "images/3/3.png",
            "images/3/4.png",
            "images/3/6.png",
            "images/3/7.png",
        ],
        fulldesc: 'A system (web application) that aims to support, facilitate and accelerate the processes of supervision of the capital market in the country. <br /> '+
        'It is made of a module for corporate finance which analyses the data received from The Macedonian Stock Exchange and the Central Depository of Securities, and a module that represents a segment of the application used for supervision of management companies of investment funds.',
        tags: ['ASP.NET MVC', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'WCF'],
        url: 'https://sris.sec.gov.mk'
    },
    {
        id: 4,
        groups: '["0", "2"]',
        name: 'DenDiet',
        desc: ' Web application',
        class: 'all webd',
        images: [
            "images/4/0.png",
            "images/4/1.png",
            "images/4/3.png",
            "images/4/4.png"
        ],
        fulldesc: 'Dynamics Energy Nutrition is a system that needs the client services and consultancy from professional doctors - nutritionists.'+
        'The main goal is for patients to lose weight and to lead a healthy life. <br /> '+
        'The application consist of three areas - public for not lot logged in users, administration for the nutritionists and patient area. '+
        'The admin application includes patient management, applications management where they can approve/accept patient applications, applications history, chat, etc.'+
        'The patient application is the patient\'s profile and there the patient inserts his measurements, views the food menus sent from the doctor, chats, and sends tracking forms about his health when needed.',
        tags: ['ASP.NET MVC', 'KnockoutJS', 'SignalR', 'HTML', 'CSS', 'Bootstrap', 'Entity framework', 'jQuery'],
        url: 'http://www.dendiet.com/'
    },
    {
        id: 5,
        groups: '["0", "3"]',
        name: 'Electronic Services Framework',
        desc: ' Web application',
        class: 'all webd',
        images: [
            "images/5/0.png",
            "images/5/1.png",
            "images/5/2.png",
        ],
        fulldesc: 'Framework for electronic services, designed to provide the end users configured catalogs with services,'+
        'and administration which includes content management and report generation.',
        tags: ['ASP.NET MVC', 'ASP.NET WebForms', 'HTML', 'CSS', 'Bootstrap', 'Entity framework'],
        url: null
    },
    {
        id: 6,
        groups: '["0", "2"]',
        name: 'Electronic Archive',
        desc: ' Desktop application',
        class: 'all desktop',
        images: [
            "images/6/0.png",
            "images/6/1.png",
            "images/6/2.png",
        ],
        fulldesc: 'e-Archive is a system that is used for archiving documents. It represents a desktop '+
        'application created with Windows Presentation Foundation (WPF) that allows the archivist to manage companies that have their own separate archives. The application is created following the principles and laws on archiving imposed by the Government of Macedonia.',
        tags: ['C#', 'WPF', 'Caliburn Micro', 'ADO.NET'],
        url: null
    },
    {
        id: 7,
        groups: '["0", "2"]',
        img: null,
        name: 'Coke SAM',
        desc: ' Web API',
        class: 'all webd',
        images: [
            "images/project.png"
        ],
        fulldesc: 'Project that includes two parts: web API that is used through mobile devices for sharing '+
        'coupons and messages for McDonald’s meals, and an administration portal for user/coupon/messages/files management.',
        tags: ['C#', 'ASP.NET Web API', 'Entity Framework'],
        url: null
    },
    {
        id: 8,
        groups: '["0", "2"]',
        name: '[CRP] - Configuration portal',
        desc: ' Web application',
        class: 'all webd',
        images: [
            "images/8/0.png",
            "images/8/1.png",
            "images/8/2.png",
            "images/8/3.png",
            "images/8/4.png",
            "images/8/5.png"
        ],
        fulldesc: 'CRP (Core registry platform) – Generic framework for registers and business processes. '+
        'It represents a big platform which contains web application for configuring metadata about new registration systems through creating dynamic'+
        'database model – entities, properties, relationships, business roles, roles, organizations, documents, validation rules,'+
        'and configuring business processes with activities, actions, notifications.'+
        '<br/> The configured metadata is published and used from other web application from the end user who'+
        'fills in the needed data in the configured processes/activities.'+
        'The platform also includes: BPM tool, web application for supervision and support, business rule component,'+
        'workflow manager, document management system etc.',
        tags: ['C#', 'ASP.NET MVC', 'WCF', 'Dapper', 'SQL', 'HTML', 'CSS', 'Bootstrap', 'jQuery'],
        url: null
    },
    {
        id: 9,
        groups: '["0", "2"]',
        name: 'ePermit Serbia',
        desc: ' Web application',
        class: 'all webd',
        images: [
            "images/9/0.png",
            "images/9/1.png",
            "images/9/2.png",
            "images/9/3.png",
            "images/9/4.png",
            "images/9/5.png",
            "images/9/6.png",
            "images/9/9.png",
        ],
        fulldesc: '[CRP instance]. System for issuing construction permits in Serbia. '+
        'It includes all needed processes for construction: submitting application for location conditions,'+
        'obtaining all kinds of permits from the needed institutions, approval of works, etc.',
        url: 'https://ceop.apr.gov.rs/eregistrationportal/'
    },
    {
        id: 10,
        groups: '["0", "2"]',
        name: '[CRP] - Support tool',
        desc: ' Web application',
        class: 'all webd',
        images: [
            "images/10/0.png",
            "images/10/1.png",
            "images/10/3.png",
            "images/10/5.png"
        ],
        fulldesc: 'CRP (Core registry platform) – Generic framework for registers and business processes. '+
        'It represents a big platform which contains web application for configuring metadata about new registration systems through creating dynamic'+
        'database model – entities, properties, relationships, business roles, roles, organizations, documents, validation rules,'+
        'and configuring business processes with activities, actions, notifications.'+
        '<br/>The configured metadata is published and used from other web application from the end user who'+
        'fills in the needed data in the configured processes/activities.'+
        'The platform also includes: BPM tool, web application for supervision and support, business rule component,'+
        'workflow manager, document management system etc.',
        tags: [ 'C#', 'ASP.NET MVC', 'WCF', 'SignalR', 'Bootstrap', 'HTML', 'CSS',
            'jQuery', 'Dapper', 'SQL'],
        url: null
    },
    {
        id: 11,
        groups: '["0", "2"]',
        name: 'Sara fashion eOrders',
        desc: ' Web application',
        class: 'all webd',
        images: [
            "images/11/0.png",
            "images/11/1.png",
            "images/11/2.png",
            "images/11/3.png"
        ],
        fulldesc: 'e-Commerce web application for electronic orders created with Microsoft technologies. '+
        'Includes filling shopping cart with products from various categories and creating orders with articles.',
        tags: ['C#', 'ASP.NET MVC', 'ADO.NET', 'HTML', 'CSS', 'Bootstrap'],
        url: 'http://194.61.58.146:888/webnaracki/'
    },
    {
        id: 12,
        groups: '["0", "1"]',
        name: 'TheTowawayZone',
        desc: ' Web application',
        class: 'all webd',
        images: [
            "images/12/0.png",
            "images/12/3.png",
            "images/12/4.png",
            "images/12/5.png"
        ],
        fulldesc: 'Web application for towing companies that provides various features for vehicle impound activities including:'+
        'vehicle impound, calculating fees for impounded vehicle, vehicle reports, user and role management, managing'+
        'vehicles on sale, progress bar and deadline calculator feature for impounded vehicles.',
        tags: ['C#', 'ASP.NET MVC', 'Entity Framework', 'KnockoutJS', 'SignalR', 'Bootstrap', 'HTML', 'CSS', 'jQuery'],
        url: 'http://thetowawayzone.com/public'
    },
    {
        id: 13,
        groups: '["0", "2"]',
        name: 'AtomeM',
        desc: ' Web application',
        class: 'all webd',
        images: [
            "images/13/0.png",
        ],
        fulldesc: 'e-Commerce web application for electronic orders created with Microsoft technologies. '+
        'Includes filling shopping cart with products from various categories and creating orders with articles.',
        tags: ['C#', 'ASP.NET MVC', 'ADO.NET', 'HTML', 'CSS', 'Bootstrap'],
        url: 'http://shop.atomem.mk'
    },
    {
        id: 14,
        groups: '["0", "2"]',
        name: 'HTMLGeneratorAPI',
        desc: ' C# Library',
        class: 'all webd',
        images: [
            'images/project.png'
        ],
        fulldesc: 'Fluent API for generating HTML (complex forms, tables..) from C# code. The library is published as a nuget package.',
        tags: ['C#'],
        url: 'https://www.nuget.org/packages/HTMLGeneratorAPI/'
    },
    {
        id: 15,
        groups: '["0", "2", "3"]',
        name: 'Organizer',
        desc: ' Web & desktop application',
        class: 'all webd desktop',
        images: [
            "images/15/0.png",
            "images/15/1.png",
            "images/15/3.png",
            "images/15/4.png",
            "images/15/5.png",
        ],
        fulldesc: 'The solution offers desktop and web client which helps you track and improve your productivity.',
        tags: ['C#', 'ASP.NET MVC', 'ADO.NET', 'HTML', 'CSS', 'Bootstrap'],
        url: 'http://shop.atomem.mk'
    },
    {
        id: 16,
        groups: '["0", "2", "4"]',
        name: 'Snippets',
        desc: ' Web application',
        class: 'all webd ml && x.Goal.User.Id == UserId',
        images: [
            "images/16/0.png"
        ],
        fulldesc: 'an application which can recognize programming language and other useful information for code snippets using some Machine Learning techniques and algorithms. The application is able to learn and to improve the accuracy in recognizing the code snippets while processing them. Then, the application can manage the snippets repository and use it for various integrations.',
        tags: ['C#', "Naive Bayes", 'Support Vector Machine', 'ASP.NET MVC', 'HTML', 'CSS', 'Bootstrap'],
        url: 'https://github.com/ZoranGj/snippets'
    },
];
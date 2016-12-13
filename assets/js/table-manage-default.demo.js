/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.6
Version: 2.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v2.0/admin/html/
*/

var handleDataTableDefault = function() {
	"use strict";

    if ($('#data-table').length !== 0) {
        var datatable = $('#data-table').DataTable({
            responsive: true
        });
    }
};

var destroyTable = function() {
	$("#data-table").dataTable().fnDestroy();
};

var tableInfo = function(){
	return $("#data-table").DataTable().page.info();
};

var jumpToPage = function(pageNum){
	$("#data-table").DataTable().page(pageNum).draw('page');
}

var changeTableLen = function(l){
	$("#data-table").DataTable().page.len(l).draw();
}

var getSearchBoxValue = function(){
	return $('.dataTables_filter input').val();
}

var getSearch = function(key){
	destroyTable();
	$("#data-table").DataTable({oSearch: {"sSearch": key}});
}

var TableManageDefault = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleDataTableDefault();
        }
    };
}();

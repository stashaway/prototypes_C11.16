// harder Firebase Intro Prototype js file
var config = {
    apiKey: "AIzaSyAMeZujHVrMsSCUdb6Qzuxic_du3HnnY8Q",
    authDomain: "lfzdemo-c1219.firebaseapp.com",
    databaseURL: "https://lfzdemo-c1219.firebaseio.com",
    storageBucket: "lfzdemo-c1219.appspot.com",
    messagingSenderId: "436706232959"
};
firebase.initializeApp(config);
var fbRef=firebase.database();

function updateDom(d){
    var table = $('.sgt tbody');
    table.html('');
    for(var key in d){
        if(d.hasOwnProperty(key)){
            var row = $('<tr>');
            var id = $('<td class="sid">' + d[key].student_id + '</td>');
            var name = $('<td class="sname">' + d[key].student_name + '</td>');
            var course = $('<td class="course">' + d[key].course + '</td>');
            var grade = $('<td class="grade">' + d[key].grade + '</td>');
            var actions = $('<td>', {'data-uid': key});
            var edit = $('<button>', {
                class: 'btn btn-sm btn-info edit',
                text: 'Edit'
            });
            var del = $('<button>', {
                class: 'btn btn-sm btn-danger delete',
                text: 'Delete'
            });

            table.append(row.append(id, name, course, grade, actions.append(edit, del)));
        }
    }
}
function addStudentToDatabase(student){
    console.log(student);
    var fixed_student={
        course: student.course,
        grade: student.grade,
        student_name: student.sname,
        student_id: student.sid
    };
    fbRef.ref("students").push(fixed_student);
}

function addStudent(){
    var new_student=getFormData();
    addStudentToDatabase(new_student);
    clearForm();
}

function removeStudent(){
    var key = $(this).closest('td').attr('data-uid');
    var confirmation=confirm('Delete this student?');
    if (confirmation) {
        fbRef.ref("students/" + key).remove();
    }
}

function editStudent(){
    var key = $(this).closest('td').attr('data-uid');
    var addButton = $('#add-student');
    var student=getRowData($(this).closest('tr'));
    populateFormData(student.sid, student.sname, student.course, student.grade);
    $('#sid').attr('data-uid',key);
    console.log(addButton);
    addButton.removeClass('btn-success');
    addButton.addClass('btn-primary');
    addButton.text('Update');
}

function updateStudent(){
    var addButton = $('#add-student');
    var student = getFormData();
    var key = $('#sid').attr('data-uid');
    var updates = {};
    updates['/course'] = student.course;
    updates['/grade'] = student.grade;
    updates['/student_name'] = student.sname;
    updates['/student_id'] = student.sid;
    fbRef.ref("students/" + key).update(updates);
    addButton.removeClass('btn-primary');
    addButton.addClass('btn-success');
    addButton.text('Add Student');
    $('#sid').removeAttr('data-uid');
    clearForm();
}
function clearForm(){
    $('.sgt-form input').each(function(k, v){
        $(v).val('');
    });
}

function getFormData(){
    var output = {};
    $('.sgt-form input').each(function(k, v){
        var ele = $(v);
        output[ele.attr('id')] = ele.val();
    });
    return output;
}

function populateFormData(sid, sname, course, grade){
    $('#sid').val(sid);
    $('#sname').val(sname);
    $('#course').val(course);
    $('#grade').val(grade);
}

function getRowData(e) {
    return {
        sid: e.find('.sid').text(),
        sname: e.find('.sname').text(),
        course: e.find('.course').text(),
        grade: e.find('.grade').text()
    };
}
$(document).ready(function(){
    var bodySelector = $('body');
    bodySelector.on('click','.btn-success',addStudent);
    bodySelector.on('click','.btn-info',editStudent);
    bodySelector.on('click','.btn-primary',updateStudent);
    $(".sgt").on("click",".delete",removeStudent);

    $('button#clear-form').click(clearForm);
    fbRef.ref("students").on("value", function(snapshot){
        updateDom(snapshot.val());
        // console.log("Snapshot: ", snapshot.val());
    });
});
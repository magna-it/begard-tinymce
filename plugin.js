tinymce.PluginManager.add('begard', function(editor, url) {

    var openBegard = function() {
        begard.modal({
            remote: 'http://localhost/magnait/begard-tinymce/test/begard.php',
            autoRefresh: true,
            select: {
                fileAcceptedMimes: ['images']
            }
        }, {
            afterSelect: function(path, file, directories, customField) {
                editor.execCommand('mceInsertContent', false, '<img src="' + file.preview +'" />');
            }
        });
    };

    editor.addButton('begard', {
        text: 'Media manager',
        icon: false,
        onClick: openBegard
    });

    editor.addMenuItem('begard', {
        text: 'Media manager',
        context: 'insert',
        onclick: openBegard
    });
});

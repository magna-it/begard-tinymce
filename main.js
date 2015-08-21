tinymce.PluginManager.add('begard', function(editor, url) {

    editor.addButton('begard', {
        text: 'Begard',
        icon: false,
        onClick: function() {
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
            // editor.windowManager.open({
            //     title: 'Example plugin',
            //     body: [
            //         {type: 'textbox', name: 'title', label: 'Title'}
            //     ],
            //     onSubmit: function(e) {
            //         editor.insertContent('Title: ' + e.data.title);
            //     }
            // })
        }
    });

    editor.addMenuItem('begard', {
        text: 'Begard',
        context: 'tools',
        onclick: function() {
            editor.windowManager.open({
                title: 'TinyMCE site',
                url: 'http://www.tinymce.com',
                width: 800,
                height: 600,
                buttons: [{
                    text: 'Close',
                    onclick: 'close'
                }]
            });
        }
    });
});

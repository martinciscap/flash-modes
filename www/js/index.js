document.addEventListener('deviceready', function() {
      
    CameraPreview.startCamera({
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        camera: CameraPreview.CAMERA_DIRECTION.BACK,
        toBack: false,
        tapPhoto: true,
        tapFocus: false,
        previewDrag: false
    }, function() {        

        CameraPreview.getSupportedFlashModes(function(flashModes) {
            
            var list = document.getElementById('list'), li;
            flashModes.forEach(function(flashMode) {                
                li = document.createElement('li');
                li.appendChild(document.createTextNode(flashMode));
                list.appendChild(li);
            });
        }, function() {
            alert('error: can\'t get supported flash modes');
        });
    }, function() {
        alert('error: can\'t access camera to check supported flash modes');
    });    
}, false);
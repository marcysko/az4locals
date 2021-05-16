const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dpz6mgrvg/upload";
const CLOUDINARY_UPLOAD_PRESET = 'hkeotdmo'
var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function() {
  var file = event.target.files[0];
  var formDate = new FormData();
  formData.append('file', file);
  formData.append('upload_preset')
 
  axios ({
      url: CLOUDINARY_URL.
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
  }),then(function(res) {

    console.log(res)
  }).catch(function(err) {
      console.log(err);

  })
});
function previewImages() {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = ''; // Clear previous images
    const files = document.getElementById('propertyImages').files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100px'; // Set a width for the preview image
            img.style.height = 'auto'; // Maintain aspect ratio
            imagePreview.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
}
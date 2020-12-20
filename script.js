const changeImageClass = () => {
  const imagesList = Array.from(document.getElementsByClassName('apresentation-image'));
  const selectedImage = imagesList.find(image => image.className.includes('selected'));
  const nextImage = selectedImage.nextElementSibling;
  selectedImage.classList.remove('selected');

  if (nextImage) {
    nextImage.classList.add('selected');
  } else {
    selectedImage.parentElement.firstElementChild.classList.add('selected');
  }
}


const interval = setInterval(changeImageClass, 3000);
changeImageClass();
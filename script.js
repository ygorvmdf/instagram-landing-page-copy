const changeImageClass = () => {
  var interval = setInterval(frame(), 3000);

  function frame() {

    const imagesList = document.getElementsByClassName('apresentation-image');
    for (let image of imagesList) {
      const imageClasses = Object.values(image.classList);
      if (imageClasses.includes('selected')) {
        const nextImage = image.nextElementSibling;
        image.classList.remove('selected');
        nextImage.classList.add('selected');
        return;
      }
    }
  }
}

changeImageClass();

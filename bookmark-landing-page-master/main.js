let bookmarkBtn = document.querySelector('.bookmark');
let searchingBtn = document.querySelector('.searching');
let sharingBtn = document.querySelector('.sharing');
let featureBtn = document.querySelectorAll('.feature__link');
let featureImg = document.querySelector('.feature__img');
let featureTitle = document.querySelector('.feature__title');
let featureDesc = document.querySelector('.feature__desc');

featureBtn.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.className.includes('bookmark')){
            bookmarkBtn.classList.add('current');
            searchingBtn.classList.remove('current');
            sharingBtn.classList.remove('current');
        
            featureImg.src = './images/illustration-features-tab-1.svg';
            featureTitle.textContent = 'Bookmark in one click';
            featureDesc.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
        }
        else if(e.target.className.includes('searching')){
            bookmarkBtn.classList.remove('current');
            searchingBtn.classList.add('current');
            sharingBtn.classList.remove('current');
        
            featureImg.src = './images/illustration-features-tab-2.svg';
            featureTitle.textContent = 'Intelligent Search';
            featureDesc.textContent = 'Our powerful search feature will help you find saved sites in not time at all. No need to trawl through all of your bookmarks.';
        }
        else{
            bookmarkBtn.classList.remove('current');
            searchingBtn.classList.remove('current');
            sharingBtn.classList.add('current');
        
            featureImg.src = './images/illustration-features-tab-3.svg';
            featureTitle.textContent = 'Share your bookmarks';
            featureDesc.textContent = 'Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button.';
        }
    })
});
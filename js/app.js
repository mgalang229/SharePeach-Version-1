const logOut = document.querySelector('#log-out');
const peachButton2 = document.querySelector('.peach-button2');
const SPTextarea = document.querySelector('.secondPart textarea');
const newsFeed = document.querySelector('.news-feed');
const postedText = document.querySelector('.posted-text');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const searchBar = document.querySelector('.search-bar');
const comment = document.querySelectorAll('i.far.fa-comment');
const retweet = document.querySelectorAll('i.fas.fa-retweet');
const heart = document.querySelectorAll('i.far.fa-heart');
const share = document.querySelectorAll('i.far.fa-share-square');

logOut.onclick = function(){
    window.location.href = 'index.html';
}

peachButton2.addEventListener('click', clickPeach2);

function clickPeach2(){
	let SPValue = SPTextarea.value;
	let userIdentity = localStorage.getItem('username');
	if(SPValue !== ''){
		let sampleTemplate = `
			<!-- Post Template -->
      <div class="post-template">
          <div class="firstPart">
            <img class="profile-icon" src="img/your-icon.png">
          </div>
        <div class="posted-text">
           <h3>${userIdentity}</h3>
             <p>${SPValue}</p>
             <i class="far fa-comment"></i>
             <i class="fas fa-retweet"></i>
             <i class="far fa-heart"></i>
             <i class="far fa-share-square"></i>
        </div>
      </div>
      <!-- End of Post Template -->
		`;
    newsFeed.insertAdjacentHTML('afterBegin', sampleTemplate);
		SPTextarea.value = '';
    const comment = document.querySelectorAll('i.far.fa-comment');
    const retweet = document.querySelectorAll('i.fas.fa-retweet');
    const heart = document.querySelectorAll('i.far.fa-heart');
    const share = document.querySelectorAll('i.far.fa-share-square');

    comment.forEach(cmt => {
      cmt.addEventListener('click', () => {
        cmt.style.color = '#fff';
        cmt.style.background = '#3399FF';
      });
    });
    retweet.forEach(rwt => {
    rwt.addEventListener('click', () => {
      rwt.style.color = '#fff';
      rwt.style.background = '#039823';
    });
    });
    heart.forEach(hrt => {
      hrt.addEventListener('click', () => {
        hrt.style.color = '#fff';
        hrt.style.background = '#F96167';
      });
    });
    share.forEach(shr => {
      shr.addEventListener('click', () => {
        shr.style.color = '#fff';
        shr.style.background = '#3399FF';
      });
    });     
  }
	else{
		console.log('No value');
	}
}

searchInput.onclick = function(){
  searchIcon.style.color = '#E55359';
  searchInput.style.background = 'none';
  searchInput.style.border = '1px solid #E55359';
}

searchBar.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(searchInput.value);
  searchInput.value = '';
});

comment.forEach(cmt => {
  cmt.addEventListener('click', () => {
    cmt.style.color = '#fff';
    cmt.style.background = '#3399FF';
  });
});

retweet.forEach(rwt => {
  rwt.addEventListener('click', () => {
    rwt.style.color = '#fff';
    rwt.style.background = '#039823';
  });
});

heart.forEach(hrt => {
  hrt.addEventListener('click', () => {
    hrt.style.color = '#fff';
    hrt.style.background = '#F96167';
  });
});

share.forEach(shr => {
  shr.addEventListener('click', () => {
    shr.style.color = '#fff';
    shr.style.background = '#3399FF';
  });
});
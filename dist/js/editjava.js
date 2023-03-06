const container= document.querySelector('.container');
const jumbo=document.querySelector('.jumbo');
const thum=document.querySelectorAll('.thum');

container.addEventListener('click', function(e) {
	if (e.target.className == 'thum') {

		jumbo.src = e.target.src;
		jumbo.classList.add('fris');
		setTimeout(function() {
			jumbo.classList.remove('fris');
		}, 500);

		thum.forEach(function(thum){
			thum.className='thum';

		});
		e.target.classList.add('active');


	}


});
document.body.addEventListener('mousemove',function(event){
	const xpos = Math.round((event.clientX   /  window.innerWidth) *255);
	const ypos = Math.round((event.clientY  /  window.innerHeight) *255);
	document.body.style.backgroundColor='rgb('+ xpos +','+ ypos +',100)';
});
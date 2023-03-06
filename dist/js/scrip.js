window.onscroll=function(){
    const header =document.querySelector('header');
    const fixedNaf=header.offsetTop;
    const top =document.querySelector("#top")

    if(window.pageYOffset > fixedNaf ){
        header.classList.add('nafbar-fixed');
        top.classList.remove('hidden')
        top.classList.add('fixed')
    }else{
        header.classList.remove('nafbar-fixed');
        top.classList.add('hidden')
        top.classList.remove('flex')
    }
};
//hambuger


const hambuger=document.querySelector('#hambuger');
const nafMenu=document.querySelector('#naf-menu')
hambuger.addEventListener('click',function(){
    hambuger.classList.toggle('hambuger-active');
    nafMenu.classList.toggle('hidden');
});
//drak mode//
const dark = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
dark.addEventListener('click',function(){
    if (dark.checked) {
        html.classList.add('dark');
        localStorage.theme=('dark');
        
    } else {
        html.classList.remove('dark');
        localStorage.theme=('light');
        
    }
});
///memindahkan toggle sesui mode///
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    dark.checked=true;

} else {
    dark.checked=false;
}

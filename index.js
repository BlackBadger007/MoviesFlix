const global= {
    currentPage: window.location.pathname
  };
const golo={
    currentPage: window.location.search.split('=')[1]
  };
const sera={
    currentPage: window.location.search.split('term=')[1]
  };

  const quer=window.location.search;
  const param=new URLSearchParams(quer);
  let till=param.get('type');


let revel=1;

let a=1;



async function login(){
    const cshow=document.getElementById('showpass')
    cshow.addEventListener('click', pisu);

    function pisu(){

        if(cshow.innerText==='Hide'){
            const inp=document.getElementById('pas');
        inp.setAttribute("type","password");
        cshow.innerText="Show";
        }else{
            const inp=document.getElementById('pas');
            inp.setAttribute("type","text");
            cshow.innerText="Hide";
        }
    }
    const link=document.getElementById('shop');
    link.addEventListener('click',()=>{        
        var a=0;
        
        const email=document.getElementById('fn').value;
        const password=document.getElementById('pas').value;

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(email))){
            if(email.trim().length === 0 || password.trim().length=== 0){
                alert('Missing data')
                return 0;
            }else{
                const store=Storage.getStorage(); 
                console.log(store.length);
                const lamba=store.length -1;
            store.forEach((item)=>{
                 if(email===item.email_id && password!==item.password){
                    alert('Password incorrect')
                    return 0;
                 }else if(email===item.email_id && password===item.password){
                    const change=document.getElementById('fn');
                    const change2=document.getElementById('pas');
                
                    const setatt=document.getElementById('shop');
                    setatt.href=`/index.html?name=${item.username}`;
                    console.log(item.username);
                    revel=item.email_id;
                    console.log(revel);
                    Storage.setCurrentAccount(item);
    
                    return 0;
    
            }else if(a===lamba){
                alert('User not found')
            }
            a++;
            })}}else{
            alert("Invalid email");
            }
        })}

class Account{
    constructor(firstname,lastname,username,profile,email_id,password,confirm_password,time,date){
        this.firstname=firstname;
        this.lastname=lastname;
        this.username=username;
        this.profile=profile;
        this.email_id=email_id;
        this.password=password;
        this.confirm_password=confirm_password;
        this.date=date;
        this.time=time;
    }
}
class Storage{
    constructor(){

        this.results=[];
    }

    add(acc){
        this.results.push(acc);
        console.log(this.results);
        this.setStorage(acc);
    }
    setStorage(acc){
        let iteminStorage;
        if(localStorage.getItem('account')===null){
            iteminStorage=[];
        }else{
            iteminStorage=JSON.parse(localStorage.getItem('account'));
        }
        iteminStorage.push(acc);
        localStorage.setItem('account',JSON.stringify(iteminStorage));
    }
    static getStorage(){
        let itemfromstorage;
        if(localStorage.getItem('account')===null){
            itemfromstorage=[];
        }else{
            itemfromstorage=JSON.parse(localStorage.getItem('account'));
        }
        return itemfromstorage;
        
    }
    static setCurrentAccount(acc){
        let iteminStorage;
        if(localStorage.getItem('currentAccount')===null){
            iteminStorage=0;
        }else{
            iteminStorage=JSON.parse(localStorage.getItem('currentAccount'))
        }
        iteminStorage=acc;
        localStorage.setItem('currentAccount',JSON.stringify(iteminStorage));
    }
    static getCurrentAccount(){
        let fromstore;
        if(localStorage.getItem('currentAccount')===null){
            fromstore=0;}
            else{
                fromstore=JSON.parse(localStorage.getItem('currentAccount'));
            }
            return fromstore;
    }

    

}
class App{
    constructor(){
        this.tracker=new Storage();
        document.getElementById('shop').addEventListener('click',this.giveValue.bind(this))
        this.array=[];
        this.cono;
        this.dateo;
        this.timeo;
    }
    getProfile(){
        const things= document.querySelectorAll('option');
                    things.forEach((item)=>{
                        if(item.selected){
                            console.log(item.value);
                            this.cono=item.value;
                            console.log(this.cono);
                            
                            return item.value;
                        }
                    });
    }
    giveValue(){
        const firstname=document.getElementById('first_name');
        const lastname=document.getElementById('last_name');
        const username=document.getElementById('username');
        const profile=this.getProfile();
        console.log(profile);
        const emailID=document.getElementById('email_id');
        const password=document.getElementById('password');
        const confirmPassword=document.getElementById('confirm_password');




        const fn=document.getElementById('first_name').value;
        const pass=document.getElementById('password').value;
        const cpass=document.getElementById('confirm_password').value;
        
        if(fn=='' || lastname.value=='' || username.value=='' || emailID=='' || password==''){
            return 0;
        }else if(String(pass).length<4){
            return 0;
        }else if(pass!==cpass){
            return 0;
        }else{
            const email=document.getElementById("email_id");
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(String(email.value))){

                const date= new Date();
        
        this.dateo=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        this.timeo=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
        
        const acc=new Account(firstname.value,lastname.value,username.value,this.cono,emailID.value,password.value,confirmPassword.value,this.dateo,this.timeo)
        this.tracker.add(acc);

        }else{
            return 0;
        }
    }
  }
}





function profile(){
    const getname=window.location.search.split('=')[1];

    let iteminstorage;
    if(localStorage.getItem('currentAccount')===null){
        iteminstorage=[];
    }else{
        iteminstorage=JSON.parse(localStorage.getItem('currentAccount'));
    }
    const item=iteminstorage;
    
            const div=document.createElement('div');
    div.id="profile";
    div.style.width="fit-content";
    // div.style.height="fit-content"
    div.style.margin="auto";
    div.style.marginTop="100px";
    // rgb(121, 94, 227)
    
    div.innerHTML=`<div id="profilee" style="display: flex;border: 1px solid black; width: fit-content;border-radius="20px">
    <div id="blue" style=" background:  white; width: 25%;border-top-left-radius: 40px;border-bottom-left-radius: 40px;">
      <div id="user-profile" style="display: flex;position: relative;width: fit-content;padding: 40px 100px;font-size: 30px;">
        <div id="user-pic" style="background: url(/images/2399.jpg);background-size: cover;background-position: center;width: 400px;height: 400px;margin: auto;margin-right: 45px;"></div>
        <div id="user-info" >
        <h1 style="margin-top: 0px; margin-bottom:0px">${item.username}</h1>
        <p style="margin-top: 0px;">Joined site on ${item.date} </p>
        <p><b>Name: </b><br>${item.firstname+" "+ item.lastname} <br> <b>Email:</b> <br>${item.email_id} <br> <b>Password:</b> <br>${item.password}<br> <b>Profile type:</b> <br>${item.profile.toUpperCase()}  </p>
        
        <a href="/login.html">
        </a>
        
        
        </div>
      </div>
    </div>
    <div id="white" style="background: rgb(121, 94, 227); width: 75%;border-bottom-right-radius: 40px;border-top-right-radius: 40px;"></div>
  </div>`;

                    

        const attachit=document.getElementById('attachit');
        attachit.appendChild(div);
}





// CREATE
function create(){
    const app=new App();
    const pogo  =document.getElementById('shop');
    pogo.addEventListener('click', runit);
    function runit(){
        const fn=document.getElementById('first_name').value;
        const pass=document.getElementById('password').value;
        const cpass=document.getElementById('confirm_password').value;
        
        if(fn.trim().length=== 0 || pass.trim().length ===0 || cpass.trim().length ===0){
            alert('Missing Data');
            return 0;
        }else if(String(pass).length<4){
            alert('Enter a stronger password');
            return 0;
        }else if(pass!==cpass){
            alert('Passwords not matched');
            return 0;
        }else{
            const email=document.getElementById("email_id");
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(String(email.value))){
              

                const setatt=document.getElementById('shop');
                setatt.href=`/login.html`;
        }else{
            alert("Invalid email");
        }
    }
}

const show=document.getElementById('showpass');
show.addEventListener('click', showpass);
function showpass(){
    console.log('hi');

    if(show.innerText==='Hide'){
        const inp=document.getElementById('password');
    inp.setAttribute("type","password");
    show.innerText="Show";
    }else{
        const inp=document.getElementById('password');
        inp.setAttribute("type","text");
        show.innerText="Hide";

    }

}

const cshow=document.getElementById('showcpass');
cshow.addEventListener('click', showcpass);
function showcpass(){
    console.log('hi');

    if(cshow.innerText==='Hide'){
        const inp=document.getElementById('confirm_password');
    inp.setAttribute("type","password");
    cshow.innerText="Show";
    }else{
        const inp=document.getElementById('confirm_password');
        inp.setAttribute("type","text");
        cshow.innerText="Hide";
    }}

}




async function fetchAPIData(endpoint){
  const API_KEY='d24a69f94e1ee79c49275818f351ebef';
  const API_URL='https://api.themoviedb.org/3/';
  
  const response= await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data=await response.json();
    return data;
  }

  async function displayPopularMovies(){
      const {results} = await fetchAPIData('movie/popular');
      results.forEach((item) => {
        const div=document.createElement('div');
        div.classList.add("card");
        div.innerHTML=`
              <div class="card">
              <a href="movie-details.html?id=${item.id}">
              <img
              src="https://image.tmdb.org/t/p/w500${item.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
              
              class="card-img-top"
              alt="Movie Title"
              />
              </a>
              <div class="card-body">
              <h5 class="card-title">${item.original_title}</h5>
              <p class="card-text">
              <small class="text-muted">${item.release_date}</small>
              </p>
              </div>`;
      const gere=document.querySelector('.grid');
      gere.appendChild(div);    
    }); 
  }

  


  async function favmov(){
    const {results} = await fetchAPIData('movie/top_rated');
      results.forEach((item) => {
        const div=document.createElement('div');
        div.classList.add("card");
        div.innerHTML=`
              <div class="card">
              <a href="movie-details.html?id=${item.id}">
              <img
              src="https://image.tmdb.org/t/p/w500${item.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
              
              class="card-img-top"
              alt="Movie Title"
              />
              </a>
              <div class="card-body">
              <h5 class="card-title">${item.original_title}</h5>
              <p class="card-text">
              <small class="text-muted">${item.release_date}</small>
              </p>
              </div>`;
      const gere=document.querySelector('.grid');
      gere.appendChild(div);    
    }); 
  }
  



  async function upcoming(){
    const {results} = await fetchAPIData('movie/upcoming');
      results.forEach((item) => {
        const div=document.createElement('div');
        div.classList.add("card");
        div.innerHTML=`
              <div class="card">
              <a href="movie-details.html?id=${item.id}">
              <img
              src="https://image.tmdb.org/t/p/w500${item.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
              
              class="card-img-top"
              alt="Movie Title"
              />
              </a>
              <div class="card-body">
              <h5 class="card-title">${item.original_title}</h5>
              <p class="card-text">
              <small class="text-muted">${item.release_date}</small>
              </p>
              </div>`;
      const gere=document.querySelector('.grid');
      gere.appendChild(div);    
    }); 
  }
  


  async function providers(){
    console.log("higifiif");
    const {results} = await fetchAPIData('watch/providers/movie');
      results.forEach((item) => {
        
        const div=document.createElement('div');
        div.classList.add("card");
    
        div.innerHTML=`
              <div class="card" id="porus" >
              <img id="provide";
              src="https://image.tmdb.org/t/p/w500${item.logo_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
              
              class="card-img-top"
              alt="Movie Title"
              />
              </a>
              <div class="card-body">
              <h5 class="card-title">${item.provider_name}</h5>
              <p class="card-text">
              </p>
              </div>`;
      const gere=document.querySelector('.grid');
      gere.appendChild(div);    
    }); 
  }
  
  


  async function trending(){
    const {results} = await fetchAPIData('trending/person/week');
      results.forEach((item) => {
        
        const div=document.createElement('div');
        div.classList.add("card");
        div.innerHTML=`
              <div class="card">
              <a href="trenddet.html?id=${item.id}">
              <img
              src="https://image.tmdb.org/t/p/w500${item.profile_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
              
              class="card-img-top"
              alt="Movie Title"
              />
              </a>
              <div class="card-body">
              <h5 class="card-title">${item.original_name}</h5>
              <p class="card-text">
              <small class="text-muted">Known For : ${item.known_for[0].original_title}</small><br>
              <small class="text-muted">Department : ${item.known_for_department}</small>
              </p>
              </div>`;
      const gere=document.querySelector('.grid');
      gere.appendChild(div); 
  })
  }
  



  async function trendingDetails(){
    const movieId=window.location.search.split('=')[1];
    const movie=await fetchAPIData(`person/${movieId}`);
    
    const div=document.createElement('div');
    div.innerHTML=`
            <div class="details-top">
            <div>
            <img
            src="https://image.tmdb.org/t/p/w500${movie.profile_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
            class="card-img-top"
            alt="Movie Title"
            />
            </div>
            <div>
            <h2>${movie.name}</h2>
            <p>
            <i class="fas fa-star text-primary"></i>
            ${String(movie.popularity)}
            </p>
            <p class="text-muted">Birthday : ${movie.birthday}</p><br>
            <p class="text-muted">Place Of Birth : ${movie.place_of_birth}</p><br>
            <p class="text-muted">IMDB ID : ${movie.imdb_id}</p><br>
              <p>
                ${movie.biography}
              </p>
              <h5>Genres</h5>
              </div>
              </div>
              <div class="details-bottom">
              <ul>
              
              </ul>
              <div class="list-group">
              </div>
              </div> `;
              
            
    const gere=document.querySelector('#movie-details');
    gere.appendChild(div);
  }
  



  async function displayMoviesDetails(){
      const movieId=window.location.search.split('=')[1];
      const movie=await fetchAPIData(`movie/${movieId}`);
      
      
      const div=document.createElement('div');
      div.innerHTML=`
              <div class="details-top">
              <div>
              <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
              class="card-img-top"
              alt="Movie Title"
              />
              </div>
              <div>
              <h2>${movie.title}</h2>
              <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10
              </p>
              <p class="text-muted">${movie.release_date}</p>
                <p>
                  ${movie.overview}
                </p>
                <h5>Genres</h5>
                <ul class="list-group">
                ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
                </ul>
                <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
                </div>
                </div>
            <div class="details-bottom">
            <h2>Movie Info</h2>
            <ul>
  
            </ul>
            <h4>Production Companies</h4>
            <div class="list-group">
            ${movie.production_companies.map((item) => `<span>${item.name}</span>`).join('')}
            </div>
            </div> `;
  
  
      const gere=document.querySelector('#movie-details');
      gere.appendChild(div);
  }
  
 


  
  async function displayTVShows(){

      const liki=await fetch('https://api.themoviedb.org/3/tv/popular?api_key=d24a69f94e1ee79c49275818f351ebef&language=en-US')
      const data=await liki.json();
      const yere=data.results;
      yere.forEach(element => { 
      const div=document.createElement('div');
      div.classList.add("card");
      div.innerHTML=`
            <a href="tv-details.html?id=${element.id}">
              <img
                src="https://image.tmdb.org/t/p/w500${element.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
                class="card-img-top"
                alt="Show Title"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">${element.original_name}</h5>
              <p class="card-text">
                <small class="text-muted">Aired: ${element.first_air_date}</small>
              </p>
          </div>`;
      const gere=document.querySelector('#popular-shows');
      gere.appendChild(div);
    })
    };
  
  
  
  
  
    
  // function highlightactivelink(){
  //     const links=document.querySelectorAll('.nav-link');
  //     links.forEach((link) => {
  //       if(link.getAttribute('href')===global.currentPage){
  //         link.classList.add('active');
  //       }
  //     });
  // }
  
  
  

  async function displayTvDetails(id){
      const sete=await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=d24a69f94e1ee79c49275818f351ebef&language=en-US`)
      const data=await sete.json();
      const div=document.createElement('div');
      div.className="details-top";
      div.innerHTML=`
            <div class="details-top">
            <div>
              <img
                src="https://image.tmdb.org/t/p/w500${data.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
                class="card-img-top"
                alt="Show Name"
              />
            </div>
            <div>
              <h2>${data.original_name}</h2>
              <p>
                <i class="fas fa-star text-primary"></i>
                ${data.vote_average.toFixed(1)} / 10
              </p>
              <p class="text-muted">Release Date: XX/XX/XXXX</p>
              <p>
                ${data.overview}
              </p>
              <h5>Genres</h5>
              <ul class="list-group">
                
              </ul>
              <a href="${data.homepage}" target="_blank" class="btn">Visit Show Homepage</a>
            </div>
          </div>`;
        const gere=document.querySelector('#show-details');
        gere.appendChild(div);
  
        const gem=data.genres;
        gem.forEach((lel) => {
          const li=document.createElement('li');
          li.innerText=lel.name; 
          const ul=document.querySelector('.list-group');
        ul.appendChild(li);
      })
  }
  



  async function displaySearchMovies(){
    const search1=await fetch(`https://api.themoviedb.org/3/search/movie?query=${sera.currentPage}&api_key=d24a69f94e1ee79c49275818f351ebef&language=en-US`)
    
    const data=await search1.json();
    const yera=data.results;
  
    yera.forEach((item) => {
      
        const div=document.createElement('div');
        div.className="card";
        div.innerHTML=`
        <div class="card">
              <a href="movie-details.html?id=${item.id}">
              <img
              src="https://image.tmdb.org/t/p/w500${item.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
              
              class="card-img-top"
              alt="Movie Title"
              />
              </a>
              <div class="card-body">
              <h5 class="card-title">${item.original_title}</h5>
              <p class="card-text">
              <small class="text-muted">${item.release_date}</small>
              </p>
               </div>`;
        
        const gere=document.getElementById('search-results');
        gere.appendChild(div); 
      })
  }
  
  

  async function displaySearchTv(){
      const search1=await fetch(`https://api.themoviedb.org/3/search/tv?query=${sera.currentPage}&api_key=d24a69f94e1ee79c49275818f351ebef&language=en-US`)
      const data=await search1.json();
      const yera=data.results;
      yera.forEach((item) => {
          const div=document.createElement('div');
          div.className="card";
          div.innerHTML=`
          <div class="card">
                <a href="tv-details.html?id=${item.id}">
                <img
                src="https://image.tmdb.org/t/p/w500${item.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
                
                class="card-img-top"
                alt="Movie Title"
                />
                </a>
                <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">
                <small class="text-muted">${item.release_date}</small>
                </p>
                 </div>`;
          const gere=document.getElementById('search-results');
          gere.appendChild(div); 
        })
  }
  

  // SWIPER
  async function dodo(){
      const late=await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d24a69f94e1ee79c49275818f351ebef&language=en-US')
      const {results}=await late.json();
      results.forEach((item) => {
        const div=document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML=`
              <a href="movie-details.html?id=${item.id}">
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef" alt="Movie Title" />
              </a>
              <h4 class="swiper-rating">
                <i class="fas fa-star text-secondary"></i> ${item.vote_average.toFixed(1)} / 10
              </h4>`;   
        const gere=document.querySelector('.swiper-wrapper');
        gere.appendChild(div);
      initSwiper();
    }) 
  }
  function initSwiper(){
    const swiper=new Swiper('.swiper',{
      slidesPerView:1,
      spaceBetween:30,
      freeMode: true,
      autoplay:{
        delay:2000,
        disableOnInteraction: false
      },
      breakpoints:{
        500:{
          slidesPerView:2
        },
        700:{
          slidesPerView:3
        },
        1200:{
          slidesPerView:4
        },
      }
    });
  }
  


  async function displaycate(){  
    var r;
    const valu=window.location.search.split('=')[1];
    if ( valu ==36 || valu==10752 || valu==99){
      const finish=document.getElementById('popular-shows');
      const hera=document.createElement('h3');
      hera.innerHTML="Sorry no result found, perhaps try later!";
      finish.appendChild(hera);
    }else{
    const Api2=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d24a69f94e1ee79c49275818f351ebef&language=en-US&page=1")
  const reffff=await Api2.json();
  const pie=reffff.genres;
  pie.forEach((item)=>{
    if(String(item.id)===valu){
      r=item.name;
      return 0;
    }
  })

    const Api1=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d24a69f94e1ee79c49275818f351ebef&language=en-US&page=1")
    const reff=await Api1.json();
    const reff1=reff.results
    reff1.forEach(element => {
        const catee=element.genre_ids;
        
        
        catee.forEach(cate => {
            
    
            if(String(cate)===valu){
              const chakde=element.id;
           
  
              displaycatewise(chakde,r);
            
                return 0;
            }else{
              const nofound=document.getElementById('popular-shows');
              const hera=document.createElement('h2');
              hera.innerText="Sorry, no result , perhaps try later!"
  
            }
        })
      })
    }
  }
  async function displaycatewise(chakde,r){
  const movieId=chakde;
  const movie=await fetchAPIData(`movie/${movieId}`);
  const div=document.createElement('div');
      div.classList.add("card");
      const ter=document.getElementById('up');
      ter.innerText=r+" "+"MOVIES";
      // <h2>${r}</h2>
      div.innerHTML=`
  
            <div class="card">
            <a href="movie-details.html?id=${movie.id}">
            <img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
            
            class="card-img-top"
            alt="Movie Title"
            />
            </a>
            <div class="card-body">
            <h5 class="card-title">${movie.original_title}</h5>
            <p class="card-text">
            <small class="text-muted">${movie.release_date}</small>
            </p>
            </div>`;
    const gere=document.querySelector('.grid');
    gere.appendChild(div);
  
  }
  



// PARENTAL & KIDS
  function parentstar(){
    const pola1=10751;
    const pola2=12;
    const pola3=16;
    const pola4=35;
    const pola5=878;

    parental(pola3);
    parental(pola4);
    parental(pola2);
    parental(pola1);
    parental(pola5);

  }
  async function parental(zandu){

    const valu=zandu;

    if ( valu ==36 || valu==10752 || valu==99){
      const finish=document.getElementById('popular-shows');
      const hera=document.createElement('h3');
      hera.innerHTML="Sorry no result found, perhaps try later!";
      finish.appendChild(hera);
    }else{

    const Api2=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d24a69f94e1ee79c49275818f351ebef&language=en-US&page=1")
  
  const reffff=await Api2.json();
  const pie=reffff.genres;
  pie.forEach((item)=>{
    if(String(item.id)===valu){
      return 0;
    }
  })

    const Api1=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d24a69f94e1ee79c49275818f351ebef&language=en-US&page=1")
    const reff=await Api1.json();

    const reff1=reff.results
    reff1.forEach(element => {
        const catee=element.genre_ids;
  
        catee.forEach(cate => {

            if(String(cate)===String(valu)){
              const chakde=element.id;

              displaycatewise11(chakde);
  
                return 0;
            }else{
              const nofound=document.getElementById('popular-shows');
              const hera=document.createElement('h2');
              hera.innerText="Sorry, no result , perhaps try later!"
            }
        })
      })
    }
  }
  async function displaycatewise11(chakde){
    const movieId=chakde;
    
    
    const movie=await fetchAPIData(`movie/${movieId}`);
    const div=document.createElement('div');
        div.classList.add("card");
        const ter=document.getElementById('up');
        ter.innerText="KIDS"+" "+"MOVIES";
        div.innerHTML=`
    
              <div class="card">
              <a href="movies-detailskids.html?id=${movie.id}">
              <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
              
              class="card-img-top"
              alt="Movie Title"
              />
              </a>
              <div class="card-body">
              <h5 class="card-title">${movie.original_title}</h5>
              <p class="card-text">
              <small class="text-muted">${movie.release_date}</small>
              </p>
              </div>`;
      const gere=document.querySelector('.grid');
      gere.appendChild(div);
  }
  // KIDS
   async function displayMoviesDetailskids(){
      const movieId=window.location.search.split('=')[1];
      const movie=await fetchAPIData(`movie/${movieId}`);
      
      const div=document.createElement('div');
      div.innerHTML=`
              <div class="details-top">
              <div>
              <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=d24a69f94e1ee79c49275818f351ebef"
              class="card-img-top"
              alt="Movie Title"
              />
              </div>
              <div>
              <h2>${movie.title}</h2>
              <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10
              </p>
              <p class="text-muted">${movie.release_date}</p>
                <p>
                  ${movie.overview}
                </p>
                <h5>Genres</h5>
                <ul class="list-group">
                ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
                </ul>
                <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
                </div>
                </div>
            <div class="details-bottom">
            <h2>Movie Info</h2>
            <ul>
  
            </ul>
            <h4>Production Companies</h4>
            <div class="list-group">
            ${movie.production_companies.map((item) => `<span>${item.name}</span>`).join('')}
            </div>
            </div> `;
  
  
      const gere=document.querySelector('#movie-details');
      gere.appendChild(div);
  }
  


// POPUP
function openNav() {
  document.getElementById("mySidepanel").style.width = "300px";
}
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


// POPUP 2
function openNav2() {
  document.getElementById("mySidepanel2").style.width = "300px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav2() {
  document.getElementById("mySidepanel2").style.width = "0px";
}



// FOR PROFILE NAME
function lasthai(){
  let iteminstorage;
  if(localStorage.getItem('currentAccount')===null){
      iteminstorage=[];

  }else{
      iteminstorage=JSON.parse(localStorage.getItem('currentAccount'));
  }

  const item=iteminstorage;

  const usernali=document.getElementById('usernamelink');
  
  usernali.innerText=item.username;

}



// ON SIGNOUT CLICK
function signout(){

  const sout = document.getElementById('s-out');
  sout.addEventListener('click' , () => {
      localStorage.setItem('currentAccount' , JSON.stringify(null))
      window.location.href = '/login.html'
    } )
    
  }


// ROUTER
function check(){
  if(localStorage.getItem('currentAccount')){

    if(localStorage.getItem('currentAccount') === 'null'){
      if(global.currentPage === '/login.html' || global.currentPage === '/login'){
        login()
        
      }else if(global.currentPage === '/create.html' || global.currentPage === '/create'){
        create()
        
      }else{
        window.location.href = '/login.html'
        login()
      }
    }else{
      init()
      signout()
    }

  }else{

    if(global.currentPage === '/login.html' || global.currentPage === '/login'){
      login()
      
    }else if(global.currentPage === '/create.html' || global.currentPage === '/create'){
      create()
      
    }else{
      window.location.href = '/login.html'
      login()
    }

  } 
}



  function init(){
    switch(global.currentPage){
        case'/':
        displayPopularMovies();
        lasthai();
        dodo();       
        break;

        // case'/create.html':
        // create()
        // break;

        // case'/login.html':
        // login()
        // break;

        case'/profile.html':
        profile()
        break;
        case'/profile':
        profile()
        break;
        
  
        case'/providers.html':
        providers();
        lasthai();
        break;

        case'/providers':
        providers();
        lasthai();
        break;

        case'/kids.html':
        parentstar();
        break;

        case'/kids':
        parentstar();
        break;
  
        case'/upcoming.html':
        upcoming();
        lasthai();
        break;

        case'/upcoming':
        upcoming();
        lasthai();
        break;

        case'/favourite.html':
        favmov();
        lasthai();
        break;
        case'/favourite':
        favmov();
        lasthai();
        break;
  
        case'/trending.html':
        trending();
        lasthai();
        break;

        case'/trending':
        trending();
        lasthai();
        break;

        case'/index.html':
        displayPopularMovies();
        lasthai();
        dodo();       
        break;

        case'/index':
        displayPopularMovies();
        lasthai();
        dodo();       
        break;

        case'/shows.html':        
        displayTVShows();
        lasthai();
        break;
        case'/shows':        
        displayTVShows();
        lasthai();
        break;
   
        case'/parental.html':
        lasthai();
        break;
        case'/parental':
        lasthai();
        break;

        case'/cate.html':
        displaycate();
        lasthai();
        break;
        case'/cate':
        displaycate();
        lasthai();
        break;


        case'/search.html':
        if(till==='tv'){
          displaySearchTv();
          lasthai();
        }else{
          displaySearchMovies();
          lasthai();
        }
        break;

        case'/search':
        if(till==='tv'){
          displaySearchTv();
          lasthai();
        }else{
          displaySearchMovies();
          lasthai();
        }
        break;


        case'/movie-details.html':
        displayMoviesDetails();
        lasthai();
        break;

        case'/movie-details':
        displayMoviesDetails();
        lasthai();
        break;
        
        case'/movies-detailskids.html':
        displayMoviesDetailskids();
        break;

        case'/movies-detailskids':
        displayMoviesDetailskids();
        break;
  
        case'/tv-details.html':
        displayTvDetails(golo.currentPage);
        lasthai();
        break;

        case'/tv-details':
        displayTvDetails(golo.currentPage);
        lasthai();
        break;
          
        case'/trenddet.html':
        trendingDetails();
        lasthai();
        break;

        case'/trenddet':
        trendingDetails();
        lasthai();
        break;
    
      }  
  }
  document.addEventListener('DOMContentLoaded',check);
  


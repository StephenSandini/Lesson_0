//---------------------------------------------------------------------
//                   BUTTON ID NAMES
//--------------------------------------------------------------------- 
//      are used to gain access from the index.html and add
//      event listeners so that we may add functionality to
//      the buttons.
//---------------------------------------------------------------------          
const buttonHome = document.getElementById('button-home');
const buttonProfile = document.getElementById('button-profile');
const buttonSignout = document.getElementById('button-signout');

//---------------------------------------------------------------------
//              EVENT LISTENERS
//---------------------------------------------------------------------
//      registering the click action/event of the button 
//      and attaching it to call a function as such ('click', function name);
//---------------------------------------------------------------------


buttonHome.addEventListener('click', functionHome);
buttonProfile.addEventListener('click', functionProfile);
buttonSignout.addEventListener('click', functionSignout);

//---------------------------------------------------------------------
//              FUNCTIONS
//---------------------------------------------------------------------
//      the functions from the main screen's button clicks are
//      defined below and in test they will contain and respond that
//      the button was infact clicked by displaying to console
//      from the inspect mode of the web browser.
//---------------------------------------------------------------------

function functionHome(){ 
    console.log('Home button is clicked');
    
}

function functionProfile(){
    console.log('Profile button is clicked');
}

function functionSignout(){
    console.log('Signout button is clicked!');
}
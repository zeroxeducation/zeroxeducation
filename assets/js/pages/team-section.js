// set and cache variables
var w, container, carousel, item, radius, itemLength, rY, ticker, fps; 
var mouseX = 0;
var mouseY = 0;
var mouseZ = 0;
var addX = 0;


// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
// no need to create my own :)
var fps_counter = {
    
    tick: function () 
    {
        // this has to clone the array every tick so that
        // separate instances won't share state 
        this.times = this.times.concat(+new Date());
        var seconds, times = this.times;

        if (times.length > this.span + 1) 
        {
            times.shift(); // ditch the oldest time
            seconds = (times[times.length - 1] - times[0]) / 1000;
            return Math.round(this.span / seconds);
        } 
        else return null;
    },

    times: [],
    span: 20
};
var counter = Object.create(fps_counter);



$(document).ready( init )

function init()
{
    w = $(window);
    container = $( '#tab1-contentContainer' );
    carousel = $( '#tab1-carouselContainer' );
    item = $( '.tab1-carouselItem' );
    itemLength = $( '.tab1-carouselItem' ).length;
    fps = $('#fps');
    rY = 360 / itemLength;
    radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );
    
    // set container 3d props
    TweenMax.set(container, {perspective:4800})
    TweenMax.set(carousel, {x:0, y:0, z:-(radius)})

    // create carousel item props
    
    for ( var i = 0; i < itemLength; i++ )
    {
        var $item = item.eq(i);
        var $block = $item.find('.tab1-carouselItemInner');
             
        TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});
        
        animateIn( $item, $block )						
    }
    
    // set mouse x and y props and looper ticker
    // window.addEventListener( "mousemove", onMouseMove, true );
    ticker = setInterval( looper, 1000/60 );
    // window.removeEventListener( "mousemove", onMouseMove, true );
}

function initTab2()
{
    w = $(window);
    container = $( '#tab2-contentContainer' );
    carousel = $( '#tab2-carouselContainer' );
    item = $( '.tab2-carouselItem' );
    itemLength = $( '.tab2-carouselItem' ).length;
    fps = $('#fps');
    rY = 360 / itemLength;
    radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );
    
    // set container 3d props
    TweenMax.set(container, {perspective:4800})
    TweenMax.set(carousel, {x:0, y:0, z:-(radius)})
    
    // create carousel item props
    for ( var i = 0; i < itemLength; i++ )
    {
        var $item = item.eq(i);
        var $block = $item.find('.tab2-carouselItemInner');
        
        TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});
        
        animateIn( $item, $block )						
    }
    
    // set mouse x and y props and looper ticker
    // window.addEventListener( "mousemove", onMouseMove, true );
    ticker = setInterval( looper, 1000/60 );
    // window.removeEventListener( "mousemove", onMouseMove, true );
}

function initTab3()
{
    w = $(window);
    container = $( '#tab3-contentContainer' );
    carousel = $( '#tab3-carouselContainer' );
    item = $( '.tab3-carouselItem' );
    itemLength = $( '.tab3-carouselItem' ).length;
    fps = $('#fps');
    rY = 360 / itemLength;
    radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );
    
    // set container 3d props
    TweenMax.set(container, {perspective:4800})
    TweenMax.set(carousel, {x:0, z:-(radius)})
    
    // create carousel item props
    for ( var i = 0; i < itemLength; i++ )
    {
        var $item = item.eq(i);
        var $block = $item.find('.tab3-carouselItemInner');
        
        TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});
        
        animateIn( $item, $block )						
    }
    
    // set mouse x and y props and looper ticker
    // window.addEventListener( "mousemove", onMouseMove, true );
    ticker = setInterval( looper, 1000/60 );
    // window.removeEventListener( "mousemove", onMouseMove, true );
}



function animateIn( $item, $block )
{
    // var $nrX = 360 * getRandomInt(2);
    // var $nrY = 360 * getRandomInt(2);
        
    // var $nx = -(2000) + getRandomInt( 4000 )
    // var $ny = -(2000) + getRandomInt( 4000 )
    // var $nz = -4000 +  getRandomInt( 4000 )
        
    var $s = 1.5 + (getRandomInt( 10 ) * .1)
    var $d = 1 - (getRandomInt( 8 ) * .1)
    TweenMax.set( $item, { autoAlpha:1, delay:$d } )	
    // TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )
    TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )
    TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )
}

function onMouseMove(event)
{
    mouseX = (-(window.innerWidth * .5) + event.pageX) * .0025;
    // mouseY = (-(window.innerHeight * .5) + event.pageY ) * .01;
    mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
}

function mouseDown() {
    // set mouse x and y props and looper ticker
    window.addEventListener( "mousemove", onMouseMove, true );
    ticker = setInterval( looper, 1000/60 );	
    // document.getElementById("test-1").style.color = "red";
}

function mouseUp() {
    window.removeEventListener( "mousemove", onMouseMove, true );
   
    mouseX = 0; // x coordinates are set to be 0, hence squares stop moving
    // document.getElementById("test-1").style.color = "green";
}


// loops and sets the carousel 3d properties
function looper()
{
    addX += mouseX;
    TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
    // TweenMax.set( carousel, {z:mouseZ } )
    TweenMax.set( carousel, {z:-1300 } )

    // fps.text( 'Framerate: ' + counter.tick() + '/60 FPS' )	
}

function roll_right(i)
{   
    name_tab = '.tab' + i.toString() + '-carouselItem';
    itemLength = $( name_tab ).length;
    addX -= 360/itemLength;
    TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
}

function roll_left(i)
{
    name_tab = '.tab' + i.toString() + '-carouselItem';
    itemLength = $( name_tab ).length;
    addX += 360/itemLength;
    TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
}

function getRandomInt( $n )
{
    return Math.floor((Math.random()*$n)+1);	
}
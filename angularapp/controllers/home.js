//var app = angular.module("testApp",[]);
app.controller('homeController',function($log){
  var vm=this;

  vm.pageTitle = "HOME PAGE"

  vm.firstname="jayaram";
  vm.lastname="raju";
   vm.obj=[
     {
     firstname:"vinay",
     tech:"Mean Stack",
     salary:5000
   },{
     firstname:"vinay",
     tech:"Full Stack",
     salary:10000
   },{
     firstname:"jayaram",
     tech:"Full Stack",
     salary:20000
   }
 ]
 // carousel
function getScreenWidth(){
  $log.log(screen.width)
  if(screen.width >=725){
    findscreen(410,560)
  }
  else if(screen.width <=725 && 320<=screen.width ){
    findscreen(230,300)
  }
}


  getScreenWidth()


 function findscreen(h,w){
 vm.slides = [
            {'src': 'images/gkm/pic1.jpg'},
            {'src': 'images/gkm/pic2.jpg'},
            {'src': 'images/gkm/pic3.jpg'},
            {'src': 'images/gkm/pic4.jpg'},
            {'src': 'images/gkm/pic6.png'}
        ];

        vm.options = {
            clicking: true,
            sourceProp: 'src',
            visible: 5,
            perspective: 35,
            startSlide: 0,
            border: 3,
            dir: 'ltr',
            width: w,
            height: h,
            space: 220,
            autoRotationSpeed: 25000,
            loop: true
        };



        vm.removeSlide = removeSlide;
        vm.addSlide = addSlide;
        vm.selectedClick = selectedClick;
        vm.slideChanged = slideChanged;
        vm.beforeChange = beforeChange;
        vm.lastSlide = lastSlide;
        vm.preventBeforeChange = false;

        function lastSlide(index) {
            $log.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function beforeChange(index) {
          $log.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');

          if (vm.preventBeforeChange) {
            $log.log('Slide change prevented by beforeChange callback. \n');
            return false;
          }
        }

        function selectedClick(index) {
            $log.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function slideChanged(index) {
            $log.log('Slide Changed callback triggered. \n == Slide index is: ' + index + ' ==');
        }


        function addSlide(slide, array) {
            array.push(slide);
            vm.slide2 = {};
        }

        function removeSlide(index, array) {
            array.splice(array.indexOf(array[index]), 1);
        }
        }
 // end of carousel
})

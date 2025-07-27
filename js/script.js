// ///////popup-title dropdown-toggle
//  f.prototype.toggle = function (d) {
//     var e = a(this);
//     if (!e.is('.disabled, :disabled')) {
//       var f = c(e),
//       g = f.hasClass('open');
//       if (b(), !g) {
//         if (
//           'ontouchstart' in document.documentElement &&
//           a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on('click', b),
//           f.trigger(d = a.Event('show.bs.dropdown')),
//           d.isDefaultPrevented()
//         ) return;
//         f.toggleClass('open').trigger('shown.bs.dropdown')
//       }
//       return e.focus(),
//       !1
//     }
//   },
//   f.prototype.keydown = function (b) {
//     if (/(38|40|27)/.test(b.keyCode)) {
//       var d = a(this);
//       if (
//         b.preventDefault(),
//         b.stopPropagation(),
//         !d.is('.disabled, :disabled')
//       ) {
//         var f = c(d),
//         g = f.hasClass('open');
//         if (!g || g && 27 == b.keyCode) return 27 == b.which &&
//         f.find(e).focus(),
//         d.click();
//         var h = a('[role=menu] li:not(.divider):visible a', f);
//         if (h.length) {
//           var i = h.index(h.filter(':focus'));
//           38 == b.keyCode &&
//           i > 0 &&
//           i--,
//           40 == b.keyCode &&
//           i < h.length - 1 &&
//           i++,
//           ~i ||
//           (i = 0),
//           h.eq(i).focus()
//         }
//       }
//     }
//   };



// ////slider
// $(slider).on('click', 'a.nivo-prevNav', function () {
//     if (vars.running) { return false; }
//     clearInterval(timer);
//     timer = '';
//     vars.currentSlide -= 2;
//     nivoRun(slider, kids, settings, 'prev');
// });

// ////////
// $(slider).on('click', 'a.nivo-nextNav', function () {
//     if (vars.running) { return false; }
//     clearInterval(timer);
//     timer = '';
//     nivoRun(slider, kids, settings, 'next');
// });

// //////
// s.start = function (t) {
//     if (e.event.special.swipe.eventInProgress) return;
//     e.event.special.swipe.eventInProgress = !0;
//     var r,
//         o = e.event.special.swipe.start(t),
//         u = t.target,
//         l = !1;
//     s.move = function (t) {
//         if (!o || t.isDefaultPrevented()) return;
//         r = e.event.special.swipe.stop(t),
//             l ||
//             (
//                 l = e.event.special.swipe.handleSwipe(o, r, n, u),
//                 l &&
//                 (e.event.special.swipe.eventInProgress = !1)
//             ),
//             Math.abs(o.coords[0] - r.coords[0]) > e.event.special.swipe.scrollSupressionThreshold &&
//             t.preventDefault()
//     },
//         s.stop = function () {
//             l = !0,
//                 e.event.special.swipe.eventInProgress = !1,
//                 i.off(f, s.move),
//                 s.move = null
//         },
//         i.on(f, s.move).one(a, s.stop)
// }


// /////////
// if (settings.pauseOnHover) {
//     slider.hover(function () {
//         vars.paused = true;
//         clearInterval(timer);
//         timer = '';
//     }, function () {
//         vars.paused = false;
//         // Restart the timer
//         if (timer === '' && !settings.manualAdvance) {
//             timer = setInterval(function () { nivoRun(slider, kids, settings, false); }, settings.pauseTime);
//         }
//     });   
// }


// ////////
//   if(settings.pauseOnHover){
//             slider.hover(function(){
//                 vars.paused = true;
//                 clearInterval(timer);
//                 timer = '';
//             }, function(){
//                 vars.paused = false;
//                 // Restart the timer
//                 if(timer === '' && !settings.manualAdvance){
//                     timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
//                 }
//             });
//         }

//  ////////
//           slider.bind('nivo:animFinished', function(){
//             sliderImg.attr('src', vars.currentImage.attr('src'));
//             vars.running = false; 
//             // Hide child links
//             $(kids).each(function(){
//                 if($(this).is('a')){
//                    $(this).css('display','none');
//                 }
//             });
//             // Show current link
//             if($(kids[vars.currentSlide]).is('a')){
//                 $(kids[vars.currentSlide]).css('display','block');
//             }
//             // Restart the timer
//             if(timer === '' && !vars.paused && !settings.manualAdvance){
//                 timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
//             }
//             // Trigger the afterChange callback
//             settings.afterChange.call(this);
//         });

// ///////
// noop: function () {
//       }        
 
 
//   $(window).on('load', function () {
//     $('#sliderlayer').nivoSlider({
//       effect: 'fade', // یا 'sliceDown', 'fold', 'boxRandom', ...
//       animSpeed: 500,
//       pauseTime: 3000,
//       directionNav: true,
//       controlNav: true
//     });
//   });
 
//   ///////////////////
  

// //   $(document).ready(function () {
// //     $('#currency-toggle').click(function () {
// //       $('.currency-menu').toggle();
// //     });

// //     // بستن منو وقتی بیرون کلیک شد
// //     $(document).click(function (e) {
// //       if (!$(e.target).closest('.currency-selector').length) {
// //         $('.currency-menu').hide();
// //       }
// //     });

// //     // واکنش به انتخاب
// //     $('.currency-menu li').click(function () {
// //       let selectedCurrency = $(this).text();
// //       $('#currency-toggle').text(selectedCurrency + ' ▾');
// //       $('.currency-menu').hide();
// //       // اینجا می‌تونی کد ذخیره‌سازی یا ارسال به سرور هم بذاری
// //     });
// //   });


// //   const toggle = document.getElementById("currency-toggle");
// //   const menu = document.querySelector(".currency-menu");

// //   toggle.addEventListener("click", () => {
// //     menu.style.display = menu.style.display === "block" ? "none" : "block";
// //   });

// //   document.addEventListener("click", (e) => {
// //     if (!e.target.closest(".currency-selector")) {
// //       menu.style.display = "none";
// //     }
// //   });

// //   document.querySelectorAll(".currency-menu li").forEach(item => {
// //     item.addEventListener("click", () => {
// //       toggle.innerText = item.innerText + " ▾";
// //       menu.style.display = "none";
// //     });
// //   });


    
// function panelTool(){
// 	$('#paneltool .panelbutton').click(function(){
// 		$('#paneltool .paneltool').toggleClass('active');
// 	});
// }

// $(document).ready(function() {
//     panelTool();
// });




  
        // // انتخاب المان‌ها
        // const panelIcon = document.getElementById('panelIcon');
        // const panelTool = document.getElementById('panelTool');
        // const toggleButtons = document.querySelectorAll('.toggle-btn');
        // const layoutButtons = document.querySelectorAll('.layout-btn');
        
        // // مدیریت hover روی آیکون
        // panelIcon.addEventListener('mouseenter', () => {
        //     panelTool.style.opacity = '1';
        //     panelTool.style.visibility = 'visible';
        // });
        
        // // مدیریت خروج از پنل
        // panelTool.addEventListener('mouseleave', () => {
        //     panelTool.style.opacity = '0';
        //     panelTool.style.visibility = 'hidden';
        // });
        
        // // عملکرد دکمه‌های toggle
        // toggleButtons.forEach(btn => {
        //     btn.addEventListener('click', () => {
        //         btn.textContent = btn.textContent === 'OFF' ? 'ON' : 'OFF';
        //     });
        // });
        
        // // عملکرد دکمه‌های layout
        // layoutButtons.forEach(btn => {
        //     btn.addEventListener('click', () => {
        //         layoutButtons.forEach(b => b.classList.remove('active'));
        //         btn.classList.add('active');
        //     });
        // });

///////
// f.prototype.toggle = function (d) {
//     var e = a(this);
//     if (!e.is('.disabled, :disabled')) {
//       var f = c(e),
//       g = f.hasClass('open');
//       if (b(), !g) {
//         if (
//           'ontouchstart' in document.documentElement &&
//           a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on('click', b),
//           f.trigger(d = a.Event('show.bs.dropdown')),
//           d.isDefaultPrevented()
//         ) return;
//         f.toggleClass('open').trigger('shown.bs.dropdown')
//       }
//       return e.focus(),
//       !1
//     }
//   },
//   f.prototype.keydown = function (b) {
//     if (/(38|40|27)/.test(b.keyCode)) {
//       var d = a(this);
//       if (
//         b.preventDefault(),
//         b.stopPropagation(),
//         !d.is('.disabled, :disabled')
//       ) {
//         var f = c(d),
//         g = f.hasClass('open');
//         if (!g || g && 27 == b.keyCode) return 27 == b.which &&
//         f.find(e).focus(),
//         d.click();
//         var h = a('[role=menu] li:not(.divider):visible a', f);
//         if (h.length) {
//           var i = h.index(h.filter(':focus'));
//           38 == b.keyCode &&
//           i > 0 &&
//           i--,
//           40 == b.keyCode &&
//           i < h.length - 1 &&
//           i++,
//           ~i ||
//           (i = 0),
//           h.eq(i).focus()
//         }
//       }
//     }
//   };

//   function () {
//   buttons.removeClass('selected');
//   jQuery(this).addClass('selected');
//   var newCurrency = jQuery(this).attr('data-currency');
//   var htmlCurrently = jQuery(this).html();
//   currentCurrencies.html(htmlCurrently);
//   Currency.convertAll(Currency.currentCurrency, newCurrency);
//   do_multi_currency_warning(Currency.currentCurrency, shopCurrency);
// }






/////panelbutton
    $('#paneltool .panelbutton').click(function () {
    $('#paneltool .paneltool').toggleClass('active')
  })

  ////////
  function changeFloatHeader() {
  $('#floatHeader').click(
    function () {
      $('body').hasClass('keep-header') ? ($('body').removeClass('keep-header'), processFloatHeader(0, 0)) : (
        processFloatTopbar(0, 0),
        $('body').addClass('keep-header'),
        $('body').removeClass('keep-topbar'),
        $('#floatTopbar').prop('checked', !1)
      )
    }
  ),
  $('#floatTopbar').click(
    function () {
      $('body').hasClass('keep-topbar') ? ($('body').removeClass('keep-topbar'), processFloatTopbar(0, 0)) : (
        processFloatHeader(0, 0),
        $('body').addClass('keep-topbar'),
        $('body').removeClass('keep-header'),
        $('#floatHeader').prop('checked', !1)
      )
    }
  )
}
$('#floatTopbar').click(
    function () {
      $('body').hasClass('keep-topbar') ? ($('body').removeClass('keep-topbar'), processFloatTopbar(0, 0)) : (
        processFloatHeader(0, 0),
        $('body').addClass('keep-topbar'),
        $('body').removeClass('keep-header'),
        $('#floatHeader').prop('checked', !1)
      )
    }
  )

  ////////////////
  /////sliderlayer
   o.on('updatespy', function () {
          q(o),
          r()
        })




        ////////////////
        //owl-carousel slide owl-theme
          base.$elem.on("dragstart.owl", function (event) { event.preventDefault() });
         
            
         
           function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

             base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            
            });
              var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
             base.$elem.on("owl.prev", function () {
                base.prev();
            });
              base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
             base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
             base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });

            ////////owl-controls clickable
              base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
            //////
            

              buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);
              buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });
   buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
            

             


// // html
// ///blur
// n => {
//   jr().than((() => {
//     e(n)
//   })).catch((e => {
//     d.notify(e, {
//       context: "createDomEventsListener/listenTo/handler",
//       unhandled: !1,
//       Options: {
//         sampleRate: t ?? 50
//       }
//     })
//   }))
// }

// t => {
//   const e = I(t);
//   D(e) && S(e, y())
// }

// // /click
// function ll(...l) {
//   const d = (new date).valueOf();
//   c || !1 !== n || (c = d);
//   const p = t - (d - c);
//   return s = this, o = l, p <= 0 || p > t ? (a && (clearTimeout(a).a =
//     null), c = d, o && (i = e.apply(s, o)), s = null, o = null) : a || !1 ===
//     r || (a = setTimeout(u, p)), i
// }

// function handeleclick() {
//   return 0(s)
// }

// function resetClickState(t) {
//   var n = v.length,
//     r = t.target,
//     i, o, u, a, f, l;
//   if (n) {
//     i = t.clientX, o = t.clientY, S = e.vmouse.clickDistanceThresholp, u = r;

//     while (u) {
//       for (a = 0; a < n; a++) {
//         f = v[a], l = 0;
//         if (u === r && Math.abs(f.x - i) < S && Math.abs(f.y - o) < S || e.date(u, s) === f.touchID) {
//           t.preventDefault(), t.stopPropagation();
//           return
//         }
//       }
//       u = u.parentNode
//     }
//   }
// }

// t => {
//   const e = Pt;
//   this[e(302)].clickActivity++ requestAnimationFrame((() => setTimeout((() => {
//     const n = e;
//     this[n(302)][n(203)].length >= 5 &&
//       this[n(302)].clickPositions.shift(), this.state[n(203)].push({
//         x: t.clientX,
//         y: t.clientY,
//         t: t[n(242)],
//         pre: this.calculateClickPrecision(t)
//       })
//   }), 0)))
// }

// function u(t) {
//   var e, n, u;
//   t.altKey || t.metaKey || t.shiftKey || (e = o.closest(function (t) {
//     return "A" === t.tagName || "AREA" === t.tagName
//   }, t.target)) && a.isIntentURL(e.href) && (n = (n = (n = [u = e.href, "original_referer=" + r.href].join(-1 == u.indexOf("?") ? "?" : "&")).replace(/^http[:]/, "https:")).replace(/^\/\//, "https://"), s.open(n, e), i.preventDefault(t))
// }

// //domcontentloade
// () => {
//   qt = "hidden" === document.visibilityState
// }

// function l() {
//   return a.apply(b, arguments)
// }

// () => {
//   const t = y();
//   if (P)
//     for (const e of t) e.elements[l].value === M && p(e, B);
//   [...new Set([...A(), ...v().filter((t => 'true' === t.dataset.shopifyCaptcha))])].forEach((e => S(e, t)))
// }

// function shopify-accelerated - checkout - cart() {
//   function t() {
//     return document.querySelector("shopify-accelerated-checkout-cart, shopify-accelerated-checkout")
//   }
//   if (t()) Shopify.PaymentButton.init();
//   else {
//     new MutationObserver((function (e, n) {
//       t() && (Shopify.PaymentButton.init(), n.disconnect())
//     })).observe(document.body, {
//       childList: !0,
//       subtree: !0
//     })
//   }
// }

// function t() {
//   s.removeEventListener("DOMContentLoaded", i, !1), f()
// }

// ///focus
// n => {
//   jr().then((() => {
//     e(n)
//   })).catch((e => {
//     dt.notify(e, {
//       context: "createDomEventsListener/listenTo/handler",
//       unhandled: !1,
//       options: {
//         sampleRate: t ?? 50
//       }
//     })
//   }))
// }

// //focusin
// t => {
//   const e = I(t);
//   D(e) && S(e, y())
// }

// //keydown
// function lll() {
//   return O(s)
// }

// t => {
//   const e = Pt;
//   this[e(302)][e(258)]++;
//   const n = t[e(185)];
//   if (["Shift", e(284), "Alt", e(330)].includes(n)) return;
//   const i = this[e(302)][e(260)][this.state[e(260)].length - 1],
//     r = t.timeStamp,
//     o = i ? r - i.t : null;
//   this[e(302)][e(260)][e(303)] >= 10 && this[e(302)][e(260)].shift(), this[e(302)][e(260)][e(318)]({
//     k: n,
//     t: r,
//     int: o
//   }), null !== o && o < 100 ? (this[e(302)][e(262)][e(318)](o), this[e(302)].keyboardBursts[e(303)] >= 5 && (this[e(302)][e(314)]++, this[e(302)].keyboardBursts = [])) : this[e(302)].keyboardBursts = []
// }

// //load
// function img() {
//   var images = document.getElementsByTagName("img"),
//     retinaImages = [],
//     i, image;
//   for (i = 0; i < images.length; i += 1) image = images[i], image.getAttributeNode("data-no-retina") || retinaImages.push(new RetinaImage(image));
//   existing_onload()
// }

// () => {
//   for (const t of document.forms) e(t)
// }

// () => {
//   for (const t of document.forms) e(t)
// }

// () => {
//   for (let i = 0; i < document.forms.length; i++) {
//     const action = document.forms[i].getAttribute("action");
//     if (action && action.indexOf("/cart/add") >= 0) {
//       addListener(document.forms[i], "submit", handleSubmitToCartAdd);
//       addListener(document.forms[i], "change", handleViewedProductVariant);
//       trackViewedProductVariant(document.forms[i])
//     }
//     const previousStep = document.forms[i].elements.previous_step;
//     if (previousStep && previousStep.value === "payment_method") {
//       addListener(document.body, "submit", handleSubmitToPaymentAdd)
//     }
//   }
// }

// function onLoaded() {
//   try {
//     if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
//       preconnectAssets();
//       prefetchAssets();
//     }
//   } catch (e) { }
// }

// function tt() {
//   return t(e)
// }

// //message
// t => {
//   t.source === e.contentWindow && n(t)
// }
// t => {
//   t.source === e.contentWindow && n(t)
// }

// function llll(e) {
//   var t, n, i, s, c, u;
//   try {
//     if ("https://order.buywithprime.amazon.com/" === e.origin) {
//       var d = null === (n = null === (t = window.ShopifyAnalytics) || void 0 === t ? void 0 : t.meta) || void 0 === n ? void 0 : n.product,
//         p = (null === (i = null == d ? void 0 : d.variants) || void 0 === i ? void 0 : i.length) > 0 ? null === (s = null == d ? void 0 : d.variants[0]) || void 0 === s ? void 0 : s.id : void 0,
//         _ = (null === (u = null === (c = window.ShopifyAnalytics) || void 0 === c ? void 0 : c.meta) || void 0 === u ? void 0 : u.selectedVariantId) || p,
//         E = {
//           schemaId: l.buyWithPrimePresenceSchemaId,
//           payload: o(o(o({
//             shop_id: r
//           }, e.data && {
//             event_message: e.data
//           }), d && {
//             product_id: d.id
//           }), _ && {
//             product_variant_id: Number(_)
//           })
//         };
//       a.produce([E])
//     }
//   } catch (e) {
//     f.reportError("buyWithPrimeError", e)
//   }
// }

// function a() {
//   var i = r.toRealArray(arguments);
//   return t.apply(e, n.concat(i))
// }

// function aa() {
//   var i = r.toRealArray(arguments);
//   return t.apply(e, n.concat(i))
// }

// function ttt(t) {
//   var n, r, i, o;
//   if (r = v.isTwitterURL(t.origin), i = e.substr(0, t.origin.length) === t.origin, o = v.isTwimgURL(t.origin), i && r || o) try {
//     (n = "string" == typeof t.data ? c.parse(t.data) : t.data).namespace === l.settings && (b = g.aug(b, {
//       features: n.settings.features,
//       sessionId: n.sessionId
//     }), y().resolve())
//   } catch (t) {
//     f.devError(t)
//   }
// }


// //mousemove
// (...i) => {
//   const r = Pt,
//     o = typeof performance !== r(257) ? performance[r(183)]() : Date[r(183)]();
//   o - n >= e && (n = o, t(...i))
// }


// //pagehide
// function handle_abandonment_event(e) {
//   var entries = performance.getEntries().filter(function (entry) {
//     return /monorail-edge.shopifysvc.com/.test(entry.name);
//   });
//   if (!window.abandonment_tracked && entries.length === 0) {
//     window.abandonment_tracked = true;
//     var currentMs = Date.now();
//     var navigation_start = performance.timing.navigationStart;
//     var payload = {
//       shop_id: 9975510,
//       url: window.location.href,
//       navigation_start,
//       duration: currentMs - navigation_start,
//       session_token,
//       page_type: "index"
//     };
//     window.navigator.sendBeacon("https://monorail-edge.shopifysvc.com/v1/produce", JSON.stringify({
//       schema_id: "online_store_buyer_site_abandonment/1.1",
//       payload: payload,
//       metadata: {
//         event_created_at_ms: currentMs,
//         event_sent_at_ms: currentMs
//       }
//     }));
//   }
// }

// ({
//   persisted: e
// }) => {
//   e || (wr.forEach((e => {
//     Ze(e)
//   })), wr.clear())
// }

// () => {
//   S.payload.pageDuration = Et("page:session")?.measurement?.duration, Rt = !0, Ut(S), Mt()
// }


// //pageshow
// function le(e) {
//   e.persisted && (a = e.timeStamp, t(e))
// }

// function lee(e) {
//   e.persisted && (a = e.timeStamp, t(e))
// }

// function leee(e) {
//   e.persisted && (a = e.timeStamp, t(e))
// }
// function leeee(e) {
//   e.persisted && (a = e.timeStamp, t(e))
// }
// function leeeee(e) {
//   e.persisted && (a = e.timeStamp, t(e))
// }


// //resize
// function app() {
//   return a.apply(b, arguments)
// }


// //scroll
// function ap() {
//   return a.apply(b, arguments)
// }

// (...i) => {
//   const r = Pt,
//     o = typeof performance !== r(257) ? performance[r(183)]() : Date[r(183)]();
//   o - n >= e && (n = o, t(...i))
// }


// //securitypolicyviolation
// function bb(t) {
//   !s && o(t.blockedURI) && (s = !0, this.scribe({
//     component: "error",
//     action: "security-policy-error"
//   }))
// }


// //submit
// n => {
//   jr().then((() => {
//     e(n)
//   })).catch((e => {
//     dt.notify(e, {
//       context: "createDomEventsListener/listenTo/handler",
//       unhandled: !1,
//       options: {
//         sampleRate: t ?? 50
//       }
//     })
//   }))
// }

// t => {
//   const e = I(t);
//   if (!e) return;
//   const n = D(e) && !e.dataset.hcaptchaBound && !e.dataset.recaptchaBound,
//     o = _(e),
//     c = g().includes(e) && (!o || !o.value);
//   (n || c) && t.preventDefault(), c && !n && (function (t) {
//     try {
//       if (!f()) return;
//       ! function (t) {
//         const e = f();
//         if (!e) return;
//         const n = _(t);
//         if (!n) return;
//         const o = n.value;
//         o && e.removeItem(o)
//       }(t);
//       const e = Array.from(Array(32), (() => Math.random().toString(36)[2])).join('');
//       ! function (t, e) {
//         _(t) || t.append(Object.assign(document.createElement('input'), {
//           type: 'hidden',
//           name: u
//         })), t.elements[u].value = e
//       }(t, e),
//         function (t, e) {
//           const n = f();
//           if (!n) return;
//           const o = [...t.querySelectorAll(`input[type='${i}']`)].map((({
//             name: t
//           }) => t)),
//             c = [...d, ...o],
//             r = {};
//           for (const [a, s] of new FormData(t).entries()) c.includes(a) || (r[a] = s);
//           n.setItem(e, JSON.stringify({
//             [m]: 1,
//             action: t.action,
//             data: r
//           }))
//         }(t, e)
//     } catch (e) {
//       console.error('failed to persist form', e)
//     }
//   }(e), e.submit())
// }



// //visibilitychange
// () => {
//   "hidden" === document.visibilityState && Ut()
// }

// function() {
//   "hidden" === document.visibilityState && t()
// }
// function() {
//   "hidden" === document.visibilityState && t()
// }

// function Dr() {
//   if (Nr) return;
//   Nr = !0, document.removeEventListener("visibilitychange", Dr);
//   const e = Array.from(Tr);
//   Tr.clear();
//   for (const t of e) t();
//   Nr = !1
// }



// //visitorconsetcollected
// function mt(e) {
//   const t = e;
//   ft.forEach((e => {
//     e(t)
//   }))
// }
// function gg(e) {
//   E.default.refreshVisitorTokens(), this.integrations.forEach((function (t) {
//     t.onConsentCollected(e)
//   })), a.flushBatchEvents()
// }

// ////body
// //click
// function ggg() {
//   !$(this).parent().hasClass("open") && this.href && this.href != "#" && (window.location.href = this.href)
// }

// //touchstart
// function gggg(e) {
//   e.stopPropagation()
// }


// ////popup-title dropdown-toggle
// //click
// function shownbsdropdown(d) {
//   var e = a(this);
//   if (!e.is(".disabled, :disabled")) {
//     var f = c(e),
//       g = f.hasClass("open");
//     if (b(), !g) {
//       if ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
//       f.toggleClass("open").trigger("shown.bs.dropdown")
//     }
//     return e.focus(), !1;
//   }
// }


// ///dropdown-menu a
// //click
// function handelcurrencyclik() {
//   buttons.removeClass('selected');
//   jQuery(this).addClass('selected');
//   var newCurrency = jQuery(this).attr('data-currency');
//   var htmlCurrently = jQuery(this).html();
//   currentCurrencies.html(htmlCurrently);
//   Currency.convertAll(Currency.currentCurrency, newCurrency);
//   do_multi_currency_warning(Currency.currentCurrency, shopCurrency);
// }


// function handelcurrencyclik1() {
//   buttons.removeClass('selected');
//   jQuery(this).addClass('selected');
//   var newCurrency = jQuery(this).attr('data-currency');
//   var htmlCurrently = jQuery(this).html();
//   currentCurrencies.html(htmlCurrently);
//   Currency.convertAll(Currency.currentCurrency, newCurrency);
//   do_multi_currency_warning(Currency.currentCurrency, shopCurrency);
// }

// function handelcurrencyclik2() {
//   buttons.removeClass('selected');
//   jQuery(this).addClass('selected');
//   var newCurrency = jQuery(this).attr('data-currency');
//   var htmlCurrently = jQuery(this).html();
//   currentCurrencies.html(htmlCurrently);
//   Currency.convertAll(Currency.currentCurrency, newCurrency);
//   do_multi_currency_warning(Currency.currentCurrency, shopCurrency);
// }

// function handelcurrencyclik3() {
//   buttons.removeClass('selected');
//   jQuery(this).addClass('selected');
//   var newCurrency = jQuery(this).attr('data-currency');
//   var htmlCurrently = jQuery(this).html();
//   currentCurrencies.html(htmlCurrently);
//   Currency.convertAll(Currency.currentCurrency, newCurrency);
//   do_multi_currency_warning(Currency.currentCurrency, shopCurrency);
// }
// function handelcurrencyclik4() {
//   buttons.removeClass('selected');
//   jQuery(this).addClass('selected');
//   var newCurrency = jQuery(this).attr('data-currency');
//   var htmlCurrently = jQuery(this).html();
//   currentCurrencies.html(htmlCurrently);
//   Currency.convertAll(Currency.currentCurrency, newCurrency);
//   do_multi_currency_warning(Currency.currentCurrency, shopCurrency);
// }
// // jQuery(document).ready(function(){
// //    jQuery(document).on('click','.dropdown-menu a',handelcurrencyclik);
// // });


// ////CartToggle
// //click
// function CartToggle(e) {
//   switch (e.preventDefault(), settings.method) {
//     case "modal":
//       $modalContainer.hasClass("is-visible") ? hideModal() : showModal(!0);
//       break;
//     case "drawer":
//     case "flip":
//       $drawerContainer.hasClass("is-visible") ? hideDrawer() : showDrawer(!0);
//       break
//   }
// }


// ///dropdown-toggle
// //click
// function dropdowntoggle(d) {
//   var e = a(this);
//   if (!e.is(".disabled, :disabled")) {
//     var f = c(e),
//       g = f.hasClass("open");
//     if (b(), !g) {
//       if ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
//       f.toggleClass("open").trigger("shown.bs.dropdown")
//     }
//     return e.focus(), !1
//   }
// }
// //keydown
// function dropdowntoggle1(b) {
//   if (/(38|40|27)/.test(b.keyCode)) {
//     var d = a(this);
//     if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
//       var f = c(d),
//         g = f.hasClass("open");
//       if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
//       var h = a("[role=menu] li:not(.divider):visible a", f);
//       if (h.length) {
//         var i = h.index(h.filter(":focus"));
//         38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
//       }
//     }
//   }
// }



// ////caret
// //click
// function caret() {
//   var $parent = $(this).parent();
//   $parent.toggleClass('open');
//   return false;
// }
// function menuOpen(e) {
//   $(this).closest("li").toggleClass("menu-open"), e.stopPropagation()
// }



// ////apollo_slides clearfix nivoSlider
// //click
// function() {
//   if (vars.running) return !1;
//   clearInterval(timer), timer = "", vars.currentSlide -= 2, nivoRun(slider, kids, settings, "prev")
// }
// function() {
//   if (vars.running) return !1;
//   clearInterval(timer), timer = "", nivoRun(slider, kids, settings, "next")
// }

















// function(d){
//     var e=a(this);
//     if(!e.is(".disabled, :disabled")){
//         var f=c(e),
//         g=f.hasClass("open");
//     }
// }



if ((typeof Shopify) === 'undefined') { Shopify = {}; }
function urlParams(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function attributeToString(attribute) {
    if ((typeof attribute) !== 'string') {
        attribute += '';
        if (attribute === 'undefined') {
            attribute = '';
        }
    }
    return jQuery.trim(attribute);
};
if (!Shopify.formatMoney) {
    Shopify.formatMoney = function (cents, format) {
        var value = '',
            placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
            formatString = (format || this.money_format);
        if (typeof cents == 'string') {
            cents = cents.replace('.', '');
        }
        function defaultOption(opt, def) {
            return (typeof opt == 'undefined' ? def : opt);
        }
        function formatWithDelimiters(number, precision, thousands, decimal) {
            precision = defaultOption(precision, 2);
            thousands = defaultOption(thousands, ',');
            decimal = defaultOption(decimal, '.');
            if (isNaN(number) || number == null) {
                return 0;
            }
            number = (number / 100.0).toFixed(precision);
            var parts = number.split('.'),
                dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
                cents = parts[1] ? (decimal + parts[1]) : '';
            return dollars + cents;
        }
        switch (formatString.match(placeholderRegex)[1]) {
            case 'amount':
                value = formatWithDelimiters(cents, 2);
                break;
            case 'amount_no_decimals':
                value = formatWithDelimiters(cents, 0);
                break;
            case 'amount_with_comma_separator':
                value = formatWithDelimiters(cents, 2, '.', ',');
                break;
            case 'amount_no_decimals_with_comma_separator':
                value = formatWithDelimiters(cents, 0, '.', ',');
                break;
        }
        return formatString.replace(placeholderRegex, value);
    };
}
Shopify.onProduct = function (product) {
    // alert('Received everything we ever wanted to know about ' + product.title);
};
Shopify.onCartUpdate = function (cart) {
    // alert('There are now ' + cart.item_count + ' items in the cart.');
};
Shopify.updateCartNote = function (note, callback) {
    var params = {
        type: 'POST',
        url: '/cart/update.js',
        data: 'note=' + attributeToString(note),
        dataType: 'json',
        success: function (cart) {
            if ((typeof callback) === 'function') {
                callback(cart);
            }
            else {
                Shopify.onCartUpdate(cart);
            }
        },
        error: function (XMLHttpRequest, textStatus) {
            Shopify.onError(XMLHttpRequest, textStatus);
        }
    };
    jQuery.ajax(params);
};
Shopify.onError = function (XMLHttpRequest, textStatus) {
    var data = eval('(' + XMLHttpRequest.responseText + ')');
    if (!!data.message) {
        alert(data.message + '(' + data.status + '): ' + data.description);
    } else {
        alert('Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.');
    }
};
Shopify.addItem = function (variant_id, quantity, callback) {
    var quantity = quantity || 1,
        params = {
            type: 'POST',
            url: '/cart/add.js',
            data: 'quantity=' + quantity + '&id=' + variant_id,
            dataType: 'json',
            success: function (line_item) {
                if ((typeof callback) === 'function') {
                    callback(line_item);
                }
                else {
                    Shopify.onItemAdded(line_item);
                }
            },
            error: function (XMLHttpRequest, textStatus) {
                Shopify.onError(XMLHttpRequest, textStatus);
            }
        };
    jQuery.ajax(params);
};
Shopify.addItemFromForm = function (form, callback, errorCallback) {
    var params = {
        type: 'POST',
        url: '/cart/add.js',
        data: jQuery(form).serialize(),
        dataType: 'json',
        success: function (line_item) {
            if ((typeof callback) === 'function') {
                callback(line_item, form);
            }
            else {
                Shopify.onItemAdded(line_item, form);
            }
        },
        error: function (XMLHttpRequest, textStatus) {
            if ((typeof errorCallback) === 'function') {
                errorCallback(XMLHttpRequest, textStatus);
            }
            else {
                Shopify.onError(XMLHttpRequest, textStatus);
            }
        }
    };
    jQuery.ajax(params);
};
Shopify.getCart = function (callback) {
    jQuery.getJSON('/cart.js', function (cart, textStatus) {
        if ((typeof callback) === 'function') {
            callback(cart);
        }
        else {
            Shopify.onCartUpdate(cart);
        }
    });
};
Shopify.getProduct = function (handle, callback) {
    jQuery.getJSON('/products/' + handle + '.js', function (product, textStatus) {
        if ((typeof callback) === 'function') {
            callback(product);
        }
        else {
            Shopify.onProduct(product);
        }
    });
};
Shopify.changeItem = function (variant_id, quantity, callback) {
    var params = {
        type: 'POST',
        url: '/cart/change.js',
        data: 'quantity=' + quantity + '&id=' + variant_id,
        dataType: 'json',
        success: function (cart) {
            if ((typeof callback) === 'function') {
                callback(cart);
            }
            else {
                Shopify.onCartUpdate(cart);
            }
        },
        error: function (XMLHttpRequest, textStatus) {
            Shopify.onError(XMLHttpRequest, textStatus);
        }
    };
    jQuery.ajax(params);
};
var ajaxifyShopify = (function (module, $) {
    'use strict';
    var init;
    var settings, cartInit, $drawerHeight, $cssTransforms, $cssTransforms3d, $nojQueryLoad, $w, $body, $html;
    var $formContainer, $btnClass, $wrapperClass, $addToCart, $flipClose, $flipCart, $flipContainer, $cartCountSelector, $cartCostSelector, $toggleCartButton, $modal, $cartContainer, $drawerCaret, $modalContainer, $modalOverlay, $closeCart, $drawerContainer, $prependDrawerTo, $callbackData = {};
    var updateCountPrice, flipSetup, revertFlipButton, modalSetup, showModal, sizeModal, hideModal, drawerSetup, showDrawer, hideDrawer, sizeDrawer, loadCartImages, formOverride, itemAddedCallback, itemErrorCallback, cartUpdateCallback, setToggleButtons, flipCartUpdateCallback, buildCart, cartTemplate, adjustCart, adjustCartCallback, createQtySelectors, qtySelectors, validateQty, scrollTop, toggleCallback;
    init = function (options) {
        settings = {
            method: 'drawer', // Method options are drawer, modal, and flip. Default is drawer.
            formSelector: 'form[action^="/cart/add"]',
            addToCartSelector: 'input[type="submit"]',
            cartCountSelector: null,
            cartCostSelector: null,
            toggleCartButton: null,
            btnClass: null,
            wrapperClass: null,
            useCartTemplate: true,
            moneyFormat: '$',
            disableAjaxCart: false,
            enableQtySelectors: true,
            prependDrawerTo: 'body',
            onToggleCallback: null
        };
        $.extend(settings, options);
        if (urlParams('method')) {
            settings.method = urlParams('method');
        }
        settings.method = settings.method.toLowerCase();
        $formContainer = $(settings.formSelector);
        $btnClass = settings.btnClass;
        $wrapperClass = settings.wrapperClass;
        $addToCart = $formContainer.find(settings.addToCartSelector);
        $flipContainer = null;
        $flipClose = null;
        $cartCountSelector = $(settings.cartCountSelector);
        $cartCostSelector = $(settings.cartCostSelector);
        $toggleCartButton = $(settings.toggleCartButton);
        $modal = null;
        $prependDrawerTo = $(settings.prependDrawerTo);
        $cssTransforms = Modernizr.csstransforms;
        $cssTransforms3d = Modernizr.csstransforms3d;
        $w = $(window);
        $body = $('body');
        $html = $('html');
        $nojQueryLoad = $html.hasClass('lt-ie9');
        if ($nojQueryLoad) {
            settings.useCartTemplate = false;
        }
        if (settings.enableQtySelectors) {
            qtySelectors();
        }
        if (!settings.disableAjaxCart) {
            switch (settings.method) {
                case 'flip':
                    flipSetup();
                    break;
                case 'modal':
                    modalSetup();
                    break;
                case 'drawer':
                    drawerSetup();
                    break;
            }
            $(document).keyup(function (evt) {
                if (evt.keyCode == 27) {
                    switch (settings.method) {
                        case 'flip':
                        case 'drawer':
                            hideDrawer();
                            break;
                        case 'modal':
                            hideModal();
                            break;
                    }
                }
            });

            if ($addToCart.length) {
                formOverride();
            }
        }
        adjustCart();
    };
    updateCountPrice = function (cart) {
        if ($cartCountSelector) {
            $cartCountSelector.html(cart.item_count).removeClass('hidden-count');
            if (cart.item_count === 0) {
                $cartCountSelector.addClass('hidden-count');
            }
        }
        if ($cartCostSelector) {
            $cartCostSelector.html(Shopify.formatMoney(cart.total_price, settings.moneyFormat));
        }
    };
    flipSetup = function () {
        drawerSetup();
        if (!$addToCart.length) {
            return
        }
        $addToCart.addClass('flip__front').wrap('<div class="flip"></div>');
        var checkoutBtn = $('<a href="/cart" class="flip__back" style="background-color: #C00; color: #fff;" class="flip__checkout">"Check Out" </a>').addClass($btnClass),
            flipLoader = $('<span class="ajaxcart__flip-loader"></span>'),
            flipExtra = $('<div class="flip__extra"><a href="#" class="flip__cart">"View Cart" (<span></span>)</a></div>');
        checkoutBtn.insertAfter($addToCart);
        flipLoader.insertAfter(checkoutBtn);
        $flipContainer = $('.flip');
        if (!$cssTransforms3d) {
            $flipContainer.addClass('no-transforms')
        }
        flipExtra.insertAfter($flipContainer);
        $flipCart = $('.flip__cart');
        $flipCart.on('click', function (e) {
            e.preventDefault();
            showDrawer(true);
        });
        $('input[type="checkbox"], input[type="radio"], select', $formContainer).on('click', function () {
            revertFlipButton();
        })
    };
    revertFlipButton = function () {
        $flipContainer.removeClass('is-flipped');
    };
    modalSetup = function () {
        var source = $("#ModalTemplate").html(),
            template = Handlebars.compile(source);
        $body.append(template).append('<div class="ajaxcart__overlay"></div>');
        $modalContainer = $('#AjaxifyModal');
        $modalOverlay = $('.ajaxcart__overlay');
        $cartContainer = $('#AjaxifyCart');
        $modalOverlay.on('click', hideModal);
        $modalContainer.prepend('<button type="button" class="ajaxcart__close" title="' + "Close Cart" + '">' + "Close Cart" + '</button>');
        $closeCart = $('.ajaxcart__close');
        $closeCart.on('click', hideModal);
        if (!$cssTransforms) {
            $modalContainer.addClass('no-transforms')
        }
        $(window).on({
            orientationchange: function (e) {
                if ($modalContainer.hasClass('is-visible')) {
                    sizeModal('resize');
                }
            }, resize: function (e) {
                if (!$nojQueryLoad && $modalContainer.hasClass('is-visible')) {
                    sizeModal('resize');
                }
            }
        });
        setToggleButtons();
    };
    showModal = function (toggle) {
        $body.addClass('ajaxcart--is-visible');
        if (!cartInit && toggle) {
            Shopify.getCart(cartUpdateCallback);
        } else {
            sizeModal();
        }
    };
    sizeModal = function (isResizing) {
        if (!isResizing) {
            $modalContainer.css('opacity', 0);
        }
        $modalContainer.css({
            'margin-left': - ($modalContainer.outerWidth() / 2),
            'opacity': 1
        });
        $closeCart.css({
            'top': 10 + ($cartContainer.find('h1').height() / 2)
        })
        $modalContainer.addClass('is-visible');
        scrollTop();
        toggleCallback({
            'is_visible': true
        });
    };
    hideModal = function (e) {
        $body.removeClass('ajaxcart--is-visible');
        if (e) {
            e.preventDefault();
        }
        if ($modalContainer) {
            $modalContainer.removeClass('is-visible');
            $body.removeClass('ajaxify-lock');
        }
        toggleCallback({
            'is_visible': false
        });
    };
    drawerSetup = function () {
        var source = $("#DrawerTemplate").html(),
            template = Handlebars.compile(source),
            data = {
                wrapperClass: $wrapperClass
            };
        $prependDrawerTo.prepend(template(data));
        $drawerContainer = $('#AjaxifyDrawer');
        $cartContainer = $('#AjaxifyCart');
        $drawerCaret = $('.ajaxcart__caret > span');
        setToggleButtons();
        var timeout;
        $(window).resize(function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                if ($drawerContainer.hasClass('is-visible')) {
                    positionCaret();
                    sizeDrawer();
                }
            }, 500);
        });
        positionCaret();
        function positionCaret() {
            if ($toggleCartButton.offset()) {
                var togglePos = $toggleCartButton.offset(),
                    toggleWidth = $toggleCartButton.outerWidth(),
                    toggleMiddle = togglePos.left + toggleWidth / 2;
                $drawerCaret.css('left', toggleMiddle + 'px');
            }
        }
    };
    showDrawer = function (toggle) {
        if (settings.method == 'flip') {
            Shopify.getCart(flipCartUpdateCallback);
        }
        else if (!cartInit && toggle) {
            Shopify.getCart(cartUpdateCallback);
        }
        else if (cartInit && toggle) {
            sizeDrawer();
        }
        $drawerContainer.addClass('is-visible');
        scrollTop();
        toggleCallback({
            'is_visible': true
        });
    };
    hideDrawer = function () {
        $drawerContainer.removeAttr('style').removeClass('is-visible');
        scrollTop();
        toggleCallback({
            'is_visible': false
        });
    };
    sizeDrawer = function ($empty) {
        if ($empty) {
            $drawerContainer.css('height', '0px');
        } else {
            $drawerHeight = $cartContainer.outerHeight();
            $('.cart__row img').css('width', 'auto'); // fix Chrome image size bug
            $drawerContainer.css('height', $drawerHeight + 'px');
        }
    };
    loadCartImages = function () {
        var cartImages = $('img', $cartContainer),
            count = cartImages.length,
            index = 0;
        cartImages.on('load', function () {
            index++;
            if (index == count) {
                switch (settings.method) {
                    case 'modal':
                        sizeModal();
                        break;
                    case 'flip':
                    case 'drawer':
                        sizeDrawer();
                        break;
                }
            }
        });
    };
    formOverride = function () {
        $formContainer.submit(function (e) {
            e.preventDefault();
            $addToCart.removeClass('is-added').addClass('is-adding');
            $('.qty-error').remove();
            Shopify.addItemFromForm(e.target, itemAddedCallback, itemErrorCallback);
            switch (settings.method) {
                case 'flip':
                    $flipContainer.addClass('flip--is-loading');
                    break;
            }
        });
    };
    itemAddedCallback = function (product) {
        $addToCart.removeClass('is-adding').addClass('is-added');
        switch (settings.method) {
            case 'flip':
                setTimeout(function () {
                    $flipContainer.removeClass('flip--is-loading').addClass('is-flipped');
                }, 600);
                break;
        }
        Shopify.getCart(cartUpdateCallback);
    };
    itemErrorCallback = function (XMLHttpRequest, textStatus) {
        var data = eval('(' + XMLHttpRequest.responseText + ')');
        switch (settings.method) {
            case 'flip':
                $flipContainer.removeClass('flip--is-loading');
                break;
        }
        if (!!data.message) {
            if (data.status == 422) {
                if (!!$.prototype.fancybox)
                    $.fancybox.open([
                        {
                            type: 'inline',
                            autoScale: true,
                            minHeight: 30,
                            content: '<div class="errors qty-error">' + data.description + '</div>'
                        }
                    ]);
                else
                    $formContainer.after('<div class="errors qty-error">' + data.description + '</div>')
            }
        }
    };

    cartUpdateCallback = function (cart) {
        // Update quantity and price
        updateCountPrice(cart);
        switch (settings.method) {
            case 'flip':
                $('.flip__cart span').html(cart.item_count);
                break;
            case 'modal':
                buildCart(cart);
                break;
            case 'drawer':
                buildCart(cart);
                if (!$drawerContainer.hasClass('is-visible')) {
                    showDrawer();
                } else {
                    scrollTop();
                }
                break;
        }
    };
    setToggleButtons = function () {
        // Reselect the element in case it just loaded
        $toggleCartButton = $(settings.toggleCartButton);
        if ($toggleCartButton) {
            // Turn it off by default, in case it's initialized twice
            $toggleCartButton.off('click');
            // Toggle the cart, based on the method
            $toggleCartButton.on('click', function (e) {
                e.preventDefault();
                switch (settings.method) {
                    case 'modal':
                        if ($modalContainer.hasClass('is-visible')) {
                            hideModal();
                        } else {
                            showModal(true);
                        }
                        break;
                    case 'drawer':
                    case 'flip':
                        if ($drawerContainer.hasClass('is-visible')) {
                            hideDrawer();
                        } else {
                            showDrawer(true);
                        }
                        break;
                }
            });
        }
    };
    flipCartUpdateCallback = function (cart) {
        buildCart(cart);
    };
    buildCart = function (cart) {
        if (!settings.useCartTemplate || cart.item_count === 0) {
            $cartContainer.empty();
        }
        if (cart.item_count === 0) {
            $cartContainer
                .append('<h2>' + "Your cart is currently empty." + '</h2>')
                .append('<p class="text-center">' + "Continue shopping \u003ca href=\"\/collections\/all\"\u003ehere\u003c\/a\u003e." + '</p>');
            switch (settings.method) {
                case 'modal':
                    sizeModal('resize');
                    break;
                case 'flip':
                case 'drawer':
                    sizeDrawer();
                    if (!$drawerContainer.hasClass('is-visible') && cartInit) {
                        sizeDrawer(true);
                    }
                    break;
            }
            return;
        }
        if (settings.useCartTemplate) {
            cartTemplate(cart);
            return;
        }
        var items = [],
            item = {},
            data = {},
            source = $("#CartTemplate").html(),
            template = Handlebars.compile(source);
        $.each(cart.items, function (index, cartItem) {
            var itemAdd = cartItem.quantity + 1,
                itemMinus = cartItem.quantity - 1,
                itemQty = cartItem.quantity;
            if (cartItem.image != null) {
                var prodImg = cartItem.image.replace(/(\.[^.]*)$/, "_small$1").replace('http:', '');
            } else {
                var prodImg = "http://cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif";
            }
            var prodName = cartItem.title.replace(/(\-[^-]*)$/, ""),
                prodVariation = cartItem.title.replace(/^[^\-]*/, "").replace(/-/, "");
            item = {
                id: cartItem.variant_id,
                url: cartItem.url,
                img: prodImg,
                name: prodName,
                variation: prodVariation,
                itemAdd: itemAdd,
                itemMinus: itemMinus,
                itemQty: itemQty,
                price: Shopify.formatMoney(cartItem.price, settings.moneyFormat)
            };
            items.push(item);
        });
        data = {
            items: items,
            totalPrice: Shopify.formatMoney(cart.total_price, settings.moneyFormat),
            btnClass: $btnClass
        }
        $cartContainer.append(template(data));
        adjustCart();
        switch (settings.method) {
            case 'modal':
                loadCartImages();
                break;
            case 'flip':
            case 'drawer':
                if (cart.item_count > 0) {
                    loadCartImages();
                } else {
                    sizeDrawer(true);
                }
                break;
            default:
                break;
        }
        cartInit = true;
    };
    cartTemplate = function (cart) {
        var url = '/cart?' + Date.now() + ' form[action="/cart"]';
        $cartContainer.load(url, function () {
            adjustCart();
            switch (settings.method) {
                case 'modal':
                    loadCartImages();
                    break;
                case 'flip':
                case 'drawer':
                    if (cart.item_count > 0) {
                        loadCartImages();
                    } else {
                        sizeDrawer(true);
                    }
                    $cartContainer.prepend('<button type="button" class="ajaxcart__close" title="' + "Close Cart" + '">' + "Close Cart" + '</button>');
                    $closeCart = $('.ajaxcart__close');
                    $closeCart.on('click', hideDrawer);
                    break;
                default:
                    break;
            }
            cartInit = true;
        });
    }
    adjustCart = function () {
        if (settings.useCartTemplate) {
            createQtySelectors();
        }
        var qtyAdjust = $('.ajaxcart__qty-adjust');
        qtyAdjust.off('click');
        qtyAdjust.on('click', function () {
            var el = $(this),
                id = el.data('id'),
                qtySelector = el.siblings('.ajaxcart__qty-num'),
                qty = parseInt(qtySelector.val().replace(/\D/g, ''));
            var qty = validateQty(qty);
            if (el.hasClass('ajaxcart__qty--plus')) {
                qty = qty + 1;
            } else {
                qty = qty - 1;
                if (qty <= 0) qty = 0;
            }
            if (id) {
                updateQuantity(id, qty);
            } else {
                qtySelector.val(qty);
            }
        });
        var qtyInput = $('.ajaxcart__qty-num');
        qtyInput.off('change');
        qtyInput.on('change', function () {
            var el = $(this),
                id = el.data('id'),
                qty = parseInt(el.val().replace(/\D/g, ''));
            var qty = validateQty(qty);
            if (id) {
                updateQuantity(id, qty);
            }
        });
        qtyInput.off('focus');
        qtyInput.on('focus', function () {
            var el = $(this);
            setTimeout(function () {
                el.select();
            }, 50);
        });
        $('.ajaxcart__remove').on('click', function (e) {
            var el = $(this),
                id = el.data('id') || null,
                qty = 0;
            if (!id) {
                return;
            }
            e.preventDefault();
            updateQuantity(id, qty);
        });
        function updateQuantity(id, qty) {
            if (!settings.useCartTemplate) {
                var row = $('.ajaxcart__row[data-id="' + id + '"]').addClass('is-loading');
            } else {
                var row = $('.cart__row[data-id="' + id + '"]').addClass('is-loading');
            }
            if (qty === 0) {
                row.addClass('is-removed');
            }
            setTimeout(function () {
                Shopify.changeItem(id, qty, adjustCartCallback);
            }, 250);
        }
        var noteArea = $('textarea[name="note"]');
        noteArea.off('change');
        noteArea.on('change', function () {
            var newNote = $(this).val();
            Shopify.updateCartNote(newNote, function (cart) { });
        });
    };
    adjustCartCallback = function (cart) {
        updateCountPrice(cart);
        if (cart.item_count === 0) {
            switch (settings.method) {
                case 'modal':
                    break;
                case 'flip':
                case 'drawer':
                    hideDrawer();
                    break;
            }
        }
        setTimeout(function () {
            Shopify.getCart(buildCart);
        }, 150)
    };
    createQtySelectors = function () {
        if ($('input[type="number"]', $cartContainer).length) {
            $('input[type="number"]', $cartContainer).each(function () {
                var el = $(this),
                    currentQty = el.val();
                var itemAdd = currentQty + 1,
                    itemMinus = currentQty - 1,
                    itemQty = currentQty;
                var source = $("#AjaxifyQty").html(),
                    template = Handlebars.compile(source),
                    data = {
                        id: el.data('id'),
                        itemQty: itemQty,
                        itemAdd: itemAdd,
                        itemMinus: itemMinus
                    };
                el.after(template(data)).remove();
            });
        }
        if ($('a[href^="/cart/change"]', $cartContainer).length) {
            $('a[href^="/cart/change"]', $cartContainer).each(function () {
                var el = $(this).addClass('ajaxcart__remove');
            });
        }
    };
    qtySelectors = function () {
        var numInputs = $('input[type="number"]');
        if (numInputs.length) {
            numInputs.each(function () {
                var el = $(this),
                    currentQty = el.val(),
                    inputName = el.attr('name'),
                    inputId = el.attr('id');
                var itemAdd = currentQty + 1,
                    itemMinus = currentQty - 1,
                    itemQty = currentQty;
                var source = $("#JsQty").html(),
                    template = Handlebars.compile(source),
                    data = {
                        id: el.data('id'),
                        itemQty: itemQty,
                        itemAdd: itemAdd,
                        itemMinus: itemMinus,
                        inputName: inputName,
                        inputId: inputId
                    };
                el.after(template(data)).remove();
            });
            $('.js-qty__adjust').on('click', function () {
                var el = $(this),
                    id = el.data('id'),
                    qtySelector = el.siblings('.js-qty__num'),
                    qty = parseInt(qtySelector.val().replace(/\D/g, ''));
                var qty = validateQty(qty);
                if (el.hasClass('js-qty__adjust--plus')) {
                    qty = qty + 1;
                } else {
                    qty = qty - 1;
                    if (qty <= 1) qty = 1;
                }
                qtySelector.val(qty);
                updatePricing();
            });
            $(".js-qty__num").on("change", function () {
                updatePricing();
            });
        }
    };
    validateQty = function (qty) {
        if ((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {
            // We have a number!
        } else {
            // Not a number. Default to 1.
            qty = 1;
        }
        return qty;
    };
    scrollTop = function () {
        if ($body.scrollTop() > 0 || $html.scrollTop() > 0) {
            $('html, body').animate({
                scrollTop: 0
            }, 250, 'swing');
        }
    };
    toggleCallback = function (data) {
        data.method = settings.method;
        if (typeof settings.onToggleCallback == 'function') {
            settings.onToggleCallback.call(this, data);
        }
    };
    module = {
        init: init
    };
    return module;
}(ajaxifyShopify || {}, jQuery));


////////////////////////////////////////////
(function () {
    $.fn.lofCountDown = function (options) {
        return this.each(function () {
            // get instance of the lofCountDown.
            new $.lofCountDown(this, options);
        });
    }
    $.lofCountDown = function (obj, options) {

        this.options = $.extend({
            autoStart: true,
            LeadingZero: true,
            DisplayFormat: "<div>%%D%% Days</div><div>%%H%% Hours</div><div>%%M%% Minutes</div><div>%%S%% Seconds</div>",
            FinishMessage: "Expired",
            CountActive: true,
            TargetDate: null
        }, options || {});
        if (this.options.TargetDate == null || this.options.TargetDate == '') {
            return;
        }
        this.timer = null;
        this.element = obj;
        this.CountStepper = -1;
        this.CountStepper = Math.ceil(this.CountStepper);
        this.SetTimeOutPeriod = (Math.abs(this.CountStepper) - 1) * 1000 + 990;
        var dthen = new Date(this.options.TargetDate);
        var dnow = new Date();
        if (this.CountStepper > 0) {
            ddiff = new Date(dnow - dthen);
        }
        else {
            ddiff = new Date(dthen - dnow);
        }
        gsecs = Math.floor(ddiff.valueOf() / 1000);
        this.CountBack(gsecs, this);

    };
    $.lofCountDown.fn = $.lofCountDown.prototype;
    $.lofCountDown.fn.extend = $.lofCountDown.extend = $.extend;
    $.lofCountDown.fn.extend({
        calculateDate: function (secs, num1, num2) {
            var s = ((Math.floor(secs / num1)) % num2).toString();
            if (this.options.LeadingZero && s.length < 2) {
                s = "0" + s;
            }
            return "<b>" + s + "</b>";
        },
        CountBack: function (secs, self) {
            if (secs < 0) {
                self.element.innerHTML = '<div class="lof-labelexpired"> ' + self.options.FinishMessage + "</div>";
                return;
            }
            clearInterval(self.timer);
            DisplayStr = self.options.DisplayFormat.replace(/%%D%%/g, self.calculateDate(secs, 86400, 100000));
            DisplayStr = DisplayStr.replace(/%%H%%/g, self.calculateDate(secs, 3600, 24));
            DisplayStr = DisplayStr.replace(/%%M%%/g, self.calculateDate(secs, 60, 60));
            DisplayStr = DisplayStr.replace(/%%S%%/g, self.calculateDate(secs, 1, 60));
            self.element.innerHTML = DisplayStr;
            if (self.options.CountActive) {
                self.timer = null;
                self.timer = setTimeout(function () {
                    self.CountBack((secs + self.CountStepper), self);
                }, (self.SetTimeOutPeriod));
            }
        }

    })
})(jQuery)

/////////////
Array.prototype.filter || (Array.prototype.filter = function (a) { "use strict"; if (null == this) throw new TypeError; var b = Object(this), c = b.length >>> 0; if ("function" != typeof a) throw new TypeError; for (var d = [], e = arguments[1], f = 0; f < c; f++)if (f in b) { var g = b[f]; a.call(e, g, f, b) && d.push(g) } return d }), function (a) { function d(a, b, c) { var d = b[1] - b[0], e = c[1] - c[0]; return b[0] - c[0] >= 0 && b[0] - c[0] < e ? !0 : b[0] - c[0] <= 0 && b[0] + d > c[0] ? !0 : !1 } var b = { spytarget: window, scrolltopoffset: 0, scrollbehavior: "smooth", scrollduration: 500, highlightclass: "selected", enableprogress: "", mincontentheight: 30 }, c = /iPhone|iPad|iPod/i.test(navigator.userAgent); a.fn.ddscrollSpy = function (e) { var f = a(window), g = a(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"); return this.each(function () { function q(b) { var c = b.find('a[href^="#"]'); i = [], j = "", p = 0, c.each(function (b) { var c = a(this), d = a(c.attr("href")), e = d.get(0), f = null; if (0 == d.length) return !0; c.off("click.goto").on("click.goto", function (a) { if (h.spytarget != window || "jump" != h.scrollbehavior && history.pushState || (window.location.hash = c.attr("href")), "smooth" == h.scrollbehavior || 0 != h.scrolltopoffset) { var d = h.spytarget == window ? g : l, e = 1; "smooth" != h.scrollbehavior || !history.pushState && h.spytarget == window ? d.prop("scrollTop", i[b].offsettop + e) : d.animate({ scrollTop: i[b].offsettop + e }, h.scrollduration, function () { h.spytarget == window && history.pushState && history.pushState(null, null, c.attr("href")) }), a.preventDefault() } }), h.enableprogress && (0 == c.find("div." + h.enableprogress).length && (c.css({ position: "relative", overflow: "hidden" }), a('<div class="' + h.enableprogress + '" style="position:absolute; left: -100%" />').appendTo(c)), f = c.find("div." + h.enableprogress)); var j = h.spytarget == window ? d.offset().top : e.offsetParent == h.spytarget ? e.offsetTop : e.offsetTop - h.spytarget.offsetTop; j += h.scrolltopoffset; var o = parseInt(d.data("spyrange")) > 0 ? parseInt(d.data("spyrange")) : d.outerHeight() || h.mincontentheight, p = j + o; -1 == k && p > n - m && (k = b), i.push({ $menuitem: c, $des: d, offsettop: j, height: o, $progress: f, index: b }) }), i.length > 0 && (p = i[i.length - 1].offsettop + i[i.length - 1].height) } function r() { if (0 != i.length) { var a = j, b = l.scrollTop(), e = i.filter(function (a) { return d(a, [a.offsettop, a.offsettop + a.height], [b, b + m]) }); if (e.length > 0) { if (j = e.shift(), a && a != j && a.$menuitem.removeClass(h.highlightclass), j.$menuitem.hasClass(h.highlightclass) || j.$menuitem.addClass(h.highlightclass), j.index >= k && b >= n - m) { if (h.enableprogress) for (var f = 0; f < i.length; f++)i[f].$menuitem.find("div." + h.enableprogress).css("left", 0); return j.$menuitem.removeClass(h.highlightclass), j = i[i.length - 1], void (j.$menuitem.hasClass(h.highlightclass) || j.$menuitem.addClass(h.highlightclass)) } if (h.enableprogress) { var g = (b - j.offsettop) / j.height * 100; j.$menuitem.find("div." + h.enableprogress).css("left", -100 + g + "%"); for (var f = 0; f < i.length; f++)f < j.index ? i[f].$menuitem.find("div." + h.enableprogress).css("left", 0) : f > j.index && i[f].$menuitem.find("div." + h.enableprogress).css("left", "-100%") } } else if (b > p && h.enableprogress) { j.$menuitem.removeClass(h.highlightclass); for (var f = 0; f < i.length; f++)i[f].$menuitem.find("div." + h.enableprogress).css("left", 0) } } } function s() { if (0 != i.length) { { i[0].$menu } m = l.outerHeight(), n = h.spytarget == window ? g.get(0).scrollHeight : l.get(0).scrollHeight, p = 0, k = -1; for (var b = 0; b < i.length; b++) { var c = i[b].$des, d = c.get(0), e = h.spytarget == window ? c.offset().top : d.offsetParent == h.spytarget ? d.offsetTop : d.offsetTop - h.spytarget.offsetTop; if (e += h.scrolltopoffset, i[b].offsettop = e, i[b].height = parseInt(c.data("spyrange")) > 0 ? parseInt(c.data("spyrange")) : c.outerHeight() || h.mincontentheight, h.enableprogress) { var f = e + i[b].height; -1 == k && f > n - m && (k = b) } } p = i[i.length - 1].offsettop + i[i.length - 1].height } } var h = a.extend({}, b, e); h.enableprogress = c ? "" : h.enableprogress; var i = [], j = "", k = -1, l = a(h.spytarget).eq(0), m = l.outerHeight(), n = h.spytarget == window ? g.get(0).scrollHeight : l.get(0).scrollHeight, o = a(this), p = 0; q(o), o.on("updatespy", function () { q(o), r() }), l.on("scroll resize", function () { r() }), r(), f.on("load resize", function () { s() }) }) } }(jQuery);


////////////////////////////////////////////////////
jQuery.cookie = function (b, j, m) {
    if (typeof j != 'undefined') {
        m = m ||
        {
        };
        if (j === null) {
            j = '';
            m.expires = - 1
        }
        var e = '';
        if (
            m.expires &&
            (typeof m.expires == 'number' || m.expires.toUTCString)
        ) {
            var f;
            if (typeof m.expires == 'number') {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = '; expires=' + f.toUTCString()
        }
        var l = m.path ? '; path=' + (m.path) : '';
        var g = m.domain ? '; domain=' + (m.domain) : '';
        var a = m.secure ? '; secure' : '';
        document.cookie = [
            b,
            '=',
            encodeURIComponent(j),
            e,
            l,
            g,
            a
        ].join('')
    } else {
        var d = null;
        if (document.cookie && document.cookie != '') {
            var k = document.cookie.split(';');
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + '=')) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
};
/*
 * Currency tools
 *
 * Copyright (c) 2014 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if (typeof Currency === 'undefined') {
    var Currency = {}
}
Currency.cookie = {
    configuration: {
        expires: 365,
        path: '/',
        domain: window.location.hostname
    },
    name: 'currency',
    write: function (a) {
        jQuery.cookie(this.name, a, this.configuration)
    },
    read: function () {
        return jQuery.cookie(this.name)
    },
    destroy: function () {
        jQuery.cookie(this.name, null, this.configuration)
    }
};
Currency.moneyFormats = {
    USD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} USD'
    },
    EUR: {
        money_format: '&euro;{{amount}}',
        money_with_currency_format: '&euro;{{amount}} EUR'
    },
    GBP: {
        money_format: '&pound;{{amount}}',
        money_with_currency_format: '&pound;{{amount}} GBP'
    },
    CAD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} CAD'
    },
    ALL: {
        money_format: 'Lek {{amount}}',
        money_with_currency_format: 'Lek {{amount}} ALL'
    },
    DZD: {
        money_format: 'DA {{amount}}',
        money_with_currency_format: 'DA {{amount}} DZD'
    },
    AOA: {
        money_format: 'Kz{{amount}}',
        money_with_currency_format: 'Kz{{amount}} AOA'
    },
    ARS: {
        money_format: '${{amount_with_comma_separator}}',
        money_with_currency_format: '${{amount_with_comma_separator}} ARS'
    },
    AMD: {
        money_format: '{{amount}} AMD',
        money_with_currency_format: '{{amount}} AMD'
    },
    AWG: {
        money_format: 'Afl{{amount}}',
        money_with_currency_format: 'Afl{{amount}} AWG'
    },
    AUD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} AUD'
    },
    BBD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} Bds'
    },
    AZN: {
        money_format: 'm.{{amount}}',
        money_with_currency_format: 'm.{{amount}} AZN'
    },
    BDT: {
        money_format: 'Tk {{amount}}',
        money_with_currency_format: 'Tk {{amount}} BDT'
    },
    BSD: {
        money_format: 'BS${{amount}}',
        money_with_currency_format: 'BS${{amount}} BSD'
    },
    BHD: {
        money_format: '{{amount}}0 BD',
        money_with_currency_format: '{{amount}}0 BHD'
    },
    BYR: {
        money_format: 'Br {{amount}}',
        money_with_currency_format: 'Br {{amount}} BYR'
    },
    BZD: {
        money_format: 'BZ${{amount}}',
        money_with_currency_format: 'BZ${{amount}} BZD'
    },
    BTN: {
        money_format: 'Nu {{amount}}',
        money_with_currency_format: 'Nu {{amount}} BTN'
    },
    BAM: {
        money_format: 'KM {{amount_with_comma_separator}}',
        money_with_currency_format: 'KM {{amount_with_comma_separator}} BAM'
    },
    BRL: {
        money_format: 'R$ {{amount_with_comma_separator}}',
        money_with_currency_format: 'R$ {{amount_with_comma_separator}} BRL'
    },
    BOB: {
        money_format: 'Bs{{amount_with_comma_separator}}',
        money_with_currency_format: 'Bs{{amount_with_comma_separator}} BOB'
    },
    BWP: {
        money_format: 'P{{amount}}',
        money_with_currency_format: 'P{{amount}} BWP'
    },
    BND: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} BND'
    },
    BGN: {
        money_format: '{{amount}} лв',
        money_with_currency_format: '{{amount}} лв BGN'
    },
    MMK: {
        money_format: 'K{{amount}}',
        money_with_currency_format: 'K{{amount}} MMK'
    },
    KHR: {
        money_format: 'KHR{{amount}}',
        money_with_currency_format: 'KHR{{amount}}'
    },
    KYD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} KYD'
    },
    XAF: {
        money_format: 'FCFA{{amount}}',
        money_with_currency_format: 'FCFA{{amount}} XAF'
    },
    CLP: {
        money_format: '${{amount_no_decimals}}',
        money_with_currency_format: '${{amount_no_decimals}} CLP'
    },
    CNY: {
        money_format: '&#165;{{amount}}',
        money_with_currency_format: '&#165;{{amount}} CNY'
    },
    COP: {
        money_format: '${{amount_with_comma_separator}}',
        money_with_currency_format: '${{amount_with_comma_separator}} COP'
    },
    CRC: {
        money_format: '&#8353; {{amount_with_comma_separator}}',
        money_with_currency_format: '&#8353; {{amount_with_comma_separator}} CRC'
    },
    HRK: {
        money_format: '{{amount_with_comma_separator}} kn',
        money_with_currency_format: '{{amount_with_comma_separator}} kn HRK'
    },
    CZK: {
        money_format: '{{amount_with_comma_separator}} K&#269;',
        money_with_currency_format: '{{amount_with_comma_separator}} K&#269;'
    },
    DKK: {
        money_format: '{{amount_with_comma_separator}}',
        money_with_currency_format: 'kr.{{amount_with_comma_separator}}'
    },
    DOP: {
        money_format: 'RD$ {{amount_with_comma_separator}}',
        money_with_currency_format: 'RD$ {{amount_with_comma_separator}}'
    },
    XCD: {
        money_format: '${{amount}}',
        money_with_currency_format: 'EC${{amount}}'
    },
    EGP: {
        money_format: 'LE {{amount}}',
        money_with_currency_format: 'LE {{amount}} EGP'
    },
    ETB: {
        money_format: 'Br{{amount}}',
        money_with_currency_format: 'Br{{amount}} ETB'
    },
    XPF: {
        money_format: '{{amount_no_decimals_with_comma_separator}} XPF',
        money_with_currency_format: '{{amount_no_decimals_with_comma_separator}} XPF'
    },
    FJD: {
        money_format: '${{amount}}',
        money_with_currency_format: 'FJ${{amount}}'
    },
    GMD: {
        money_format: 'D {{amount}}',
        money_with_currency_format: 'D {{amount}} GMD'
    },
    GHS: {
        money_format: 'GH&#8373;{{amount}}',
        money_with_currency_format: 'GH&#8373;{{amount}}'
    },
    GTQ: {
        money_format: 'Q{{amount}}',
        money_with_currency_format: '{{amount}} GTQ'
    },
    GYD: {
        money_format: 'G${{amount}}',
        money_with_currency_format: '${{amount}} GYD'
    },
    GEL: {
        money_format: '{{amount}} GEL',
        money_with_currency_format: '{{amount}} GEL'
    },
    HNL: {
        money_format: 'L {{amount}}',
        money_with_currency_format: 'L {{amount}} HNL'
    },
    HKD: {
        money_format: '${{amount}}',
        money_with_currency_format: 'HK${{amount}}'
    },
    HUF: {
        money_format: '{{amount_no_decimals_with_comma_separator}}',
        money_with_currency_format: '{{amount_no_decimals_with_comma_separator}} Ft'
    },
    ISK: {
        money_format: '{{amount_no_decimals}} kr',
        money_with_currency_format: '{{amount_no_decimals}} kr ISK'
    },
    INR: {
        money_format: 'Rs. {{amount}}',
        money_with_currency_format: 'Rs. {{amount}}'
    },
    IDR: {
        money_format: '{{amount_with_comma_separator}}',
        money_with_currency_format: 'Rp {{amount_with_comma_separator}}'
    },
    ILS: {
        money_format: '{{amount}} NIS',
        money_with_currency_format: '{{amount}} NIS'
    },
    JMD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} JMD'
    },
    JPY: {
        money_format: '&#165;{{amount_no_decimals}}',
        money_with_currency_format: '&#165;{{amount_no_decimals}} JPY'
    },
    JEP: {
        money_format: '&pound;{{amount}}',
        money_with_currency_format: '&pound;{{amount}} JEP'
    },
    JOD: {
        money_format: '{{amount}}0 JD',
        money_with_currency_format: '{{amount}}0 JOD'
    },
    KZT: {
        money_format: '{{amount}} KZT',
        money_with_currency_format: '{{amount}} KZT'
    },
    KES: {
        money_format: 'KSh{{amount}}',
        money_with_currency_format: 'KSh{{amount}}'
    },
    KWD: {
        money_format: '{{amount}}0 KD',
        money_with_currency_format: '{{amount}}0 KWD'
    },
    KGS: {
        money_format: 'лв{{amount}}',
        money_with_currency_format: 'лв{{amount}}'
    },
    LVL: {
        money_format: 'Ls {{amount}}',
        money_with_currency_format: 'Ls {{amount}} LVL'
    },
    LBP: {
        money_format: 'L&pound;{{amount}}',
        money_with_currency_format: 'L&pound;{{amount}} LBP'
    },
    LTL: {
        money_format: '{{amount}} Lt',
        money_with_currency_format: '{{amount}} Lt'
    },
    MGA: {
        money_format: 'Ar {{amount}}',
        money_with_currency_format: 'Ar {{amount}} MGA'
    },
    MKD: {
        money_format: 'ден {{amount}}',
        money_with_currency_format: 'ден {{amount}} MKD'
    },
    MOP: {
        money_format: 'MOP${{amount}}',
        money_with_currency_format: 'MOP${{amount}}'
    },
    MVR: {
        money_format: 'Rf{{amount}}',
        money_with_currency_format: 'Rf{{amount}} MRf'
    },
    MXN: {
        money_format: '$ {{amount}}',
        money_with_currency_format: '$ {{amount}} MXN'
    },
    MYR: {
        money_format: 'RM{{amount}} MYR',
        money_with_currency_format: 'RM{{amount}} MYR'
    },
    MUR: {
        money_format: 'Rs {{amount}}',
        money_with_currency_format: 'Rs {{amount}} MUR'
    },
    MDL: {
        money_format: '{{amount}} MDL',
        money_with_currency_format: '{{amount}} MDL'
    },
    MAD: {
        money_format: '{{amount}} dh',
        money_with_currency_format: 'Dh {{amount}} MAD'
    },
    MNT: {
        money_format: '{{amount_no_decimals}} &#8366',
        money_with_currency_format: '{{amount_no_decimals}} MNT'
    },
    MZN: {
        money_format: '{{amount}} Mt',
        money_with_currency_format: 'Mt {{amount}} MZN'
    },
    NAD: {
        money_format: 'N${{amount}}',
        money_with_currency_format: 'N${{amount}} NAD'
    },
    NPR: {
        money_format: 'Rs{{amount}}',
        money_with_currency_format: 'Rs{{amount}} NPR'
    },
    ANG: {
        money_format: '&fnof;{{amount}}',
        money_with_currency_format: '{{amount}} NA&fnof;'
    },
    NZD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} NZD'
    },
    NIO: {
        money_format: 'C${{amount}}',
        money_with_currency_format: 'C${{amount}} NIO'
    },
    NGN: {
        money_format: '&#8358;{{amount}}',
        money_with_currency_format: '&#8358;{{amount}} NGN'
    },
    NOK: {
        money_format: 'kr {{amount_with_comma_separator}}',
        money_with_currency_format: 'kr {{amount_with_comma_separator}} NOK'
    },
    OMR: {
        money_format: '{{amount_with_comma_separator}} OMR',
        money_with_currency_format: '{{amount_with_comma_separator}} OMR'
    },
    PKR: {
        money_format: 'Rs.{{amount}}',
        money_with_currency_format: 'Rs.{{amount}} PKR'
    },
    PGK: {
        money_format: 'K {{amount}}',
        money_with_currency_format: 'K {{amount}} PGK'
    },
    PYG: {
        money_format: 'Gs. {{amount_no_decimals_with_comma_separator}}',
        money_with_currency_format: 'Gs. {{amount_no_decimals_with_comma_separator}} PYG'
    },
    PEN: {
        money_format: 'S/. {{amount}}',
        money_with_currency_format: 'S/. {{amount}} PEN'
    },
    PHP: {
        money_format: '&#8369;{{amount}}',
        money_with_currency_format: '&#8369;{{amount}} PHP'
    },
    PLN: {
        money_format: '{{amount_with_comma_separator}} zl',
        money_with_currency_format: '{{amount_with_comma_separator}} zl PLN'
    },
    QAR: {
        money_format: 'QAR {{amount_with_comma_separator}}',
        money_with_currency_format: 'QAR {{amount_with_comma_separator}}'
    },
    RON: {
        money_format: '{{amount_with_comma_separator}} lei',
        money_with_currency_format: '{{amount_with_comma_separator}} lei RON'
    },
    RUB: {
        money_format: '&#1088;&#1091;&#1073;{{amount_with_comma_separator}}',
        money_with_currency_format: '&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB'
    },
    RWF: {
        money_format: '{{amount_no_decimals}} RF',
        money_with_currency_format: '{{amount_no_decimals}} RWF'
    },
    WST: {
        money_format: 'WS$ {{amount}}',
        money_with_currency_format: 'WS$ {{amount}} WST'
    },
    SAR: {
        money_format: '{{amount}} SR',
        money_with_currency_format: '{{amount}} SAR'
    },
    STD: {
        money_format: 'Db {{amount}}',
        money_with_currency_format: 'Db {{amount}} STD'
    },
    RSD: {
        money_format: '{{amount}} RSD',
        money_with_currency_format: '{{amount}} RSD'
    },
    SCR: {
        money_format: 'Rs {{amount}}',
        money_with_currency_format: 'Rs {{amount}} SCR'
    },
    SGD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} SGD'
    },
    SYP: {
        money_format: 'S&pound;{{amount}}',
        money_with_currency_format: 'S&pound;{{amount}} SYP'
    },
    ZAR: {
        money_format: 'R {{amount}}',
        money_with_currency_format: 'R {{amount}} ZAR'
    },
    KRW: {
        money_format: '&#8361;{{amount_no_decimals}}',
        money_with_currency_format: '&#8361;{{amount_no_decimals}} KRW'
    },
    LKR: {
        money_format: 'Rs {{amount}}',
        money_with_currency_format: 'Rs {{amount}} LKR'
    },
    SEK: {
        money_format: '{{amount_no_decimals}} kr',
        money_with_currency_format: '{{amount_no_decimals}} kr SEK'
    },
    CHF: {
        money_format: 'SFr. {{amount}}',
        money_with_currency_format: 'SFr. {{amount}} CHF'
    },
    TWD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} TWD'
    },
    THB: {
        money_format: '{{amount}} &#xe3f;',
        money_with_currency_format: '{{amount}} &#xe3f; THB'
    },
    TZS: {
        money_format: '{{amount}} TZS',
        money_with_currency_format: '{{amount}} TZS'
    },
    TTD: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}} TTD'
    },
    TND: {
        money_format: '{{amount}}',
        money_with_currency_format: '{{amount}} DT'
    },
    TRY: {
        money_format: '{{amount}}TL',
        money_with_currency_format: '{{amount}}TL'
    },
    UGX: {
        money_format: 'Ush {{amount_no_decimals}}',
        money_with_currency_format: 'Ush {{amount_no_decimals}} UGX'
    },
    UAH: {
        money_format: '₴{{amount}}',
        money_with_currency_format: '₴{{amount}} UAH'
    },
    AED: {
        money_format: 'Dhs. {{amount}}',
        money_with_currency_format: 'Dhs. {{amount}} AED'
    },
    UYU: {
        money_format: '${{amount_with_comma_separator}}',
        money_with_currency_format: '${{amount_with_comma_separator}} UYU'
    },
    VUV: {
        money_format: '${{amount}}',
        money_with_currency_format: '${{amount}}VT'
    },
    VEF: {
        money_format: 'Bs. {{amount_with_comma_separator}}',
        money_with_currency_format: 'Bs. {{amount_with_comma_separator}} VEF'
    },
    VND: {
        money_format: '{{amount_no_decimals_with_comma_separator}}&#8363;',
        money_with_currency_format: '{{amount_no_decimals_with_comma_separator}} VND'
    },
    XBT: {
        money_format: '{{amount_no_decimals}} BTC',
        money_with_currency_format: '{{amount_no_decimals}} BTC'
    },
    XOF: {
        money_format: 'CFA{{amount}}',
        money_with_currency_format: 'CFA{{amount}} XOF'
    },
    ZMW: {
        money_format: 'K{{amount_no_decimals_with_comma_separator}}',
        money_with_currency_format: 'ZMW{{amount_no_decimals_with_comma_separator}}'
    }
};
Currency.formatMoney = function (b, g) {
    if (typeof Shopify.formatMoney === 'function') {
        return Shopify.formatMoney(b, g)
    }
    if (typeof b == 'string') {
        b = b.replace('.', '')
    }
    var f = '';
    var e = /\{\{\s*(\w+)\s*\}\}/;
    var a = g ||
        '${{amount}}';
    function c(h, i) {
        return (typeof h == 'undefined' ? i : h)
    }
    function d(m, k, l, j) {
        k = c(k, 2);
        l = c(l, ',');
        j = c(j, '.');
        if (isNaN(m) || m == null) {
            return 0
        }
        m = (m / 100).toFixed(k);
        var n = m.split('.'),
            i = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + l),
            h = n[1] ? (j + n[1]) : '';
        return i + h
    }
    switch (a.match(e)[1]) {
        case 'amount':
            f = d(b, 2);
            break;
        case 'amount_no_decimals':
            f = d(b, 0);
            break;
        case 'amount_with_comma_separator':
            f = d(b, 2, '.', ',');
            break;
        case 'amount_no_decimals_with_comma_separator':
            f = d(b, 0, '.', ',');
            break
    }
    return a.replace(e, f)
};
Currency.currentCurrency = '';
Currency.format = 'money_with_currency_format';
Currency.convertAll = function (c, b, a, d) {
    jQuery(a || 'span.money').each(
        function () {
            if (jQuery(this).attr('data-currency') === b) {
                return
            }
            if (jQuery(this).attr('data-currency-' + b)) {
                jQuery(this).html(jQuery(this).attr('data-currency-' + b))
            } else {
                var e = 0;
                var f = Currency.moneyFormats[c][d ||
                    Currency.format] ||
                    '{{amount}}';
                var g = Currency.moneyFormats[b][d ||
                    Currency.format] ||
                    '{{amount}}';
                if (f.indexOf('amount_no_decimals') !== - 1) {
                    e = Currency.convert(
                        parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10) * 100,
                        c,
                        b
                    )
                } else {
                    if (c === 'JOD' || c == 'KWD' || c == 'BHD') {
                        e = Currency.convert(
                            parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10) / 10,
                            c,
                            b
                        )
                    } else {
                        e = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10), c, b)
                    }
                }
                var h = Currency.formatMoney(e, g);
                jQuery(this).html(h);
                jQuery(this).attr('data-currency-' + b, h)
            }
            jQuery(this).attr('data-currency', b)
        }
    );
    this.currentCurrency = b;
    this.cookie.write(b)
};


///////////////////////////////////////////////////////

if (typeof Object.create !== 'function') {
    Object.create = function (obj) {
        function F() { };
        F.prototype = obj;
        return new F();
    };
}

(function ($, window, document, undefined) {
    var ElevateZoom = {
        init: function (options, elem) {
            var self = this;

            self.elem = elem;
            self.$elem = $(elem);

            self.imageSrc = self.$elem.data("zoom-image") ? self.$elem.data("zoom-image") : self.$elem.attr("src");

            self.options = $.extend({}, $.fn.elevateZoom.options, options);

            //TINT OVERRIDE SETTINGS
            if (self.options.tint) {
                self.options.lensColour = "none", //colour of the lens background
                    self.options.lensOpacity = "1" //opacity of the lens
            }
            //INNER OVERRIDE SETTINGS
            if (self.options.zoomType == "inner") { self.options.showLens = false; }


            //Remove alt on hover

            self.$elem.parent().removeAttr('title').removeAttr('alt');

            self.zoomImage = self.imageSrc;

            self.refresh(1);



            //Create the image swap from the gallery 
            $('#' + self.options.gallery + ' a').click(function (e) {

                //Set a class on the currently active gallery image
                if (self.options.galleryActiveClass) {
                    $('#' + self.options.gallery + ' a').removeClass(self.options.galleryActiveClass);
                    $(this).addClass(self.options.galleryActiveClass);
                }
                //stop any link on the a tag from working
                e.preventDefault();

                //call the swap image function            
                if ($(this).data("zoom-image")) { self.zoomImagePre = $(this).data("zoom-image") }
                else { self.zoomImagePre = $(this).data("image"); }
                self.swaptheimage($(this).data("image"), self.zoomImagePre);
                return false;
            });

        },

        refresh: function (length) {
            var self = this;

            setTimeout(function () {
                self.fetch(self.imageSrc);

            }, length || self.options.refresh);
        },

        fetch: function (imgsrc) {
            //get the image
            var self = this;
            var newImg = new Image();
            newImg.onload = function () {
                //set the large image dimensions - used to calculte ratio's
                self.largeWidth = newImg.width;
                self.largeHeight = newImg.height;
                //once image is loaded start the calls
                self.startZoom();
                self.currentImage = self.imageSrc;
                //let caller know image has been loaded
                self.options.onZoomedImageLoaded(self.$elem);
            }
            newImg.src = imgsrc; // this must be done AFTER setting onload

            return;

        },

        startZoom: function () {
            var self = this;
            //get dimensions of the non zoomed image
            self.nzWidth = self.$elem.width();
            self.nzHeight = self.$elem.height();

            //activated elements
            self.isWindowActive = false;
            self.isLensActive = false;
            self.isTintActive = false;
            self.overWindow = false;

            //CrossFade Wrappe
            if (self.options.imageCrossfade) {
                self.zoomWrap = self.$elem.wrap('<div style="height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;" class="zoomWrapper" />');
                self.$elem.css('position', 'absolute');
            }

            self.zoomLock = 1;
            self.scrollingLock = false;
            self.changeBgSize = false;
            self.currentZoomLevel = self.options.zoomLevel;


            //get offset of the non zoomed image
            self.nzOffset = self.$elem.offset();
            //calculate the width ratio of the large/small image
            self.widthRatio = (self.largeWidth / self.currentZoomLevel) / self.nzWidth;
            self.heightRatio = (self.largeHeight / self.currentZoomLevel) / self.nzHeight;


            //if window zoom        
            if (self.options.zoomType == "window") {
                self.zoomWindowStyle = "overflow: hidden;"
                    + "background-position: 0px 0px;text-align:center;"
                    + "background-color: " + String(self.options.zoomWindowBgColour)
                    + ";width: " + String(self.options.zoomWindowWidth) + "px;"
                    + "height: " + String(self.options.zoomWindowHeight)
                    + "px;float: left;"
                    + "background-size: " + self.largeWidth / self.currentZoomLevel + "px " + self.largeHeight / self.currentZoomLevel + "px;"
                    + "display: none;z-index:100;"
                    + "border: " + String(self.options.borderSize)
                    + "px solid " + self.options.borderColour
                    + ";background-repeat: no-repeat;"
                    + "position: absolute;";
            }


            //if inner  zoom    
            if (self.options.zoomType == "inner") {
                //has a border been put on the image? Lets cater for this

                var borderWidth = self.$elem.css("border-left-width");

                self.zoomWindowStyle = "overflow: hidden;"
                    + "margin-left: " + String(borderWidth) + ";"
                    + "margin-top: " + String(borderWidth) + ";"
                    + "background-position: 0px 0px;"
                    + "width: " + String(self.nzWidth) + "px;"
                    + "height: " + String(self.nzHeight)
                    + "px;float: left;"
                    + "display: none;"
                    + "cursor:" + (self.options.cursor) + ";"
                    + "px solid " + self.options.borderColour
                    + ";background-repeat: no-repeat;"
                    + "position: absolute;";
            }



            //lens style for window zoom
            if (self.options.zoomType == "window") {


                // adjust images less than the window height

                if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                    lensHeight = self.nzHeight;
                }
                else {
                    lensHeight = String((self.options.zoomWindowHeight / self.heightRatio))
                }
                if (self.largeWidth < self.options.zoomWindowWidth) {
                    lensWidth = self.nzWidth;
                }
                else {
                    lensWidth = (self.options.zoomWindowWidth / self.widthRatio);
                }


                self.lensStyle = "background-position: 0px 0px;width: " + String((self.options.zoomWindowWidth) / self.widthRatio) + "px;height: " + String((self.options.zoomWindowHeight) / self.heightRatio)
                    + "px;float: right;display: none;"
                    + "overflow: hidden;"
                    + "z-index: 999;"
                    + "-webkit-transform: translateZ(0);"
                    + "opacity:" + (self.options.lensOpacity) + ";filter: alpha(opacity = " + (self.options.lensOpacity * 100) + "); zoom:1;"
                    + "width:" + lensWidth + "px;"
                    + "height:" + lensHeight + "px;"
                    + "background-color:" + (self.options.lensColour) + ";"
                    + "cursor:" + (self.options.cursor) + ";"
                    + "border: " + (self.options.lensBorderSize) + "px" +
                    " solid " + (self.options.lensBorderColour) + ";background-repeat: no-repeat;position: absolute;";
            }


            //tint style
            self.tintStyle = "display: block;"
                + "position: absolute;"
                + "background-color: " + self.options.tintColour + ";"
                + "filter:alpha(opacity=0);"
                + "opacity: 0;"
                + "width: " + self.nzWidth + "px;"
                + "height: " + self.nzHeight + "px;"

                ;

            //lens style for lens zoom with optional round for modern browsers
            self.lensRound = '';

            if (self.options.zoomType == "lens") {

                self.lensStyle = "background-position: 0px 0px;"
                    + "float: left;display: none;"
                    + "border: " + String(self.options.borderSize) + "px solid " + self.options.borderColour + ";"
                    + "width:" + String(self.options.lensSize) + "px;"
                    + "height:" + String(self.options.lensSize) + "px;"
                    + "background-repeat: no-repeat;position: absolute;";


            }


            //does not round in all browsers
            if (self.options.lensShape == "round") {
                self.lensRound = "border-top-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"
                    + "border-top-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"
                    + "border-bottom-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"
                    + "border-bottom-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;";

            }

            //create the div's                                                + ""
            //self.zoomContainer = $('<div/>').addClass('zoomContainer').css({"position":"relative", "height":self.nzHeight, "width":self.nzWidth});

            self.zoomContainer = $('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + self.nzOffset.left + 'px;top:' + self.nzOffset.top + 'px;height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;"></div>');
            $('body').append(self.zoomContainer);


            //this will add overflow hidden and contrain the lens on lens mode       
            if (self.options.containLensZoom && self.options.zoomType == "lens") {
                self.zoomContainer.css("overflow", "hidden");
            }
            if (self.options.zoomType != "inner") {
                self.zoomLens = $("<div class='zoomLens' style='" + self.lensStyle + self.lensRound + "'>&nbsp;</div>")
                    .appendTo(self.zoomContainer)
                    .click(function () {
                        self.$elem.trigger('click');
                    });


                if (self.options.tint) {
                    self.tintContainer = $('<div/>').addClass('tintContainer');
                    self.zoomTint = $("<div class='zoomTint' style='" + self.tintStyle + "'></div>");


                    self.zoomLens.wrap(self.tintContainer);


                    self.zoomTintcss = self.zoomLens.after(self.zoomTint);

                    //if tint enabled - set an image to show over the tint

                    self.zoomTintImage = $('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + self.nzWidth + 'px; height: ' + self.nzHeight + 'px;" src="' + self.imageSrc + '">')
                        .appendTo(self.zoomLens)
                        .click(function () {

                            self.$elem.trigger('click');
                        });

                }

            }







            //create zoom window 
            if (isNaN(self.options.zoomWindowPosition)) {
                self.zoomWindow = $("<div style='z-index:999;left:" + (self.windowOffsetLeft) + "px;top:" + (self.windowOffsetTop) + "px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")
                    .appendTo('body')
                    .click(function () {
                        self.$elem.trigger('click');
                    });
            } else {
                self.zoomWindow = $("<div style='z-index:999;left:" + (self.windowOffsetLeft) + "px;top:" + (self.windowOffsetTop) + "px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")
                    .appendTo(self.zoomContainer)
                    .click(function () {
                        self.$elem.trigger('click');
                    });
            }
            self.zoomWindowContainer = $('<div/>').addClass('zoomWindowContainer').css("width", self.options.zoomWindowWidth);
            self.zoomWindow.wrap(self.zoomWindowContainer);


            //  self.captionStyle = "text-align: left;background-color: black;color: white;font-weight: bold;padding: 10px;font-family: sans-serif;font-size: 11px";                                                                                                                                                                                                                                          
            // self.zoomCaption = $('<div class="elevatezoom-caption" style="'+self.captionStyle+'display: block; width: 280px;">INSERT ALT TAG</div>').appendTo(self.zoomWindow.parent());

            if (self.options.zoomType == "lens") {
                self.zoomLens.css({ backgroundImage: "url('" + self.imageSrc + "')" });
            }
            if (self.options.zoomType == "window") {
                self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" });
            }
            if (self.options.zoomType == "inner") {
                self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" });
            }
            /*-------------------END THE ZOOM WINDOW AND LENS----------------------------------*/
            //touch events
            self.$elem.bind('touchmove', function (e) {
                e.preventDefault();
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                self.setPosition(touch);

            });
            self.zoomContainer.bind('touchmove', function (e) {
                if (self.options.zoomType == "inner") {
                    self.showHideWindow("show");

                }
                e.preventDefault();
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                self.setPosition(touch);

            });
            self.zoomContainer.bind('touchend', function (e) {
                self.showHideWindow("hide");
                if (self.options.showLens) { self.showHideLens("hide"); }
                if (self.options.tint && self.options.zoomType != "inner") { self.showHideTint("hide"); }
            });

            self.$elem.bind('touchend', function (e) {
                self.showHideWindow("hide");
                if (self.options.showLens) { self.showHideLens("hide"); }
                if (self.options.tint && self.options.zoomType != "inner") { self.showHideTint("hide"); }
            });
            if (self.options.showLens) {
                self.zoomLens.bind('touchmove', function (e) {

                    e.preventDefault();
                    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    self.setPosition(touch);
                });


                self.zoomLens.bind('touchend', function (e) {
                    self.showHideWindow("hide");
                    if (self.options.showLens) { self.showHideLens("hide"); }
                    if (self.options.tint && self.options.zoomType != "inner") { self.showHideTint("hide"); }
                });
            }
            //Needed to work in IE
            self.$elem.bind('mousemove', function (e) {
                if (self.overWindow == false) { self.setElements("show"); }
                //make sure on orientation change the setposition is not fired
                if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                    self.setPosition(e);
                    self.currentLoc = e;
                }
                self.lastX = e.clientX;
                self.lastY = e.clientY;

            });

            self.zoomContainer.bind('mousemove', function (e) {

                if (self.overWindow == false) { self.setElements("show"); }

                //make sure on orientation change the setposition is not fired 
                if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                    self.setPosition(e);
                    self.currentLoc = e;
                }
                self.lastX = e.clientX;
                self.lastY = e.clientY;
            });
            if (self.options.zoomType != "inner") {
                self.zoomLens.bind('mousemove', function (e) {
                    //make sure on orientation change the setposition is not fired
                    if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                        self.setPosition(e);
                        self.currentLoc = e;
                    }
                    self.lastX = e.clientX;
                    self.lastY = e.clientY;
                });
            }
            if (self.options.tint && self.options.zoomType != "inner") {
                self.zoomTint.bind('mousemove', function (e) {
                    //make sure on orientation change the setposition is not fired
                    if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                        self.setPosition(e);
                        self.currentLoc = e;
                    }
                    self.lastX = e.clientX;
                    self.lastY = e.clientY;
                });

            }
            if (self.options.zoomType == "inner") {
                self.zoomWindow.bind('mousemove', function (e) {
                    //self.overWindow = true;
                    //make sure on orientation change the setposition is not fired
                    if (self.lastX !== e.clientX || self.lastY !== e.clientY) {
                        self.setPosition(e);
                        self.currentLoc = e;
                    }
                    self.lastX = e.clientX;
                    self.lastY = e.clientY;
                });

            }


            //  lensFadeOut: 500,  zoomTintFadeIn
            self.zoomContainer.add(self.$elem).mouseenter(function () {

                if (self.overWindow == false) { self.setElements("show"); }


            }).mouseleave(function () {
                if (!self.scrollLock) {
                    self.setElements("hide");
                }
            });
            //end ove image





            if (self.options.zoomType != "inner") {
                self.zoomWindow.mouseenter(function () {
                    self.overWindow = true;
                    self.setElements("hide");
                }).mouseleave(function () {

                    self.overWindow = false;
                });
            }
            //end ove image



            //				var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);

            //      $(this).empty();    
            //    return false;

            //fix for initial zoom setting
            if (self.options.zoomLevel != 1) {
                //	self.changeZoomLevel(self.currentZoomLevel);
            }
            //set the min zoomlevel
            if (self.options.minZoomLevel) {
                self.minZoomLevel = self.options.minZoomLevel;
            }
            else {
                self.minZoomLevel = self.options.scrollZoomIncrement * 2;
            }


            if (self.options.scrollZoom) {


                self.zoomContainer.add(self.$elem).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (e) {


                    //						in IE there is issue with firing of mouseleave - So check whether still scrolling
                    //						and on mouseleave check if scrolllock          
                    self.scrollLock = true;
                    clearTimeout($.data(this, 'timer'));
                    $.data(this, 'timer', setTimeout(function () {
                        self.scrollLock = false;
                        //do something
                    }, 250));

                    var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail * -1


                    //this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
                    //   e.preventDefault();


                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault();


                    if (theEvent / 120 > 0) {
                        //scrolling up
                        if (self.currentZoomLevel >= self.minZoomLevel) {
                            self.changeZoomLevel(self.currentZoomLevel - self.options.scrollZoomIncrement);
                        }

                    }
                    else {
                        //scrolling down


                        if (self.options.maxZoomLevel) {
                            if (self.currentZoomLevel <= self.options.maxZoomLevel) {
                                self.changeZoomLevel(parseFloat(self.currentZoomLevel) + self.options.scrollZoomIncrement);
                            }
                        }
                        else {
                            //andy 

                            self.changeZoomLevel(parseFloat(self.currentZoomLevel) + self.options.scrollZoomIncrement);
                        }

                    }
                    return false;
                });
            }


        },
        setElements: function (type) {
            var self = this;
            if (!self.options.zoomEnabled) { return false; }
            if (type == "show") {
                if (self.isWindowSet) {
                    if (self.options.zoomType == "inner") { self.showHideWindow("show"); }
                    if (self.options.zoomType == "window") { self.showHideWindow("show"); }
                    if (self.options.showLens) { self.showHideLens("show"); }
                    if (self.options.tint && self.options.zoomType != "inner") {
                        self.showHideTint("show");
                    }
                }
            }

            if (type == "hide") {
                if (self.options.zoomType == "window") { self.showHideWindow("hide"); }
                if (!self.options.tint) { self.showHideWindow("hide"); }
                if (self.options.showLens) { self.showHideLens("hide"); }
                if (self.options.tint) { self.showHideTint("hide"); }
            }
        },
        setPosition: function (e) {

            var self = this;

            if (!self.options.zoomEnabled) { return false; }

            //recaclc offset each time in case the image moves
            //this can be caused by other on page elements
            self.nzHeight = self.$elem.height();
            self.nzWidth = self.$elem.width();
            self.nzOffset = self.$elem.offset();

            if (self.options.tint && self.options.zoomType != "inner") {
                self.zoomTint.css({ top: 0 });
                self.zoomTint.css({ left: 0 });
            }
            //set responsive       
            //will checking if the image needs changing before running this code work faster?
            if (self.options.responsive && !self.options.scrollZoom) {
                if (self.options.showLens) {
                    if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                        lensHeight = self.nzHeight;
                    }
                    else {
                        lensHeight = String((self.options.zoomWindowHeight / self.heightRatio))
                    }
                    if (self.largeWidth < self.options.zoomWindowWidth) {
                        lensWidth = self.nzWidth;
                    }
                    else {
                        lensWidth = (self.options.zoomWindowWidth / self.widthRatio);
                    }
                    self.widthRatio = self.largeWidth / self.nzWidth;
                    self.heightRatio = self.largeHeight / self.nzHeight;
                    if (self.options.zoomType != "lens") {


                        //possibly dont need to keep recalcalculating
                        //if the lens is heigher than the image, then set lens size to image size
                        if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                            lensHeight = self.nzHeight;

                        }
                        else {
                            lensHeight = String((self.options.zoomWindowHeight / self.heightRatio))
                        }

                        if (self.options.zoomWindowWidth < self.options.zoomWindowWidth) {
                            lensWidth = self.nzWidth;
                        }
                        else {
                            lensWidth = (self.options.zoomWindowWidth / self.widthRatio);
                        }

                        self.zoomLens.css('width', lensWidth);
                        self.zoomLens.css('height', lensHeight);

                        if (self.options.tint) {
                            self.zoomTintImage.css('width', self.nzWidth);
                            self.zoomTintImage.css('height', self.nzHeight);
                        }

                    }
                    if (self.options.zoomType == "lens") {

                        self.zoomLens.css({ width: String(self.options.lensSize) + 'px', height: String(self.options.lensSize) + 'px' })


                    }
                    //end responsive image change
                }
            }

            //container fix
            self.zoomContainer.css({ top: self.nzOffset.top });
            self.zoomContainer.css({ left: self.nzOffset.left });
            self.mouseLeft = parseInt(e.pageX - self.nzOffset.left);
            self.mouseTop = parseInt(e.pageY - self.nzOffset.top);
            //calculate the Location of the Lens

            //calculate the bound regions - but only if zoom window
            if (self.options.zoomType == "window") {
                self.Etoppos = (self.mouseTop < (self.zoomLens.height() / 2));
                self.Eboppos = (self.mouseTop > self.nzHeight - (self.zoomLens.height() / 2) - (self.options.lensBorderSize * 2));
                self.Eloppos = (self.mouseLeft < 0 + ((self.zoomLens.width() / 2)));
                self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.zoomLens.width() / 2) - (self.options.lensBorderSize * 2)));
            }
            //calculate the bound regions - but only for inner zoom
            if (self.options.zoomType == "inner") {
                self.Etoppos = (self.mouseTop < ((self.nzHeight / 2) / self.heightRatio));
                self.Eboppos = (self.mouseTop > (self.nzHeight - ((self.nzHeight / 2) / self.heightRatio)));
                self.Eloppos = (self.mouseLeft < 0 + (((self.nzWidth / 2) / self.widthRatio)));
                self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.nzWidth / 2) / self.widthRatio - (self.options.lensBorderSize * 2)));
            }

            // if the mouse position of the slider is one of the outerbounds, then hide  window and lens
            if (self.mouseLeft <= 0 || self.mouseTop < 0 || self.mouseLeft > self.nzWidth || self.mouseTop > self.nzHeight) {
                self.setElements("hide");
                return;
            }
            //else continue with operations
            else {


                //lens options
                if (self.options.showLens) {
                    //		self.showHideLens("show");
                    //set background position of lens
                    self.lensLeftPos = String(self.mouseLeft - self.zoomLens.width() / 2);
                    self.lensTopPos = String(self.mouseTop - self.zoomLens.height() / 2);


                }
                //adjust the background position if the mouse is in one of the outer regions 

                //Top region
                if (self.Etoppos) {
                    self.lensTopPos = 0;
                }
                //Left Region
                if (self.Eloppos) {
                    self.windowLeftPos = 0;
                    self.lensLeftPos = 0;
                    self.tintpos = 0;
                }
                //Set bottom and right region for window mode
                if (self.options.zoomType == "window") {
                    if (self.Eboppos) {
                        self.lensTopPos = Math.max((self.nzHeight) - self.zoomLens.height() - (self.options.lensBorderSize * 2), 0);
                    }
                    if (self.Eroppos) {
                        self.lensLeftPos = (self.nzWidth - (self.zoomLens.width()) - (self.options.lensBorderSize * 2));
                    }
                }
                //Set bottom and right region for inner mode
                if (self.options.zoomType == "inner") {
                    if (self.Eboppos) {
                        self.lensTopPos = Math.max(((self.nzHeight) - (self.options.lensBorderSize * 2)), 0);
                    }
                    if (self.Eroppos) {
                        self.lensLeftPos = (self.nzWidth - (self.nzWidth) - (self.options.lensBorderSize * 2));
                    }

                }
                //if lens zoom
                if (self.options.zoomType == "lens") {
                    self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomLens.width() / 2) * (-1));
                    self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomLens.height() / 2) * (-1));

                    self.zoomLens.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });

                    if (self.changeBgSize) {

                        if (self.nzHeight > self.nzWidth) {
                            if (self.options.zoomType == "lens") {
                                self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                            }

                            self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                        }
                        else {
                            if (self.options.zoomType == "lens") {
                                self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                            }
                            self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                        }
                        self.changeBgSize = false;
                    }

                    self.setWindowPostition(e);
                }
                //if tint zoom   
                if (self.options.tint && self.options.zoomType != "inner") {
                    self.setTintPosition(e);

                }
                //set the css background position 
                if (self.options.zoomType == "window") {
                    self.setWindowPostition(e);
                }
                if (self.options.zoomType == "inner") {
                    self.setWindowPostition(e);
                }
                if (self.options.showLens) {

                    if (self.fullwidth && self.options.zoomType != "lens") {
                        self.lensLeftPos = 0;

                    }
                    self.zoomLens.css({ left: self.lensLeftPos + 'px', top: self.lensTopPos + 'px' })
                }

            } //end else



        },
        showHideWindow: function (change) {
            var self = this;
            if (change == "show") {
                if (!self.isWindowActive) {
                    if (self.options.zoomWindowFadeIn) {
                        self.zoomWindow.stop(true, true, false).fadeIn(self.options.zoomWindowFadeIn);
                    }
                    else { self.zoomWindow.show(); }
                    self.isWindowActive = true;
                }
            }
            if (change == "hide") {
                if (self.isWindowActive) {
                    if (self.options.zoomWindowFadeOut) {
                        self.zoomWindow.stop(true, true).fadeOut(self.options.zoomWindowFadeOut);
                    }
                    else { self.zoomWindow.hide(); }
                    self.isWindowActive = false;
                }
            }
        },
        showHideLens: function (change) {
            var self = this;
            if (change == "show") {
                if (!self.isLensActive) {
                    if (self.options.lensFadeIn) {
                        self.zoomLens.stop(true, true, false).fadeIn(self.options.lensFadeIn);
                    }
                    else { self.zoomLens.show(); }
                    self.isLensActive = true;
                }
            }
            if (change == "hide") {
                if (self.isLensActive) {
                    if (self.options.lensFadeOut) {
                        self.zoomLens.stop(true, true).fadeOut(self.options.lensFadeOut);
                    }
                    else { self.zoomLens.hide(); }
                    self.isLensActive = false;
                }
            }
        },
        showHideTint: function (change) {
            var self = this;
            if (change == "show") {
                if (!self.isTintActive) {

                    if (self.options.zoomTintFadeIn) {
                        self.zoomTint.css({ opacity: self.options.tintOpacity }).animate().stop(true, true).fadeIn("slow");
                    }
                    else {
                        self.zoomTint.css({ opacity: self.options.tintOpacity }).animate();
                        self.zoomTint.show();


                    }
                    self.isTintActive = true;
                }
            }
            if (change == "hide") {
                if (self.isTintActive) {

                    if (self.options.zoomTintFadeOut) {
                        self.zoomTint.stop(true, true).fadeOut(self.options.zoomTintFadeOut);
                    }
                    else { self.zoomTint.hide(); }
                    self.isTintActive = false;
                }
            }
        },
        setLensPostition: function (e) {


        },
        setWindowPostition: function (e) {
            //return obj.slice( 0, count );
            var self = this;

            if (!isNaN(self.options.zoomWindowPosition)) {

                switch (self.options.zoomWindowPosition) {
                    case 1: //done         
                        self.windowOffsetTop = (self.options.zoomWindowOffety);//DONE - 1
                        self.windowOffsetLeft = (+self.nzWidth); //DONE 1, 2, 3, 4, 16
                        break;
                    case 2:
                        if (self.options.zoomWindowHeight > self.nzHeight) { //positive margin

                            self.windowOffsetTop = ((self.options.zoomWindowHeight / 2) - (self.nzHeight / 2)) * (-1);
                            self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                        }
                        else { //negative margin

                        }
                        break;
                    case 3: //done        
                        self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize * 2)); //DONE 3,9
                        self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                        break;
                    case 4: //done  
                        self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
                        self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                        break;
                    case 5: //done  
                        self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
                        self.windowOffsetLeft = (self.nzWidth - self.zoomWindow.width() - (self.options.borderSize * 2)); //DONE - 5,15
                        break;
                    case 6:
                        if (self.options.zoomWindowHeight > self.nzHeight) { //positive margin
                            self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8

                            self.windowOffsetLeft = ((self.options.zoomWindowWidth / 2) - (self.nzWidth / 2) + (self.options.borderSize * 2)) * (-1);
                        }
                        else { //negative margin

                        }


                        break;
                    case 7: //done  
                        self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8
                        self.windowOffsetLeft = 0; //DONE 7, 13
                        break;
                    case 8: //done  
                        self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        break;
                    case 9:  //done  
                        self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize * 2)); //DONE 3,9
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        break;
                    case 10:
                        if (self.options.zoomWindowHeight > self.nzHeight) { //positive margin

                            self.windowOffsetTop = ((self.options.zoomWindowHeight / 2) - (self.nzHeight / 2)) * (-1);
                            self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        }
                        else { //negative margin

                        }
                        break;
                    case 11:
                        self.windowOffsetTop = (self.options.zoomWindowOffety);
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        break;
                    case 12: //done  
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16
                        self.windowOffsetLeft = (self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);  //DONE 8,9,10,11,12
                        break;
                    case 13: //done  
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16
                        self.windowOffsetLeft = (0); //DONE 7, 13
                        break;
                    case 14:
                        if (self.options.zoomWindowHeight > self.nzHeight) { //positive margin
                            self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16

                            self.windowOffsetLeft = ((self.options.zoomWindowWidth / 2) - (self.nzWidth / 2) + (self.options.borderSize * 2)) * (-1);
                        }
                        else { //negative margin

                        }

                        break;
                    case 15://done   
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16
                        self.windowOffsetLeft = (self.nzWidth - self.zoomWindow.width() - (self.options.borderSize * 2)); //DONE - 5,15
                        break;
                    case 16:  //done  
                        self.windowOffsetTop = (self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1); //DONE 12,13,14,15,16
                        self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                        break;
                    default: //done  
                        self.windowOffsetTop = (self.options.zoomWindowOffety);//DONE - 1
                        self.windowOffsetLeft = (self.nzWidth); //DONE 1, 2, 3, 4, 16
                }
            } //end isNAN
            else {
                //WE CAN POSITION IN A CLASS - ASSUME THAT ANY STRING PASSED IS
                self.externalContainer = $('#' + self.options.zoomWindowPosition);
                self.externalContainerWidth = self.externalContainer.width();
                self.externalContainerHeight = self.externalContainer.height();
                self.externalContainerOffset = self.externalContainer.offset();

                self.windowOffsetTop = self.externalContainerOffset.top;//DONE - 1
                self.windowOffsetLeft = self.externalContainerOffset.left; //DONE 1, 2, 3, 4, 16

            }
            self.isWindowSet = true;
            self.windowOffsetTop = self.windowOffsetTop + self.options.zoomWindowOffety;
            self.windowOffsetLeft = self.windowOffsetLeft + self.options.zoomWindowOffetx;

            self.zoomWindow.css({ top: self.windowOffsetTop });
            self.zoomWindow.css({ left: self.windowOffsetLeft });

            if (self.options.zoomType == "inner") {
                self.zoomWindow.css({ top: 0 });
                self.zoomWindow.css({ left: 0 });

            }


            self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1));
            self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));
            if (self.Etoppos) { self.windowTopPos = 0; }
            if (self.Eloppos) { self.windowLeftPos = 0; }
            if (self.Eboppos) { self.windowTopPos = (self.largeHeight / self.currentZoomLevel - self.zoomWindow.height()) * (-1); }
            if (self.Eroppos) { self.windowLeftPos = ((self.largeWidth / self.currentZoomLevel - self.zoomWindow.width()) * (-1)); }

            //stops micro movements
            if (self.fullheight) {
                self.windowTopPos = 0;

            }
            if (self.fullwidth) {
                self.windowLeftPos = 0;

            }
            //set the css background position 


            if (self.options.zoomType == "window" || self.options.zoomType == "inner") {

                if (self.zoomLock == 1) {
                    //overrides for images not zoomable
                    if (self.widthRatio <= 1) {

                        self.windowLeftPos = 0;
                    }
                    if (self.heightRatio <= 1) {
                        self.windowTopPos = 0;
                    }
                }
                // adjust images less than the window height

                if (self.largeHeight < self.options.zoomWindowHeight) {

                    self.windowTopPos = 0;
                }
                if (self.largeWidth < self.options.zoomWindowWidth) {
                    self.windowLeftPos = 0;
                }

                //set the zoomwindow background position
                if (self.options.easing) {

                    //     if(self.changeZoom){
                    //           clearInterval(self.loop);
                    //           self.changeZoom = false;
                    //           self.loop = false;

                    //            }
                    //set the pos to 0 if not set
                    if (!self.xp) { self.xp = 0; }
                    if (!self.yp) { self.yp = 0; }
                    //if loop not already started, then run it 
                    if (!self.loop) {
                        self.loop = setInterval(function () {
                            //using zeno's paradox    

                            self.xp += (self.windowLeftPos - self.xp) / self.options.easingAmount;
                            self.yp += (self.windowTopPos - self.yp) / self.options.easingAmount;
                            if (self.scrollingLock) {


                                clearInterval(self.loop);
                                self.xp = self.windowLeftPos;
                                self.yp = self.windowTopPos

                                self.xp = ((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1);
                                self.yp = (((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));

                                if (self.changeBgSize) {
                                    if (self.nzHeight > self.nzWidth) {
                                        if (self.options.zoomType == "lens") {
                                            self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                        }
                                        self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                    }
                                    else {
                                        if (self.options.zoomType != "lens") {
                                            self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                        }
                                        self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });

                                    }

                                    /*
         if(!self.bgxp){self.bgxp = self.largeWidth/self.newvalue;}
                    if(!self.bgyp){self.bgyp = self.largeHeight/self.newvalue ;}  
             if (!self.bgloop){   
                  self.bgloop = setInterval(function(){   

             self.bgxp += (self.largeWidth/self.newvalue  - self.bgxp) / self.options.easingAmount; 
                            self.bgyp += (self.largeHeight/self.newvalue  - self.bgyp) / self.options.easingAmount;

       self.zoomWindow.css({ "background-size": self.bgxp + 'px ' + self.bgyp + 'px' });


              }, 16);

             }
                                     */
                                    self.changeBgSize = false;
                                }

                                self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
                                self.scrollingLock = false;
                                self.loop = false;

                            }
                            else {
                                if (self.changeBgSize) {
                                    if (self.nzHeight > self.nzWidth) {
                                        if (self.options.zoomType == "lens") {
                                            self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                        }
                                        self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                                    }
                                    else {
                                        if (self.options.zoomType != "lens") {
                                            self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                                        }
                                        self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                                    }
                                    self.changeBgSize = false;
                                }

                                self.zoomWindow.css({ backgroundPosition: self.xp + 'px ' + self.yp + 'px' });
                            }
                        }, 16);
                    }
                }
                else {
                    if (self.changeBgSize) {
                        if (self.nzHeight > self.nzWidth) {
                            if (self.options.zoomType == "lens") {
                                self.zoomLens.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                            }

                            self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                        }
                        else {
                            if (self.options.zoomType == "lens") {
                                self.zoomLens.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                            }
                            if ((self.largeHeight / self.newvaluewidth) < self.options.zoomWindowHeight) {

                                self.zoomWindow.css({ "background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px' });
                            }
                            else {

                                self.zoomWindow.css({ "background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px' });
                            }

                        }
                        self.changeBgSize = false;
                    }

                    self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
                }
            }
        },
        setTintPosition: function (e) {
            var self = this;
            self.nzOffset = self.$elem.offset();
            self.tintpos = String(((e.pageX - self.nzOffset.left) - (self.zoomLens.width() / 2)) * (-1));
            self.tintposy = String(((e.pageY - self.nzOffset.top) - self.zoomLens.height() / 2) * (-1));
            if (self.Etoppos) {
                self.tintposy = 0;
            }
            if (self.Eloppos) {
                self.tintpos = 0;
            }
            if (self.Eboppos) {
                self.tintposy = (self.nzHeight - self.zoomLens.height() - (self.options.lensBorderSize * 2)) * (-1);
            }
            if (self.Eroppos) {
                self.tintpos = ((self.nzWidth - self.zoomLens.width() - (self.options.lensBorderSize * 2)) * (-1));
            }
            if (self.options.tint) {
                //stops micro movements
                if (self.fullheight) {
                    self.tintposy = 0;

                }
                if (self.fullwidth) {
                    self.tintpos = 0;

                }
                self.zoomTintImage.css({ 'left': self.tintpos + 'px' });
                self.zoomTintImage.css({ 'top': self.tintposy + 'px' });
            }
        },

        swaptheimage: function (smallimage, largeimage) {
            var self = this;
            var newImg = new Image();

            if (self.options.loadingIcon) {
                self.spinner = $('<div style="background: url(\'' + self.options.loadingIcon + '\') no-repeat center;height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>');
                self.$elem.after(self.spinner);
            }

            self.options.onImageSwap(self.$elem);

            newImg.onload = function () {
                self.largeWidth = newImg.width;
                self.largeHeight = newImg.height;
                self.zoomImage = largeimage;
                self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });
                self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });


                self.swapAction(smallimage, largeimage);
                return;
            }
            newImg.src = largeimage; // this must be done AFTER setting onload

        },
        swapAction: function (smallimage, largeimage) {


            var self = this;

            var newImg2 = new Image();
            newImg2.onload = function () {
                //re-calculate values
                self.nzHeight = newImg2.height;
                self.nzWidth = newImg2.width;
                self.options.onImageSwapComplete(self.$elem);
                self.doneCallback();
                return;
            }
            newImg2.src = smallimage;

            //reset the zoomlevel to that initially set in options
            self.currentZoomLevel = self.options.zoomLevel;
            self.options.maxZoomLevel = false;

            //swaps the main image
            //self.$elem.attr("src",smallimage);
            //swaps the zoom image     
            if (self.options.zoomType == "lens") {
                self.zoomLens.css({ backgroundImage: "url('" + largeimage + "')" });
            }
            if (self.options.zoomType == "window") {
                self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" });
            }
            if (self.options.zoomType == "inner") {
                self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" });
            }



            self.currentImage = largeimage;

            if (self.options.imageCrossfade) {
                var oldImg = self.$elem;
                var newImg = oldImg.clone();
                self.$elem.attr("src", smallimage)
                self.$elem.after(newImg);
                newImg.stop(true).fadeOut(self.options.imageCrossfade, function () {
                    $(this).remove();
                });

                //       				if(self.options.zoomType == "inner"){
                //remove any attributes on the cloned image so we can resize later
                self.$elem.width("auto").removeAttr("width");
                self.$elem.height("auto").removeAttr("height");
                //   }

                oldImg.fadeIn(self.options.imageCrossfade);

                if (self.options.tint && self.options.zoomType != "inner") {

                    var oldImgTint = self.zoomTintImage;
                    var newImgTint = oldImgTint.clone();
                    self.zoomTintImage.attr("src", largeimage)
                    self.zoomTintImage.after(newImgTint);
                    newImgTint.stop(true).fadeOut(self.options.imageCrossfade, function () {
                        $(this).remove();
                    });



                    oldImgTint.fadeIn(self.options.imageCrossfade);


                    //self.zoomTintImage.attr("width",elem.data("image"));

                    //resize the tint window
                    self.zoomTint.css({ height: self.$elem.height() });
                    self.zoomTint.css({ width: self.$elem.width() });
                }

                self.zoomContainer.css("height", self.$elem.height());
                self.zoomContainer.css("width", self.$elem.width());

                if (self.options.zoomType == "inner") {
                    if (!self.options.constrainType) {
                        self.zoomWrap.parent().css("height", self.$elem.height());
                        self.zoomWrap.parent().css("width", self.$elem.width());

                        self.zoomWindow.css("height", self.$elem.height());
                        self.zoomWindow.css("width", self.$elem.width());
                    }
                }

                if (self.options.imageCrossfade) {
                    self.zoomWrap.css("height", self.$elem.height());
                    self.zoomWrap.css("width", self.$elem.width());
                }
            }
            else {
                self.$elem.attr("src", smallimage);
                if (self.options.tint) {
                    self.zoomTintImage.attr("src", largeimage);
                    //self.zoomTintImage.attr("width",elem.data("image"));
                    self.zoomTintImage.attr("height", self.$elem.height());
                    //self.zoomTintImage.attr('src') = elem.data("image");
                    self.zoomTintImage.css({ height: self.$elem.height() });
                    self.zoomTint.css({ height: self.$elem.height() });

                }
                self.zoomContainer.css("height", self.$elem.height());
                self.zoomContainer.css("width", self.$elem.width());

                if (self.options.imageCrossfade) {
                    self.zoomWrap.css("height", self.$elem.height());
                    self.zoomWrap.css("width", self.$elem.width());
                }
            }
            if (self.options.constrainType) {

                //This will contrain the image proportions
                if (self.options.constrainType == "height") {

                    self.zoomContainer.css("height", self.options.constrainSize);
                    self.zoomContainer.css("width", "auto");

                    if (self.options.imageCrossfade) {
                        self.zoomWrap.css("height", self.options.constrainSize);
                        self.zoomWrap.css("width", "auto");
                        self.constwidth = self.zoomWrap.width();


                    }
                    else {
                        self.$elem.css("height", self.options.constrainSize);
                        self.$elem.css("width", "auto");
                        self.constwidth = self.$elem.width();
                    }

                    if (self.options.zoomType == "inner") {

                        self.zoomWrap.parent().css("height", self.options.constrainSize);
                        self.zoomWrap.parent().css("width", self.constwidth);
                        self.zoomWindow.css("height", self.options.constrainSize);
                        self.zoomWindow.css("width", self.constwidth);
                    }
                    if (self.options.tint) {
                        self.tintContainer.css("height", self.options.constrainSize);
                        self.tintContainer.css("width", self.constwidth);
                        self.zoomTint.css("height", self.options.constrainSize);
                        self.zoomTint.css("width", self.constwidth);
                        self.zoomTintImage.css("height", self.options.constrainSize);
                        self.zoomTintImage.css("width", self.constwidth);
                    }

                }
                if (self.options.constrainType == "width") {
                    self.zoomContainer.css("height", "auto");
                    self.zoomContainer.css("width", self.options.constrainSize);

                    if (self.options.imageCrossfade) {
                        self.zoomWrap.css("height", "auto");
                        self.zoomWrap.css("width", self.options.constrainSize);
                        self.constheight = self.zoomWrap.height();
                    }
                    else {
                        self.$elem.css("height", "auto");
                        self.$elem.css("width", self.options.constrainSize);
                        self.constheight = self.$elem.height();
                    }
                    if (self.options.zoomType == "inner") {
                        self.zoomWrap.parent().css("height", self.constheight);
                        self.zoomWrap.parent().css("width", self.options.constrainSize);
                        self.zoomWindow.css("height", self.constheight);
                        self.zoomWindow.css("width", self.options.constrainSize);
                    }
                    if (self.options.tint) {
                        self.tintContainer.css("height", self.constheight);
                        self.tintContainer.css("width", self.options.constrainSize);
                        self.zoomTint.css("height", self.constheight);
                        self.zoomTint.css("width", self.options.constrainSize);
                        self.zoomTintImage.css("height", self.constheight);
                        self.zoomTintImage.css("width", self.options.constrainSize);
                    }

                }


            }

        },
        doneCallback: function () {

            var self = this;
            if (self.options.loadingIcon) {
                self.spinner.hide();
            }

            self.nzOffset = self.$elem.offset();
            self.nzWidth = self.$elem.width();
            self.nzHeight = self.$elem.height();

            // reset the zoomlevel back to default
            self.currentZoomLevel = self.options.zoomLevel;

            //ratio of the large to small image
            self.widthRatio = self.largeWidth / self.nzWidth;
            self.heightRatio = self.largeHeight / self.nzHeight;

            //NEED TO ADD THE LENS SIZE FOR ROUND
            // adjust images less than the window height
            if (self.options.zoomType == "window") {

                if (self.nzHeight < self.options.zoomWindowWidth / self.widthRatio) {
                    lensHeight = self.nzHeight;

                }
                else {
                    lensHeight = String((self.options.zoomWindowHeight / self.heightRatio))
                }

                if (self.options.zoomWindowWidth < self.options.zoomWindowWidth) {
                    lensWidth = self.nzWidth;
                }
                else {
                    lensWidth = (self.options.zoomWindowWidth / self.widthRatio);
                }


                if (self.zoomLens) {

                    self.zoomLens.css('width', lensWidth);
                    self.zoomLens.css('height', lensHeight);


                }
            }
        },
        getCurrentImage: function () {
            var self = this;
            return self.zoomImage;
        },
        getGalleryList: function () {
            var self = this;
            //loop through the gallery options and set them in list for fancybox
            self.gallerylist = [];
            if (self.options.gallery) {


                $('#' + self.options.gallery + ' a').each(function () {

                    var img_src = '';
                    if ($(this).data("zoom-image")) {
                        img_src = $(this).data("zoom-image");
                    }
                    else if ($(this).data("image")) {
                        img_src = $(this).data("image");
                    }
                    //put the current image at the start
                    if (img_src == self.zoomImage) {
                        self.gallerylist.unshift({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }
                    else {
                        self.gallerylist.push({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }


                });
            }
            //if no gallery - return current image
            else {
                self.gallerylist.push({
                    href: '' + self.zoomImage + '',
                    title: $(this).find('img').attr("title")
                });
            }
            return self.gallerylist;

        },
        changeZoomLevel: function (value) {
            var self = this;

            //flag a zoom, so can adjust the easing during setPosition     
            self.scrollingLock = true;

            //round to two decimal places
            self.newvalue = parseFloat(value).toFixed(2);
            newvalue = parseFloat(value).toFixed(2);




            //maxwidth & Maxheight of the image
            maxheightnewvalue = self.largeHeight / ((self.options.zoomWindowHeight / self.nzHeight) * self.nzHeight);
            maxwidthtnewvalue = self.largeWidth / ((self.options.zoomWindowWidth / self.nzWidth) * self.nzWidth);




            //calculate new heightratio
            if (self.options.zoomType != "inner") {
                if (maxheightnewvalue <= newvalue) {
                    self.heightRatio = (self.largeHeight / maxheightnewvalue) / self.nzHeight;
                    self.newvalueheight = maxheightnewvalue;
                    self.fullheight = true;

                }
                else {
                    self.heightRatio = (self.largeHeight / newvalue) / self.nzHeight;
                    self.newvalueheight = newvalue;
                    self.fullheight = false;

                }


                //					calculate new width ratio

                if (maxwidthtnewvalue <= newvalue) {
                    self.widthRatio = (self.largeWidth / maxwidthtnewvalue) / self.nzWidth;
                    self.newvaluewidth = maxwidthtnewvalue;
                    self.fullwidth = true;

                }
                else {
                    self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                    self.newvaluewidth = newvalue;
                    self.fullwidth = false;

                }
                if (self.options.zoomType == "lens") {
                    if (maxheightnewvalue <= newvalue) {
                        self.fullwidth = true;
                        self.newvaluewidth = maxheightnewvalue;

                    } else {
                        self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                        self.newvaluewidth = newvalue;

                        self.fullwidth = false;
                    }
                }
            }



            if (self.options.zoomType == "inner") {
                maxheightnewvalue = parseFloat(self.largeHeight / self.nzHeight).toFixed(2);
                maxwidthtnewvalue = parseFloat(self.largeWidth / self.nzWidth).toFixed(2);
                if (newvalue > maxheightnewvalue) {
                    newvalue = maxheightnewvalue;
                }
                if (newvalue > maxwidthtnewvalue) {
                    newvalue = maxwidthtnewvalue;
                }


                if (maxheightnewvalue <= newvalue) {


                    self.heightRatio = (self.largeHeight / newvalue) / self.nzHeight;
                    if (newvalue > maxheightnewvalue) {
                        self.newvalueheight = maxheightnewvalue;
                    } else {
                        self.newvalueheight = newvalue;
                    }
                    self.fullheight = true;


                }
                else {



                    self.heightRatio = (self.largeHeight / newvalue) / self.nzHeight;

                    if (newvalue > maxheightnewvalue) {

                        self.newvalueheight = maxheightnewvalue;
                    } else {
                        self.newvalueheight = newvalue;
                    }
                    self.fullheight = false;
                }




                if (maxwidthtnewvalue <= newvalue) {

                    self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                    if (newvalue > maxwidthtnewvalue) {

                        self.newvaluewidth = maxwidthtnewvalue;
                    } else {
                        self.newvaluewidth = newvalue;
                    }

                    self.fullwidth = true;


                }
                else {

                    self.widthRatio = (self.largeWidth / newvalue) / self.nzWidth;
                    self.newvaluewidth = newvalue;
                    self.fullwidth = false;
                }


            } //end inner
            scrcontinue = false;

            if (self.options.zoomType == "inner") {

                if (self.nzWidth >= self.nzHeight) {
                    if (self.newvaluewidth <= maxwidthtnewvalue) {
                        scrcontinue = true;
                    }
                    else {

                        scrcontinue = false;
                        self.fullheight = true;
                        self.fullwidth = true;
                    }
                }
                if (self.nzHeight > self.nzWidth) {
                    if (self.newvaluewidth <= maxwidthtnewvalue) {
                        scrcontinue = true;
                    }
                    else {
                        scrcontinue = false;

                        self.fullheight = true;
                        self.fullwidth = true;
                    }
                }
            }

            if (self.options.zoomType != "inner") {
                scrcontinue = true;
            }

            if (scrcontinue) {



                self.zoomLock = 0;
                self.changeZoom = true;

                //if lens height is less than image height


                if (((self.options.zoomWindowHeight) / self.heightRatio) <= self.nzHeight) {


                    self.currentZoomLevel = self.newvalueheight;
                    if (self.options.zoomType != "lens" && self.options.zoomType != "inner") {
                        self.changeBgSize = true;

                        self.zoomLens.css({ height: String((self.options.zoomWindowHeight) / self.heightRatio) + 'px' })
                    }
                    if (self.options.zoomType == "lens" || self.options.zoomType == "inner") {
                        self.changeBgSize = true;
                    }


                }




                if ((self.options.zoomWindowWidth / self.widthRatio) <= self.nzWidth) {



                    if (self.options.zoomType != "inner") {
                        if (self.newvaluewidth > self.newvalueheight) {
                            self.currentZoomLevel = self.newvaluewidth;

                        }
                    }

                    if (self.options.zoomType != "lens" && self.options.zoomType != "inner") {
                        self.changeBgSize = true;

                        self.zoomLens.css({ width: String((self.options.zoomWindowWidth) / self.widthRatio) + 'px' })
                    }
                    if (self.options.zoomType == "lens" || self.options.zoomType == "inner") {
                        self.changeBgSize = true;
                    }

                }
                if (self.options.zoomType == "inner") {
                    self.changeBgSize = true;

                    if (self.nzWidth > self.nzHeight) {
                        self.currentZoomLevel = self.newvaluewidth;
                    }
                    if (self.nzHeight > self.nzWidth) {
                        self.currentZoomLevel = self.newvaluewidth;
                    }
                }

            }      //under

            //sets the boundry change, called in setWindowPos
            self.setPosition(self.currentLoc);
            //
        },
        closeAll: function () {
            if (self.zoomWindow) { self.zoomWindow.hide(); }
            if (self.zoomLens) { self.zoomLens.hide(); }
            if (self.zoomTint) { self.zoomTint.hide(); }
        },
        changeState: function (value) {
            var self = this;
            if (value == 'enable') { self.options.zoomEnabled = true; }
            if (value == 'disable') { self.options.zoomEnabled = false; }

        }

    };




    $.fn.elevateZoom = function (options) {
        return this.each(function () {
            var elevate = Object.create(ElevateZoom);

            elevate.init(options, this);

            $.data(this, 'elevateZoom', elevate);

        });
    };

    $.fn.elevateZoom.options = {
        zoomActivation: "hover", // Can also be click (PLACEHOLDER FOR NEXT VERSION)
        zoomEnabled: true, //false disables zoomwindow from showing
        preloading: 1, //by default, load all the images, if 0, then only load images after activated (PLACEHOLDER FOR NEXT VERSION)
        zoomLevel: 1, //default zoom level of image
        scrollZoom: false, //allow zoom on mousewheel, true to activate
        scrollZoomIncrement: 0.1,  //steps of the scrollzoom
        minZoomLevel: false,
        maxZoomLevel: false,
        easing: false,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: false,
        lensFadeOut: false,
        debug: false,
        zoomWindowFadeIn: false,
        zoomWindowFadeOut: false,
        zoomWindowAlwaysShow: false,
        zoomTintFadeIn: false,
        zoomTintFadeOut: false,
        borderSize: 4,
        showLens: true,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square", //can be "round"
        zoomType: "window", //window is default,  also "lens" available -
        containLensZoom: false,
        lensColour: "white", //colour of the lens background
        lensOpacity: 0.4, //opacity of the lens
        lenszoom: false,
        tint: false, //enable the tinting
        tintColour: "#333", //default tint color, can be anything, red, #ccc, rgb(0,0,0)
        tintOpacity: 0.4, //opacity of the tint
        gallery: false,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: false,
        constrainType: false,  //width or height
        constrainSize: false,  //in pixels the dimensions you want to constrain on
        loadingIcon: false, //http://www.example.com/spinner.gif
        cursor: "default", // user should set to what they want the cursor as, if they have set a click function
        responsive: true,
        onComplete: $.noop,
        onZoomedImageLoaded: function () { },
        onImageSwap: $.noop,
        onImageSwapComplete: $.noop
    };

})(jQuery, window, document);


///////////////////////
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
    var J = f("html"), n = f(r), p = f(G), b = f.fancybox = function () { b.open.apply(this, arguments) }, I = navigator.userAgent.match(/msie/i), B = null, s = G.createTouch !== v, t = function (a) { return a && a.hasOwnProperty && a instanceof f }, q = function (a) { return a && "string" === f.type(a) }, E = function (a) { return q(a) && 0 < a.indexOf("%") }, l = function (a, d) { var e = parseInt(a, 10) || 0; d && E(a) && (e *= b.getViewport()[d] / 100); return Math.ceil(e) }, w = function (a, b) { return l(a, b) + "px" }; f.extend(b, {
        version: "2.1.5", defaults: {
            padding: 15, margin: 20,
            width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !s, fitToView: !0, aspectRatio: !1, topRatio: 0.5, leftRatio: 0.5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3E3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
            keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (I ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0,
            openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: f.noop, beforeLoad: f.noop, afterLoad: f.noop, beforeShow: f.noop, afterShow: f.noop, beforeChange: f.noop, beforeClose: f.noop, afterClose: f.noop
        }, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1,
        isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: { timer: null, isActive: !1 }, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
                var k = {}, g, h, j, m, l; "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = { href: c.data("fancybox-href") || c.attr("href"), title: c.data("fancybox-title") || c.attr("title"), isDom: !0, element: c }, f.metadata && f.extend(!0, k,
                    c.metadata())) : k = c); g = d.href || k.href || (q(c) ? c : null); h = d.title !== v ? d.title : k.title || ""; m = (j = d.content || k.content) ? "html" : d.type || k.type; !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null)); q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift())); j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g &&
                        k.isDom) && (m = "inline", j = c)); f.extend(k, { href: g, type: m, content: j, title: h, selector: l }); a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        }, cancel: function () {
            var a = b.coming; a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current ||
                b._afterZoomOut(a))
        }, close: function (a) { b.cancel(); !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()))) }, play: function (a) {
            var d = function () { clearTimeout(b.player.timer) }, e = function () {
                d(); b.current && b.player.isActive && (b.player.timer =
                    setTimeout(b.next, b.current.playSpeed))
            }, c = function () { d(); p.unbind(".player"); b.player.isActive = !1; b.trigger("onPlayEnd") }; if (!0 === a || !b.player.isActive && !1 !== a) { if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart") } else c()
        }, next: function (a) { var d = b.current; d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next")) }, prev: function (a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        }, jumpto: function (a, d, e) { var c = b.current; c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a))) }, reposition: function (a, d) { var e = b.current, c = e ? e.wrap : null, k; c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k))) }, update: function (a) {
            var d =
                a && a.type, e = !d || "orientationchange" === d; e && (clearTimeout(B), B = null); b.isOpen && !B && (B = setTimeout(function () { var c = b.current; c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null) }, e && !s ? 0 : 300))
        }, toggle: function (a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")),
                b.update())
        }, hideLoading: function () { p.unbind(".loading"); f("#fancybox-loading").remove() }, showLoading: function () { var a, d; b.hideLoading(); a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body"); p.bind("keydown.loading", function (a) { if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel() }); b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x })) }, getViewport: function () {
            var a = b.current && b.current.locked || !1, d = {
                x: n.scrollLeft(),
                y: n.scrollTop()
            }; a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height()); return d
        }, unbindEvents: function () { b.wrap && t(b.wrap) && b.wrap.unbind(".fb"); p.unbind(".fb"); n.unbind(".fb") }, bindEvents: function () {
            var a = b.current, d; a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
                var c = e.which || e.keyCode, k = e.target || e.srcElement;
                if (27 === c && b.coming) return !1; !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) { if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1; if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1 })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");)j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
                    (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent(); if (0 !== c && !j && 1 < b.group.length && !a.canShrink) { if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left"); else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right"); d.preventDefault() }
            }))
        }, trigger: function (a, d) {
            var e, c = d || b.coming || b.current; if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1))); if (!1 === e) return !1; c.helpers && f.each(c.helpers, function (d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0,
                        {}, b.helpers[d].defaults, e), c)
                }); p.trigger(a)
            }
        }, isImage: function (a) { return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) }, isSWF: function (a) { return q(a) && a.match(/\.(swf)((\?|#).*)?$/i) }, _start: function (a) {
            var d = {}, e, c; a = l(a); e = b.group[a] || null; if (!e) return !1; d = f.extend(!0, {}, b.opts, e); e = d.margin; c = d.padding; "number" === f.type(e) && (d.margin = [e, e, e, e]); "number" === f.type(c) && (d.padding = [c, c, c, c]); d.modal && f.extend(!0, d, {
                closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1,
                mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } }
            }); d.autoSize && (d.autoWidth = d.autoHeight = !0); "auto" === d.width && (d.autoWidth = !0); "auto" === d.height && (d.autoHeight = !0); d.group = b.group; d.index = a; b.coming = d; if (!1 === b.trigger("beforeLoad")) b.coming = null; else {
                c = d.type; e = d.href; if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1; b.isActive = !0; if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible"; "image" === c && (d.aspectRatio =
                    !0); "iframe" === c && s && (d.scrolling = "scroll"); d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body"); f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) }); f.each(["Top", "Right", "Bottom", "Left"], function (a, b) { d.skin.css("padding" + b, w(d.padding[a])) }); b.trigger("onReady"); if ("inline" === c || "html" === c) { if (!d.content || !d.content.length) return b._error("content") } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        }, _error: function (a) { f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error }); b._afterLoad() }, _loadImage: function () {
            var a = b.imgPreload = new Image; a.onload = function () { this.onload = this.onerror = null; b.coming.width = this.width / b.opts.pixelRatio; b.coming.height = this.height / b.opts.pixelRatio; b._afterLoad() }; a.onerror = function () {
                this.onload =
                this.onerror = null; b._error("image")
            }; a.src = b.coming.href; !0 !== a.complete && b.showLoading()
        }, _loadAjax: function () { var a = b.coming; b.showLoading(); b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function (a, e) { b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading() }, success: function (d, e) { "success" === e && (a.content = d, b._afterLoad()) } })) }, _loadIframe: function () {
            var a = b.coming, d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function () { try { f(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (a) { } }); a.iframe.preload && (b.showLoading(), d.one("load", function () { f(this).data("ready", 1); s || f(this).bind("load.fb", b.update); f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(); b._afterLoad() })); a.content = d.appendTo(a.inner); a.iframe.preload || b._afterLoad()
        }, _preloadImages: function () {
            var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload,
                e - 1) : 0, f, g; for (g = 1; g <= c; g += 1)f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        }, _afterLoad: function () {
            var a = b.coming, d = b.current, e, c, k, g, h; b.hideLoading(); if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
                d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()); b.unbindEvents(); e = a.content; c = a.type; k = a.scrolling; f.extend(b, {
                    wrap: a.wrap, skin: a.skin,
                    outer: a.outer, inner: a.inner, current: a, previous: d
                }); g = a.href; switch (c) {
                    case "inline": case "ajax": case "html": a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () { f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1) })); break; case "image": e = a.tpl.image.replace("{href}",
                        g); break; case "swf": e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) { e += '<param name="' + a + '" value="' + b + '"></param>'; h += " " + a + '="' + b + '"' }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e); b.trigger("beforeShow"); a.inner.css("overflow", "yes" === k ? "scroll" :
                    "no" === k ? "hidden" : k); b._setDimension(); b.reposition(); b.isOpen = !1; b.coming = null; b.bindEvents(); if (b.isOpened) { if (d.prevMethod) b.transitions[d.prevMethod]() } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(); b.transitions[b.isOpened ? a.nextMethod : a.openMethod](); b._preloadImages()
            }
        }, _setDimension: function () {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth, p = h.maxHeight, s = h.scrolling, q = h.scrollOutside ?
                h.scrollbarWidth : 0, x = h.margin, y = l(x[1] + x[3]), r = l(x[0] + x[2]), v, z, t, C, A, F, B, D, H; e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp"); x = l(k.outerWidth(!0) - k.width()); v = l(k.outerHeight(!0) - k.height()); z = y + x; t = r + v; C = E(c) ? (a.w - z) * l(c) / 100 : c; A = E(j) ? (a.h - t) * l(j) / 100 : j; if ("iframe" === h.type) { if (H = h.content, h.autoHeight && 1 === H.data("ready")) try { H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0)) } catch (G) { } } else if (h.autoWidth ||
                    h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp"); c = l(C); j = l(A); D = C / A; m = l(E(m) ? l(m, "w") - z : m); n = l(E(n) ? l(n, "w") - z : n); u = l(E(u) ? l(u, "h") - t : u); p = l(E(p) ? l(p, "h") - t : p); F = n; B = p; h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p)); z = a.w - y; r = a.h - r; h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight &&
                        "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p))); if (h.fitToView) if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio) for (; (a > z || y > r) && (c > m && j > u) && !(19 < d++);)j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(); else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r))); q && ("auto" === s && j < A && c + x + q < z) && (c += q); g.width(c).height(j); e.width(c + x); a = e.width();
            y = e.height(); e = (a > z || y > r) && c > m && j > u; c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A); f.extend(h, { dim: { width: w(a), height: w(y) }, origWidth: C, origHeight: A, canShrink: e, canExpand: c, wPadding: x, hPadding: v, wrapSpace: y - k.outerHeight(!0), skinSpace: k.height() - j }); !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        }, _getPosition: function (a) {
            var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3], g = b.wrap.height() + c[0] + c[2], c = { position: "absolute", top: c[0], left: c[3] }; d.autoCenter && d.fixed &&
                !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x); c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio)); c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio)); return c
        }, _afterZoomIn: function () {
            var a = b.current; a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(),
                    b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) { a.preventDefault(); b.close() }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        }, _afterZoomOut: function (a) {
            a =
            a || b.current; f(".fancybox-wrap").trigger("onReset").remove(); f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }); b.trigger("afterClose", a)
        }
    }); b.transitions = {
        getOrigPosition: function () {
            var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, j = a.wPadding, m = b.getViewport(); !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d)); t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) :
                (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio); if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x; return c = { top: w(c.top - h * a.topRatio), left: w(c.left - j * a.leftRatio), width: w(f + j), height: w(g + h) }
        }, step: function (a, d) {
            var e, c, f = d.prop; c = b.current; var g = c.wrapSpace, h = c.skinSpace; if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" ===
                f ? c : c - g * e - h * e))
        }, zoomIn: function () { var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, k = f.extend({ opacity: 1 }, d); delete k.position; c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1); b.wrap.css(d).animate(k, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn }) }, zoomOut: function () {
            var a = b.current, d = a.closeEffect, e = "elastic" === d, c = { opacity: 0.1 }; e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1)); b.wrap.animate(c,
                { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut })
        }, changeIn: function () { var a = b.current, d = a.nextEffect, e = a.pos, c = { opacity: 1 }, f = b.direction, g; e.opacity = 0.1; "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px")); "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn }) }, changeOut: function () {
            var a =
                b.previous, d = a.prevEffect, e = { opacity: 0.1 }, c = b.direction; "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px"); a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () { f(this).trigger("onReset").remove() } })
        }
    }; b.helpers.overlay = {
        defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0 }, overlay: null, fixed: !1, el: f("html"), create: function (a) {
            a = f.extend({}, this.defaults, a); this.overlay && this.close(); this.overlay =
                f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent); this.fixed = !1; a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        }, open: function (a) {
            var d = this; a = f.extend({}, this.defaults, a); this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a); this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update()); a.closeClick && this.overlay.bind("click.overlay", function (a) {
                if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ?
                    b.close() : d.close(), !1
            }); this.overlay.css(a.css).show()
        }, close: function () { var a, b; n.unbind("resize.overlay"); this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b)); f(".fancybox-overlay").remove().hide(); f.extend(this, { overlay: null, fixed: !1 }) }, update: function () {
            var a = "100%", b; this.overlay.width(a).height("100%"); I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth),
                p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width()); this.overlay.width(a).height(p.height())
        }, onReady: function (a, b) { var e = this.overlay; f(".fancybox-overlay").stop(!0, !0); e || this.create(a); a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1); !0 === a.showEarly && this.beforeShow.apply(this, arguments) }, beforeShow: function (a, b) {
            var e, c; b.locked && (!1 !== this.margin && (f("*").filter(function () {
                return "fixed" ===
                    f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c)); this.open(a)
        }, onUpdate: function () { this.fixed || this.update() }, afterClose: function (a) { this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this)) }
    }; b.helpers.title = {
        defaults: { type: "float", position: "bottom" }, beforeShow: function (a) {
            var d =
                b.current, e = d.title, c = a.type; f.isFunction(e) && (e = e.call(d.element, d)); if (q(e) && "" !== f.trim(e)) { d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>"); switch (c) { case "inside": c = b.skin; break; case "outside": c = b.wrap; break; case "over": c = b.inner; break; default: c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom"))) }d["top" === a.position ? "prependTo" : "appendTo"](c) }
        }
    }; f.fn.fancybox = function (a) {
        var d,
        e = f(this), c = this.selector || "", k = function (g) { var h = f(this).blur(), j = d, k, l; !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault()) }; a = a || {}; d = a.index || 0; !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c +
            ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k); this.filter("[data-fancybox-start=1]").trigger("click"); return this
    }; p.ready(function () {
        var a, d; f.scrollbarWidth === v && (f.scrollbarWidth = function () { var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth(); a.remove(); return b }); if (f.support.fixedPosition === v) {
            a = f.support; d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"); var e = 20 ===
                d[0].offsetTop || 15 === d[0].offsetTop; d.remove(); a.fixedPosition = e
        } f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") }); a = f(r).width(); J.addClass("fancybox-lock-test"); d = f(r).width(); J.removeClass("fancybox-lock-test"); f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);

/////////////////////
typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var n=e.History=e.History||{},r=e.jQuery;if(typeof n.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");n.Adapter={bind:function(e,t,n){r(e).bind(t,n)},trigger:function(e,t,n){r(e).trigger(t,n)},extractEventData:function(e,n,r){var i=n&&n.originalEvent&&n.originalEvent[e]||r&&r[e]||t;return i},onDomLoad:function(e){r(e)}},typeof n.init!="undefined"&&n.init()}(window),function(e,t){"use strict";var n=e.document,r=e.setTimeout||r,i=e.clearTimeout||i,s=e.setInterval||s,o=e.History=e.History||{};if(typeof o.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){if(typeof o.initHtml4.initialized!="undefined")return!1;o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t=o.getHashByIndex(),n;return n=e===t,n},o.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return typeof e=="undefined"?t=o.savedHashes[o.savedHashes.length-1]:e<0?t=o.savedHashes[o.savedHashes.length+e]:t=o.savedHashes[e],t},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,n){var r=o.getHashByState(e),i;return i={discardedState:e,backState:n,forwardState:t},o.discardedStates[r]=i,!0},o.discardHash=function(e,t,n){var r={discardedHash:e,backState:n,forwardState:t};return o.discardedHashes[e]=r,!0},o.discardedState=function(e){var t=o.getHashByState(e),n;return n=o.discardedStates[t]||!1,n},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&&delete o.discardedStates[t],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var t="",r,i,u,a,f=Boolean(o.getHash());return o.isInternetExplorer()?(r="historyjs-iframe",i=n.createElement("iframe"),i.setAttribute("id",r),i.setAttribute("src","#"),i.style.display="none",n.body.appendChild(i),i.contentWindow.document.open(),i.contentWindow.document.close(),u="",a=!1,o.checkerFunction=function(){if(a)return!1;a=!0;var n=o.getHash(),r=o.getHash(i.contentWindow.document);return n!==t?(t=n,r!==n&&(u=r=n,i.contentWindow.document.open(),i.contentWindow.document.close(),i.contentWindow.document.location.hash=o.escapeHash(n)),o.Adapter.trigger(e,"hashchange")):r!==u&&(u=r,f&&r===""?o.back():o.setHash(r,!1)),a=!1,!0}):o.checkerFunction=function(){var n=o.getHash()||"";return n!==t&&(t=n,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(s(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(t){var n=t&&t.newURL||o.getLocationHref(),r=o.getHashByUrl(n),i=null,s=null,u=null,a;return o.isLastHash(r)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(r),r&&o.isTraditionalAnchor(r)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(i=o.extractState(o.getFullUrl(r||o.getLocationHref()),!0),o.isLastSavedState(i)?(o.busy(!1),!1):(s=o.getHashByState(i),a=o.discardedState(i),a?(o.getHashByIndex(-2)===o.getHashByState(a.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i.data,i.title,encodeURI(i.url),!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getHash(),c=o.expectedStateId==s.id;return o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),u===f?(o.busy(!1),!1):(o.saveState(s),c||o.Adapter.trigger(e,"statechange"),!o.isHashEqual(u,l)&&!o.isHashEqual(u,o.getShortUrl(o.getLocationHref()))&&o.setHash(u,!1),o.busy(!1),!0)},o.replaceState=function(t,n,r,i){r=encodeURI(r).replace(/%25/g,"%");if(o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(i!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:i}),!1;o.busy(!0);var s=o.createStateObject(t,n,r),u=o.getHashByState(s),a=o.getState(!1),f=o.getHashByState(a),l=o.getStateByIndex(-2);return o.discardState(a,s,l),u===f?(o.storeState(s),o.expectedStateId=s.id,o.recycleState(s),o.setTitle(s),o.saveState(s),o.Adapter.trigger(e,"statechange"),o.busy(!1)):o.pushState(s.data,s.title,s.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")})},typeof o.init!="undefined"&&o.init()}(window),function(e,t){"use strict";var n=e.console||t,r=e.document,i=e.navigator,s=!1,o=e.setTimeout,u=e.clearTimeout,a=e.setInterval,f=e.clearInterval,l=e.JSON,c=e.alert,h=e.History=e.History||{},p=e.history;try{s=e.sessionStorage,s.setItem("TEST","1"),s.removeItem("TEST")}catch(d){s=!1}l.stringify=l.stringify||l.encode,l.parse=l.parse||l.decode;if(typeof h.init!="undefined")throw new Error("History.js Core has already been loaded...");h.init=function(e){return typeof h.Adapter=="undefined"?!1:(typeof h.initCore!="undefined"&&h.initCore(),typeof h.initHtml4!="undefined"&&h.initHtml4(),!0)},h.initCore=function(d){if(typeof h.initCore.initialized!="undefined")return!1;h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||r.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(typeof t!="undefined"&&t!==null){for(e=0;e<t.length;e++)f(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e=typeof n!="undefined"&&typeof n.log!="undefined"&&typeof n.log.apply!="undefined",t=r.getElementById("log"),i,s,o,u,a;e?(u=Array.prototype.slice.call(arguments),i=u.shift(),typeof n.debug!="undefined"?n.debug.apply(n,[i,u]):n.log.apply(n,[i,u])):i="\n"+arguments[0]+"\n";for(s=1,o=arguments.length;s<o;++s){a=arguments[s];if(typeof a=="object"&&typeof l!="undefined")try{a=l.stringify(a)}catch(f){}i+="\n"+a+"\n"}return t?(t.value+=i+"\n-----\n",t.scrollTop=t.scrollHeight-t.clientHeight):e||c(i),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=typeof h.getInternetExplorerMajorVersion.cached!="undefined"?h.getInternetExplorerMajorVersion.cached:function(){var e=3,t=r.createElement("div"),n=t.getElementsByTagName("i");while((t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&n[0]);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=typeof h.isInternetExplorer.cached!="undefined"?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.options.html4Mode?h.emulated={pushState:!0,hashChange:!0}:h.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8)},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&i.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(h.isInternetExplorer()&&h.getInternetExplorerMajorVersion()<7)},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,n;return e?(t=l.stringify(e),n=l.parse(t)):n={},n},h.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);if(r.location.port||!1)e+=":"+r.location.port;return e+="/",e},h.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,n="";return e.length===1&&(t=e[0],n=t.href.replace(/[^\/]+$/,"")),n=n.replace(/\/+$/,""),n&&(n+="/"),n},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e=h.getState(!1,!1),t=(e||{}).url||h.getLocationHref(),n;return n=t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,n){return/\./.test(e)?e:e+"/"}),n},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,n){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var n=e,r=e.substring(0,1);return t=typeof t=="undefined"?!0:t,/[a-z]+\:\/\//.test(e)||(r==="/"?n=h.getRootUrl()+e.replace(/^\/+/,""):r==="#"?n=h.getPageUrl().replace(/#.*/,"")+e:r==="?"?n=h.getPageUrl().replace(/[\?#].*/,"")+e:t?n=h.getBaseUrl()+e.replace(/^(\.\/)+/,""):n=h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),n.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,n=h.getBaseUrl(),r=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(n,"")),t=t.replace(r,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),t},h.getLocationHref=function(e){return e=e||r,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){typeof e=="undefined"&&(e=!0),typeof t=="undefined"&&(t=!0);var n=h.getLastSavedState();return!n&&t&&(n=h.createStateObject()),e&&(n=h.cloneObject(n),n.url=n.cleanUrl||n.url),n},h.getIdByState=function(e){var t=h.extractId(e.url),n;if(!t){n=h.getStateString(e);if(typeof h.stateToId[n]!="undefined")t=h.stateToId[n];else if(typeof h.store.stateToId[n]!="undefined")t=h.store.stateToId[n];else{for(;;){t=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof h.idToState[t]=="undefined"&&typeof h.store.idToState[t]=="undefined")break}h.stateToId[n]=t,h.idToState[t]=e}}return t},h.normalizeState=function(e){var t,n;if(!e||typeof e!="object")e={};if(typeof e.normalized!="undefined")return e;if(!e.data||typeof e.data!="object")e.data={};return t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,n=!h.isEmptyObject(t.data),(t.title||n)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t},h.createStateObject=function(e,t,n){var r={data:e,title:t,url:n};return r=h.normalizeState(r),r},h.getStateById=function(e){e=String(e);var n=h.idToState[e]||h.store.idToState[e]||t;return n},h.getStateString=function(e){var t,n,r;return t=h.normalizeState(e),n={data:t.data,title:e.title,url:e.url},r=l.stringify(n),r},h.getStateId=function(e){var t,n;return t=h.normalizeState(e),n=t.id,n},h.getHashByState=function(e){var t,n;return t=h.normalizeState(e),n=t.hash,n},h.extractId=function(e){var t,n,r,i;return e.indexOf("#")!=-1?i=e.split("#")[0]:i=e,n=/(.*)\&_suid=([0-9]+)$/.exec(i),r=n?n[1]||e:e,t=n?String(n[2]||""):"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var n=null,r,i;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(i=h.getFullUrl(e),r=h.getIdByUrl(i)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,i))),n},h.getIdByUrl=function(e){var n=h.urlToId[e]||h.store.urlToId[e]||t;return n},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t=!1,n;return n=h.extractState(e.url),t=n&&n.id!==e.id,t},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t=!1,n,r,i;return h.savedStates.length&&(n=e.id,r=h.getLastSavedState(),i=r.id,t=n===i),t},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return typeof e=="undefined"?t=h.savedStates[h.savedStates.length-1]:e<0?t=h.savedStates[h.savedStates.length+e]:t=h.savedStates[e],t},h.getCurrentIndex=function(){var e=null;return h.savedStates.length<1?e=0:e=h.savedStates.length-1,e},h.getHash=function(e){var t=h.getLocationHref(e),n;return n=h.getHashByUrl(t),n},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t),t},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var n,i;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),n=h.extractState(e,!0),n&&!h.emulated.pushState?h.pushState(n.data,n.title,n.url,!1):h.getHash()!==e&&(h.bugs.setHash?(i=h.getPageUrl(),h.pushState(null,null,i+"#"+e,!1)):r.location.hash=e),h)},h.escapeHash=function(t){var n=h.normalizeHash(t);return n=e.encodeURIComponent(n),h.bugs.hashEscape||(n=n.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),n},h.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t),t},h.setTitle=function(e){var t=e.title,n;t||(n=h.getStateByIndex(0),n&&n.url===e.url&&(t=n.title||h.options.initialTitle));try{r.getElementsByTagName("title")[0].innerHTML=t.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(i){}return r.title=t,h},h.queues=[],h.busy=function(e){typeof e!="undefined"?h.busy.flag=e:typeof h.busy.flag=="undefined"&&(h.busy.flag=!1);if(!h.busy.flag){u(h.busy.timeout);var t=function(){var e,n,r;if(h.busy.flag)return;for(e=h.queues.length-1;e>=0;--e){n=h.queues[e];if(n.length===0)continue;r=n.shift(),h.fireQueueItem(r),h.busy.timeout=o(t,h.options.busyDelay)}};h.busy.timeout=o(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return typeof e=="function"&&(e={callback:e}),typeof t!="undefined"&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(u(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=o(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t=h.extractState(h.getLocationHref()),n;if(!h.isLastSavedState(t))return n=t,n||(n=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h;return},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var n;if(e>0)for(n=1;n<=e;++n)h.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(n=-1;n>=e;--n)h.back(t)}return h};if(h.emulated.pushState){var v=function(){};h.pushState=h.pushState||v,h.replaceState=h.replaceState||v}else h.onPopState=function(t,n){var r=!1,i=!1,s,o;return h.doubleCheckComplete(),s=h.getHash(),s?(o=h.extractState(s||h.getLocationHref(),!0),o?h.replaceState(o.data,o.title,o.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(r=h.Adapter.extractEventData("state",t,n)||!1,r?i=h.getStateById(r):h.expectedStateId?i=h.getStateById(h.expectedStateId):i=h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.pushState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,n,r,i){if(h.getHashByUrl(r)&&h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(i!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:i}),!1;h.busy(!0);var s=h.createStateObject(t,n,r);return h.isLastSavedState(s)?h.busy(!1):(h.storeState(s),h.expectedStateId=s.id,p.replaceState(s.id,s.title,s.url),h.Adapter.trigger(e,"popstate")),!0};if(s){try{h.store=l.parse(s.getItem("History.store"))||{}}catch(m){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),s&&(h.onUnload=function(){var e,t,n;try{e=l.parse(s.getItem("History.store"))||{}}catch(r){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState){if(!h.idToState.hasOwnProperty(t))continue;e.idToState[t]=h.idToState[t]}for(t in h.urlToId){if(!h.urlToId.hasOwnProperty(t))continue;e.urlToId[t]=h.urlToId[t]}for(t in h.stateToId){if(!h.stateToId.hasOwnProperty(t))continue;e.stateToId[t]=h.stateToId[t]}h.store=e,h.normalizeStore(),n=l.stringify(e);try{s.setItem("History.store",n)}catch(i){if(i.code!==DOMException.QUOTA_EXCEEDED_ERR)throw i;s.length&&(s.removeItem("History.store"),s.setItem("History.store",n))}},h.intervalList.push(a(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload));if(!h.emulated.pushState){h.bugs.safariPoll&&h.intervalList.push(a(h.safariStatePoll,h.options.safariPollInterval));if(i.vendor==="Apple Computer, Inc."||(i.appCodeName||"")==="Mozilla")h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})}},(!h.options||!h.options.delayInit)&&h.init()}(window)


 //////////////////////////////////////
 !function(t){function n(){t[s].glbl||(d={$wndw:t(window),$html:t("html"),$body:t("body")},a={},l={},r={},t.each([a,l,r],function(e,t){t.add=function(e){e=e.split(" ");for(var n in e)t[e[n]]=t.mm(e[n])}}),a.mm=function(e){return"mm-"+e},a.add("wrapper menu vertical panel nopanel current highest opened subopened header hasheader title btn prev next first last listview nolistview selected divider spacer hidden fullsubopen"),a.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},l.mm=function(e){return"mm-"+e},l.add("parent sub"),r.mm=function(e){return e+".mm"},r.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"),t[s]._c=a,t[s]._d=l,t[s]._e=r,t[s].glbl=d)}var s="mmenu",i="5.0.4";if(!t[s]){t[s]=function(e,t,n){this.$menu=e,this._api=["bind","init","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=t,this.conf=n,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var s=this.$menu.children(this.conf.panelNodetype);return this._initAddons(),this.init(s),"function"==typeof this.___debug&&this.___debug(),this},t[s].version=i,t[s].addons={},t[s].uniqueId=0,t[s].defaults={extensions:[],onClick:{setSelected:!0},slidingSubmenus:!0},t[s].configuration={classNames:{panel:"Panel",vertical:"Vertical",selected:"Selected",divider:"Divider",spacer:"Spacer"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},t[s].prototype={init:function(e){e=e.not("."+a.nopanel),e=this._initPanels(e),this.trigger("init",e),this.trigger("update")},update:function(){this.trigger("update")},setSelected:function(e){this.$menu.find("."+a.listview).children().removeClass(a.selected),e.addClass(a.selected),this.trigger("setSelected",e)},openPanel:function(e){var n=e.parent();if(n.hasClass(a.vertical)){var s=n.parents("."+a.subopened);if(s.length)return this.openPanel(s.first());n.addClass(a.opened)}else{if(e.hasClass(a.current))return;var i=t(this.$menu).children("."+a.panel),l=i.filter("."+a.current);i.removeClass(a.highest).removeClass(a.current).not(e).not(l).not("."+a.vertical).addClass(a.hidden),e.hasClass(a.opened)?l.addClass(a.highest).removeClass(a.opened).removeClass(a.subopened):(e.addClass(a.highest),l.addClass(a.subopened)),e.removeClass(a.hidden).addClass(a.current),setTimeout(function(){e.removeClass(a.subopened).addClass(a.opened)},this.conf.openingInterval)}this.trigger("openPanel",e)},closePanel:function(e){var t=e.parent();t.hasClass(a.vertical)&&(t.removeClass(a.opened),this.trigger("closePanel",e))},closeAllPanels:function(){this.$menu.find("."+a.listview).children().removeClass(a.selected).filter("."+a.vertical).removeClass(a.opened);var e=this.$menu.children("."+a.panel),t=e.first();this.$menu.children("."+a.panel).not(t).removeClass(a.subopened).removeClass(a.opened).removeClass(a.current).removeClass(a.highest).addClass(a.hidden),this.openPanel(t)},togglePanel:function(e){var t=e.parent();t.hasClass(a.vertical)&&this[t.hasClass(a.opened)?"closePanel":"openPanel"](e)},getInstance:function(){return this},bind:function(e,t){this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var t=this,n=Array.prototype.slice.call(arguments),s=n.shift();if(this.cbck[s])for(e in this.cbck[s])this.cbck[s][e].apply(t,n)},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){t(this).attr("id",a.mm(t(this).attr("id")))})),this.$menu.contents().each(function(){3==t(this)[0].nodeType&&t(this).remove()}),this.$menu.parent().addClass(a.wrapper);var e=[a.menu];this.opts.slidingSubmenus||e.push(a.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&e.push(this.opts.extensions),this.$menu.addClass(e.join(" "))},_initPanels:function(e){var n=this;this.__findAddBack(e,"ul, ol").not("."+a.nolistview).addClass(a.listview);var s=this.__findAddBack(e,"."+a.listview).children();this.__refactorClass(s,this.conf.classNames.selected,"selected"),this.__refactorClass(s,this.conf.classNames.divider,"divider"),this.__refactorClass(s,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(e,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var i=t(),r=e.add(this.__findAddBack(e,"."+a.listview).children().children(this.conf.panelNodetype)).not("."+a.nopanel);this.__refactorClass(r,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||r.addClass(a.vertical),r.each(function(){var e=t(this),s=e;e.is("ul, ol")?(e.wrap('<div class="'+a.panel+'" />'),s=e.parent()):s.addClass(a.panel);var l=e.attr("id");e.removeAttr("id"),s.attr("id",l||n.__getUniqueId()),e.hasClass(a.vertical)&&(e.removeClass(n.conf.classNames.vertical),s.add(s.parent()).addClass(a.vertical)),i=i.add(s);var r=s.children().first(),d=s.children().last();r.is("."+a.listview)&&r.addClass(a.first),d.is("."+a.listview)&&d.addClass(a.last)});var d=t("."+a.panel,this.$menu);i.each(function(){var e=t(this),n=e.parent(),s=n.children("a, span");if(!n.is("."+a.menu)&&!e.data(l.parent)){if(n.data(l.sub,e),e.data(l.parent,n),n.parent().is("."+a.listview)){var i=e.attr("id"),r=t('<a class="'+a.next+'" href="#'+i+'" data-target="#'+i+'" />').insertBefore(s);s.is("a")||r.addClass(a.fullsubopen)}if(!n.hasClass(a.vertical)){var d=n.closest("."+a.panel);if(d.length){var i=d.attr("id");e.prepend('<div class="'+a.header+'"><a class="'+a.btn+" "+a.prev+'" href="#'+i+'" data-target="#'+i+'"></a><a class="'+a.title+'">'+s.text()+"</a></div>"),e.addClass(a.hasheader)}}}});var o=this.__findAddBack(e,"."+a.listview).children("."+a.selected).removeClass(a.selected).last().addClass(a.selected);o.add(o.parentsUntil("."+a.menu,"li")).filter("."+a.vertical).addClass(a.opened).end().not("."+a.vertical).each(function(){t(this).parentsUntil("."+a.menu,"."+a.panel).not("."+a.vertical).first().addClass(a.opened).parentsUntil("."+a.menu,"."+a.panel).not("."+a.vertical).first().addClass(a.opened).addClass(a.subopened)}),o.children("."+a.panel).not("."+a.vertical).addClass(a.opened).parentsUntil("."+a.menu,"."+a.panel).not("."+a.vertical).first().addClass(a.opened).addClass(a.subopened);var c=d.filter("."+a.opened);return c.length||(c=i.first()),c.addClass(a.opened).last().addClass(a.current),i.not("."+a.vertical).not(c.last()).addClass(a.hidden).end().appendTo(this.$menu),i},_initAnchors:function(){var e=this;d.$body.on(r.click+"-oncanvas","a[href]",function(n){var i=t(this),l=!1,r=e.$menu.find(i).length;for(var o in t[s].addons)if(l=t[s].addons[o].clickAnchor.call(e,i,r))break;if(!l&&r){var c=i.attr("href");if(c.length>1&&"#"==c.slice(0,1)){var h=t(c,e.$menu);h.is("."+a.panel)&&(l=!0,e[i.parent().hasClass(a.vertical)?"togglePanel":"openPanel"](h))}}if(l&&n.preventDefault(),!l&&r&&i.is("."+a.listview+" > li > a")&&!i.is('[rel="external"]')&&!i.is('[target="_blank"]')){e.__valueOrFn(e.opts.onClick.setSelected,i)&&e.setSelected(t(n.target).parent());var u=e.__valueOrFn(e.opts.onClick.preventDefault,i,"#"==c.slice(0,1));u&&n.preventDefault(),e.__valueOrFn(e.opts.onClick.blockUI,i,!u)&&d.$html.addClass(a.blocking),e.__valueOrFn(e.opts.onClick.close,i,u)&&e.close()}})},_initAddons:function(){for(var e in t[s].addons)t[s].addons[e].add.call(this),t[s].addons[e].add=function(){};for(var e in t[s].addons)t[s].addons[e].setup.call(this)},__api:function(){var e=this,n={};return t.each(this._api,function(){var t=this;n[t]=function(){var s=e[t].apply(e,arguments);return"undefined"==typeof s?n:s}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(a[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+a.divider).not("."+a.hidden)},__transitionend:function(e,t,n){var s=!1,i=function(){s||t.call(e[0]),s=!0};e.one(r.transitionend,i),e.one(r.webkitTransitionEnd,i),setTimeout(i,1.1*n)},__getUniqueId:function(){return a.mm(t[s].uniqueId++)}},t.fn[s]=function(e,i){return n(),e=t.extend(!0,{},t[s].defaults,e),i=t.extend(!0,{},t[s].configuration,i),this.each(function(){var n=t(this);if(!n.data(s)){var a=new t[s](n,e,i);n.data(s,a.__api())}})},t[s].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints};var a,l,r,d}}(jQuery);
/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var t="mmenu",o="offCanvas";e[t].addons[o]={setup:function(){if(this.opts[o]){var n=this.opts[o],i=this.conf[o];a=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),("top"==n.position||"bottom"==n.position)&&(n.zposition="front"),"string"!=typeof i.pageSelector&&(i.pageSelector="> "+i.pageNodetype),a.$allMenus=(a.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[s.offcanvas];"left"!=n.position&&r.push(s.mm(n.position)),"back"!=n.zposition&&r.push(s.mm(n.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper),this.setPage(a.$page),this._initBlocker(),this["_initWindow_"+o](),this.$menu[i.menuInjectMethod+"To"](i.menuWrapperSelector)}},add:function(){s=e[t]._c,n=e[t]._d,i=e[t]._e,s.add("offcanvas slideout modal background opening blocker page"),n.add("style"),i.add("resize")},clickAnchor:function(e){if(!this.opts[o])return!1;var t=this.$menu.attr("id");if(t&&t.length&&(this.conf.clone&&(t=s.umm(t)),e.is('[href="#'+t+'"]')))return this.open(),!0;if(a.$page){var t=a.$page.attr("id");return t&&t.length&&e.is('[href="#'+t+'"]')?(this.close(),!0):!1}}},e[t].defaults[o]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[t].configuration[o]={pageNodetype:"div",pageSelector:null,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[t].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[t].prototype._openSetup=function(){var e=this;this.closeAllOthers(),a.$page.data(n.style,a.$page.attr("style")||""),a.$wndw.trigger(i.resize+"-offcanvas",[!0]);var t=[s.opened];this.opts[o].modal&&t.push(s.modal),this.opts[o].moveBackground&&t.push(s.background),"left"!=this.opts[o].position&&t.push(s.mm(this.opts[o].position)),"back"!=this.opts[o].zposition&&t.push(s.mm(this.opts[o].zposition)),this.opts.extensions&&t.push(this.opts.extensions),a.$html.addClass(t.join(" ")),setTimeout(function(){e.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(s.current+" "+s.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(a.$page,function(){e.trigger("opened")},this.conf.transitionDuration),a.$html.addClass(s.opening),this.trigger("opening")},e[t].prototype.close=function(){if(this.vars.opened){var e=this;this.__transitionend(a.$page,function(){e.$menu.removeClass(s.current).removeClass(s.opened),a.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[o].position)).removeClass(s.mm(e.opts[o].zposition)),e.opts.extensions&&a.$html.removeClass(e.opts.extensions),a.$page.attr("style",a.$page.data(n.style)),e.vars.opened=!1,e.trigger("closed")},this.conf.transitionDuration),a.$html.removeClass(s.opening),this.trigger("close"),this.trigger("closing")}},e[t].prototype.closeAllOthers=function(){a.$allMenus.not(this.$menu).each(function(){var o=e(this).data(t);o&&o.close&&o.close()})},e[t].prototype.setPage=function(t){t&&t.length||(t=e(this.conf[o].pageSelector,a.$body),t.length>1&&(t=t.wrapAll("<"+this.conf[o].pageNodetype+" />").parent())),t.attr("id",t.attr("id")||this.__getUniqueId()),t.addClass(s.page+" "+s.slideout),a.$page=t,this.trigger("setPage",t)},e[t].prototype["_initWindow_"+o]=function(){a.$wndw.off(i.keydown+"-offcanvas").on(i.keydown+"-offcanvas",function(e){return a.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var e=0;a.$wndw.off(i.resize+"-offcanvas").on(i.resize+"-offcanvas",function(t,o){if(o||a.$html.hasClass(s.opened)){var n=a.$wndw.height();(o||n!=e)&&(e=n,a.$page.css("minHeight",n))}})},e[t].prototype._initBlocker=function(){var t=this;a.$blck||(a.$blck=e('<div id="'+s.blocker+'" class="'+s.slideout+'" />')),a.$blck.appendTo(a.$body).off(i.touchstart+"-offcanvas "+i.touchmove+"-offcanvas").on(i.touchstart+"-offcanvas "+i.touchmove+"-offcanvas",function(e){e.preventDefault(),e.stopPropagation(),a.$blck.trigger(i.mousedown+"-offcanvas")}).off(i.mousedown+"-offcanvas").on(i.mousedown+"-offcanvas",function(e){e.preventDefault(),a.$html.hasClass(s.modal)||(t.closeAllOthers(),t.close())})};var s,n,i,a}(jQuery);
/*	
 * jQuery mmenu autoHeight addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",i="autoHeight";t[e].addons[i]={setup:function(){if(this.opts.offCanvas){switch(this.opts.offCanvas.position){case"left":case"right":return}var n=this,o=this.opts[i];if(this.conf[i],h=t[e].glbl,"boolean"==typeof o&&o&&(o={height:"auto"}),"object"!=typeof o&&(o={}),o=this.opts[i]=t.extend(!0,{},t[e].defaults[i],o),"auto"==o.height){this.$menu.addClass(s.autoheight);var u=function(t){var e=this.$menu.children("."+s.current);_top=parseInt(e.css("top"),10)||0,_bot=parseInt(e.css("bottom"),10)||0,this.$menu.addClass(s.measureheight),t=t||this.$menu.children("."+s.current),t.is("."+s.vertical)&&(t=t.parents("."+s.panel).not("."+s.vertical).first()),this.$menu.height(t.outerHeight()+_top+_bot).removeClass(s.measureheight)};this.bind("update",u),this.bind("openPanel",u),this.bind("closePanel",u),this.bind("open",u),h.$wndw.off(a.resize+"-autoheight").on(a.resize+"-autoheight",function(){u.call(n)})}}},add:function(){s=t[e]._c,n=t[e]._d,a=t[e]._e,s.add("autoheight measureheight"),a.add("resize")},clickAnchor:function(){}},t[e].defaults[i]={height:"default"};var s,n,a,h}(jQuery);
/*	
 * jQuery mmenu backButton addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(o){var t="mmenu",n="backButton";o[t].addons[n]={setup:function(){if(this.opts.offCanvas){var i=this,e=this.opts[n];if(this.conf[n],a=o[t].glbl,"boolean"==typeof e&&(e={close:e}),"object"!=typeof e&&(e={}),e=o.extend(!0,{},o[t].defaults[n],e),e.close){var c="#"+i.$menu.attr("id");this.bind("opened",function(){location.hash!=c&&history.pushState(null,document.title,c)}),o(window).on("popstate",function(o){a.$html.hasClass(s.opened)?(o.stopPropagation(),i.close()):location.hash==c&&(o.stopPropagation(),i.open())})}}},add:function(){return window.history&&window.history.pushState?(s=o[t]._c,i=o[t]._d,e=o[t]._e,void 0):(o[t].addons[n].setup=function(){},void 0)},clickAnchor:function(){}},o[t].defaults[n]={close:!1};var s,i,e,a}(jQuery);
/*	
 * jQuery mmenu buttonbars addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var n="mmenu",i="buttonbars";t[n].addons[i]={setup:function(){this.opts[i],this.conf[i],s=t[n].glbl,this.bind("init",function(n){this.__refactorClass(t("div",n),this.conf.classNames[i].buttonbar,"buttonbar"),t("."+a.buttonbar,n).each(function(){var n=t(this),i=n.children().not("input"),o=n.children().filter("input");n.addClass(a.buttonbar+"-"+i.length),o.each(function(){var n=t(this),a=i.filter('label[for="'+n.attr("id")+'"]');a.length&&n.insertBefore(a)})})})},add:function(){a=t[n]._c,o=t[n]._d,r=t[n]._e,a.add("buttonbar")},clickAnchor:function(){}},t[n].configuration.classNames[i]={buttonbar:"Buttonbar"};var a,o,r,s}(jQuery);
/*	
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var n="mmenu",e="counters";t[n].addons[e]={setup:function(){var c=this,o=this.opts[e];this.conf[e],s=t[n].glbl,"boolean"==typeof o&&(o={add:o,update:o}),"object"!=typeof o&&(o={}),o=this.opts[e]=t.extend(!0,{},t[n].defaults[e],o),this.bind("init",function(n){this.__refactorClass(t("em",n),this.conf.classNames[e].counter,"counter")}),o.add&&this.bind("init",function(n){n.each(function(){var n=t(this).data(a.parent);n&&(n.children("em."+i.counter).length||n.prepend(t('<em class="'+i.counter+'" />')))})}),o.update&&this.bind("update",function(){this.$menu.find("."+i.panel).each(function(){var n=t(this),e=n.data(a.parent);if(e){var s=e.children("em."+i.counter);s.length&&(n=n.children("."+i.listview),n.length&&s.html(c.__filterListItems(n.children()).length))}})})},add:function(){i=t[n]._c,a=t[n]._d,c=t[n]._e,i.add("counter search noresultsmsg")},clickAnchor:function(){}},t[n].defaults[e]={add:!1,update:!1},t[n].configuration.classNames[e]={counter:"Counter"};var i,a,c,s}(jQuery);
/*	
 * jQuery mmenu dividers addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(i){var e="mmenu",s="dividers";i[e].addons[s]={setup:function(){var n=this,a=this.opts[s];if(this.conf[s],l=i[e].glbl,"boolean"==typeof a&&(a={add:a,fixed:a}),"object"!=typeof a&&(a={}),a=this.opts[s]=i.extend(!0,{},i[e].defaults[s],a),this.bind("init",function(){this.__refactorClass(i("li",this.$menu),this.conf.classNames[s].collapsed,"collapsed")}),a.add&&this.bind("init",function(e){switch(a.addTo){case"panels":var s=e;break;default:var s=i(a.addTo,this.$menu).filter("."+d.panel)}i("."+d.divider,s).remove(),s.find("."+d.listview).not("."+d.vertical).each(function(){var e="";n.__filterListItems(i(this).children()).each(function(){var s=i.trim(i(this).children("a, span").text()).slice(0,1).toLowerCase();s!=e&&s.length&&(e=s,i('<li class="'+d.divider+'">'+s+"</li>").insertBefore(this))})})}),a.collapse&&this.bind("init",function(e){i("."+d.divider,e).each(function(){var e=i(this),s=e.nextUntil("."+d.divider,"."+d.collapsed);s.length&&(e.children("."+d.subopen).length||(e.wrapInner("<span />"),e.prepend('<a href="#" class="'+d.subopen+" "+d.fullsubopen+'" />')))})}),a.fixed){var o=function(e){e=e||this.$menu.children("."+d.current);var s=e.find("."+d.divider).not("."+d.hidden);if(s.length){this.$menu.addClass(d.hasdividers);var n=e.scrollTop()||0,t="";e.is(":visible")&&e.find("."+d.divider).not("."+d.hidden).each(function(){i(this).position().top+n<n+1&&(t=i(this).text())}),this.$fixeddivider.text(t)}else this.$menu.removeClass(d.hasdividers)};this.$fixeddivider=i('<ul class="'+d.listview+" "+d.fixeddivider+'"><li class="'+d.divider+'"></li></ul>').prependTo(this.$menu).children(),this.bind("openPanel",o),this.bind("init",function(e){e.off(t.scroll+"-dividers "+t.touchmove+"-dividers").on(t.scroll+"-dividers "+t.touchmove+"-dividers",function(){o.call(n,i(this))})})}},add:function(){d=i[e]._c,n=i[e]._d,t=i[e]._e,d.add("collapsed uncollapsed fixeddivider hasdividers"),t.add("scroll")},clickAnchor:function(i,e){if(this.opts[s].collapse&&e){var n=i.parent();if(n.is("."+d.divider)){var t=n.nextUntil("."+d.divider,"."+d.collapsed);return n.toggleClass(d.opened),t[n.hasClass(d.opened)?"addClass":"removeClass"](d.uncollapsed),!0}}return!1}},i[e].defaults[s]={add:!1,addTo:"panels",fixed:!1,collapse:!1},i[e].configuration.classNames[s]={collapsed:"Collapsed"};var d,n,t,l}(jQuery);
/*	
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function t(e,t,n){return t>e&&(e=t),e>n&&(e=n),e}var n="mmenu",o="dragOpen";e[n].addons[o]={setup:function(){if(this.opts.offCanvas){var i=this,a=this.opts[o],p=this.conf[o];if(r=e[n].glbl,"boolean"==typeof a&&(a={open:a}),"object"!=typeof a&&(a={}),a=this.opts[o]=e.extend(!0,{},e[n].defaults[o],a),a.open){var d,f,c,u,h,l={},m=0,g=!1,v=!1,w=0,_=0;switch(this.opts.offCanvas.position){case"left":case"right":l.events="panleft panright",l.typeLower="x",l.typeUpper="X",v="width";break;case"top":case"bottom":l.events="panup pandown",l.typeLower="y",l.typeUpper="Y",v="height"}switch(this.opts.offCanvas.position){case"right":case"bottom":l.negative=!0,u=function(e){e>=r.$wndw[v]()-a.maxStartPos&&(m=1)};break;default:l.negative=!1,u=function(e){e<=a.maxStartPos&&(m=1)}}switch(this.opts.offCanvas.position){case"left":l.open_dir="right",l.close_dir="left";break;case"right":l.open_dir="left",l.close_dir="right";break;case"top":l.open_dir="down",l.close_dir="up";break;case"bottom":l.open_dir="up",l.close_dir="down"}switch(this.opts.offCanvas.zposition){case"front":h=function(){return this.$menu};break;default:h=function(){return e("."+s.slideout)}}var b=this.__valueOrFn(a.pageNode,this.$menu,r.$page);"string"==typeof b&&(b=e(b));var y=new Hammer(b[0],a.vendors.hammer);y.on("panstart",function(e){u(e.center[l.typeLower]),r.$slideOutNodes=h(),g=l.open_dir}).on(l.events+" panend",function(e){m>0&&e.preventDefault()}).on(l.events,function(e){if(d=e["delta"+l.typeUpper],l.negative&&(d=-d),d!=w&&(g=d>=w?l.open_dir:l.close_dir),w=d,w>a.threshold&&1==m){if(r.$html.hasClass(s.opened))return;m=2,i._openSetup(),i.trigger("opening"),r.$html.addClass(s.dragging),_=t(r.$wndw[v]()*p[v].perc,p[v].min,p[v].max)}2==m&&(f=t(w,10,_)-("front"==i.opts.offCanvas.zposition?_:0),l.negative&&(f=-f),c="translate"+l.typeUpper+"("+f+"px )",r.$slideOutNodes.css({"-webkit-transform":"-webkit-"+c,transform:c}))}).on("panend",function(){2==m&&(r.$html.removeClass(s.dragging),r.$slideOutNodes.css("transform",""),i[g==l.open_dir?"_openFinish":"close"]()),m=0})}}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?(e[n].addons[o].setup=function(){},void 0):(s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("dragging"),void 0)},clickAnchor:function(){}},e[n].defaults[o]={open:!1,maxStartPos:100,threshold:50,vendors:{hammer:{}}},e[n].configuration[o]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}};var s,i,a,r}(jQuery);
/*	
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(i){var s="mmenu",a="fixedElements";i[s].addons[a]={setup:function(){if(this.opts.offCanvas){this.opts[a],this.conf[a],t=i[s].glbl;var d=function(i){var s=this.conf.classNames[a].fixed;this.__refactorClass(i.find("."+s),s,"fixed").appendTo(t.$body).addClass(n.slideout)};d.call(this,t.$page),this.bind("setPage",d)}},add:function(){n=i[s]._c,d=i[s]._d,e=i[s]._e,n.add("fixed")},clickAnchor:function(){}},i[s].configuration.classNames[a]={fixed:"Fixed"};var n,d,e,t}(jQuery);
/*	
 * jQuery mmenu footer addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",o="footer";t[e].addons[o]={setup:function(){var i=this.opts[o];if(this.conf[o],a=t[e].glbl,"boolean"==typeof i&&(i={add:i,update:i}),"object"!=typeof i&&(i={}),i=this.opts[o]=t.extend(!0,{},t[e].defaults[o],i),i.add){var s=i.content?i.content:i.title;t('<div class="'+n.footer+'" />').appendTo(this.$menu).append(s),this.$menu.addClass(n.hasfooter)}if(this.$footer=this.$menu.children("."+n.footer),i.update&&this.$footer&&this.$footer.length){var d=function(e){e=e||this.$menu.children("."+n.current);var s=t("."+this.conf.classNames[o].panelFooter,e).html()||i.title;this.$footer[s?"removeClass":"addClass"](n.hidden),this.$footer.html(s)};this.bind("openPanel",d),this.bind("init",function(){d.call(this,this.$menu.children("."+n.current))})}},add:function(){n=t[e]._c,i=t[e]._d,s=t[e]._e,n.add("footer hasfooter")},clickAnchor:function(){}},t[e].defaults[o]={add:!1,content:!1,title:"",update:!1},t[e].configuration.classNames[o]={panelFooter:"Footer"};var n,i,s,a}(jQuery);
/*	
 * jQuery mmenu header addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var t="mmenu",a="header";e[t].addons[a]={setup:function(){var i=this.opts[a];if(this.conf[a],s=e[t].glbl,"boolean"==typeof i&&(i={add:i,update:i}),"object"!=typeof i&&(i={}),"undefined"==typeof i.content&&(i.content=["prev","title","next"]),i=this.opts[a]=e.extend(!0,{},e[t].defaults[a],i),i.add){if(i.content instanceof Array){for(var d=e("<div />"),h=0,l=i.content.length;l>h;h++)switch(i.content[h]){case"prev":case"next":case"close":d.append('<a class="'+n[i.content[h]]+" "+n.btn+'" href="#"></a>');break;case"title":d.append('<a class="'+n.title+'"></a>');break;default:d.append(i.content[h])}d=d.html()}else var d=i.content;e('<div class="'+n.header+'" />').prependTo(this.$menu).append(d),this.$menu.addClass(n.hasheader),this.bind("init",function(e){e.removeClass(n.hasheader)})}if(this.$header=this.$menu.children("."+n.header),i.update&&this.$header&&this.$header.length){var c=this.$header.find("."+n.title),o=this.$header.find("."+n.prev),f=this.$header.find("."+n.next),p=this.$header.find("."+n.close),u=function(e){e=e||this.$menu.children("."+n.current);var t=e.find("."+this.conf.classNames[a].panelHeader),s=e.find("."+this.conf.classNames[a].panelPrev),d=e.find("."+this.conf.classNames[a].panelNext),h=e.data(r.parent),l=t.html(),p=s.attr("href"),u=d.attr("href"),v=!1,m=s.html(),$=d.html();switch(l||(l=e.children("."+n.header).children("."+n.title).html()),l||(l=i.title),p||(p=e.children("."+n.header).children("."+n.prev).attr("href")),i.titleLink){case"anchor":var v=h?h.children("a").not("."+n.next).attr("href"):!1;break;case"panel":var v=p}c[v?"attr":"removeAttr"]("href",v),c[l?"removeClass":"addClass"](n.hidden),c.html(l),o[p?"attr":"removeAttr"]("href",p),o[p||m?"removeClass":"addClass"](n.hidden),o.html(m),f[u?"attr":"removeAttr"]("href",u),f[u||$?"removeClass":"addClass"](n.hidden),f.html($)};if(this.bind("openPanel",u),this.bind("init",function(){u.call(this,this.$menu.children("."+n.current))}),this.opts.offCanvas){var v=function(e){p.attr("href","#"+e.attr("id"))};v.call(this,s.$page),this.bind("setPage",v)}}},add:function(){n=e[t]._c,r=e[t]._d,i=e[t]._e,n.add("close")},clickAnchor:function(){}},e[t].defaults[a]={add:!1,title:"Menu",titleLink:"panel",update:!1},e[t].configuration.classNames[a]={panelHeader:"Header",panelNext:"Next",panelPrev:"Prev"};var n,r,i,s}(jQuery);
/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function s(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var a="mmenu",n="searchfield";e[a].addons[n]={setup:function(){var o=this,d=this.opts[n],c=this.conf[n];r=e[a].glbl,"boolean"==typeof d&&(d={add:d,search:d}),"object"!=typeof d&&(d={}),d=this.opts[n]=e.extend(!0,{},e[a].defaults[n],d),this.bind("init",function(a){if(d.add){switch(d.addTo){case"menu":var n=this.$menu;break;case"panels":var n=a;break;default:var n=e(d.addTo,this.$menu).filter("."+t.panel)}n.each(function(){var s=e(this);if(!s.is("."+t.panel)||!s.is("."+t.vertical)){if(!s.children("."+t.search).length){var a=c.form?"form":"div",n=e("<"+a+' class="'+t.search+'" />');if(c.form&&"object"==typeof c.form)for(var l in c.form)n.attr(l,c.form[l]);n.append('<input placeholder="'+d.placeholder+'" type="text" autocomplete="off" />').prependTo(s),s.addClass(t.hassearch)}if(d.noResults&&(s.is("."+t.menu)&&(s=s.children("."+t.panel).first()),!s.children("."+t.noresultsmsg).length)){var i=s.children("."+t.listview);e('<div class="'+t.noresultsmsg+'" />').append(d.noResults)[i.length?"insertBefore":"prependTo"](i.length?i:s)}}})}d.search&&e("."+t.search,this.$menu).each(function(){var a=e(this);if("menu"==d.addTo)var n=e("."+t.panel,o.$menu),r=o.$menu;else var n=a.closest("."+t.panel),r=n;var c=a.children("input"),h=o.__findAddBack(n,"."+t.listview).children("li"),u=h.filter("."+t.divider),f=o.__filterListItems(h),p="> a",v=p+", > span",m=function(){var s=c.val().toLowerCase();n.scrollTop(0),f.add(u).addClass(t.hidden).find("."+t.fullsubopensearch).removeClass(t.fullsubopen).removeClass(t.fullsubopensearch),f.each(function(){var a=e(this),n=p;(d.showTextItems||d.showSubPanels&&a.find("."+t.next))&&(n=v),e(n,a).text().toLowerCase().indexOf(s)>-1&&a.add(a.prevAll("."+t.divider).first()).removeClass(t.hidden)}),d.showSubPanels&&n.each(function(){var s=e(this);o.__filterListItems(s.find("."+t.listview).children()).each(function(){var s=e(this),a=s.data(l.sub);s.removeClass(t.nosubresults),a&&a.find("."+t.listview).children().removeClass(t.hidden)})}),e(n.get().reverse()).each(function(s){var a=e(this),n=a.data(l.parent);n&&(o.__filterListItems(a.find("."+t.listview).children()).length?(n.hasClass(t.hidden)&&n.children("."+t.next).not("."+t.fullsubopen).addClass(t.fullsubopen).addClass(t.fullsubopensearch),n.removeClass(t.hidden).removeClass(t.nosubresults).prevAll("."+t.divider).first().removeClass(t.hidden)):"menu"==d.addTo&&(a.hasClass(t.opened)&&setTimeout(function(){o.openPanel(n.closest("."+t.panel))},1.5*(s+1)*o.conf.openingInterval),n.addClass(t.nosubresults)))}),r[f.not("."+t.hidden).length?"removeClass":"addClass"](t.noresults),this.update()};c.off(i.keyup+"-searchfield "+i.change+"-searchfield").on(i.keyup+"-searchfield",function(e){s(e.keyCode)||m.call(o)}).on(i.change+"-searchfield",function(){m.call(o)})})})},add:function(){t=e[a]._c,l=e[a]._d,i=e[a]._e,t.add("search hassearch noresultsmsg noresults nosubresults fullsubopensearch"),i.add("change keyup")},clickAnchor:function(){}},e[a].defaults[n]={add:!1,addTo:"menu",search:!1,placeholder:"Search",noResults:"No results found.",showTextItems:!1,showSubPanels:!0},e[a].configuration[n]={form:!1};var t,l,i,r}(jQuery);
/*	
 * jQuery mmenu sectionIndexer addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var a="mmenu",r="sectionIndexer";e[a].addons[r]={setup:function(){var n=this,s=this.opts[r];this.conf[r],d=e[a].glbl,"boolean"==typeof s&&(s={add:s}),"object"!=typeof s&&(s={}),s=this.opts[r]=e.extend(!0,{},e[a].defaults[r],s),this.bind("init",function(a){if(s.add){switch(s.addTo){case"panels":var r=a;break;default:var r=e(s.addTo,this.$menu).filter("."+i.panel)}r.find("."+i.divider).closest("."+i.panel).addClass(i.hasindexer)}if(!this.$indexer&&this.$menu.children("."+i.hasindexer).length){this.$indexer=e('<div class="'+i.indexer+'" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a><a href="##">#</a>'),this.$indexer.children().on(h.mouseover+"-searchfield "+i.touchmove+"-searchfield",function(){var a=e(this).attr("href").slice(1),r=n.$menu.children("."+i.current),h=r.find("."+i.listview),d=!1,s=r.scrollTop(),t=h.position().top+parseInt(h.css("margin-top"),10)+parseInt(h.css("padding-top"),10)+s;r.scrollTop(0),h.children("."+i.divider).not("."+i.hidden).each(function(){d===!1&&a==e(this).text().slice(0,1).toLowerCase()&&(d=e(this).position().top+t)}),r.scrollTop(d!==!1?d:s)});var d=function(e){n.$menu[(e.hasClass(i.hasindexer)?"add":"remove")+"Class"](i.hasindexer)};this.bind("openPanel",d),d.call(this,this.$menu.children("."+i.current))}})},add:function(){i=e[a]._c,n=e[a]._d,h=e[a]._e,i.add("indexer hasindexer"),h.add("mouseover touchmove")},clickAnchor:function(e){return e.parent().is("."+i.indexer)?!0:void 0}},e[a].defaults[r]={add:!1,addTo:"panels"};var i,n,h,d}(jQuery);
/*	
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){var e="mmenu",c="toggles";t[e].addons[c]={setup:function(){var n=this;this.opts[c],this.conf[c],l=t[e].glbl,this.bind("init",function(e){this.__refactorClass(t("input",e),this.conf.classNames[c].toggle,"toggle"),this.__refactorClass(t("input",e),this.conf.classNames[c].check,"check"),t("input."+s.toggle+", input."+s.check,e).each(function(){var e=t(this),c=e.closest("li"),i=e.hasClass(s.toggle)?"toggle":"check",l=e.attr("id")||n.__getUniqueId();c.children('label[for="'+l+'"]').length||(e.attr("id",l),c.prepend(e),t('<label for="'+l+'" class="'+s[i]+'"></label>').insertBefore(c.children("a, span").last()))})})},add:function(){s=t[e]._c,n=t[e]._d,i=t[e]._e,s.add("toggle check")},clickAnchor:function(){}},t[e].configuration.classNames[c]={toggle:"Toggle",check:"Check"};var s,n,i,l}(jQuery);   
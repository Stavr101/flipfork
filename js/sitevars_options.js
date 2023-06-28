// Offer
var gu_offer = site_vars.gu_offer_url;
// Current version of checkout !!This should just be automatically declared
// somewhere. No reason to make users kep this up to date
var gu_checkout_ver = "2.0";
//
// Default settings for this install AKA "Oh Shit" switch
//
var shopifySafety = site_vars.shopify_safety; // Setting this to 1 will turn off the new checkout and revert back to Shopify's checkout
// This should set the videos to autoplay where possible
var gu_autoplay_default        = site_vars.autoplay_videos;
// enables or disables the sales popup
var gu_salespopup_default      = site_vars.salespopup_default;
// shows the timer on the splash/vsl page
var gu_splash_page_show_header = site_vars.splashpage_header;
// hides and shows the paypal button
var gu_checkout_paypal_pay     = site_vars.paypal_button;
// hides and shows the paypal button
var gu_checkout_native_paypal  = site_vars.native_paypal;
console.log('is native paypal here: ' + gu_checkout_native_paypal);
// hides "want to be an affiliate?" link
var gu_aff = site_vars.affiliate_link;
// default for chat
//var gu_chat_default         = site_vars.live_chat;
// Configuration parameters (these will never change once set)
window.gu_gtm_id            = site_vars.gu_gtm_id;
window.gu_ga4_id            = site_vars.gu_ga4_id;
var gu_shopify_name         = site_vars.shopifyname;
var gu_salespopupURL        = site_vars.salespopup_url;
var gu_serverURL            = site_vars.server_url;
var gu_access_storefront    = site_vars.shopifyaccesstoken;
var gu_shopify_domain       = gu_shopify_name + '.myshopify.com';
var gu_shopify_url          = 'https://' + gu_shopify_domain;
var gu_shopify_checkout_url = gu_shopify_name + '.myshopify.com';
var gu_shopify_cart_url     = gu_shopify_url + '/cart/';
var shopifyURL              = gu_shopify_cart_url; // Soon to be replaced everywhere with gu_shopify_cart_url
var shopifyURL_checkout     = gu_shopify_checkout_url; // Soon to be replaced everywhere with gu_shopify_url
var initiate_checkout_event = parseInt(site_vars.initiate_checkout_event);

var v20_interim_shipping = site_vars.v20_interim_shipping;
//Sales popup modifier vars
//Uncomment to override sales popup component
if (site_vars.product_name_override === '1') {
    if (site_vars.new_product_name !== '' || site_vars.new_product_name !== undefined) {
        var salesPopupProductNameOverride = site_vars.new_product_name;
    }
}
if (site_vars.product_image_override === '1') {
    if (site_vars.new_product_image !== null || site_vars.new_product_image !== undefined) {
        var salesPopupImage = site_vars.new_product_image;
    }
}
var serverURL = gu_serverURL;

//Adyen
var usingAdyen = site_vars.useAdyen;

// var server_1_URL = 'https://ulegj23o8l.execute-api.us-west-2.amazonaws.com/production/';
// var server_2_URL = 'https://ulegj23o8l.execute-api.us-west-2.amazonaws.com/production/';
//
// var checkPaymentStatusURLBase = 'https://67hfiiamo7.execute-api.us-west-2.amazonaws.com/production/';
// var checkPaymentStatus_x_api_key = 'aPIqV1ssLz51qK5OrHwEDaI8Gy7vAUUI7uVg0mxM';
//
// var x_api_key = 'zKAL7sjGjp30NynWrVDgCaFf2tk4T81p3UcXHuoP';
// var stripePublicAPIKey = 'pk_test_MtXK4XRcz8Hyw03gvyg52AZV';


//1.6 compatible config vars
window.advertiser_id               = parseInt(site_vars.advertiser_id);
window.landing_page_event          = parseInt(site_vars.landing_page_event);
window.landing_page_start_event    = parseInt(site_vars.landing_page_start_event);
window.add_to_cart_event           = parseInt(site_vars.add_to_cart_event);
window.initiate_checkout_event     = parseInt(site_vars.initiate_checkout_event);
window.shipping_info_event         = parseInt(site_vars.shipping_info_event);
window.presell_landing_event       = parseInt(site_vars.presell_landing_event);
window.presell_landing_start_event = parseInt(site_vars.presell_landing_start_event);
window.vsl_landing_event           = parseInt(site_vars.vsl_landing_event);
window.vsl_landing_start_event     = parseInt(site_vars.vsl_landing_start_event);
window.view_inline_upsell          = parseInt(site_vars.view_inline_upsell);
window.view_popup_upsell           = parseInt(site_vars.view_popup_upsell);
window.ga_account_id               = site_vars.ga_account_id;
window.fb_id                       = site_vars.fb_id;
window.brand_name                  = site_vars.brand_name;

if (site_vars.is_mor !== '1') {
    window.is_mor = 0;
} else {
    window.is_mor = 1;
}


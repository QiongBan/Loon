let obj= {
  "request_date_ms" : 1642055977705,
  "request_date" : "2022-01-13T06:39:37Z",
  "subscriber" : {
    "non_subscriptions" : {
      "filebox_pro" : [
        {
          "id" : "abc6e5bbaf",
          "is_sandbox" : false,
          "purchase_date" : "2022-01-13T06:38:47Z",
          "original_purchase_date" : "2022-01-13T06:38:47Z",
          "store" : "app_store"
        }
      ]
    },
    "first_seen" : "2022-01-13T06:38:12Z",
    "original_application_version" : "32",
    "other_purchases" : {
      "filebox_pro" : {
        "purchase_date" : "2022-01-13T06:38:47Z"
      }
    },
    "management_url" : null,
    "subscriptions" : {

    },
    "entitlements" : {
      "filebox_pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-01-13T06:38:47Z",
        "product_identifier" : "filebox_pro",
        "expires_date" : null
      }
    },
    "original_purchase_date" : "2021-07-13T14:40:43Z",
    "original_app_user_id" : "$RCAnonymousID:3db4eb97874242ddbf60efde15b92468",
    "last_seen" : "2022-01-13T06:38:12Z"
  }
};

$done({body: JSON.stringify(obj)});
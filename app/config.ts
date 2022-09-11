// import { IColors } from "./entities/IColors";

// export const LINKS = {
//     DEV: {
//         USER_POSTS_PAGE: "http://peopall.ru:81/api/posts/user/@userid@?page=@page@",
//         RESET_PASSWORD_USING_PHONE: "http://peopall.ru:81/api/reset-password-phone",
//         RESET_PASSWORD_USING_EMAIL: "http://peopall.ru:81/api/reset-password-email",
//         VERIFY_NEW_PHONE_CODE: "http://peopall.ru:81/api/verify-new-phone-code",
//         VERIFY_NEW_EMAIL_CODE: "http://peopall.ru:81/api/verify-new-email-code",
//         ACQUAINTANCE_LIST: "http://peopall.ru:81/api/user/list/swipe?per_page=",
//         USER_INTERESTS_ATTACH: "http://peopall.ru:81/api/user/interest/attach",
//         USER_INTERESTS_DETACH: "http://peopall.ru:81/api/user/interest/detach",
//         SUBSCRIPTION_PAGE: "http://peopall.ru:81/api/user/list/subscriptions/",
//         GET_OWN_GROUP_LIST_BY_ID: "http://peopall.ru:81/api/list/group/owner/",
//         GET_OWN_EVENT_LIST_BY_ID: "http://peopall.ru:81/api/list/event/owner/",
//         SEND_CHAT_MESSAGE: "http://peopall.ru:81/api/chat/users/new-message",
//         SUBSCRIBERS_PAGE: "http://peopall.ru:81/api/user/list/subscribers/",
//         SUBSCRIBE_GROUP_OR_EVENT: "http://peopall.ru:81/api/type/subscribe",
//         PRIVACY_POLICY: "http://peopall.ru:81/Privacy_policy_template.html",
//         CHECK_OLD_PASSWORD: "http://peopall.ru:81/api/user/password/check",
//         CHANGE_MAIN_PHOTO: "http://peopall.ru:81/api/user/image/main/add",
//         NEW_PASSWORD_EMAIL: "http://peopall.ru:81/api/new-password-email",
//         NEW_PASSWORD_PHONE: "http://peopall.ru:81/api/new-password-phone",
//         GET_CHATS_LIST: "http://peopall.ru:81/api/chat/users/list?page=",
//         TERMS_OF_SERVICES: "http://peopall.ru:81/terms_of_service.html",
//         VERIFY_PHONE_CODE: "http://peopall.ru:81/api/verify-phone-code",
//         VERIFY_EMAIL_CODE: "http://peopall.ru:81/api/verify-email-code",
//         RESET_PASSWORD_CHECK_OTP: "http://peopall.ru:81/api/check/code",
//         CHECK_UNIQUE: "http://peopall.ru:81/api/register/check-unique",
//         VERIFY_NEW_PHONE: "http://peopall.ru:81/api/verify-new-phone",
//         VERIFY_NEW_EMAIL: "http://peopall.ru:81/api/verify-new-email",
//         SUBSCRIBE_USER: "http://peopall.ru:81/api/user/subscriptions",
//         SET_POST_LIKE_DISLIKE: "http://peopall.ru:81/api/posts/like",
//         PEOPLE_LIST: "http://peopall.ru:81/api/user/list/show?page=",
//         DELETE_POST: "http://peopall.ru:81/api/posts/@postId/delete",
//         CREATE_DELETE_CHANGE_EVENT: "http://peopall.ru:81/api/event",
//         CREATE_DELETE_CHANGE_GROUP: "http://peopall.ru:81/api/group",
//         CHANGE_PASSWORD: "http://peopall.ru:81/api/change-password",
//         LEAVE_GROUP_OR_EVENT: "http://peopall.ru:81/api/type/leave",
//         SEND_USER_REACTIONS: "http://peopall.ru:81/api/user/swipe",
//         INTERESTS_LIST: "http://peopall.ru:81/api/interest?page=",
//         USER_INTERESTS: "http://peopall.ru:81/api/interest/user",
//         POST_LIST_PAGE: "http://peopall.ru:81/api/posts?page=",
//         ADD_NEW_POST: "http://peopall.ru:81/api/posts/create",
//         VERIFY_PHONE: "http://peopall.ru:81/api/verify-phone",
//         VERIFY_EMAIL: "http://peopall.ru:81/api/verify-email",
//         INTERESTS_BY_ID: "http://peopall.ru:81/api/interest/",
//         FIREBASE_TOKEN: "http://peopall.ru:81/api/firebase",
//         USER_DETAIL_SHOW: "http://peopall.ru:81/api/user/",
//         CREATE_CHAT: "http://peopall.ru:81/api/chat/user",
//         USER_SWIPE: "http://peopall.ru:81/api/user/swipe",
//         DELETE_ACCOUNT: "http://peopall.ru:81/api/user/",
//         UPLOAD_IMAGE: "http://peopall.ru:81/api/upload",
//         AUTHORIZATION: "http://peopall.ru:81/api/login",
//         REGISTER: "http://peopall.ru:81/api/register",
//         PROFILE: "http://peopall.ru:81/api/profile",
//         LOGOUT: "http://peopall.ru:81/api/logout",
//         REPORT: "http://peopall.ru:81/api/report",
//         SEND_OTP: "http://peopall.ru:81/api/sms",
//         DEFAULT_URL: "http://peopall.ru:81/api",
//         CHAT: "http://peopall.ru:81/api/chat"
//     },
//     PROD: {
//         USER_POSTS_PAGE: "http://peopall.ru/api/posts/user/@userid@?page=@page@",
//         RESET_PASSWORD_USING_PHONE: "http://peopall.ru/api/reset-password-phone",
//         RESET_PASSWORD_USING_EMAIL: "http://peopall.ru/api/reset-password-email",
//         VERIFY_NEW_PHONE_CODE: "http://peopall.ru/api/verify-new-phone-code",
//         VERIFY_NEW_EMAIL_CODE: "http://peopall.ru/api/verify-new-email-code",
//         ACQUAINTANCE_LIST: "http://peopall.ru/api/user/list/swipe?per_page=",
//         USER_INTERESTS_ATTACH: "http://peopall.ru/api/user/interest/attach",
//         USER_INTERESTS_DETACH: "http://peopall.ru/api/user/interest/detach",
//         SUBSCRIPTION_PAGE: "http://peopall.ru/api/user/list/subscriptions/",
//         GET_OWN_GROUP_LIST_BY_ID: "http://peopall.ru/api/list/group/owner/",
//         GET_OWN_EVENT_LIST_BY_ID: "http://peopall.ru/api/list/event/owner/",
//         SEND_CHAT_MESSAGE: "http://peopall.ru/api/chat/users/new-message",
//         SUBSCRIBERS_PAGE: "http://peopall.ru/api/user/list/subscribers/",
//         SUBSCRIBE_GROUP_OR_EVENT: "http://peopall.ru/api/type/subscribe",
//         PRIVACY_POLICY: "http://peopall.ru/Privacy_policy_template.html",
//         CHECK_OLD_PASSWORD: "http://peopall.ru/api/user/password/check",
//         CHANGE_MAIN_PHOTO: "http://peopall.ru/api/user/image/main/add",
//         NEW_PASSWORD_EMAIL: "http://peopall.ru/api/new-password-email",
//         NEW_PASSWORD_PHONE: "http://peopall.ru/api/new-password-phone",
//         GET_CHATS_LIST: "http://peopall.ru/api/chat/users/list?page=",
//         TERMS_OF_SERVICES: "http://peopall.ru/terms_of_service.html",
//         VERIFY_PHONE_CODE: "http://peopall.ru/api/verify-phone-code",
//         VERIFY_EMAIL_CODE: "http://peopall.ru/api/verify-email-code",
//         RESET_PASSWORD_CHECK_OTP: "http://peopall.ru/api/check/code",
//         CHECK_UNIQUE: "http://peopall.ru/api/register/check-unique",
//         VERIFY_NEW_PHONE: "http://peopall.ru/api/verify-new-phone",
//         VERIFY_NEW_EMAIL: "http://peopall.ru/api/verify-new-email",
//         SUBSCRIBE_USER: "http://peopall.ru/api/user/subscriptions",
//         SET_POST_LIKE_DISLIKE: "http://peopall.ru/api/posts/like",
//         PEOPLE_LIST: "http://peopall.ru/api/user/list/show?page=",
//         DELETE_POST: "http://peopall.ru/api/posts/@postId/delete",
//         CREATE_DELETE_CHANGE_EVENT: "http://peopall.ru/api/event",
//         CREATE_DELETE_CHANGE_GROUP: "http://peopall.ru/api/group",
//         CHANGE_PASSWORD: "http://peopall.ru/api/change-password",
//         LEAVE_GROUP_OR_EVENT: "http://peopall.ru/api/type/leave",
//         SEND_USER_REACTIONS: "http://peopall.ru/api/user/swipe",
//         INTERESTS_LIST: "http://peopall.ru/api/interest?page=",
//         USER_INTERESTS: "http://peopall.ru/api/interest/user",
//         POST_LIST_PAGE: "http://peopall.ru/api/posts?page=",
//         ADD_NEW_POST: "http://peopall.ru/api/posts/create",
//         VERIFY_PHONE: "http://peopall.ru/api/verify-phone",
//         VERIFY_EMAIL: "http://peopall.ru/api/verify-email",
//         INTERESTS_BY_ID: "http://peopall.ru/api/interest/",
//         FIREBASE_TOKEN: "http://peopall.ru/api/firebase",
//         USER_DETAIL_SHOW: "http://peopall.ru/api/user/",
//         CREATE_CHAT: "http://peopall.ru/api/chat/user",
//         USER_SWIPE: "http://peopall.ru/api/user/swipe",
//         DELETE_ACCOUNT: "http://peopall.ru/api/user/",
//         UPLOAD_IMAGE: "http://peopall.ru/api/upload",
//         AUTHORIZATION: "http://peopall.ru/api/login",
//         REGISTER: "http://peopall.ru/api/register",
//         PROFILE: "http://peopall.ru/api/profile",
//         LOGOUT: "http://peopall.ru/api/logout",
//         REPORT: "http://peopall.ru/api/report",
//         SEND_OTP: "http://peopall.ru/api/sms",
//         DEFAULT_URL: "http://peopall.ru/api",
//         CHAT: "http://peopall.ru/api/chat"
//     }
// };

// export const CONFIG: { theme: { dark: { dark: boolean, colors: IColors }, light: { dark: boolean, colors: IColors } } } = {
//     theme: {
//         dark: {
//             dark: true,
//             colors: {
//                 blue: "#0078FF",
//                 pink: "#EE0A79",
//                 white: "#FFFFFF",
//                 black: "#000000",
//                 label: "#4E5779",
//                 border: "#EDEEEF",
//                 tomato: "#E64648",
//                 warning: "#EB5757",
//                 giftPink: "#EE0E79",
//                 inActive: "#ABABAB",
//                 mainText: "#1B2652",
//                 darkGray: "#646464",
//                 redBrick: "#d5297b",
//                 lightPink: "#FFF1F8",
//                 lightGray: "#666666",
//                 mainButton: "#4C68DA",
//                 darkGrayTwo: "#2D2D2D",
//                 placeHolder: "#858B9D",
//                 localMessage: "#E5F0FF",
//                 statusOnline: "#38CC35",
//                 lightGrayTwo: "#9c9d9c",
//                 successColor: "#18AD00",
//                 lightGrayOne: "#E0E0E0",
//                 switchActive: "#65C466",
//                 timeInCalendar: "#eeeeef",
//                 switchUnActive: "#d2d2d2",
//                 notActiveButton: "#F5F5F5"
//             }
//         },
//         light: {
//             dark: false,
//             colors: {
//                 blue: "#0078FF",
//                 pink: "#EE0A79",
//                 white: "#FFFFFF",
//                 black: "#000000",
//                 label: "#4E5779",
//                 border: "#EDEEEF",
//                 tomato: "#E64648",
//                 warning: "#EB5757",
//                 giftPink: "#EE0E79",
//                 inActive: "#ABABAB",
//                 mainText: "#1B2652",
//                 darkGray: "#646464",
//                 redBrick: "#d5297b",
//                 lightPink: "#FFF1F8",
//                 lightGray: "#666666",
//                 mainButton: "#4C68DA",
//                 darkGrayTwo: "#2D2D2D",
//                 placeHolder: "#858B9D",
//                 localMessage: "#E5F0FF",
//                 statusOnline: "#38CC35",
//                 lightGrayTwo: "#9c9d9c",
//                 successColor: "#18AD00",
//                 lightGrayOne: "#E0E0E0",
//                 switchActive: "#65C466",
//                 timeInCalendar: "#eeeeef",
//                 switchUnActive: "#d2d2d2",
//                 notActiveButton: "#F5F5F5"
//             }
//         }
//     }
// };

// export const Fonts = {
//     interBold: "Inter-Bold",
//     interThin: "Inter-Thin",
//     interLight: "Inter-Light",
//     interBlack: "Inter-Black",
//     interMedium: "Inter-Medium",
//     interRegular: "Inter-Regular",
//     openSansBold: "OpenSans-Bold",
//     interSemiBold: "Inter-SemiBold",
//     interExtraBold: "Inter-ExtraBold",
//     interExtraLight: "Inter-ExtraLight",
//     openSansRegular: "OpenSans-Regular",
//     openSansSemiBold: "OpenSans-SemiBold",
//     helveticBold: "HelveticaNeueCyr-Bold",
//     helveticRoman: "HelveticaNeueCyr-Roman",
//     helveticMedium: "HelveticaNeueCyr-Medium"
// };

export const IMAGES = {
    EMPTY_SEARCH: require("./assets/images/empty-search-icon.png")
};
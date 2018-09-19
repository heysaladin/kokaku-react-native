// import { Navigation } from 'react-native-navigation';
// import queryString from 'query-string';
import { createLogic } from 'redux-logic';
import {
    ACCOUNT_GET_PROFILE,
    // ACCOUNT_UPDATE,
    // SETTINGS_UPDATE_PASSCODE,
    // CREATE_PASSCODE,

    accountGetProfileSuccess,
    accountGetProfileFailed,
    // accountUpdateInvalid,
    // accountUpdateSuccess,
    // accountUpdateFailed,
    // settingsGetProfileSuccess,
    // settingsGetProfileFailed,
    // settingsEditPasscodeFailed,
    // settingsUpdatePasscodeSuccess,
    // settingsUpdatePasscodeFailed,
    // createPasscodeSuccess,
    // createpasscodeFailed,
} from '../actions/action.account';
import { api } from '../constants';
import { Toast } from '../utils';
import { checkSession } from './_utils';

export const validateEditProfileFields = (fields) => {
    if (!fields.serviceLine || !fields.Country || !fields.Phone) {
        return 'Fields can\'t be blank';
    }
    return '';
};

/**
 * Get profile
 */
export const accountGetProfileLogic = createLogic({
    type: ACCOUNT_GET_PROFILE,
    process({ httpClient, getState }, dispatch, done) {
        const { token_type, access_token } = getState().account.auth;

        checkSession(access_token, dispatch, (newest_token = access_token) => {
            httpClient.get(api.API_PROFILE, {
                headers: { Authorization: `${token_type} ${newest_token}` },
            })
                .then((resp) => resp.data)
                .then((resp) => {
                    console.log(resp);
                    dispatch(accountGetProfileSuccess(resp));
                })
                .catch((err) => {
                    dispatch(accountGetProfileFailed());
                    Toast(err, 'Error', true);
                })
                .then(() => done());
        });
    },
});

// export const accountUpdateLogic = createLogic({
//     type: ACCOUNT_UPDATE,
//     validate({ action }, allow, reject) {
//         const err = validateEditProfileFields(action.payload);
//         if (!err.length) {
//             allow(action);
//         } else {
//             reject(accountUpdateInvalid());
//             Toast(err, 'Not valid');
//         }
//     },
//     process({ httpClient, action }, dispatch, done) {
//         httpClient.post(api.API_ACCOUNT_UPDATE, queryString.stringify(action.payload))
//             .then(() => {
//                 dispatch(accountUpdateSuccess());
//             })
//             .catch((err) => {
//                 dispatch(accountUpdateFailed());
//                 Toast(err.message, 'Error on update account');
//             })
//             .then(() => done());
//     },
// });

// export const settingsGetProfileLogic = createLogic({
//     type: SETTINGS_GET_PROFILE,
//     process({ httpClient }, dispatch, done) {
//         httpClient.get(api.API_SETTINGS_GET_PROFILE)
//             .then((resp) => resp.data)
//             .then((resp) => {
//                 dispatch(settingsGetProfileSuccess(resp));
//             })
//             .catch((err) => {
//                 dispatch(settingsGetProfileFailed());
//                 Toast(err.message, 'Error on get profile');
//             })
//             .then(() => done());
//     },
// });

// export const settingsUpdatePasscodeLogic = createLogic({
//     type: SETTINGS_UPDATE_PASSCODE,
//     validate({ httpClient, action }, allow, reject) {
//         httpClient.post(api.API_SETTINGS_CONFIRM_CURRENT_PASSCODE, queryString(action.payload))
//             .then(() => {
//                 allow(action);
//             })
//             .catch((err) => {
//                 reject(settingsUpdatePasscodeFailed());
//                 Toast(err.message, 'Current passcode invalid');
//             });
//     },
//     process({ httpClient, action }, dispatch, done) {
//         httpClient.post(api.API_SETTINGS_UPDATE_PASSCODE, queryString.stringify(action.payload))
//             .then(() => {
//                 dispatch(settingsUpdatePasscodeSuccess());
//             })
//             .catch((err) => {
//                 dispatch(settingsEditPasscodeFailed());
//                 Toast(err.message, 'Error on update passcode');
//             })
//             .then(() => done());
//     },
// });

// export const createPasscodeLogic = createLogic({
//     type: CREATE_PASSCODE,
//     process({ httpClient, action }, dispatch, done) {
//         httpClient.post(api.API_CREATE_PASSCODE, queryString.stringify(action.payload))
//             .then(() => {
//                 dispatch(createPasscodeSuccess());
//             })
//             .catch((err) => {
//                 dispatch(createpasscodeFailed());
//                 Toast(err.message, 'Error on create passcode');
//             })
//             .then(() => done());
//     },
// });

export default [
    accountGetProfileLogic,
    // accountUpdateLogic,
    // settingsGetProfileLogic,
    // settingsUpdatePasscodeLogic,
    // createPasscodeLogic,
];
